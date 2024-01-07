import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  cash: string = '1.994.281,72';
  cashRatio: number = 2.76;
  avgRatio: number = 0.51;
  cashIncreased: string = this.cashRatio >= 0 ? 'up' : 'down';
  avgIncreased: string = this.avgRatio >= 1 ? 'up' : 'down';

  constructor() { }

  ngOnInit(): void {
  }

}
