import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Action} from '@ngrx/store';
import {Observable} from 'rxjs';
import {map, mergeMap} from 'rxjs/operators';
import {
  AddShoppingItemAction,
  GetShoppingListAction,
  SuccessAddShoppingItemAction,
  SuccessGetShoppingListAction,
  RemoveShoppingItemAction,
  SuccessRemoveShoppingItemAction
} from '@Store/shopping-list/shopping-list.actions';
import {ShoppingListService} from '@Services/shopping-list/shopping-list.service';
import {ShoppingItemModel, ShoppingList} from '@Store/shopping-list/shopping-list.model';

@Injectable({providedIn: 'root'})
export class ShoppingListEffects {
  constructor(private shoppingListService: ShoppingListService, private action$: Actions) {
  }

  GetShoppingList$: Observable<Action> = createEffect(() =>
    this.action$.pipe(
      ofType(GetShoppingListAction),
      mergeMap(action =>
        this.shoppingListService.getShoppingList().pipe(
          map((data: ShoppingList) => {
            return SuccessGetShoppingListAction({payload: data});
          })
        )
      )
    )
  );

  AddShoppingItem$: Observable<Action> = createEffect(() =>
    this.action$.pipe(
      ofType(AddShoppingItemAction),
      mergeMap(action =>
        this.shoppingListService.updateShoppingList(action.payload)
          .pipe(
            map((data: ShoppingItemModel) => {
              return SuccessAddShoppingItemAction({payload: data});
            })
          )
      )
    )
  );
  RemoveShoppingItem$: Observable<Action> = createEffect(() =>
    this.action$.pipe(
      ofType(RemoveShoppingItemAction),
      mergeMap(action =>
        this.shoppingListService.updateShoppingList(action.payload)
          .pipe(
            map((data: ShoppingItemModel) => {
              return SuccessRemoveShoppingItemAction({payload: data});
            })
          )
      )
    )
  );
}
