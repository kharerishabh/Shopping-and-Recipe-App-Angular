import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  @Output() recipeWasSelected = new EventEmitter<Recipe>()
  recipes: Recipe[] = [
    new Recipe('A test Recipe', 'This is simply a test', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnfv5hItZAm3iEpmEqhIUVrf_7dsAI829fBA&usqp=CAU'),
    new Recipe('Another test Recipe', 'This is simply a test', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnfv5hItZAm3iEpmEqhIUVrf_7dsAI829fBA&usqp=CAU')
  ];

  onRecipeSelected (recipe: Recipe) {
    this.recipeWasSelected.emit(recipe)
  }
}
