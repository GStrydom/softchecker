import { Component, OnInit, Input } from '@angular/core';
import { UserInterface } from "../../interfaces/user.interface";
import { UserService } from "../../services/user.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public userData
  @Input() id: string

  constructor(public userService: UserService) { }

  ngOnInit(): void {
    this.userData = this.userService.getUserById(this.id).subscribe((res) => {
      console.log(`Data: ${res}`);
    })
  }
}
