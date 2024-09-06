import { Component } from '@angular/core';
import {CargarScriptsService} from "../../services/cargar-scripts.service";
import {DocumentListComponent} from "../document-list/document-list.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [
    DocumentListComponent
  ],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

  constructor(_CargarScript:CargarScriptsService, private router: Router) {

    _CargarScript.Carga(['home/home']);

  }

  logout(): void {
    localStorage.removeItem('loggedIn');
    this.router.navigate(['/']);
  }
}
