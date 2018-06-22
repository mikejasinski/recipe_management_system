import { Component, OnInit } from '@angular/core';

// Classes used
import { Item } from '../recipe_management_system/item.class';
import { Recipe } from '../recipe_management_system/recipe.class';
import { Fridge } from '../recipe_management_system/fridge.class';
import { ListBox } from '../recipe_management_system/listbox.class';

// Service
import { RecipeManagmentSystemService } from '../recipe-managment-system.service';

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

  constructor(private recipeManagementSystemService: RecipeManagmentSystemService) { }

  ngOnInit() {
    this.recipeArray = this.recipeManagementSystemService.getRecipes();
  }

  clickedRecipe(e) {
    this.selectedRecipe = new Recipe(e.rName, e.ingredients, e.instructions, e.estTime);
    this.selectedRecipe = e;
  }

  addRecipe() {
    const promptName = prompt('Name of recipe: ', '');
    this.recipeArray.push(new Recipe(promptName, [], [], 0));
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

  removeRecipe(recipe) {
    this.recipeArray.pop();
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
