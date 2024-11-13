import { Component } from '@angular/core';
import { Router, RouterLink } from "@angular/router";
import { CargarScriptsService } from "../../services/cargar-scripts.service";
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    RouterLink,
    HttpClientModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    private _CargarScript: CargarScriptsService,
    private router: Router,
    private http: HttpClient // Inyectar HttpClient
  ) {
    _CargarScript.Carga(['login/login']);
  }

  passwordError: string | null = null;

  onLogin(email: string, password: string): void {
    // Enviar datos al backend para iniciar sesión
    const loginData = { username: email, password: password };
    console.log(loginData)

    this.http.post('http://localhost:8080/api/auth/login/', loginData)
      .subscribe({
        next: (response) => {
          // Aquí puedes manejar la respuesta del backend, como almacenar el token
          localStorage.setItem('loggedIn', 'true'); // O maneja el estado según la respuesta
          this.router.navigate(['/home']);
        },
        error: (error) => {
          console.error('Error al iniciar sesión:', error);
          alert('Credenciales incorrectas. Por favor, inténtalo de nuevo.');
        }
      });
  }

  onSignup(event: Event, fullName: string, email: string, password: string): void {
    event.preventDefault();
    console.log("Entro")
    const storedUsers = JSON.parse(<string>localStorage.getItem('users')) || [];
    const existingUser  = storedUsers.find((u: { email: string; }) => u.email === email);
    console.log("Entro2")
    if (existingUser ) {
      console.log("Entro3")
      alert('El usuario ya está registrado.');
    } else {
      console.log("Entro5")
      // Enviar datos al backend
      const userData = { username: fullName, email: email, password: password };
      console.log("Datos a enviar:", userData);
      this.http.post('http://localhost:8080/api/auth/signup/', userData)
        .subscribe({
          next: (response) => {
            alert('Registro exitoso. Ahora puedes iniciar sesión.');
            this.passwordError = null; // Limpia el mensaje de error
          },
          error: (error) => {
            console.error('Error al registrar:', error);
            alert('Error al registrar. Por favor, intenta de nuevo.');
          }
        });
    }
  }

  validatePassword(password: string): boolean {
    // Expresión regular para validar la contraseña
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  }
}