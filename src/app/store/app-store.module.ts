import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';
import {ShoppingListReducer} from '@Store/shopping-list/shopping-list.reducer';
import {EffectsModule} from '@ngrx/effects';
import {ShoppingListEffects} from '@Store/shopping-list/shopping-list.effects';
import {ProductReducer} from '@Store/product/product.reducer';
import {ProductEffects} from '@Store/product/product.effects';
@NgModule({
  imports: [
    StoreModule.forRoot({shoppingList: ShoppingListReducer, productDetails: ProductReducer}),
    EffectsModule.forRoot([ShoppingListEffects, ProductEffects])
  ],
})
export class AppStoreModule {
}
