import { createReducer, on } from '@ngrx/store';
import { User } from '../user.model';
import { login, logout } from './auth.actions';

export interface AuthState {
  user: User;
}

const initialState: AuthState = {
  user: null,
};

export const AuthReducer = createReducer(
  initialState,
  on(login, (state, action) => {
    const user = new User(
      action.email,
      action.userId,
      action.token,
      action.expirationDate
    );
    return {
      ...state,
      user: user,
    };
  }),
  on(logout, (state) => {
    return {
      ...state,
      user: null,
    };
  })
);
