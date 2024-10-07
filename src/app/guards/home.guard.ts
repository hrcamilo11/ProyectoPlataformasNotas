import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const homeGuard: CanActivateFn = () => {
  const router = inject(Router);
  const isLoggedIn = localStorage.getItem('loggedIn') === 'true';

  if (isLoggedIn) {
    return true; // Permite el acceso si está autenticado
  } else {
    // Redirige a la página de inicio si no está autenticado
    router.navigate(['/']);
    return false;
  }
};
