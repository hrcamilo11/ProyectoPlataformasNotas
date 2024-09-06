import { Component } from '@angular/core';
import {CargarScriptsService} from "../../services/cargar-scripts.service";
import {NgOptimizedImage} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-start',
  standalone: true,
  imports: [
    NgOptimizedImage,
    RouterLink
  ],
  templateUrl: './start.component.html',
  styleUrl: './start.component.css'
})
export class StartComponent {

  constructor(_CargarScript:CargarScriptsService) {

    _CargarScript.Carga(['start/start']);

  }
}
