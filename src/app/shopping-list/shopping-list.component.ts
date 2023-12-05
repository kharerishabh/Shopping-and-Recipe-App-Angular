import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  // custom property binding example
  // @Input() element: {type: string, name: string, content: string}
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatos', 10),
  ]

  constructor () {
    console.log('Constructor Called')
  }

  ngOnChanges(changes: SimpleChanges) {
      console.log('OnChange Called')
      console.log(changes)
  }

  ngOnInit () {
    console.log('ngOnInit called')
  }

  ngDoCheck () {
    console.log('Docheck called')
  }

  ngAfterContentInit () {
    console.log('after content init called')
  }

  ngAfterContentChecked() {
    console.log('after content changed called')
  }
  ngAfterViewInit () {
    console.log('after view init called')
  }

  ngAfterViewChecked() {
    console.log('after view changed called')
  }

  ngOnDestroy(): void {
      console.log('ngOnDestroy called')
  }

}
