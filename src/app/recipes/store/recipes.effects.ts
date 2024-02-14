import { Actions, createEffect, ofType } from '@ngrx/effects';
import { FetchRecipes, SetRecipes, StoreRecipes } from './recipes.actions';
import { map, switchMap, withLatestFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Recipe } from '../recipe.model';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducer';

@Injectable()
export class RecipeEffects {
  fetchRecipes = createEffect(() =>
    this.action$.pipe(
      ofType(FetchRecipes),
      switchMap(() => {
        return this.http.get<Recipe[]>(
          'https://angular-project-563c1-default-rtdb.firebaseio.com/recipes.json'
        );
      }),
      map((recipes) => {
        return recipes.map((recipe) => {
          return {
            ...recipe,
            ingredients: recipe.ingredients ? recipe.ingredients : [],
          };
        });
      }),
      map((recipes) => {
        return SetRecipes({ recipes: recipes });
      })
    )
  );

  storeRecipes = createEffect(() =>
    this.action$.pipe(
      ofType(StoreRecipes),
      withLatestFrom(this.store.select('recipes')),
      switchMap(([actionData, recipesState]) => {
        return this.http.put(
          'https://angular-project-563c1-default-rtdb.firebaseio.com/recipes.json',
          recipesState.recipes
        );
      })
    ), {dispatch: false}
  );
  constructor(private action$: Actions, private http: HttpClient, private store: Store<AppState>) {}
}
