import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Components of application
import { AppComponent } from './app.component';
import { RecipeuiComponent } from './RecipeUI/recipeui.component';
import { FridgeViewerComponent } from './fridge-viewer/fridge-viewer.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

// Service of application
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
