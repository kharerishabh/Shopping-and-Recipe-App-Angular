import { createReducer, on } from '@ngrx/store';
import { Recipe } from '../recipe.model';
import { SetRecipes } from './recipes.actions';

export interface recipeState {
  recipes: Recipe[];
}
const initialState: recipeState = {
  recipes: [],
};
export const recipeReducer = createReducer(
  initialState,
  on(SetRecipes, (state, action) => {
    return {
      ...state,
      recipes: [...action.recipes],
    };
  })
);
