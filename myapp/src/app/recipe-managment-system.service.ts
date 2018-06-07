import { Injectable } from '@angular/core';
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


  constructor() { }
}
