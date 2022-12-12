import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from "../components/dashboard/dashboard.component";
import { LogoutComponent } from "../components/auth/logout/logout.component";
import { LoginComponent } from "../components/auth/login/page/login.component";
import { RegisterComponent } from "../components/auth/register/register.component";
import { ConnectSelectComponent } from "../components/connect-select/connect-select.component";
import { ImmerseSelectComponent } from "../components/immerse-select/immerse-select.component";
import { SectionDetailsComponent } from "../components/section-details/section-details.component";
import { IssuesViewComponent } from "../components/issues-view/issues-view.component";
import { UserComponent } from '../components/user/user.component';
import { CreateChecksheetComponent } from '../components/checksheet/create-checksheet/create-checksheet.component';
import { ViewChecksheetComponent } from '../components/checksheet/view-checksheet/view-checksheet.component';

import { AuthGuard } from '../services/auth.guard';
import {PlatformSelectComponent} from "../components/platform-select/platform-select.component";
import {TestImmerseLauncherComponent} from "../components/immersections/test-immerse-launcher/test-immerse-launcher.component";
import {TestConnectRegistrationComponent} from "../components/connectsections/test-connect-registration/test-connect-registration.component";
import { AddConnectSectionNoteComponent } from '../components/shared/add-connect-section-note/add-connect-section-note.component';
import {ViewConnectSectionNoteComponent} from "../components/shared/view-connect-section-note/view-connect-section-note.component";
import { SectionTemplateComponent } from '../components/shared/section-template/section-template.component';
import {ForgotpasswordComponent} from "../components/auth/forgotpassword/forgotpassword.component";

const routes: Routes = [
  { path: '', component: LoginComponent},

  // Welcome
  // { path: 'welcome', component: WelcomeComponent},

  // Auth
  { path: 'login', component: LoginComponent},
  { path: 'logout', component: LogoutComponent},
  { path: 'register', component: RegisterComponent },
  { path: 'forgot-password', component: ForgotpasswordComponent },

  // Home
  { path: 'dashboard', component: DashboardComponent},

  // Testing selection
  { path: 'test-checksheet/:id', component: PlatformSelectComponent},
  { path: 'connect-select', component: ConnectSelectComponent},
  { path: 'immerse-select', component: ImmerseSelectComponent},

  // Connect Sections
  { path: 'connect-select/test-connect-registration/:id', component: SectionTemplateComponent},

  // Connect section notes
  { path: 'add-note/connectsection-test/:id', component: AddConnectSectionNoteComponent },
  { path: 'view-notes/connectsection-test/:id', component: ViewConnectSectionNoteComponent },

  // Immerse sections
  { path: 'test-immerse-launcher', component: TestImmerseLauncherComponent},

  // Details
  { path: 'section-details', component: SectionDetailsComponent},

  // Issues
  { path: 'issues-view', component: IssuesViewComponent},

  // Profile
  { path: 'profile/:id', component: UserComponent},

  // Check sheet
  { path: 'create-checksheet', component: CreateChecksheetComponent},
  { path: 'view-checksheet/:id', component: ViewChecksheetComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
