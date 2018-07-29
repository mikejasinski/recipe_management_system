import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

// Classes used
import { Fridge } from './recipe_management_system/fridge.class';
import { Item } from './recipe_management_system/item.class';
import { Recipe } from './recipe_management_system/recipe.class';
import { ListBox } from './recipe_management_system/listbox.class';


@Injectable({providedIn: 'root'})
export class NewRecipeManagmentSystemService {

  private recipesUpdated = new Subject<Recipe[]>();

  fridgeContents: Item[];
  recipeList: Recipe[];

  constructor(private http: HttpClient) {}

  getRecipes() {
    this.http.get<{ message: string, recipeList: Recipe[] }>('http://localhost:4200/api/recipes')
    .subscribe((recipeData) => {
      this.recipeList = recipeData.recipeList;
      this.recipesUpdated.next([...this.recipeList]);
    });
  }

  getFridgeContents(): Item[] {
    return this.fridgeContents;
  }

  getRecipeUpdateListener() {
    return this.recipesUpdated.asObservable();
  }
}
