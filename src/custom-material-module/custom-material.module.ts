import { NgModule } from '@angular/core';
import {
  MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule
} from '@angular/material';

@NgModule({
  declarations: [],
  exports: [
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
  ],
  imports: [
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
  ]
})
export class CustomMaterialModule { }
