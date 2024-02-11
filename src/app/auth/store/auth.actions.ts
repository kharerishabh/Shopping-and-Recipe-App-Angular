import { createAction, props } from '@ngrx/store';

export const Login = createAction(
  '[Auth] Login',
  props<{
    email: string;
    userId: string;
    token: string;
    expirationDate: Date;
  }>()
);

export const Logout = createAction(
    '[Auth] Logout',
)