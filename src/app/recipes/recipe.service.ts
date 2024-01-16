import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';


@Injectable()
export class RecipeService {
  recipeSubmitted = new Subject<Recipe[]>()

  private recipes: Recipe[] = [
    new Recipe(
      'Choumein',
      'A Super Tasty meal - just awesome',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnfv5hItZAm3iEpmEqhIUVrf_7dsAI829fBA&usqp=CAU',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]
    ),
    new Recipe(
      'Big Fat Burger',
      'A Super Tasty and Cripsy',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnfv5hItZAm3iEpmEqhIUVrf_7dsAI829fBA&usqp=CAU',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1)
      ]
    ),
  ];

  constructor(private slService: ShoppingListService){}
  getRecipe() {
    return this.recipes.slice();
  }

  getRecipes(index: number){
    return this.recipes[index]
  }
  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.slService.addIngredients(ingredients)
  }
  addRecipe(recipe:Recipe){
    this.recipes.push(recipe)
    this.recipeSubmitted.next(this.recipes.slice())
  }
  updateRecipe(index: number, newRecipe: Recipe){
    this.recipes[index] = newRecipe
    this.recipeSubmitted.next(this.recipes.slice())
  }
  deletRecipe(index: number){
    this.recipes.splice(index, 1);
    this.recipeSubmitted.next(this.recipes.slice())
  }
}
