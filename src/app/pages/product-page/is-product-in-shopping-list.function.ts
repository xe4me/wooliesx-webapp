import ProductState from '@Store/product/product.state';
import ShoppingListState from '@Store/shopping-list/shopping-list.state';

export const isProductInShoppingList = ([product, list]: [ProductState, ShoppingListState]) => !!list.shoppingList.find(l => l.productId === product.productDetails.id)
