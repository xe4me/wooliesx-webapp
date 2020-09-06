import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {ShoppingItemModel} from '@Store/shopping-list/shopping-list.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  public updateShoppingList(shoppingItem: ShoppingItemModel) {
    return new BehaviorSubject(shoppingItem)
  }
  public getShoppingList() {
    return new BehaviorSubject([])
  }
}
