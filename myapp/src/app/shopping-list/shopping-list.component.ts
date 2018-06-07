import { Component, OnInit } from '@angular/core';
import { Item } from '../recipe_management_system/item.class';
import { Recipe } from '../recipe_management_system/recipe.class';
import { Fridge } from '../recipe_management_system/fridge.class';
import { ListBox } from '../recipe_management_system/listbox.class';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  currentRecipeList: Recipe[];
  
  globalFridge: Fridge;

  shoppingList: Item[];

  fridgeList: Item[];

  constructor() { }

  ngOnInit() {
    this.currentRecipeList = [
      new Recipe('Orange Juice', [new Item('Orange', 2)], ['Squeeze', 'Juice'], 10),
      new Recipe('Fruit Salad', [new Item('Apple', 2), new Item('Pineapple', 1), new Item('Orange', 2)], ['Chop', 'Mix'], 10),
      new Recipe('Chocolate Banana Pudding', [new Item('Banana', 2), new Item('Chocolate', 1)], ['Chop', 'Mix'], 5)
    ];

    this.globalFridge= new Fridge();
    this.globalFridge.contents = [new Item('Apple', 2), new Item('Pineapple', 1)];

    // this.shoppingList = [];
    // this.fridgeList = [];
  }

  generateLists(targetRecipe: Recipe){
    this.shoppingList = [];
    this.fridgeList = [];
    console.log(targetRecipe);
    let result =this.globalFridge.checkRecipe(targetRecipe);
    this.shoppingList = result.shopList;
    this.fridgeList = result.fridgeList;
    console.log(this.shoppingList);
    console.log(this.fridgeList);
    
  }
}
