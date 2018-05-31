import {Item} from './item.class';

export class Recipe {

    constructor (public ingredients: Array<Item>, public instructions: Array<String>, public estTime: number) {}

    addItem(newIngredient: Item) {
        this.ingredients.push(newIngredient);
    }

    addInstruction(newInstruction: string) {
        this.instructions.push(newInstruction);
    }
}
