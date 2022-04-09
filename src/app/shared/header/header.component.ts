import { Component } from '@angular/core';

import { AuthService } from './../Services/auth.service';
import { SpinnerService } from './../Services/spinner/spinner.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(public authService: AuthService, public loader: SpinnerService) { }

  onLogout(): void {
    this.authService.logout()
  }
}
