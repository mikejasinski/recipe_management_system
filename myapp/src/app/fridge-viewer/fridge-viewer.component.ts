import { Component, OnInit } from '@angular/core';
import { Item } from '../recipe_management_system/item.class';
import { Recipe } from '../recipe_management_system/recipe.class';
import { Fridge } from '../recipe_management_system/fridge.class';
import { ListBox } from '../recipe_management_system/listbox.class';

@Component({
  selector: 'app-fridge-viewer',
  templateUrl: './fridge-viewer.component.html',
  styleUrls: ['./fridge-viewer.component.css']
})
export class FridgeViewerComponent implements OnInit {

  globalFridge = new Fridge();
  selectedIngredient;
  newIngredient = new Item('', 0);


  constructor() { 
    this.globalFridge.contents = [new Item('Apple', 2), new Item('Pineapple', 1), new Item('Orange', 2)];
  }

  ngOnInit() {
    this.globalFridge.contents = [new Item('Apple', 2), new Item('Pineapple', 1), new Item('Orange', 2)];
  }

  addIngredient(e) {
    this.globalFridge.add(this.newIngredient);
    this.newIngredient = new Item('', 0);
  }

  removeIngredient(e) {
    this.globalFridge.contents.pop();
  }
}
