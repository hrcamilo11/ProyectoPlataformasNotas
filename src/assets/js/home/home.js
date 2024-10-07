// Get all tab buttons and tab contents
const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

// Add event listener to each tab button
tabButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        // Remove active class from all tab buttons and contents
        tabButtons.forEach((btn) => btn.classList.remove('active'));
        tabContents.forEach((content) => content.classList.remove('active'));

        // Add active class to the clicked tab button and its corresponding content
        button.classList.add('active');
        const tabId = button.getAttribute('data-tab');
        const tabContent = document.getElementById(tabId);
        tabContent.classList.add('active');

        // Fetch data from API based on the active tab
        const apiUrl = getApiUrl(tabId);
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                // Render the data in the tab content
                renderTabContent(tabContent, data);
            })
            .catch((error) => console.error(error));
    });
});

// Function to get API URL based on tab ID
function getApiUrl(tabId) {
    switch (tabId) {
        case 'universidades':
            return 'https://retoolapi.dev/ZcmJpK/universidades';
        case 'documentos':
            return 'https://retoolapi.dev/T1JTJv/documentos';
        case 'examenes':
            return 'https://retoolapi.dev/kEDweS/examenes';
        case 'libros':
            return 'https://retoolapi.dev/F2weeg/libros';
        default:
            return null;
    }
}

function renderTabContent(tabContent, data) {
  let html = '';
  switch (tabContent.id) {
    case 'universidades':
      data.slice(0, 6).forEach((universidad) => {
        html += `
          <div class="item-card">
            <img src="https://via.placeholder.com/100x100?text=University" alt="University logo">
            <h3>${universidad.nombre}</h3>
          </div>
        `;
      });
      break;
    case 'documentos':
      data.slice(0, 3).forEach((documento) => {
        html += `
          <div class="item-card">
            <img src="https://via.placeholder.com/100x100?text=Document" alt="Document icon">
            <h3>${documento.titulo}</h3>
            <p>Autor: ${documento.autor}</p>
            <p>Materia: ${documento.materia}</p>
            <p>Descripción: ${documento.descripcion}</p>
            <p>Fecha de subida: ${documento.fecha_subida}</p>
            <p>Calificación promedio: ${documento.calificacion_promedio}</p>
          </div>
        `;
      });
      break;
    case 'libros':
      data.slice(0, 3).forEach((libro) => {
        html += `
          <div class="item-card">
            <img src="https://via.placeholder.com/100x100?text=Book" alt="Book cover">
            <h3>${libro.nombre}</h3>
            <p>Autor: ${libro.autor}</p>
          </div>
        `;
      });
      break;
    case 'examenes':
      data.slice(0, 3).forEach((examen) => {
        html += `
          <div class="item-card">
            <img src="https://via.placeholder.com/100x100?text=Exam" alt="Exam icon">
            <h3>${examen.tema}</h3>
            <p>Curso: ${examen.curso}</p>
            <p>Tipo de examen: ${examen.tipo_examen}</p>
            <p>Nota: ${examen.nota}</p>
          </div>
        `;
      });
      break;
  }
  tabContent.innerHTML = html;
}
