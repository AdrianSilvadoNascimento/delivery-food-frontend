import { Component, Inject, Injectable, OnInit } from '@angular/core'

import { AuthService } from './../Services/auth.service'
import { SpinnerService } from './../Services/spinner/spinner.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  username: string = 'Visitante'
  userIsLoggedin: boolean

  constructor(public authService: AuthService, public loader: SpinnerService) {
    this.authService.getUsername().subscribe(name => {
      this.username = name
    })
  }

  ngOnInit(): void {
    this.userIsLoggedin = this.authService.loggedIn()
  }

  onLogout(): void {
    this.authService.logout()
  }
}
