// Funcion Sidebar
function showSection(sectionId) {
  // Ocultar todas las secciones
  const sections = document.querySelectorAll('.content section');
  sections.forEach(section => {
    section.classList.add('hidden');
  });

  // Mostrar la sección seleccionada
  const selectedSection = document.getElementById(sectionId);
  if (selectedSection) {
    selectedSection.classList.remove('hidden');
  }

  // Actualizar el enlace activo en la barra lateral
  const sidebarLinks = document.querySelectorAll('.sidebar nav a');
  sidebarLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('onclick').includes(sectionId)) {
      link.classList.add('active');
    }
  });
}


//DOM
document.addEventListener('DOMContentLoaded', () => {
  const forms = document.querySelectorAll('form');

  //Forms
  function validateForm(form) {
    const fields = form.elements;
    let isValid = true;

    // Validar campos requeridos
    for (let i = 0; i < fields.length; i++) {
      const field = fields[i];
      if (field.required && !field.value) {
        isValid = false;
        field.classList.add('invalid');
        field.setCustomValidity('Este campo es requerido');
      }
    }

    // Validar campos específicos
    switch (form.id) {
      case 'general-form':
        const username = document.getElementById('username');
        if (!username.value.match(/^[a-zA-Z0-9_]+$/)) {
          isValid = false;
          username.classList.add('invalid');
          username.setCustomValidity('El nombre de usuario solo puede contener letras, números y guiones bajos');
        }

        const email = document.getElementById('email');
        if (!email.value.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
          isValid = false;
          email.classList.add('invalid');
          email.setCustomValidity('La dirección de correo electrónico no es válida');
        }
        break;

      case 'password-form':
        const currentPassword = document.getElementById('current-password');
        if (!currentPassword.value) {
          isValid = false;
          currentPassword.classList.add('invalid');
          currentPassword.setCustomValidity('La contraseña actual es requerida');
        }

        const newPassword = document.getElementById('new-password');
        if (newPassword.value.length < 8) {
          isValid = false;
          newPassword.classList.add('invalid');
          newPassword.setCustomValidity('La contraseña debe tener al menos 8 caracteres');
        }

        const confirmPassword = document.getElementById('confirm-password');
        if (newPassword.value !== confirmPassword.value) {
          isValid = false;
          confirmPassword.classList.add('invalid');
          confirmPassword.setCustomValidity('Las contraseñas no coinciden');
        }
        break;

      case 'info-form':
        const bio = document.getElementById('bio');
        if (bio.value.length > 200) {
          isValid = false;
          bio.classList.add('invalid');
          bio.setCustomValidity('La biografía no puede tener más de 200 caracteres');
        }
        break;

      case 'social-form':
        const twitter = document.getElementById('twitter');
        if (twitter.value && !twitter.value.match(/^https?:\/\/twitter\.com\/[a-zA-Z0-9_]+$/)) {
          isValid = false;
          twitter.classList.add('invalid');
          twitter.setCustomValidity('La dirección de Twitter no es válida');
        }

        const facebook = document.getElementById('facebook');
        if (facebook.value && !facebook.value.match(/^https?:\/\/www\.facebook\.com\/[a-zA-Z0-9_]+$/)) {
          isValid = false;
          facebook.classList.add('invalid');
          facebook.setCustomValidity('La dirección de Facebook no es válida');
        }

        const linkedin = document.getElementById('linkedin');
        if (linkedin.value && !linkedin.value.match(/^https?:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_]+$/)) {
          isValid = false;
          linkedin.classList.add('invalid');
          linkedin.setCustomValidity('La dirección de LinkedIn no es válida');
        }
        break;
    }

    return isValid;
  }


  // Profile picture upload simulation
  const uploadButton = document.querySelector('.btn-primary');
  const profilePic = document.querySelector('.profile-pic-large');
  const resetButton = document.querySelector('.btn-secondary');

  uploadButton.addEventListener('click', (e) => {
    e.preventDefault();
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          profilePic.src = event.target.result;
          showSuccessMessage(profilePic.closest('form'));
        };
        reader.readAsDataURL(file);
      }
    };
    input.click();
  });

  resetButton.addEventListener('click', (e) => {
    e.preventDefault();
    profilePic.src = '/api/placeholder/120/120';
    showSuccessMessage(profilePic.closest('form'));
  });

  // Email confirmation simulation
  const resendLink = document.querySelector('.resend-link');
  resendLink.addEventListener('click', (e) => {
    e.preventDefault();
    const emailAlert = document.querySelector('.alert-warning');
    emailAlert.textContent = 'Correo de confirmación reenviado. Por favor, revisa tu bandeja de entrada.';
    emailAlert.classList.remove('alert-warning');
    emailAlert.classList.add('alert-success');
    setTimeout(() => {
      emailAlert.textContent = 'Tu correo electrónico no está confirmado. Por favor, revisa tu bandeja de entrada.';
      emailAlert.classList.remove('alert-success');
      emailAlert.classList.add('alert-warning');
      const newResendLink = document.createElement('a');
      newResendLink.href = '#';
      newResendLink.className = 'resend-link';
      newResendLink.textContent = 'Reenviar confirmación';
      emailAlert.appendChild(document.createElement('br'));
      emailAlert.appendChild(newResendLink);
    }, 5000);
  });

  // Real-time password strength checker
  const newPasswordInput = document.querySelector('#new-password');
  const passwordStrength = document.createElement('div');
  passwordStrength.className = 'password-strength';
  newPasswordInput.parentNode.insertBefore(passwordStrength, newPasswordInput.nextSibling);

  newPasswordInput.addEventListener('input', () => {
    const password = newPasswordInput.value;
    let strength = 0;
    if (password.match(/[a-z]+/)) strength += 1;
    if (password.match(/[A-Z]+/)) strength += 1;
    if (password.match(/[0-9]+/)) strength += 1;
    if (password.match(/[$@#&!]+/)) strength += 1;

    switch (strength) {
      case 0:
        passwordStrength.textContent = 'Muy débil';
        passwordStrength.style.color = 'red';
        break;
      case 1:
        passwordStrength.textContent = 'Débil';
        passwordStrength.style.color = 'orange';
        break;
      case 2:
        passwordStrength.textContent = 'Medio';
        passwordStrength.style.color = 'yellow';
        break;
      case 3:
        passwordStrength.textContent = 'Fuerte';
        passwordStrength.style.color = 'lime';
        break;
      case 4:
        passwordStrength.textContent = 'Muy fuerte';
        passwordStrength.style.color = 'green';
        break;
    }
  });
});
