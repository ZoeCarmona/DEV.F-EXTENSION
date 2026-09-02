let biblioteca = [
  { titulo: "Cien años de soledad", autor: "Gabriel García Márquez", genero: "Novela", disponible: true },
  { titulo: "1984", autor: "George Orwell", genero: "Ciencia Ficción", disponible: false }
];

function leerDatos(callback) {
  setTimeout(() => {
    callback(null, biblioteca);
  }, 500);
}

function escribirDatos(nuevosDatos, callback) {
  setTimeout(() => {
    biblioteca = nuevosDatos;
    callback(null, "Datos actualizados con éxito");
  }, 500);
}

function consultarLibros() {
  leerDatos((error, datos) => {
    console.log(datos);
  });
}

function agregarLibro(titulo, autor, genero) {
  leerDatos((error, datos) => {
    const nuevoLibro = { titulo, autor, genero, disponible: true };
    datos.push(nuevoLibro);
    escribirDatos(datos, (err, mensaje) => {
      console.log(mensaje);
    });
  });
}

function actualizarDisponibilidad(titulo, estado) {
  leerDatos((error, datos) => {
    const libro = datos.find(l => l.titulo === titulo);
    if (libro) {
      libro.disponible = estado;
      escribirDatos(datos, (err, mensaje) => {
        console.log(mensaje);
      });
    }
  });
}

consultarLibros();
agregarLibro("El Principito", "Antoine de Saint-Exupéry", "Fábula");
actualizarDisponibilidad("1984", true);