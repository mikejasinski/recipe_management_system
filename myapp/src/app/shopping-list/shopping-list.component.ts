import { Component, OnInit } from '@angular/core';

// Classes used
import { Item } from '../recipe_management_system/item.class';
import { Recipe } from '../recipe_management_system/recipe.class';
import { Fridge } from '../recipe_management_system/fridge.class';
import { ListBox } from '../recipe_management_system/listbox.class';

// Service
import { RecipeManagmentSystemService } from '../recipe-managment-system.service';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  // declarations
  currentRecipeList: Recipe[];
  globalFridge: Fridge;
  shoppingList: Item[];
  fridgeList: Item[];

  constructor(private recipeManagementSystemService: RecipeManagmentSystemService) { }

  ngOnInit() {
    this.currentRecipeList = this.recipeManagementSystemService.getRecipes();

    this.globalFridge = new Fridge();
    this.globalFridge.contents = this.recipeManagementSystemService.getFridgeContents();
  }

  generateLists(targetRecipe: Recipe) {
    this.shoppingList = []; // rework to reset the shopping list
    this.fridgeList = []; // rework to reset the fridge list
    console.log(targetRecipe);

    const result = this.globalFridge.checkRecipe(targetRecipe);
    // execute
    this.shoppingList = result.shopList;
    this.fridgeList = result.fridgeList;
    console.log(this.shoppingList);
    console.log(this.fridgeList);
  }
}
