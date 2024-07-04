import { Component } from '@angular/core';
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {

  constructor(private authService: AuthService) {
  }

  onLogin() {
    console.log("login")
    this.authService.login()
  }

  onLogout() {
    console.log("logout")
    this.authService.logout()
  }

  displayToken() {
    return this.authService.getToken() != null ? this.authService.getToken() : "null"
  }
}
