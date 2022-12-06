import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-checksheet',
  templateUrl: './view-checksheet.component.html',
  styleUrls: ['./view-checksheet.component.css']
})
export class ViewChecksheetComponent implements OnInit {

  public checksheet;
  constructor() { }

  ngOnInit(): void {
    this.checksheet = this.getData()
  }

  getData(): Object {
    return {};
  }

}
