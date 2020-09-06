import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LoginBoxDialogComponent} from '@Components/login-box-dialog/login-box-dialog.component';
import {ProductPageComponent} from '@Pages/product-page/product-page.component';
import {HttpClientModule} from '@angular/common/http';
import {AppStoreModule} from '@Store/app-store.module';
import {MaterialModule} from './third-party/material.module';
import {ShoppingListComponent} from '@Components/shopping-list/shopping-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginBoxDialogComponent,
    ProductPageComponent,
    ShoppingListComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppStoreModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {
}
