import {NgModule} from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatBadgeModule} from '@angular/material/badge';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  exports: [
    MatDialogModule,
    MatInputModule,
    MatBadgeModule,
    MatMenuModule,
    MatButtonModule
  ],
})
export class MaterialModule {
}
