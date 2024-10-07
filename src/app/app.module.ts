import { NgModule } from '@angular/core';


//Servicios
import { CargarScriptsService } from "./services/cargar-scripts.service";

//Modulos
import { CommonModule } from '@angular/common';
import {BrowserModule} from "@angular/platform-browser";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";

//Componentes
import {AppComponent} from "./app.component";




@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppComponent,


  ],
  providers:[
    CargarScriptsService
  ],
  bootstrap:[

  ]
})
export class AppModule { }
