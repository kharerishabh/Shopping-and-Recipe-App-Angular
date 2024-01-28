import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';

@Injectable({ providedIn: 'root' })
export class DataStrorageService {
  constructor(private http: HttpClient, private recipeService: RecipeService) {}

  storeRecipes() {
    const recipes = this.recipeService.getRecipe();
    this.http
      .put(
        'https://angular-project-563c1-default-rtdb.firebaseio.com/recipes.json',
        recipes
      )
      .subscribe((response) => console.log(response));
  }

  fetchRecipes() {
    this.http
      .get<Recipe[]>(
        'https://angular-project-563c1-default-rtdb.firebaseio.com/recipes.json'
      )
      .subscribe((recipes) => {
        this.recipeService.setRecipes(recipes)
      });
  }
}
