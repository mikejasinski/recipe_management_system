import { Component, OnInit } from '@angular/core';

// Classes used
import { Item } from '../recipe_management_system/item.class';
import { Recipe } from '../recipe_management_system/recipe.class';
import { Fridge } from '../recipe_management_system/fridge.class';
import { ListBox } from '../recipe_management_system/listbox.class';

// Service
import { RecipeManagmentSystemService } from '../recipe-managment-system.service';

@Component({
  selector: 'app-fridge-viewer',
  templateUrl: './fridge-viewer.component.html',
  styleUrls: ['./fridge-viewer.component.css']
})
export class FridgeViewerComponent implements OnInit {

  // declarations
  globalFridge = new Fridge();
  selectedIngredient;
  newIngredient = new Item('', 0);


  constructor(private recipeManagementSystemService: RecipeManagmentSystemService) {
    this.globalFridge.contents = this.recipeManagementSystemService.getFridgeContents();
  }

  ngOnInit() {
    this.globalFridge.contents = this.recipeManagementSystemService.getFridgeContents();
  }

  addIngredient(e) {
    this.globalFridge.add(this.newIngredient);
    this.newIngredient = new Item('', 0);
  }

  removeIngredient(e) {
    this.globalFridge.contents.pop();
  }
}
