import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';

import { Ingredient } from '../shared/ingredient.model';
import { LoggingServices } from '../logging-service';
import { StartEdit } from './store/shopping-list.actions';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css',
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  // custom property binding example
  // @Input() element: {type: string, name: string, content: string}
  ingredients: Observable<{ingredients: Ingredient[]}>;
  private subscription: Subscription;

  constructor(
    private logginService: LoggingServices,
    private store: Store<{ shoppingList: { ingredients: Ingredient[] } }>
  ) {}

  ngOnInit(): void {
    this.ingredients = this.store.select('shoppingList')
    // this.ingredients = this.slService.getIngredient();
    // this.subscription = this.slService.ingredientsChanged.subscribe(
    //   (ingredients: Ingredient[]) => {
    //     this.ingredients = ingredients;
    //   }
    // );
    this.logginService.printLog('Hello from ShoppingList Component ngOnInit');
  }

  onEditItem(index: number) {
    //this.slService.startingEditing.next(index);
    this.store.dispatch(StartEdit({index: index}))
  }
  
  ngOnDestroy(): void {
    //this.subscription.unsubscribe();
  }
}
