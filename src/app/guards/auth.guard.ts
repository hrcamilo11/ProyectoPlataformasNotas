import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  const isLoggedIn = localStorage.getItem('loggedIn') === 'true';

  if (isLoggedIn) {
    // Si el usuario está autenticado, redirige a la página de inicio
    router.navigate(['/home']);
    return false;
  } else {
    return true; // Permite el acceso si no está autenticado
  }
};
