import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolarFarmsComponent } from './solar-farms.component';
import { MaterialClassModule } from '../material-class/material-class.module';



@NgModule({
  declarations: [
    SolarFarmsComponent
  ],
  imports: [
    CommonModule,
    MaterialClassModule
  ]
})
export class SolarFarmsModule { }
