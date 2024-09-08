import { Component } from '@angular/core';
import {CargarScriptsService} from "../../services/cargar-scripts.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  constructor(_CargarScript:CargarScriptsService, private router: Router) {

    _CargarScript.Carga(['profile/profile']);

  }
}
