import { createAction, props } from '@ngrx/store';
import { Recipe } from '../recipe.model';

export const SetRecipes = createAction(
  '[Recipes] Set Recipes',
  props<{ recipes: Recipe[] }>()
);

export const FetchRecipes = createAction('[Recipes] Fetch Recipes');

export const AddRecipe = createAction(
  '[Recipes] Add Recipes',
  props<{ recipe: Recipe }>()
);

export const UpdateRecipe = createAction(
  '[Recipes] Update Recipes',
  props<{ index: number; newRecipe: Recipe }>()
);

export const DeleteRecipes = createAction(
  '[Recipes] Delete Recipes',
  props<{ index: number }>()
);

export const StoreRecipes = createAction('[Recipes] Store Recipes');
