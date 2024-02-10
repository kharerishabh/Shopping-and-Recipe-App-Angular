import { ActionReducerMap } from '@ngrx/store';

import { State } from '../shopping-list/store/shopping-list.reducer';
import { ShoppingListReducer } from '../shopping-list/store/shopping-list.reducer';
import { AuthReducer, AuthState } from '../auth/store/auth.reducer';

export interface AppState {
    shoppingList: State;
    auth: AuthState
}

export const appReducer: ActionReducerMap<AppState> = {
    shoppingList: ShoppingListReducer,
    auth: AuthReducer
}