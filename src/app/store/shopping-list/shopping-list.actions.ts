import {createAction, props} from '@ngrx/store';
import {ShoppingItemModel, ShoppingList} from '@Store/shopping-list/shopping-list.model';

export const GetShoppingListAction = createAction('[ShoppingList] - Get ShoppingList');

export const AddShoppingItemAction = createAction('[ShoppingList] - Add ShoppingItem', props<{ payload: ShoppingItemModel }>());
export const RemoveShoppingItemAction = createAction('[ShoppingList] - Remove ShoppingItem', props<{ payload: ShoppingItemModel }>());

export const SuccessAddShoppingItemAction = createAction(
  '[ShoppingList] - Success Add Shopping Item',
  props<{ payload: ShoppingItemModel }>()
);
export const SuccessRemoveShoppingItemAction = createAction(
  '[ShoppingList] - Success Remove Shopping Item',
  props<{ payload: ShoppingItemModel }>()
);

export const SuccessGetShoppingListAction = createAction(
  '[ShoppingList] - Success Get Shopping List',
  props<{ payload: ShoppingList }>()
);
