import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-section-template',
  templateUrl: './section-template.component.html',
  styleUrls: ['./section-template.component.css']
})
export class SectionTemplateComponent implements OnInit {
  public sectionTitle
  public sectionDescription
  public sectionOutcome
  public workingOnPC
  public workingOnMac
  public testedOnChrome
  public testedOnEdge
  public testedOnOpera
  public testedOnFirefox

  public sectionList = []
  public currentId

  constructor() { }

  ngOnInit(): void {

  }

}
