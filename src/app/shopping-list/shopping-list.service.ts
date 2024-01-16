import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
 ingredientsChanged = new Subject<Ingredient[]>()
 startingEditing = new Subject<number>()
 private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatos', 10),
  ];

  getIngredient(){
    return this.ingredients.slice()
  }

  addIngredient(ingredient: Ingredient){
    this.ingredients.push(ingredient)
    this.ingredientsChanged.next(this.ingredients.slice())
  }

  addIngredients(ingredients: Ingredient[]) {
    // One Way
    // for(let ingredient of this.ingredients){
    //     this.addIngredient(ingredient)
    // }
    // Another Way
    this.ingredients.push(...ingredients)
    this.ingredientsChanged.next(this.ingredients.slice())
  }
}
