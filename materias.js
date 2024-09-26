// JavaScript Document
function searchMateria() {
  const searchValue = document.getElementById('search').value.toLowerCase();
  fetch('materias.json')
    .then(response => response.json())
    .then(data => {
      const materias = data.materias;
      let result = '<tr><th>Nombre</th><th>Código</th><th>Créditos</th><th>Profesor</th><th>Horario</th></tr>';
      for (let i = 0; i < materias.length; i++) {
        const nombre = materias[i].nombre.toLowerCase();
        const codigo = materias[i].codigo.toLowerCase();
        if (nombre.includes(searchValue) || codigo.includes(searchValue)) {
          result += `<tr>
            <td>${materias[i].nombre}</td>
            <td>${materias[i].codigo}</td>
            <td>${materias[i].creditos}</td>
            <td>${materias[i].profesor}</td>
            <td>${materias[i].horario}</td>
          </tr>`;
        }
      }
      document.getElementById('materiasTable').innerHTML = result;
    });
}
