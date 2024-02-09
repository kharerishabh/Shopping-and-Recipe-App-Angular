import { createAction, props } from '@ngrx/store';
import { Ingredient } from '../../shared/ingredient.model';

export const AddIngredient = createAction(
  '[Shopping List] Add Ingredient',
  props<{ ingredient: Ingredient }>()
);

//Alternative Syntax
// export const ADD_INGREDIENT = 'ADD_INGREDIENT';

// export class AddIngredient implements Action {
//   readonly type = ADD_INGREDIENT;
//   payload: Ingredient;
// }