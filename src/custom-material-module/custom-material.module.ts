import { NgModule } from '@angular/core';
import {
  MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule, MatButtonModule,
  MatMenuModule
} from '@angular/material';

@NgModule({
  declarations: [],
  exports: [
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatMenuModule,
  ],
  imports: [
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatMenuModule,
  ]
})
export class CustomMaterialModule { }
