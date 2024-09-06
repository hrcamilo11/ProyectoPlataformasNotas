// Selección de elementos del DOM
const container = document.querySelector('.container');
const signupButton = document.querySelector('.signup-section header');
const loginButton = document.querySelector('.login-section header');
const loginForm = document.querySelector('.login-form');
const signupForm = document.querySelector('.singup-form');

// Manejo de las transiciones entre registro e inicio de sesión
loginButton.addEventListener('click', () => {
  container.classList.add('active');
});

signupButton.addEventListener('click', () => {
  container.classList.remove('active');
});

// Manejo del inicio de sesión
loginForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Evitar el envío del formulario por defecto

  // Obtener los valores del formulario
  const email = loginForm.querySelector('input[type="email"]').value;
  const password = loginForm.querySelector('input[type="password"]').value;

  // Obtener los usuarios guardados del local storage
  const storedUsers = JSON.parse(localStorage.getItem('users')) || [];

  // Verificar si el usuario existe
  const user = storedUsers.find(user => user.email === email && user.password === password);

  if (user) {
    // Usuario autenticado, redirigir a la página de inicio
    localStorage.setItem('loggedIn', 'true'); // Guardar estado de inicio de sesión
    window.location.href = '/home'; // Redirigir a la página de inicio
  } else {
    alert('Credenciales incorrectas. Por favor, inténtalo de nuevo.');
  }
});

// Manejo del registro (opcional)
signupForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Evitar el envío del formulario por defecto

  // Obtener los valores del formulario
  const fullName = signupForm.querySelector('input[type="text"]').value;
  const email = signupForm.querySelector('input[type="email"]').value;
  const password = signupForm.querySelector('input[type="password"]').value;

  // Obtener los usuarios guardados del local storage
  const storedUsers = JSON.parse(localStorage.getItem('users')) || [];

  // Verificar si el usuario ya existe
  const existingUser = storedUsers.find(user => user.email === email);

  if (existingUser) {
    alert('El usuario ya está registrado.');
  } else {
    // Agregar el nuevo usuario al local storage
    storedUsers.push({ fullName, email, password });
    localStorage.setItem('users', JSON.stringify(storedUsers));
    alert('Registro exitoso. Ahora puedes iniciar sesión.');
    container.classList.add('active'); // Mostrar el formulario de inicio de sesión
  }
});
