import {Action, createReducer, on} from '@ngrx/store';
import ProductState, {initializeState} from '@Store/product/product.state';
import {SuccessGetProductDetailsAction} from '@Store/product/product.actions';

export const initialState = initializeState();

const _productReducer = createReducer(
  initialState,
  on(SuccessGetProductDetailsAction, (state: ProductState, {payload}) => ({
    ...state,
    productDetails: payload
  }))
);

export function ProductReducer(state: ProductState | undefined, action: Action) {
  return _productReducer(state, action);
}

