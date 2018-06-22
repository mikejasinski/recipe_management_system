import { Injectable } from '@angular/core';

// Classes used
import { Fridge } from './recipe_management_system/fridge.class';
import { Item } from './recipe_management_system/item.class';
import { Recipe } from './recipe_management_system/recipe.class';
import { ListBox } from './recipe_management_system/listbox.class';


@Injectable({
  providedIn: 'root'
})
export class RecipeManagmentSystemService {

  fridgeContents: Item[];
  recipeList: Recipe[];


  constructor() {
    this.recipeList = [
      new Recipe('Orange Juice', [new Item('Orange', 2)], ['Squeeze', 'Juice'], 10),
      new Recipe('Fruit Salad', [new Item('Apple', 2), new Item('Pineapple', 1), new Item('Orange', 2)], ['Chop', 'Mix'], 10),
      new Recipe('Chocolate Banana Pudding', [new Item('Banana', 2), new Item('Chocolate', 1)], ['Chop', 'Mix'], 5)
    ];

    this.fridgeContents = [
      new Item('Orange', 10),
      new Item('Banana', 10),
      new Item('Apple', 5),
      new Item('Chocolate', 12),
    ];
  }

  getRecipes(): Recipe[] {
    return this.recipeList;
  }

  getFridgeContents(): Item[] {
    return this.fridgeContents;
  }
}
