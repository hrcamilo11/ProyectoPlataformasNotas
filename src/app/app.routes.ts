import {RouterModule, Routes} from '@angular/router';
import { authGuard } from './guards/auth.guard'; // Guard para la página de inicio
import { homeGuard } from './guards/home.guard'; // Guard para la página de inicio después del login

import {LoginComponent} from "./components/login/login.component";
import {RecoveryPasswordComponent} from "./components/recovery-password/recovery-password.component";
import {StartComponent} from "./components/start/start.component";
import {HomepageComponent} from "./components/homepage/homepage.component";
import {NgModule} from "@angular/core";


export const routes: Routes = [
  { path: '', component: StartComponent, canActivate: [authGuard] }, // Usa el guard para redirigir a usuarios autenticados
  { path: 'home', component: HomepageComponent, canActivate: [homeGuard] }, // Usa el guard para la página de inicio
  {path: 'login', component: LoginComponent},
  {path: 'recovery', component: RecoveryPasswordComponent},
  { path: '**', redirectTo: '' }, // Redirige a la página de inicio si la ruta no se encuentra

];
