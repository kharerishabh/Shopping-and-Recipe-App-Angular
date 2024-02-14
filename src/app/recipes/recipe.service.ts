// import { Injectable } from '@angular/core';
// import { Subject } from 'rxjs';
// import { Store } from '@ngrx/store';
// import { Recipe } from './recipe.model';
// import { Ingredient } from '../shared/ingredient.model';
// import { AddIngredients } from '../shopping-list/store/shopping-list.actions';
// import { AppState } from '../store/app.reducer';

// @Injectable()
// export class RecipeService {
//   recipeSubmitted = new Subject<Recipe[]>();

//   // private recipes: Recipe[] = [
//   //   new Recipe(
//   //     'Choumein',
//   //     'A Super Tasty meal - just awesome',
//   //     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnfv5hItZAm3iEpmEqhIUVrf_7dsAI829fBA&usqp=CAU',
//   //     [
//   //       new Ingredient('Meat', 1),
//   //       new Ingredient('French Fries', 20)
//   //     ]
//   //   ),
//   //   new Recipe(
//   //     'Big Fat Burger',
//   //     'A Super Tasty and Cripsy',
//   //     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnfv5hItZAm3iEpmEqhIUVrf_7dsAI829fBA&usqp=CAU',
//   //     [
//   //       new Ingredient('Buns', 2),
//   //       new Ingredient('Meat', 1)
//   //     ]
//   //   ),
//   // ];
//   private recipes: Recipe[] = [];
//   constructor(
//     private store: Store<AppState>
//   ) {}

//   setRecipes(recipe: Recipe[]) {
//     this.recipes = recipe;
//     this.recipeSubmitted.next(this.recipes.slice());
//   }
//   getRecipe() {
//     return this.recipes.slice();
//   }

//   getRecipes(index: number) {
//     return this.recipes[index];
//   }
//   addIngredientsToShoppingList(newIngredients: Ingredient[]) {
//     //this.slService.addIngredients(ingredients);
//     this.store.dispatch(AddIngredients({ingredients: newIngredients}))
//   }
//   addRecipe(recipe: Recipe) {
//     this.recipes.push(recipe);
//     this.recipeSubmitted.next(this.recipes.slice());
//   }
//   updateRecipe(index: number, newRecipe: Recipe) {
//     this.recipes[index] = newRecipe;
//     this.recipeSubmitted.next(this.recipes.slice());
//   }
//   deletRecipe(index: number) {
//     this.recipes.splice(index, 1);
//     this.recipeSubmitted.next(this.recipes.slice());
//   }
// }
