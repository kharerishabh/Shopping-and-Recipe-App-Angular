import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrl: './recipe-details.component.css'
})
export class RecipeDetailsComponent implements OnInit{
 recipe: Recipe;
 id: number;

  constructor(private recipeService: RecipeService, private route: ActivatedRoute, private router: Router){}

  ngOnInit(){
      this.route.params.subscribe((params: Params) => {
        this.id = +params['id']
        this.recipe = this.recipeService.getRecipes(this.id)
      })
  }
  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients)
  }

  onEditRecipe() {
    //Simple Way 
    this.router.navigate(['edit'], {relativeTo: this.route})

    //Alternative way but and diffcult way of giving route path
    //this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route})
  }
}
