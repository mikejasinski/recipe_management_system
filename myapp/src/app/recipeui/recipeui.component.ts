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

  // declarations
  recipeArray: Recipe[];
  selectedRecipe = new Recipe('', [], [], 0);
  newIngredient = new Item('', 0);
  newInstruction = '';
  newEstTime = 0;
  newRecipe = new Recipe('', [], [], 0);

  constructor() { }

  ngOnInit() {
  this.recipeArray = [
    new Recipe('Orange Juice', [new Item('Orange', 2)], ['Squeeze', 'Juice'], 10),
    new Recipe('Fruit Salad', [new Item('Apple', 2), new Item('Pineapple', 1), new Item('Orange', 2)], ['Chop', 'Mix'], 10),
    new Recipe('Chocolate Banana Pudding', [new Item('Banana', 2), new Item('Chocolate', 1)], ['Chop', 'Mix'], 5)
  ];
  }

  clickedRecipe(e) {
    this.selectedRecipe = new Recipe(e.rName, e.ingredients, e.instructions, e.estTime);
    this.selectedRecipe = e;
  }

  addRecipe() { // if adding multiple recipes, clicking one selects all
    const promptName = prompt('Name of recipe: ', '');
    this.newRecipe.rName = promptName;
    this.recipeArray.push(this.newRecipe);
  }

  addIngredient(e) {
    this.selectedRecipe.addItem(this.newIngredient);
    this.newIngredient = new Item('', 0);
  }

  addInstruction(e) {
    this.selectedRecipe.addInstruction(this.newInstruction);
  }

  addEstTime(e) {
    this.selectedRecipe.addEstTime(this.newEstTime);
  }

  removeRecipe(recipe) { // removes last recipe in recipeArray, need to change to make it only selected
    this.recipeArray.splice(this.recipeArray.indexOf(recipe), 1);
  }

  removeIngredient(e) {
    this.selectedRecipe.removeItem(this.newIngredient);
  }

  removeInstruction(e) {
    this.selectedRecipe.removeInstruction(this.newInstruction);
  }

  removeEstTime(e) {
    this.selectedRecipe.removeEstTime(this.newEstTime);
  }
}
