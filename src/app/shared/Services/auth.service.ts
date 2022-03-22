import { UserModel } from './../Models/user-model'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(user: UserModel): Observable<any> {
    return
  }
}
