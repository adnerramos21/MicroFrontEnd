import { NgModule } from '@angular/core';
import {
  MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule, MatButtonModule
} from '@angular/material';

@NgModule({
  declarations: [],
  exports: [
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
  ],
  imports: [
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
  ]
})
export class CustomMaterialModule { }
