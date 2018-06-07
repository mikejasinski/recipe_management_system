import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { RecipeuiComponent } from './RecipeUI/recipeui.component';
import { FridgeViewerComponent } from './fridge-viewer/fridge-viewer.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeManagmentSystemService } from './recipe-managment-system.service';



@NgModule({
  declarations: [
    AppComponent,
    RecipeuiComponent,
    FridgeViewerComponent,
    ShoppingListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [RecipeManagmentSystemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
