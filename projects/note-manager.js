const fs = require('fs');
const FILE_NAME = 'notas.json';

function cargarNotas() {
  if (!fs.existsSync(FILE_NAME)) {
    return [];
  }
  const data = fs.readFileSync(FILE_NAME, 'utf8');
  return JSON.parse(data);
}

function guardarNotas(notas) {
  fs.writeFileSync(FILE_NAME, JSON.stringify(notas, null, 2));
}

function crearNota(titulo, contenido) {
  const notas = cargarNotas();
  notas.push({ titulo, contenido });
  guardarNotas(notas);
}

function listarNotas() {
  const notas = cargarNotas();
  console.log(notas);
}

function eliminarNota(titulo) {
  let notas = cargarNotas();
  notas = notas.filter(n => n.titulo !== titulo);
  guardarNotas(notas);
}

crearNota("Compras", "Comprar leche y pan");
crearNota("Estudio", "Practicar Node.js");
listarNotas();
eliminarNota("Compras");
listarNotas();