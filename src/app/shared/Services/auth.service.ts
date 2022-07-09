import { Router } from '@angular/router'
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable, Subject } from 'rxjs'
import { map } from 'rxjs/operators'

import { UserModel } from './../Models/user-model'
import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly API_URL: string = environment.URL + '/user'

  emissor$ = new Subject<string>()

  token: string
  userId: string
  username: string
  tokenTimer: any

  constructor(private http: HttpClient, private router: Router) { }

  /**
   * To register a new user
   *
   * @param {UserModel} user - Is the user data
   * @returns The register of the user
   */
  register(user: UserModel): Observable<any> {
    return this.http.post<any>(`${this.API_URL}/register`, user)
  }

  /**
   * To loggin the user
   *
   * @param {UserModel} user - Is the user data
   * @returns The user data with time to expire session and the id
   */
  login(user: UserModel): Observable<any> {
    return this.http.post<any>(`${this.API_URL}/login`, user).pipe(
      map(res => {
        this.token = res.token
        this.userId = res.userId
        this.emitName(res.username)
        const expiresInDuration = res.expiresIn
        const now = new Date()
        this.setAuthTimer(expiresInDuration)
        const expirationDate = new Date(now.getTime() + expiresInDuration * 1000)
        this.saveAuth(this.token, this.userId, expirationDate)
      })
    )
  }

  /**
   * To emmit the username value
   *
   * @param value - Is the username value
   */
   emitName(value: string) {
    this.emissor$.next(value)
  }

  /**
   * To get the username of the user
   *
   * @returns An Observable with the username
   */
  getUsername(): Observable<string> {
    return this.emissor$.asObservable()
  }

  /**
   * Verify if there's a token on the localStorage
   *
   * @returns Boolean if there's a token on the localStorage
   */
  loggedIn(): boolean {
    return !!localStorage.getItem('token')
  }

  /**
   * To get the token on the localStorage
   *
   * @returns The token on the localStorage
   */
  getToken(): string {
    return localStorage.getItem('token')
  }

  /**
   * To finish the user's session
   */
  logout() : void {
    clearTimeout(this.tokenTimer)
    this.router.navigate(['/auth/login'])
    this.clearAuthData()
  }

  /**
   * To save user data on localStorage
   *
   * @param token - Is the token of the user
   * @param userId - Is the user id
   * @param expiration - Is the time to close the session
   */
  saveAuth(token: string, userId: string, expiration: Date): void {
    localStorage.setItem('token', this.token)
    localStorage.setItem('userId', this.userId)
    localStorage.setItem('expiration', expiration.toISOString())
  }

  /**
   * To clear the localStorage
   */
  clearAuthData(): void {
    localStorage.removeItem('token')
    localStorage.removeItem('userId')
    localStorage.removeItem('expiration')
  }

  /**
   * To set the session duration
   *
   * @param timer - Is the time number of the counter
   */
  setAuthTimer(timer: number): void {
    this.tokenTimer = setTimeout(() => {
      this.logout()
    }, timer * 1000)
  }
}
