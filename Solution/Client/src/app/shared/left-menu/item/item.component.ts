import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  items: { module: string; route: string; icon: string }[] =
    [
      {
        module: 'Dashboard',
        route: 'dashboard',
        icon: 'space_dashboard',
      },
      {
        module: 'Solar Farms',
        route: 'solar-farms',
        icon: 'solar_power',
      },
      {
        module: 'Proposals',
        route: 'proposals',
        icon: 'description',
      },
      {
        module: 'Inbox',
        route: 'inbox',
        icon: 'mail',
      },
    ];

  constructor() {}

  ngOnInit(): void {}
}
