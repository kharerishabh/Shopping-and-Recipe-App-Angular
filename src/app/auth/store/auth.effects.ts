import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import * as AuthActions from '../store/auth.actions';
import { of } from 'rxjs';

export interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable()
export class AuthEffects {
  authLogin = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.LOGIN_START),
      switchMap((authData: AuthActions.LoginStart) => {
        return this.http
          .post<AuthResponseData>(
            'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' +
              environment.firebaseAPI,
            {
              email: authData.payload.email,
              password: authData.payload.password,
              returnSecureToken: true,
            }
          )
          .pipe(
            map((resData) => {
              const expirationDate = new Date(
                new Date().getTime() + +resData.expiresIn * 1000
              );
              return new AuthActions.AuthenticateSuccess({
                email: resData.email,
                userId: resData.localId,
                token: resData.idToken,
                expirationDate: expirationDate,
              });
            }),
            catchError((errorRes) => {
              let errorMessage = 'An Unkown error occured!';
              if (!errorRes.error || !errorRes.error.error) {
                return of(new AuthActions.AuthenticateFail(errorMessage));
              }
              switch (errorRes.error.error.message) {
                case 'EMAIL_EXISTS':
                  errorMessage = 'This email already exist';
                  break;
                case 'INVALID_LOGIN_CREDENTIALS':
                  errorMessage = 'Please check your email or password';
                  break;
              }
              return of(new AuthActions.AuthenticateFail(errorMessage));
            })
          );
      })
    )
  );
  authSuccess = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.AUTHENTICATE_SUCCESS),
        tap(() => {
          this.router.navigate(['/']);
        })
      ),
    { dispatch: false }
  );
  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private router: Router
  ) {}
}
