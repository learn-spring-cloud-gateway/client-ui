import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor
} from '@angular/common/http';
import {AuthService} from "../services/auth.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private auth: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    console.log("INTERCEPTOR:",req);
    const authToken = this.auth.getToken();
    if(authToken){
      const authReq = req.clone({
        headers: req.headers.set('Authorization', "Bearer "+ authToken)
      });
      return next.handle(authReq);
    }
    return next.handle(req);
  }
}
