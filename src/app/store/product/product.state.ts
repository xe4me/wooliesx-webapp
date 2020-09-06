import {ProductModel} from '@Store/product/product.model';

export default class ProductState {
  productDetails: ProductModel | null;
}

export const initializeState = (): ProductState => {
  return {productDetails: null};
};
