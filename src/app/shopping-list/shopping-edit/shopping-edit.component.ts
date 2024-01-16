import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent implements OnInit, OnDestroy{
  subscription: Subscription;
  editMode = false
  editedItemIndex: number;

  constructor(private slService: ShoppingListService){}
  ngOnInit(): void {
      this.subscription = this.slService.startingEditing.subscribe((index: number) => {
        this.editedItemIndex = index;
        this.editMode = true
      })
  }
  onAddItem (form: NgForm) {
    const value = form.value
    const newIngredient = new Ingredient(value.name, value.amount)
    this.slService.addIngredient(newIngredient)
    console.log(newIngredient)
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe()
  }
}
