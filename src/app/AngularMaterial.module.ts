import { NgModule } from "@angular/core";

import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button'
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  imports: [],
  exports: [
    MatMenuModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule
  ]
})
export class AngularMaterialModule {}
