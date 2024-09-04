import {Component, OnInit} from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {CargarScriptsService} from "../cargar-scripts.service";

@Component({
  selector    : 'app-login',
  standalone  : true,
  imports: [] ,
  templateUrl : './login.component.html',
  styleUrl    : './login.component.css'

})
export class LoginComponent{

  constructor(_CargarScript:CargarScriptsService) {

    _CargarScript.Carga(['login/login']);

  }

}
