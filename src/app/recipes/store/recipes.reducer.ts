import { createReducer, on } from '@ngrx/store';
import { Recipe } from '../recipe.model';
import { AddRecipe, DeleteRecipes, SetRecipes, UpdateRecipe } from './recipes.actions';

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
  }),
  on(AddRecipe, (state, action) => {
    return {
      ...state,
      recipes: [...state.recipes, action.recipe]
    }
  }),
  on(UpdateRecipe, (state, action) => {
    const updatedRecipe = {...state.recipes[action.index], ...action.newRecipe}

    const updatedRecipes = [...state.recipes];
    updatedRecipes[action.index] = updatedRecipe
    return {
      ...state,
      recipes: updatedRecipes
    }
  }),
  on(DeleteRecipes, (state, action) => {
    return {
      ...state,
      recipes: state.recipes.filter((recipe, index) => {
        return index !== action.index
      })
    }
  })
);
