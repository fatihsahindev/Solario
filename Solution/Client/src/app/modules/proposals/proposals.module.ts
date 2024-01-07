import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProposalsComponent } from './proposals.component';
import { MaterialClassModule } from '../material-class/material-class.module';



@NgModule({
  declarations: [
    ProposalsComponent
  ],
  imports: [
    CommonModule,
    MaterialClassModule
  ]
})
export class ProposalsModule { }
