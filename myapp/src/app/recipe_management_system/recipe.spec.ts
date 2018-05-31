import {Recipe} from './recipe.class';
import {Item} from './item.class';
import {Fridge} from './fridge.class';
import {ListBox} from './listbox.class';

// Jasmine
describe('Testing variables', function () {
    const newRecipe = new Recipe([], [], 0);

    const item1 = new Item('Orange', 6);
    const item2 = new Item('Egg', 12);
    const item3 = new Item('Carrot', 4);

    const fridge = new Fridge();

    const lists = new ListBox(this.shopList, this.fridgeList);
});

it('addItem test', function () {
    const newRecipe = new Recipe([], [], 0);
    const item4 = new Item('Apple', 3);
    const item5 = new Item('Pineapple', 1);

    newRecipe.addItem(item4);
    newRecipe.addItem(item5);

    expect(newRecipe.ingredients[0]).toEqual(item4);
    expect(newRecipe.ingredients[1]).toEqual(item5);
});

it('addInstruction test', function () {
    const newRecipe = new Recipe([], [], 0);

    newRecipe.addInstruction('This recipe requires an apple');
    newRecipe.addInstruction('This recipe requires a pineapple');

    expect(newRecipe.instructions).toContain('This recipe requires an apple', 'This recipe requires a pineapple');
});

it('add to fridge test', function () {
    const fridge = new Fridge();

    const item4 = new Item('Apple', 3);
    const item5 = new Item('Pineapple', 1);

    fridge.add(item4);
    fridge.add(item5);

    expect(fridge.contents[0]).toEqual(item4);
    expect(fridge.contents[1]).toEqual(item5);
});

it('add item in fridge thats already in fridge', function () {
    const fridge = new Fridge();

    fridge.add(new Item('Apple', 3));
    expect(fridge.contents).toContain(new Item('Apple', 3));

    fridge.add(new Item('Apple', 5));
    expect(fridge.contents[0].quantity).toBe(8);
});

it('remove from fridge test', function () {
    const fridge = new Fridge();

    const item4 = new Item('Apple', 3);
    const item5 = new Item('Pineapple', 1);
    const item6 = new Item('Apple', 1);

    fridge.add(item4);
    fridge.add(item5);

    fridge.remove(item6);

    expect(fridge.contents[0]).toEqual(new Item('Apple', 2));
    expect(fridge.contents[0].quantity).toBe(2);
});

it('checkrecipe test', function () {
    const newRecipe = new Recipe([], [], 0);

    // Started with an empty fridge
    const fridge = new Fridge();

    const item4 = new Item('Apple', 5);
    const item5 = new Item('Pineapple', 1);
    const item6 = new Item('Orange', 2);


    // Added apples and pineapples to the fridge (no oranges)
    fridge.add(item4);
    fridge.add(item5);

    newRecipe.addItem(new Item('Apple', 3)); // Enough apples
    newRecipe.addItem(new Item('Pineapple', 1)); // Should work
    newRecipe.addItem(new Item('Orange', 2)); // No oranges in the fridge

    console.log('Recipe that is about to go into the checkRecipe function as input:');
    console.log(newRecipe);

    const testlist = fridge.checkRecipe(newRecipe);

    console.log('The object returned by checkRecipe:');
    console.log(testlist);

    expect(testlist.fridgeList.length).toBe(2);


    // Enough apples, 2 left in fridgeList
    expect(testlist.getFridgeList()[0].name).toBe('Apple');
    expect(testlist.getFridgeList()[0].quantity).toBe(3);

    // No oranges, puts 2 in shopList
    expect(testlist.getShopList()[0].name).toBe('Orange');
    expect(testlist.getShopList()[0].quantity).toBe(2);

});
