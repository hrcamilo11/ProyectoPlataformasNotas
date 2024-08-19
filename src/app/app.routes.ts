import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from "./pages/login/login.component";
import {SearchComponent} from "./pages/search/search.component";
import {CollegesComponent} from "./pages/colleges/colleges.component";
import {RecoveryPassComponent} from "./pages/recovery-pass/recovery-pass.component";

export const routes: Routes = [
  {path: '' ,component: HomeComponent},
  {path: 'login' ,component: LoginComponent},
  {path: 'recovery', component: RecoveryPassComponent},
  {path: 'search' ,component: SearchComponent},
  {path: 'colleges' ,component: CollegesComponent},

];
