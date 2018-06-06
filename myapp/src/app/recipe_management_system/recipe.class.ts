import {Item} from './item.class';

export class Recipe {

    constructor (public rName: string, public ingredients: Array<Item>, public instructions: Array<String>, public estTime: number) {}

    addItem(newIngredient: Item) {
        this.ingredients.push(newIngredient);
    }

    addInstruction(newInstruction: string) {
        this.instructions.push(newInstruction);
    }

    addEstTime(newEstTime: number) {
        this.estTime = newEstTime;
    }

    // all removes just remove last element in array, need to find elements to remove
    removeItem(newIngredient: Item) {
        this.ingredients.splice(this.ingredients.indexOf(newIngredient), 1);
    }

    removeInstruction(newInstruction: string) {
        this.instructions.splice(this.instructions.indexOf(newInstruction), 1);
    }

    removeEstTime(newEstTime: number) {
        this.estTime = 0;
    }
}
