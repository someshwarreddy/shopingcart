import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, catchError, map, of } from 'rxjs';
interface LoginResponse {
  error: string,
  token: string
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isLoggedin = new Subject<boolean>();
  public loggedIn: boolean = false;
  private readonly storageTokenKey: string = 'auth_token';
  private baseUrl: string = 'https://fakestoreapi.com/auth/login';
  headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });
  constructor(
    private http: HttpClient,
  ) {
  }

  login(username: string, password: string): Observable<boolean> {

    let body = {
      username: username,
      password: password
    }
    // Use http and your backend to async authenticate the user
    // If no error, you get back a security token
    return this.http
      .post<any>(this.baseUrl, JSON.stringify(body), { headers: this.headers })
      .pipe(
        map(
          response => {
            if (response.error) {
              console.error(response.error);
              alert(response)
              return false;
            } else {
              this.storeToken(response.token);
              this.loggedIn = true;
              this.isLoggedin.next(this.loggedIn)
              alert(this.loggedIn)
              return true;
            }
          }
        ),
        catchError(err => {

          console.error(err);
          return of(false);
        })
      );
  }

  logout(): void {
    this.removeTokens();
    this.isLoggedin.next(false)
  }

  isLoggedIn(): boolean {

    const token: string = this.getToken();

    return false;
  }

  private storeToken(token: string) {
    // Store the token locally  in Local Storage (HTML5)
    // Check in Chrome Dev Tools / Application / Local Storage
    localStorage.setItem(this.storageTokenKey, token);
  }

   getToken(): string {
    return localStorage.getItem(this.storageTokenKey);
  }

  private removeTokens() {
    localStorage.removeItem(this.storageTokenKey);
  }
}
