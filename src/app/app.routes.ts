import { Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {AppComponent} from "./app.component";
import {RecoveryPasswordComponent} from "./recovery-password/recovery-password.component";


export const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'login', component: LoginComponent},
  {path: 'recovery', component: RecoveryPasswordComponent},

];
