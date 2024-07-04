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

  //private baseUrl = '/api';

  constructor(private http : HttpClient) { }

  token: string = "";

  login() {
    return this.http.get<AuthResponse>(environment.apiURL +"/login").subscribe(
      (res) => this.token = res.value
    );
  }

  getToken(){
    console.log(this.token)
    return this.token
  }
}
