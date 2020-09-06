import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {LoginBoxDialogComponent} from '@Components/login-box-dialog/login-box-dialog.component';
import {ProductPageComponent} from '@Pages/product-page/product-page.component';
import {HttpClientModule} from '@angular/common/http';
import {AppStoreModule} from '@Store/app-store.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginBoxDialogComponent,
    ProductPageComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatInputModule,
    HttpClientModule,
    AppStoreModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {
}
