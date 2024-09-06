import { Component } from '@angular/core';
import {CargarScriptsService} from "../../services/cargar-scripts.service";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-recovery-password',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './recovery-password.component.html',
  styleUrl: './recovery-password.component.css'
})
export class RecoveryPasswordComponent {

  constructor(_CargarScript:CargarScriptsService) {

    _CargarScript.Carga(['recovery/recovery']);

  }

}
