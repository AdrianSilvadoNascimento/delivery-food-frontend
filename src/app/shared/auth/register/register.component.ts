import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { UserModel } from './../../Models/user-model';
import { AuthService } from './../../Services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../auth.component.scss']
})
export class RegisterComponent implements OnInit {

  userModel: UserModel = new UserModel()

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
    ) { }

  ngOnInit(): void {
  }

  onRegister(): void {
    console.log(this.userModel)
    this.authService.register(this.userModel).subscribe(() => {
      this.toastr.success('Registered successfuly', 'Success')
      setTimeout(() => {
        this.router.navigate(['/'])
      }, 1000)
    }, () => {
      this.toastr.error('Somenthing went wrong :(', 'Fail')
    })
  }
}
