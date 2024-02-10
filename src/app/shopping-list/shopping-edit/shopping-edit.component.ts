import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';

import { Ingredient } from '../../shared/ingredient.model';
import { AddIngredient, DeleteIngredient, StopEdit, UpdateIngredient } from '../store/shopping-list.actions';
import { AppState } from '../../store/app.reducer';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css',
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') slForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;

  constructor(
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.subscription = this.store.select('shoppingList').subscribe(stateData => {
      if(stateData.editedIngredientIndex > -1){
        this.editMode = true;
        this.editedItem = stateData.editedIngredient;
        this.slForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount,
        });
      }else{
        this.editMode = false
      }
    })
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    if (this.editMode) {
      // this.slService.updateIngredients(this.editedItemIndex, newIngredient);
      this.store.dispatch(UpdateIngredient({ingredient: newIngredient}))
    } else {
      // this.slService.addIngredient(newIngredient);
      this.store.dispatch(AddIngredient({ingredient: newIngredient}))
    }
    this.editMode = false;
    form.reset();
  }

  onClear() {
    this.slForm.reset();
    this.editMode = false;
    this.store.dispatch(StopEdit())
  }

  onDelete() {
    // this.slService.deleteIngredient(this.editedItemIndex);
    this.store.dispatch(DeleteIngredient())
    this.onClear();
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.store.dispatch(StopEdit())
  }
}
