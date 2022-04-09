import { NgModule } from "@angular/core"

import { MatMenuModule } from '@angular/material/menu'
import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatProgressBarModule } from '@angular/material/progress-bar'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'

@NgModule({
  imports: [],
  exports: [
    MatMenuModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatProgressBarModule,
    MatProgressSpinnerModule
  ]
})
export class AngularMaterialModule {}
