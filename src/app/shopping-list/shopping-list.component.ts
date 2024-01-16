import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent implements OnInit, OnDestroy{
  // custom property binding example
  // @Input() element: {type: string, name: string, content: string}
  ingredients: Ingredient[]
  private subscription: Subscription
  
  constructor(private slService: ShoppingListService){}

  ngOnInit(): void {
      this.ingredients = this.slService.getIngredient()
     this.subscription = this.slService.ingredientsChanged.subscribe((ingredients: Ingredient[]) => {
        this.ingredients = ingredients
      })
  }
  onEditItem(index: number){
    this.slService.startingEditing.next(index)
  }
  ngOnDestroy(): void {
      this.subscription.unsubscribe()
  }
}
