import { Injectable } from '@angular/core';

import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private storageTokenKey: string = 'auth_token';
  constructor(private auth: AuthService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Get the auth token from the service.
    const authToken = this.auth.getToken()
    console.log(authToken)
    // Clone the request and replace the original headers with
    // cloned headers, updated with the authorization.
    // Clone the request and set the new header in one step.

    if (authToken) {

      // inject the token to the Http Headers
      const headers = request.headers.set('Authorization', 'Bearer ' + authToken);

      const cloned = request.clone({ headers });

      return next.handle(cloned);
    }
    else {
      return next.handle(request);
    }
  }
}
