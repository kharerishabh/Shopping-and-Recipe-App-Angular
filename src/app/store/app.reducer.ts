import { ActionReducerMap } from '@ngrx/store';

// import * as fromShoppingList from '../shopping-list/store/shopping-list.reducer'
import { State } from '../shopping-list/store/shopping-list.reducer';
import { ShoppingListReducer } from '../shopping-list/store/shopping-list.reducer';

export interface AppState {
    shoppingList: State;
}

export const appReducer: ActionReducerMap<AppState> = {
    shoppingList: ShoppingListReducer
}