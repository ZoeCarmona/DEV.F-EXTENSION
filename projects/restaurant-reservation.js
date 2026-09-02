const MESAS_DISPONIBLES = 5;

function verificarDisponibilidad(mesasSolicitadas) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (mesasSolicitadas <= MESAS_DISPONIBLES) {
        resolve("Mesas disponibles");
      } else {
        reject("Lo sentimos, no hay suficientes mesas disponibles.");
      }
    }, 1000);
  });
}

function enviarConfirmacionReserva(nombreCliente) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const exito = Math.random() > 0.3;
      if (exito) {
        resolve(`Correo de confirmación enviado a ${nombreCliente}.`);
      } else {
        reject("Error al enviar el correo de confirmación.");
      }
    }, 1000);
  });
}

async function hacerReserva(nombreCliente, mesasSolicitadas) {
  try {
    const disponibilidad = await verificarDisponibilidad(mesasSolicitadas);
    console.log(disponibilidad);
    const confirmacion = await enviarConfirmacionReserva(nombreCliente);
    console.log(confirmacion);
  } catch (error) {
    console.error("Error en la reserva:", error);
  }
}

hacerReserva("Carlos", 3);