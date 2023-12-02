import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './shared/layout/layout.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { InboxComponent } from './modules/inbox/inbox.component';
import { ProposalsComponent } from './modules/proposals/proposals.component';
import { SolarFarmsComponent } from './modules/solar-farms/solar-farms.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: LayoutComponent,
  // },
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'inbox', component: InboxComponent },
      { path: 'proposals', component: ProposalsComponent },
      { path: 'solar-farms', component: SolarFarmsComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
