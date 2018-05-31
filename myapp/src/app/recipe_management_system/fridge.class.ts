import {Item} from './item.class';
import {Recipe} from './recipe.class';
import {ListBox} from './listbox.class';

export class Fridge {

    // Variable for fridge contents
    contents: any[] = [];

    // Variables for Recipe constructor
    testItems: Item[] = [];
    testInstructions: string[] = [];
    testEstTime: number;

    // Test Recipe constructor for checkRecipe
    testRecipe = new Recipe(this.testItems, this.testInstructions, this.testEstTime);

    // Test lists to hold items, shopping list and fridge list
    sList: Item[] = [];
    fList: Item[] = [];

    list = new ListBox(this.sList, this.fList);
    shopList = this.list.getShopList; // List of items needed for purchase
    fridgeList = this.list.getFridgeList; // List of items in fridge

    add(checkFridge: Item) {
        // Check if theres a duplicate
        let checkDuplicate = false;
        // Loop through to see if item is in fridge, add by 1 of it's quantity
        for (let i = 0; i < this.contents.length; i++) {
            if (checkFridge.name === this.contents[i].name) {
                this.contents[i].quantity += checkFridge.quantity;
                checkDuplicate = true;
            }
        } // If item not in fridge, add it
        if (checkDuplicate === false) {
            this.contents.push(checkFridge);
        }
    }

    remove(checkFridge: Item) {
        // Loop through to see if item is in fridge, then remove item by 1 of it's quantity
        for (let i = 0; i < this.contents.length; i++) {
            if (checkFridge.name === this.contents[i].name) {
                this.contents[i].quantity -= checkFridge.quantity;
            } // If item has a quantity of < 0, remove the item
            if (this.contents[i].quantity < 0) {
            this.contents.splice(i, 1);
            }
        }
    }

    checkRecipe(testRecipe: Recipe) {
        let diff: number;
        const sList = this.shopList;
        const fList = this.fridgeList;

        for (const r of testRecipe.ingredients) { // Loop through Items in recipe
            let foundInFridge = false; // Will be switched to true if any occurences of this item are found in fridge
            for (const i of this.contents) { // Loop through Items in fridge
                if (r.name.toUpperCase() === i.name.toUpperCase()) {   // If there is a name match between recipe and fridge contents
                    foundInFridge = true;
                    if (i.quantity >= r.quantity) { // Pushes quantity of what is required for recipe into the fridgeList
                        this.fList.push(r);
                    } else if (r.quantity > i.quantity) {
                        // If the quantity in recipe is more than what is in the fridge, get the difference
                        diff = r.quantity - i.quantity;
                        // Create a new item with the difference, push it in the shopping list
                        const shopItem = new Item(r.name, diff);
                        this.sList.push(shopItem);
                        // Create a list of fridge items, push it into fridge items
                        const fridgeItem = new Item(r.name, i.quantity);
                        this.fList.push(fridgeItem);
                    }
                }
            } //   Finished looping through fridge
            // If failed to find in fridge, add whole item to the shopping list
            if (foundInFridge === false) {
                this.sList.push(r);
            }
        }

        // Once finished with all searches, return the objects containing the results
        // const response = {fridgeList: fList, shopList: sList} ; <- doesnt work
        // return response;
        return this.list; // Return both lists.
    }
}
