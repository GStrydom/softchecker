import { Component, OnInit } from '@angular/core';
import { ProfileModel } from './profile.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public user: ProfileModel;

  constructor() { }

  ngOnInit(): void {
  }

}
