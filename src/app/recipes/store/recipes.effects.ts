import { Actions, createEffect, ofType } from "@ngrx/effects";
import { FetchRecipes, SetRecipes } from "./recipes.actions";
import { map, switchMap } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Recipe } from "../recipe.model";
import { Injectable } from "@angular/core";


@Injectable()
export class RecipeEffects {
    fetchRecipes = createEffect(() => 
    this.action$.pipe(ofType(FetchRecipes), switchMap(() => {
        return this.http
        .get<Recipe[]>(
          'https://angular-project-563c1-default-rtdb.firebaseio.com/recipes.json'
        ) 
    }), map((recipes) => {
        return recipes.map(((recipe) => {
            return {
                ...recipe,
                ingredients: recipe.ingredients ? recipe.ingredients: []
            }
        }))
    }), map(recipes => {
        return SetRecipes({recipes: recipes})
    }))
    )
    constructor(private action$: Actions, private http: HttpClient){}
}