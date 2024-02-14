import { createAction, props } from '@ngrx/store';
import { Recipe } from '../recipe.model';

export const SetRecipes = createAction(
  '[Recipes] Set Recipes',
  props<{ recipes: Recipe[] }>()
);

export const FetchRecipes = createAction(
  '[Recipes] Fetch Recipes',
)