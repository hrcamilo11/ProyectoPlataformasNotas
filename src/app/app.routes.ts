import { Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {AppComponent} from "./app.component";
import {RecoveryPasswordComponent} from "./recovery-password/recovery-password.component";
import {StartComponent} from "./start/start.component";


export const routes: Routes = [
  {path: '', component: StartComponent},
  {path: 'login', component: LoginComponent},
  {path: 'recovery', component: RecoveryPasswordComponent},


];