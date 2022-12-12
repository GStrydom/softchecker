import { Injectable } from '@angular/core';

import { Store } from "@ngrx/store";
import * as fromApp from '../app.reducer';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ProfileModel } from "../components/user/profile.model";
import { UserInterface } from "../interfaces/user.interface";

// import { AuthData } from "../components/auth/auth-data.model";

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private user: UserInterface;
  constructor(private store: Store<{ui: fromApp.State}>, public jwtHelper: JwtHelperService, private afAuth: AngularFireAuth) {}

  loginUser(email, password) {
    // this.store.dispatch({type: 'START_LOADING'});
    // this.store.dispatch({type: 'STOP_LOADING'});
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  registerUser(email: string, password: string) {
    // this.store.dispatch({type: 'START_LOADING'});
    // this.store.dispatch({type: 'STOP_LOADING'});
    return this.afAuth.createUserWithEmailAndPassword(email, password);
  }

  logout() {
    this.user = null;
    return this.afAuth.signOut();
  }

  getUser() {
    return { ...this.user };
  }

  getAuthStatus() {
    return this.isAuthenticated();
  }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    // Check whether the token is expired and return
    // true or false
    return !this.jwtHelper.isTokenExpired(token);
  }
}
