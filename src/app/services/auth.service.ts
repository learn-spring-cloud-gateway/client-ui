import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

interface AuthResponse{
  value: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http : HttpClient) { }

  token: string | null = null;

  login() {
    return this.http.get<AuthResponse>(environment.apiURL +"/login").subscribe(
      (res) => this.token = res.value
    );
  }

  logout(){
    this.token = null
  }

  getToken(){
    return this.token
  }
}
