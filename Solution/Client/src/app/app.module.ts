import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { SolarFarmsModule } from './modules/solar-farms/solar-farms.module';
import { ProposalsModule } from './modules/proposals/proposals.module';
import { InboxModule } from './modules/inbox/inbox.module';
import { LeftMenuComponent } from './shared/left-menu/left-menu.component';
import { ProfileComponent } from './shared/left-menu/profile/profile.component';
import { ItemComponent } from './shared/left-menu/item/item.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    LeftMenuComponent,
    ProfileComponent,
    ItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardModule,
    SolarFarmsModule,
    ProposalsModule,
    InboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
