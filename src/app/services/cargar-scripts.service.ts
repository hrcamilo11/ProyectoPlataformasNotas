import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CargarScriptsService {

  constructor() { }

  Carga( archives:String[])  {
    for(let archive of archives){

      let script = document.createElement('script');
      script.src = "assets/js/" + archive + ".js";
      let body = document.getElementsByTagName('body')[0];
      body.appendChild(script);

    }

  }
}
