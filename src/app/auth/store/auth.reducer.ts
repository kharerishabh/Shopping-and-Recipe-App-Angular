//import { createReducer, on } from '@ngrx/store';
import { User } from '../user.model';
import * as AuthActions from '../store/auth.actions';

export interface AuthState {
  user: User;
  authError: string;
  loading: boolean;
}

const initialState: AuthState = {
  user: null,
  authError: null,
  loading: false,
};

export function authReducer(
  state = initialState,
  action: AuthActions.AuthActions
) {
  switch (action.type) {
    case AuthActions.AUTHENTICATE_SUCCESS:
      const user = new User(
        action.payload.email,
        action.payload.userId,
        action.payload.token,
        action.payload.expirationDate
      );
      return {
        ...state,
        user: user,
        authError: null,
        loading: false,
      };
    case AuthActions.LOGOUT:
      return {
        ...state,
        user: null,
      };
    case AuthActions.LOGIN_START:
      return {
        ...state,
        authError: null,
        loading: true,
      };
    case AuthActions.AUTHENTICATE_FAIL:
      return {
        ...state,
        user: null,
        authError: action.payload,
        loading: false,
      };
      case AuthActions.SIGNUP_START:
        return {
          ...state,
          authError: null,
          loading: true
        }
    default:
      return state;
  }
}

// export const AuthReducer = createReducer(
//   initialState,
//   on(Login, (state, action) => {
//     const user = new User(
//       action.email,
//       action.userId,
//       action.token,
//       action.expirationDate
//     );
//     return {
//       ...state,
//       user: user,
//     };
//   }),
//   on(Logout, (state) => {
//     return {
//       ...state,
//       user: null,
//     };
//   }),
// );
