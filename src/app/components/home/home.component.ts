import { Component }            from '@angular/core';
import {CargarScriptsService}   from "../../services/cargar-scripts.service";
import {Router, RouterLink}     from "@angular/router";

@Component({
  selector:     'app-home',
  standalone:   true,
  imports: [
    RouterLink
  ],
  templateUrl:  './home.component.html',
  styleUrl:     './home.component.css'
})

export class HomeComponent {

  constructor(_CargarScript:CargarScriptsService, private router: Router) {
    _CargarScript.Carga(['home/home']);
  }

  logout(): void {
    localStorage.removeItem('loggedIn');
    this.router.navigate(['/']);
  }
}
