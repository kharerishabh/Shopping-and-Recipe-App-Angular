import { createReducer, on } from '@ngrx/store';
import { Ingredient } from '../../shared/ingredient.model';
import {
  AddIngredient,
  AddIngredients,
  DeleteIngredient,
  UpdateIngredient,
} from './shopping-list.actions';

export interface State {
  ingredients: Ingredient[];
  editedIngredient: Ingredient;
  editedIngredientIndex: number;
}

const initialState: State = {
  ingredients: [new Ingredient('Apples', 5), new Ingredient('Tomatos', 10)],
  editedIngredient: null,
  editedIngredientIndex: -1,
};

export const ShoppingListReducer = createReducer(
  initialState,
  on(AddIngredient, (state, action) => ({
    ...state,
    ingredients: [...state.ingredients, action.ingredient],
  })),
  on(AddIngredients, (state, action) => ({
    ...state,
    ingredients: [...state.ingredients, ...action.ingredients],
  })),
  on(UpdateIngredient, (state, action) => {
    const ingredient = state.ingredients[state.editedIngredientIndex];
    const updatedIngredient = {
      ...ingredient,
      ...action.ingredient,
    };
    const updatedIngredients = [...state.ingredients];
    updatedIngredients[state.editedIngredientIndex] = updatedIngredient;
    return {
      ...state,
      ingredients: updatedIngredients,
      editedIngredient: null,
      editedIngredientIndex: -1
    };
  }),
  on(DeleteIngredient, (state) => {
    return {
      ...state,
      ingredients: state.ingredients.filter((ig, igIndex) => {
        return igIndex !== state.editedIngredientIndex;
      }),
      editedIngredient: null,
      editedIngredientIndex: -1
    };
  })
);

//Alternative Way an old way
// const initialState = {
//     ingredients: [new Ingredient('Apples', 5), new Ingredient('Tomatoes', 10)]
//   };

//   export function shoppingListReducer(
//     state = initialState,
//     action: ShoppingListActions.AddIngredient
//   ) {
//     switch (action.type) {
//       case ShoppingListActions.ADD_INGREDIENT:
//         return {
//           ...state,
//           ingredients: [...state.ingredients, action.payload]
//         };
//       default:
//         return state;
//     }
//   }
