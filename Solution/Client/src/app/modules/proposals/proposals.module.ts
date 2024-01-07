import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProposalsComponent } from './proposals.component';
import { MaterialClassDirective } from 'src/app/directives/material-class.directive';



@NgModule({
  declarations: [
    ProposalsComponent,
    MaterialClassDirective
  ],
  imports: [
    CommonModule
  ]
})
export class ProposalsModule { }
