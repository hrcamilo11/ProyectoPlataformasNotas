# ProyectoPlataformasNotas

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

# Estructura Inicial de la Página Web

Este documento describe la estructura inicial de la página web para la plataforma en línea de apuntes universitarios, detallando las secciones clave que componen cada página y su funcionalidad.

## Homepage

### Header (Encabezado)
- **Logo**: Representa el logotipo del sitio web, ubicado en la parte superior izquierda del encabezado.
- **NavBar**: Barra de navegación que incluye enlaces a otras secciones o páginas del sitio.
- **Login**: Botón para que los usuarios puedan iniciar sesión en la plataforma.
- **Flags**: Selección de banderas que permiten cambiar el idioma del sitio.

### Body (Cuerpo de la Página)
- **Sliders**: Carrusel de imágenes o contenido deslizante.
  - **Slider Auto**: Los sliders cambian automáticamente después de un intervalo de tiempo.
- **Didactic (Sección Didáctica)**:
  - **Grid**: Área organizada en cuadrícula para presentar información de manera estructurada.
    - **Info Resource**: Recursos informativos o educativos presentados en la cuadrícula.
- **About Us (Acerca de Nosotros)**:
  - **Text Info**: Sección de texto que proporciona información sobre el propósito del sitio web.

### Footer (Pie de Página)
- **Logo**: Repetición del logotipo en la parte inferior de la página.
- **Text Label**: Etiquetas de texto o enlaces adicionales para términos de servicio, políticas de privacidad, o información de contacto.

## Login

### Header (Encabezado)
- **Logo**: El logotipo del sitio web, ubicado en la parte superior izquierda del encabezado.
- **Flags**: Selección de banderas para cambiar el idioma del sitio.

### Body (Cuerpo de la Página)
- **Login**:
  - **Login Form**: Formulario de inicio de sesión donde los usuarios ingresan sus credenciales.
  - **Login Button**: Botón para enviar las credenciales y autenticar al usuario en el sistema.
- **Links (Enlaces)**:
  - **Remember Pswd**: Enlace para recuperar o recordar la contraseña en caso de que el usuario la haya olvidado.
  - **Register**: Enlace para registrarse en el sitio si el usuario no tiene una cuenta.

### Footer (Pie de Página)
- **Logo**: Repetición del logotipo en la parte inferior de la página.
- **Text Label**: Etiquetas de texto o enlaces adicionales, relacionados con términos de servicio, políticas de privacidad o información de contacto.

## Recovery Password

### Header (Encabezado)
- **Logo**: El logotipo del sitio web, ubicado en la parte superior izquierda del encabezado.
- **Flags**: Selección de banderas para cambiar el idioma del sitio.

### Body (Cuerpo de la Página)
- **Recovery**:
  - **Text**: Texto informativo que explica el proceso de recuperación de la contraseña.
  - **Email Input**: Campo de entrada donde el usuario ingresa su dirección de correo electrónico para recibir instrucciones de recuperación.
  - **Recovery Button**: Botón que envía un enlace o instrucciones al correo electrónico para restablecer la contraseña.

### Footer (Pie de Página)
- **Logo**: Repetición del logotipo del sitio en la parte inferior de la página.
- **Text Label**: Etiquetas de texto o enlaces adicionales relacionados con términos de servicio, políticas de privacidad o información de contacto.

## Register

### Header (Encabezado)
- **Logo**: Ubicado en la parte superior izquierda, destinado a mostrar el logotipo de la compañía o sitio web.
- **Flags**: Utilizado para cambiar el idioma del sitio web.

### Body (Cuerpo de la Página)
- **Login**:
  - **Login Form**: Espacio para que los usuarios ingresen sus credenciales de inicio de sesión.
  - **Register Button**: Botón para enviar el formulario de registro.
- **Links (Enlaces)**: Contiene enlaces de interés para acceder a otras partes del sitio o para opciones como "Olvidé mi contraseña".

### Footer (Pie de Página)
- **Logo**: Repetición del logotipo en la parte inferior de la página.
- **Text Label**: Etiqueta de texto utilizada para información adicional, como derechos de autor, términos y condiciones, o cualquier otro mensaje relevante.

## Búsqueda Avanzada

### Header (Encabezado)
- **Logo**: El logotipo del sitio web, ubicado en la parte superior izquierda del encabezado.
- **NavBar**: Barra de navegación al lado del logo, para acceder a diferentes secciones del sitio.
- **Flags**: Utilizado para cambiar el idioma del sitio web.

### Body (Cuerpo de la Página)
- **Main**:
  - **Resource**: Espacio dedicado a mostrar o seleccionar recursos específicos para búsqueda o filtrado.
  - **Search**: Área para realizar la búsqueda avanzada según los criterios seleccionados.
- **Filtered Results**:
  - **Grid**: Muestra los resultados de búsqueda en una cuadrícula visual.
  - **Docs**: Sección destinada a mostrar documentos o detalles específicos de los resultados filtrados.

### Footer (Pie de Página)
- **Logo**: Repetición del logotipo en la parte inferior de la página.
- **Text Label**: Etiquetas de texto o enlaces adicionales para términos de servicio, políticas de privacidad, o información de contacto.

## Universidades

### Header (Encabezado)
- **Logo**: Ubicado en la parte superior izquierda, destinado a mostrar el logotipo del sitio web.
- **NavBar**: Barra de navegación debajo del logo, para acceder a diferentes secciones del sitio web.
- **Flags**: Utilizado para cambiar el idioma del sitio web.

### Body (Cuerpo de la Página)
- **Main**: Contiene un elemento principal:
  - **Resource**: Espacio dedicado a mostrar o seleccionar recursos relacionados con universidades, como información general o herramientas de búsqueda.
- **Colleges (Colegios/Facultades)**: Sección a la derecha del área principal, dividida en dos partes:
  - **Grid**: Muestra una lista de universidades o facultades en una cuadrícula visual.
  - **Links Colleges**: Área dedicada a mostrar enlaces directos a diferentes universidades o sus respectivas facultades.

### Footer (Pie de Página)
- **Logo**: Repetición del logotipo en la parte inferior de la página.
- **Text Label**: Etiquetas de texto o enlaces adicionales para términos de servicio, políticas de privacidad, o información de contacto.
