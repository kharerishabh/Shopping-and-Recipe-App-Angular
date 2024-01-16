import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
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
  @ViewChild('f') slForm: NgForm;
  subscription: Subscription;
  editMode = false
  editedItemIndex: number;
  editedItem: Ingredient;

  constructor(private slService: ShoppingListService){}
  ngOnInit(): void {
      this.subscription = this.slService.startingEditing.subscribe((index: number) => {
        this.editedItemIndex = index;
        this.editMode = true;
        this.editedItem = this.slService.getIngredients(index);
        this.slForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        })
      })
  }
  onAddItem (form: NgForm) {
    const value = form.value
    const newIngredient = new Ingredient(value.name, value.amount)
    this.slService.addIngredient(newIngredient)
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe()
  }
}
