import { ActionReducerMap } from '@ngrx/store';

import { State } from '../shopping-list/store/shopping-list.reducer';
import { ShoppingListReducer } from '../shopping-list/store/shopping-list.reducer';
import { authReducer, AuthState } from '../auth/store/auth.reducer';
import { recipeReducer, recipeState } from '../recipes/store/recipes.reducer';

export interface AppState {
    shoppingList: State;
    auth: AuthState,
    recipes: recipeState
}

export const appReducer: ActionReducerMap<AppState> = {
    shoppingList: ShoppingListReducer,
    auth: authReducer,
    recipes: recipeReducer
}