import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

export interface AuthResponseData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: string;
}
@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private http: HttpClient) {}

  signUp(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBm1wbM83rgP5gR_tRTQpoakX8jiyMGKRY',
        {
          email: email,
          password: password,
          returnSecuretoken: true,
        }
      )
      .pipe(catchError(this.handleError));
  }

  login(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBm1wbM83rgP5gR_tRTQpoakX8jiyMGKRY',
        {
          email: email,
          password: password,
          returnSecureToken: true,
        }
      ).pipe(catchError(this.handleError));
  }

  private handleError(errorRes: HttpErrorResponse) {
    let errorMessage = 'An unkown error occured';
    if (!errorRes.error || !errorRes.error.error) {
      return throwError(errorMessage);
    }
    switch (errorRes.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = 'This email already exists';
        break;
      case 'INVALID_LOGIN_CREDENTIALS':
        errorMessage = 'Please check your email or password';
        break;
    }
    return throwError(errorMessage);
  }
}
