import {createAction, props} from '@ngrx/store';
import {ProductModel} from '@Store/product/product.model';

export const GetProductDetailsAction = createAction('[Product] - Get Product', props<{ payload: string }>());

export const SuccessGetProductDetailsAction = createAction(
  '[Product] - Success Get Product Details', props<{ payload: ProductModel }>()
);
