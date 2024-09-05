import { Component } from '@angular/core';
import {CargarScriptsService} from "../cargar-scripts.service";

@Component({
  selector: 'app-recovery-password',
  standalone: true,
  imports: [],
  templateUrl: './recovery-password.component.html',
  styleUrl: './recovery-password.component.css'
})
export class RecoveryPasswordComponent {

  constructor(_CargarScript:CargarScriptsService) {

    _CargarScript.Carga(['recovery/recovery']);

  }

}
