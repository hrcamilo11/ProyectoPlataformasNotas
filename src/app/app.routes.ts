import {Routes} from '@angular/router';
import { authGuard } from './guards/auth.guard'; // Guard para la página de inicio
import { homeGuard } from './guards/home.guard'; // Guard para la página de inicio después del login

import {LoginComponent} from "./components/login/login.component";
import {RecoveryPasswordComponent} from "./components/recovery-password/recovery-password.component";
import {StartComponent} from "./components/start/start.component";
import {HomeComponent} from "./components/home/home.component";
import {ProfileComponent} from "./components/profile/profile.component";


export const routes: Routes = [
  { path: '', component: StartComponent, canActivate: [authGuard] }, // Usa el guard para redirigir a usuarios no autenticados
  { path: 'home', component: HomeComponent, canActivate: [homeGuard] }, // Usa el guard para la página de inicio
  {path: 'login', component: LoginComponent, canActivate: [authGuard]},
  {path: 'recovery', component: RecoveryPasswordComponent, canActivate: [authGuard]},
  {path: 'profile', component: ProfileComponent, canActivate: [homeGuard] },
  { path: '**', redirectTo: '' }, // Redirige a la página de inicio si la ruta no se encuentra

];
