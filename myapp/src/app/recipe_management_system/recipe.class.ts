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

    // all removes just remove last element in array, need to find elements to remove, pops not efficient, try using splice?
    removeItem(newIngredient: Item) {
        this.ingredients.pop();
    }

    removeInstruction(newInstruction: string) {
        this.instructions.pop();
    }

    removeEstTime(newEstTime: number) {
        this.estTime = 0;
    }
}
