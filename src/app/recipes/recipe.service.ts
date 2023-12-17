import { Recipe } from './recipe.model';

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'A test Recipe',
      'This is simply a test',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnfv5hItZAm3iEpmEqhIUVrf_7dsAI829fBA&usqp=CAU'
    ),
    new Recipe(
      'Another test Recipe',
      'This is simply a test',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnfv5hItZAm3iEpmEqhIUVrf_7dsAI829fBA&usqp=CAU'
    ),
  ];

  getRecipe() {
    return this.recipes.slice();
  }
}
