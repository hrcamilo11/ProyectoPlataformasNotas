import {Component, OnInit} from '@angular/core';
import {Router, RouterLink, RouterOutlet} from "@angular/router";
import {CargarScriptsService} from "../../services/cargar-scripts.service";

@Component({
  selector    : 'app-login',
  standalone  : true,
  imports: [
    RouterLink
  ],
  templateUrl : './login.component.html',
  styleUrl    : './login.component.css'

})
export class LoginComponent{

  constructor(_CargarScript:CargarScriptsService, private router: Router) {

    _CargarScript.Carga(['login/login']);

  }

  onLogin(email: string, password: string): void {
    const storedUsers = JSON.parse(<string>localStorage.getItem('users')) || [];
    const user = storedUsers.find((u: { email: string; password: string; }) => u.email === email && u.password === password);

    if (user) {
      localStorage.setItem('loggedIn', 'true');
      this.router.navigate(['/home']);
    } else {
      alert('Credenciales incorrectas. Por favor, inténtalo de nuevo.');
    }
  }

  onSignup(fullName: string, email: string, password: string): void {
    const storedUsers = JSON.parse(<string>localStorage.getItem('users')) || [];
    const existingUser = storedUsers.find((u: { email: string; }) => u.email === email);

    if (existingUser) {
      alert('El usuario ya está registrado.');
    } else {
      storedUsers.push({ fullName, email, password });
      localStorage.setItem('users', JSON.stringify(storedUsers));
      alert('Registro exitoso. Ahora puedes iniciar sesión.');
    }
  }
}
