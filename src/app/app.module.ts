import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Servicios
import { CargarScriptsService } from "./cargar-scripts.service";


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[
    CargarScriptsService
  ]
})
export class AppModule { }
