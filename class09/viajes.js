// viajes.js
// Módulo encargado de la lógica de gestión de viajes.

export const destinos = [];

const costosDestino = {
  Paris: 500,
  Londres: 400,
  "New York": 600,
  Tokyo: 750,
  "Cancún": 350,
};

const costosTransporte = {
  Avión: 200,
  Tren: 100,
  Autobús: 60,
  Barco: 150,
};

const costosAlojamiento = {
  Hotel: 250,
  Hostal: 120,
  Departamento: 180,
  Resort: 400,
};

export const calcularDescuento = (personas) => {
  if (personas >= 6) return 0.15;
  if (personas >= 3) return 0.10;
  return 0;
};

export const calcularCosto = (destino, transporte, alojamiento, personas) => {
  const costoDestino = costosDestino[destino] || 0;
  const costoTransporte = costosTransporte[transporte] || 0;
  const costoAlojamiento = costosAlojamiento[alojamiento] || 0;

  const subtotalPorPersona = costoDestino + costoTransporte + costoAlojamiento;
  const subtotal = subtotalPorPersona * personas;
  const descuento = subtotal * calcularDescuento(personas);

  return subtotal - descuento;
};

export const registrarDestino = ({ destino, fecha, transporte, alojamiento, personas }) => {
  const nuevoViaje = {
    id: crypto.randomUUID(),
    destino,
    fecha,
    transporte,
    alojamiento,
    personas,
    costo: calcularCosto(destino, transporte, alojamiento, personas),
  };

  destinos.push(nuevoViaje);
  return nuevoViaje;
};

export const obtenerItinerario = () => destinos;

export const calcularTotal = () =>
  destinos.reduce((total, viaje) => total + viaje.costo, 0);

export const eliminarViaje = (id) => {
  const indice = destinos.findIndex((viaje) => viaje.id === id);

  if (indice !== -1) {
    destinos.splice(indice, 1);
  }
};
