import { Component } from '@angular/core'
import { Router } from '@angular/router'

import { ToastrService } from 'ngx-toastr'

import { AuthService } from './../../Services/auth.service'
import { UserModel } from '../../Models/user-model'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../auth.component.scss']
})
export class LoginComponent {
  userModel: UserModel = new UserModel()

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService,
  ) {}

  onLogin(): void {
    this.authService.login(this.userModel).subscribe(() => {
      this.toastr.success('You loggeding successfuly', 'Success')
      setTimeout(() => {
        this.router.navigate(['/'])
      }, 1000)
    }, () => {
      this.toastr.error('Somenthing went wrong :(', 'Fail')
    })
  }
}
