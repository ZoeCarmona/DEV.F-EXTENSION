const formulario = document.getElementById("formularioComentario");
const campoComentario = document.getElementById("comentario");
const listaComentarios = document.getElementById("listaComentarios");

formulario.addEventListener("submit", function(evento) {
  evento.preventDefault();

  const textoComentario = campoComentario.value.trim();

  if (textoComentario === "") {
    alert("Por favor, escribe un comentario antes de agregarlo.");
    return;
  }

  const fechaActual = new Date();

  const fechaFormateada = fechaActual.toLocaleString("es-MX", {
    dateStyle: "medium",
    timeStyle: "short"
  });

  const nuevoComentario = document.createElement("article");
  nuevoComentario.classList.add("comentario");

  const texto = document.createElement("p");
  texto.classList.add("texto-comentario");
  texto.textContent = textoComentario;

  const fecha = document.createElement("p");
  fecha.classList.add("fecha");
  fecha.textContent = `Publicado el: ${fechaFormateada}`;

  const botonEliminar = document.createElement("button");
  botonEliminar.textContent = "Eliminar";
  botonEliminar.classList.add("btn-eliminar");

  botonEliminar.addEventListener("click", function() {
    nuevoComentario.remove();
  });

  nuevoComentario.appendChild(texto);
  nuevoComentario.appendChild(fecha);
  nuevoComentario.appendChild(botonEliminar);

  listaComentarios.appendChild(nuevoComentario);

  campoComentario.value = "";
});