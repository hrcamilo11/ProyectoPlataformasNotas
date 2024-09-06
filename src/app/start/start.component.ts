import { Component } from '@angular/core';
import {CargarScriptsService} from "../cargar-scripts.service";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-start',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './start.component.html',
  styleUrl: './start.component.css'
})
export class StartComponent {

  constructor(_CargarScript:CargarScriptsService) {

    _CargarScript.Carga(['start/start']);

  }
}
