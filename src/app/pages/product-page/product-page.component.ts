import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {LoginBoxDialogComponent} from '@Components/login-box-dialog/login-box-dialog.component';
import {combineLatest, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {select, Store} from '@ngrx/store';
import ShoppingListState from '@Store/shopping-list/shopping-list.state';
import {
  AddShoppingItemAction,
  GetShoppingListAction,
  RemoveShoppingItemAction
} from '@Store/shopping-list/shopping-list.actions';
import {GetProductDetailsAction} from '@Store/product/product.actions';
import ProductState from '@Store/product/product.state';
import {StoreModel} from '@Store/store.model';
import {ProductModel} from '@Store/product/product.model';
import {isProductInShoppingList} from '@Pages/product-page/is-product-in-shopping-list.function';


@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {
  public product$: Observable<ProductState>;
  public userShoppingList$: Observable<ShoppingListState>;

  public get isAdded$(): Observable<boolean> {
    return combineLatest([this.product$, this.userShoppingList$]).pipe(map(isProductInShoppingList))
  }

  constructor(
    private store: Store<StoreModel>,
    public dialog: MatDialog,) {
    this.userShoppingList$ = store.pipe(select('shoppingList'));
    this.product$ = store.pipe(select('productDetails'));
  }

  public ngOnInit(): void {
    this.store.dispatch(GetShoppingListAction());
    this.store.dispatch(GetProductDetailsAction({payload: '123'}));
  }

  public handleAddToList(product: ProductModel): void {
    const dialogRef = this.dialog.open(LoginBoxDialogComponent);
    dialogRef.afterClosed().subscribe(_ => {
      this.updateShoppingList(product);
    });
  }

  public handleRemoveFromList(product: ProductModel): void {
    this.store.dispatch(RemoveShoppingItemAction({
      payload: {
        productId: product.id,
        title: product.title
      }
    }));
  }

  private updateShoppingList(product: ProductModel) {
    this.store.dispatch(AddShoppingItemAction({
      payload: {
        productId: product.id,
        title: product.title
      }
    }));
  }
}
