import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-months',
  templateUrl: './dashboard-months.component.html',
  styleUrls: ['./dashboard-months.component.css']
})
export class DashboardMonthsComponent implements OnInit {
  public month: string;
  constructor() { }

  ngOnInit(): void {
    this.month = 'March';
  }

}
