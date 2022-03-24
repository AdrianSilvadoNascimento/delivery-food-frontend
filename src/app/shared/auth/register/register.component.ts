import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { UserModel } from './../../Models/user-model';
import { AuthService } from './../../Services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../auth.component.scss']
})
export class RegisterComponent implements OnInit {

  userModel: UserModel = new UserModel()

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onRegister(): void {
    console.log(this.userModel)
    this.authService.register(this.userModel).subscribe(() => {
      this.router.navigate(['/'])
    })
  }
}
