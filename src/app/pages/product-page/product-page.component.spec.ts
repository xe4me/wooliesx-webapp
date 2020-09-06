import {isProductInShoppingList} from '@Pages/product-page/is-product-in-shopping-list.function';
import {ProductModel} from '@Store/product/product.model';
import {ShoppingList} from '@Store/shopping-list/shopping-list.model';

describe('@Method : isProductInShoppingList', () => {
  it('should return TRUE when the product is in the shopping list', function () {
    const productDetails: ProductModel = {
      id: "3h2g4jh2323232323423jh4g",
      image: 'https://img.zcdn.com.au/lf/50/hash/35461/18622416/4/Spiegelau%2BAuthentis%2BCrystal%2BBurgundy%2BGlasses.jpg',
      price: '60 AUD',
      title: 'Spiegelau Authentis Crystal Burgundy Glasses (Set of 4)',
      description: `The use of wine tasting descriptors allows the taster to qualitatively relate the aromas and flavors that the taster experiences and can be used in assessing the overall quality of wine. Wine writers differentiate wine tasters from casual enthusiasts; tasters attempt to give an objective description of the wine's taste (often taking a systematic approach to tasting), casual enthusiasts appreciate wine but pause their examination sooner than tasters.`,
    };
    const shoppingList: ShoppingList = [{
      productId: "3h2g4jh2323232323423jh4g",
      title: 'Spiegelau Authentis Crystal Burgundy Glasses (Set of 4)'
    }];
    const filter = isProductInShoppingList([{productDetails}, {shoppingList}]);
    expect(filter).toBe(true)
  });
  it('should return FALSE when the product is NOT in the shopping list', function () {
    const productDetails: ProductModel = {
      id: "3h2g4jh2323232323423jh4g",
      image: 'https://img.zcdn.com.au/lf/50/hash/35461/18622416/4/Spiegelau%2BAuthentis%2BCrystal%2BBurgundy%2BGlasses.jpg',
      price: '60 AUD',
      title: 'Spiegelau Authentis Crystal Burgundy Glasses (Set of 4)',
      description: `The use of wine tasting descriptors allows the taster to qualitatively relate the aromas and flavors that the taster experiences and can be used in assessing the overall quality of wine. Wine writers differentiate wine tasters from casual enthusiasts; tasters attempt to give an objective description of the wine's taste (often taking a systematic approach to tasting), casual enthusiasts appreciate wine but pause their examination sooner than tasters.`,
    };
    const shoppingList: ShoppingList = [{
      productId: "a_different_id",
      title: 'Something else'
    }];
    const filter = isProductInShoppingList([{productDetails}, {shoppingList}]);
    expect(filter).toBe(false)
  });
  it('should return FALSE when the shopping list is empty', function () {
    const productDetails: ProductModel = {
      id: "3h2g4jh2323232323423jh4g",
      image: 'https://img.zcdn.com.au/lf/50/hash/35461/18622416/4/Spiegelau%2BAuthentis%2BCrystal%2BBurgundy%2BGlasses.jpg',
      price: '60 AUD',
      title: 'Spiegelau Authentis Crystal Burgundy Glasses (Set of 4)',
      description: `The use of wine tasting descriptors allows the taster to qualitatively relate the aromas and flavors that the taster experiences and can be used in assessing the overall quality of wine. Wine writers differentiate wine tasters from casual enthusiasts; tasters attempt to give an objective description of the wine's taste (often taking a systematic approach to tasting), casual enthusiasts appreciate wine but pause their examination sooner than tasters.`,
    };
    const shoppingList: ShoppingList = [];
    const filter = isProductInShoppingList([{productDetails}, {shoppingList}]);
    expect(filter).toBe(false)
  });
})
