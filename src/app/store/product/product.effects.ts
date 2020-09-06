import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Action} from '@ngrx/store';
import {Observable} from 'rxjs';
import {map, mergeMap} from 'rxjs/operators';
import {ProductService} from '@Services/product/product.service';
import {GetProductDetailsAction, SuccessGetProductDetailsAction} from '@Store/product/product.actions';
import {ProductModel} from '@Store/product/product.model';

@Injectable({providedIn: 'root'})
export class ProductEffects {
  constructor(private productService: ProductService, private action$: Actions) {
  }

  GetShoppingList$: Observable<Action> = createEffect(() =>
    this.action$.pipe(
      ofType(GetProductDetailsAction),
      mergeMap(action => {
          return this.productService.getProductDetails(action.payload).pipe(
            map((data: ProductModel) => {
              return SuccessGetProductDetailsAction({payload: data});
            })
          )
        }
      )
    )
  );
}
