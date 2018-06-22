import {Item} from './item.class';

export class ListBox {

    constructor(public shopList: Item[], public fridgeList: Item[]) {}

    getShopList() {
        return this.shopList;
    }

    getFridgeList() {
        return this.fridgeList;
    }
}
