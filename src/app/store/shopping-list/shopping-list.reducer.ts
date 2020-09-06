import {Action, createReducer, on} from '@ngrx/store';
import ShoppingListState, {initializeState} from '@Store/shopping-list/shopping-list.state';
import {AddShoppingItemAction, RemoveShoppingItemAction,} from './shopping-list.actions';

export const initialState = initializeState();

const _shoppingListReducer = createReducer(
  initialState,
  on(AddShoppingItemAction, (state: ShoppingListState, {payload}) => ({
    ...state,
    shoppingList: [...state.shoppingList, payload]
  })),
  on(RemoveShoppingItemAction, (state: ShoppingListState, {payload}) => ({
    ...state,
    shoppingList: state.shoppingList.filter(l => l.productId !== payload.productId)
  })),
);

export function ShoppingListReducer(state: ShoppingListState | undefined, action: Action) {
  return _shoppingListReducer(state, action);
}

