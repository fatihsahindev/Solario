import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InboxComponent } from './inbox.component';
import { MaterialClassModule } from '../material-class/material-class.module';



@NgModule({
  declarations: [
    InboxComponent
  ],
  imports: [
    CommonModule,
    MaterialClassModule
  ]
})
export class InboxModule { }
