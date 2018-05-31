import {Item} from './item.class';

export class ListBox {

    constructor(public shopList: Array<Item>, public fridgeList: Array<Item>) {}

    getShopList() {
        return this.shopList;
    }

    getFridgeList() {
        return this.fridgeList;
    }

}
