import { Action, createAction, props } from '@ngrx/store';

export const LOGIN_START = '[Auth] Login Start';
export const LOGIN = '[Auth] Login';
export const LOGOUT = '[Auth] Logout';
export const LOGIN_FAIL = '[Auth] Login Fail';

export class Login implements Action {
  readonly type = LOGIN;
  constructor(
    public payload: {
      email: string;
      userId: string;
      token: string;
      expirationDate: Date;
    }
  ) {}
}

export class Logout implements Action {
  readonly type = LOGOUT;
}

export class LoginStart implements Action {
   readonly type = LOGIN_START;
   constructor(public payload: {email: string, password: string}){}
}

export class LoginFail implements Action {
  readonly type = LOGIN_FAIL;
  constructor(public payload: string){}
}

export type AuthActions = Login | Logout | LoginStart | LoginFail

// export const Login = createAction(
//   '[Auth] Login',
//   props<{
//     email: string;
//     userId: string;
//     token: string;
//     expirationDate: Date;
//   }>()
// );

// export const Logout = createAction(
//     '[Auth] Logout',
// )

// export const LoginStart = createAction(
//   '[Auth] Login start',
//     props<{email: string, password: string}>()
// );

// export const LoginFail = createAction(
//     '[Auth] Login Fail',
//     props<{error: string}>()
// )
