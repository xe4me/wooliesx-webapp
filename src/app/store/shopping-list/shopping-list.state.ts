import {ShoppingItemModel, ShoppingList} from './shopping-list.model';

export default class ShoppingListState {
  shoppingList: ShoppingList;
}

export const initializeState = (): ShoppingListState => {
  return {shoppingList: Array<ShoppingItemModel>()};
};
