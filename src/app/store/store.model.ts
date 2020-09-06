import ShoppingListState from '@Store/shopping-list/shopping-list.state';
import ProductState from '@Store/product/product.state';

export interface StoreModel {
  shoppingList: ShoppingListState,
  productDetails: ProductState
}
