import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChecksheetService } from "../../../services/checksheet.service";

@Component({
  selector: 'app-view-checksheet',
  templateUrl: './view-checksheet.component.html',
  styleUrls: ['./view-checksheet.component.css']
})
export class ViewChecksheetComponent implements OnInit {
  public checksheetId
  public checksheetData
  public checksheetRegistration
  constructor(private route: ActivatedRoute, public checksheetService: ChecksheetService) { }

  ngOnInit(): void {
    this.checksheetId = this.route.snapshot.url[1].path;
    this.checksheetService.getChecksheetById(this.checksheetId).subscribe((res) => {
      this.checksheetData = res
      // this.checksheetService.getConnectRegistration(res['id']).subscribe((res) => {
      //   this.checksheetRegistration = res
      //   console.log(`regData: ${this.checksheetRegistration}`)
      // })
    })
  }

  readCheck() {
    return false
  }
}
