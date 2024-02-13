import { Action, createAction, props } from '@ngrx/store';

export const LOGIN_START = '[Auth] Login Start';
export const AUTHENTICATE_SUCCESS = '[Auth] Login';
export const SIGNUP_START = '[Auth] SignUp Start';
export const CLEAR_ERROR = '[Auth] Clear Error';
export const LOGOUT = '[Auth] Logout';
export const AUTHENTICATE_FAIL = '[Auth] Login Fail';

export class AuthenticateSuccess implements Action {
  readonly type = AUTHENTICATE_SUCCESS;
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

export class SignupStart implements Action{
readonly type = SIGNUP_START;
constructor(public payload: {email: string, password: string}){}
}

export class LoginStart implements Action {
   readonly type = LOGIN_START;
   constructor(public payload: {email: string, password: string}){}
}

export class AuthenticateFail implements Action {
  readonly type = AUTHENTICATE_FAIL;
  constructor(public payload: string){}
}

export class ClearError implements Action {
  readonly type = CLEAR_ERROR
}

export type AuthActions = AuthenticateSuccess | Logout | LoginStart | AuthenticateFail | SignupStart | ClearError

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
