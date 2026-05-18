// app.js
// Módulo encargado de la interacción con el usuario.

import {
  registrarDestino,
  obtenerItinerario,
  calcularTotal,
  eliminarViaje,
  calcularDescuento,
} from "./viajes.js";

const formulario = document.querySelector("#formViaje");
const listaViajes = document.querySelector("#listaViajes");
const resumen = document.querySelector("#resumen");

const formatoMoneda = new Intl.NumberFormat("es-MX", {
  style: "currency",
  currency: "USD",
});

const formatearFecha = (fecha) => {
  const fechaLocal = new Date(`${fecha}T00:00:00`);

  return fechaLocal.toLocaleDateString("es-MX", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
};

const mostrarItinerario = () => {
  const viajes = obtenerItinerario();

  listaViajes.innerHTML = "";

  if (viajes.length === 0) {
    resumen.textContent = "No hay viajes registrados todavía.";
    return;
  }

  resumen.textContent = `Tienes ${viajes.length} viaje(s) registrado(s). Total estimado: ${formatoMoneda.format(calcularTotal())}`;

  viajes.forEach(({ id, destino, fecha, transporte, alojamiento, personas, costo }) => {
    const descuento = calcularDescuento(personas) * 100;

    const tarjeta = document.createElement("article");
    tarjeta.classList.add("tarjeta-viaje");

    tarjeta.innerHTML = `
      <div>
        <h3>${destino}</h3>
        <p><strong>Fecha:</strong> ${formatearFecha(fecha)}</p>
        <p><strong>Transporte:</strong> ${transporte}</p>
        <p><strong>Alojamiento:</strong> ${alojamiento}</p>
        <p><strong>Personas:</strong> ${personas}</p>
        <p><strong>Descuento:</strong> ${descuento}%</p>
        <p class="costo"><strong>Costo estimado:</strong> ${formatoMoneda.format(costo)}</p>
      </div>
      <button class="btn-eliminar" data-id="${id}">Eliminar</button>
    `;

    listaViajes.appendChild(tarjeta);
  });
};

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const datosViaje = {
    destino: document.querySelector("#destino").value,
    fecha: document.querySelector("#fecha").value,
    transporte: document.querySelector("#transporte").value,
    alojamiento: document.querySelector("#alojamiento").value,
    personas: Number(document.querySelector("#personas").value),
  };

  registrarDestino(datosViaje);
  mostrarItinerario();
  formulario.reset();
  document.querySelector("#personas").value = 1;
});

listaViajes.addEventListener("click", (evento) => {
  if (evento.target.classList.contains("btn-eliminar")) {
    eliminarViaje(evento.target.dataset.id);
    mostrarItinerario();
  }
});

mostrarItinerario();
