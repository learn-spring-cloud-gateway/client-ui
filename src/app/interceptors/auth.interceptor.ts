import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import {AuthService} from "../services/auth.service";
import {catchError, Observable, of, throwError} from "rxjs";
import {Router} from "@angular/router";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private auth: AuthService,private router: Router) {}

  private handleAuthError(err: HttpErrorResponse): Observable<any> {
    if (err.status === 401 || err.status === 403) {
      this.router.navigateByUrl(`/login`).then(r => r);
      return of(err.message);
    }
    return throwError(() => new Error('An error occurred !'));
  }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    console.log("INTERCEPTOR:",req);
    const authToken = this.auth.getToken();
    if(authToken){
      const authReq = req.clone({
        headers: req.headers.set('Authorization', "Bearer "+ authToken)
      });
      return next.handle(authReq).pipe(catchError(x=> this.handleAuthError(x)));
    }
    return next.handle(req);
  }
}
