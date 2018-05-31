import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe_management_system/recipe.class';
import {Item} from '../recipe_management_system/item.class';
import {Fridge} from '../recipe_management_system/fridge.class';
import {ListBox} from '../recipe_management_system/listbox.class';

@Component({
  selector: 'app-recipeui',
  templateUrl: './recipeui.component.html',
  styleUrls: ['./recipeui.component.css']
})
export class RecipeuiComponent implements OnInit {

  // declaring made recipes to display
  OJ = new Recipe([new Item('Orange', 2)], ['Squeeze', 'Juice'], 10);
  fruitSalad = new Recipe([new Item('Apple', 2), new Item('Pineapple', 1), new Item('Orange', 2)], ['Chop', 'Mix'], 10);
  chocBanana = new Recipe([new Item('Banana', 2), new Item('Chocolate', 1)], ['Chop', 'Mix'], 5);

  recipeArray: Recipe[] = [this.OJ, this.fruitSalad, this.chocBanana];
  formBinding: Recipe = new Recipe([], [], 0);

  selectedRecipe: Recipe = null;

  constructor() { }

  ngOnInit() {
  }

  // taken from two-way binding example
  addRecipe() {
      this.recipeArray.push(new Recipe(this.formBinding.ingredients, this.formBinding.instructions, this.formBinding.estTime));
  }

  // selecting recipe
  select(recipe) {
    this.selectedRecipe = recipe;
  }
}
