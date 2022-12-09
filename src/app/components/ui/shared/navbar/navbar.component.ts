import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../../../services/auth.service";
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { UserService } from '../../../../services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public user;
  public IsAuth;

  constructor(private authService: AuthService, public afAuth: AngularFireAuth, private userService: UserService) { }

  ngOnInit(): void {
    this.IsAuth = this.authService.getAuthStatus();
    this.user = this.authService.getUser();
    console.log(this.IsAuth);
  }

  onToggleSidenav() {

  }

  onLogout() {
    this.authService.logout().then();
  }

}