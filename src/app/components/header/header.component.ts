import {Component} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {FirstService} from "../../services/first.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(
    private authService: AuthService,
    private firstService: FirstService
  ) {
  }

  onLogin() {
    console.log("login")
    this.authService.login()
  }

  onLogout() {
    console.log("logout")
    this.authService.logout()
  }

  onProtectedEndpoint() {
    console.log("protected")
    this.firstService.getSomethingFromServiceOne()
  }

  displayToken() {
    return this.authService.getToken() != null ? this.authService.getToken() : "null"
  }

  displayStudent() {
    return this.firstService.getStudents()
  }
}
