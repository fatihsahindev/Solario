import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialClassDirective } from 'src/app/directives/material-class.directive';



@NgModule({
  declarations: [
    MaterialClassDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MaterialClassDirective
  ]
})
export class MaterialClassModule { }
