import { Component } from '@angular/core'
import { Router } from '@angular/router'

import { AuthService } from './../../Services/auth.service'
import { UserModel } from '../../Models/user-model'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../auth.component.scss']
})
export class LoginComponent {

  userModel: UserModel = new UserModel()

  constructor(private authService: AuthService, private router: Router) {
  }
  onLogin(): void {
    this.authService.login(this.userModel).subscribe(() => {
      this.router.navigate(['/'])
    })
  }
}
