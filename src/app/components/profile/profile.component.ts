import { Component } from '@angular/core';
import {CargarScriptsService} from "../../services/cargar-scripts.service";
import {Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  constructor(_CargarScript:CargarScriptsService, private router: Router) {

    _CargarScript.Carga(['profile/profile']);

  }
}
