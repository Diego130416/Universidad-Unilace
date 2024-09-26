// JavaScript Document
function searchAlumno() {
  const searchValue = document.getElementById('search').value.toLowerCase();
  fetch('alumnos.xml')
    .then(response => response.text())
    .then(data => {
      const parser = new DOMParser();
      const xml = parser.parseFromString(data, 'application/xml');
      const alumnos = xml.getElementsByTagName('alumno');
      let result = '<tr><th>Nombre</th><th>Número de Control</th><th>Correo</th><th>Semestre</th><th>Carrera</th></tr>';
      for (let i = 0; i < alumnos.length; i++) {
        const nombre = alumnos[i].getElementsByTagName('nombre')[0].textContent.toLowerCase();
        const numero_control = alumnos[i].getElementsByTagName('numero_control')[0].textContent.toLowerCase();
        if (nombre.includes(searchValue) || numero_control.includes(searchValue)) {
          result += `<tr>
            <td>${alumnos[i].getElementsByTagName('nombre')[0].textContent}</td>
            <td>${alumnos[i].getElementsByTagName('numero_control')[0].textContent}</td>
            <td>${alumnos[i].getElementsByTagName('correo')[0].textContent}</td>
            <td>${alumnos[i].getElementsByTagName('semestre')[0].textContent}</td>
            <td>${alumnos[i].getElementsByTagName('carrera')[0].textContent}</td>
          </tr>`;
        }
      }
      document.getElementById('alumnosTable').innerHTML = result;
    });
}
