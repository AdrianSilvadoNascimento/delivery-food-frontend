import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'

import { UserModel } from './../Models/user-model'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly API_URL: string = 'http://localhost:3000'

  constructor() { }

  login(user: UserModel): Observable<UserModel> {
    return
  }

  register(user: UserModel): Observable<UserModel> {
    return
  }
}
