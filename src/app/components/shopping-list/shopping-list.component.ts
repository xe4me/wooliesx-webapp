import {Component, Input} from '@angular/core';
import {ShoppingList} from '@Store/shopping-list/shopping-list.model';

/*@TODO app-shopping-list a placeholder for a separate component to show the user's current shopping list
   This component too should be part of our design system, but due to the constraint of time, I decided to use Material
   Although in terms of functionality, below is fine
 */
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent {
  @Input() list: ShoppingList
}
