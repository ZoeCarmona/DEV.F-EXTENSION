document.getElementById('registroForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const nombre = document.getElementById('nombre').value.trim();
  const correo = document.getElementById('correo').value.trim();
  const telefono = document.getElementById('telefono').value.trim();
  const intereses = document.querySelectorAll('input[name="intereses"]:checked');
  const horario = document.querySelector('input[name="horario"]:checked');
  
  let errores = [];

  if (nombre.length < 3) {
    errores.push("El nombre debe tener al menos 3 caracteres.");
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(correo)) {
    errores.push("Por favor, introduce un correo electrónico válido.");
  }

  if (telefono.length !== 10 || isNaN(telefono)) {
    errores.push("El teléfono debe contener exactamente 10 dígitos.");
  }

  if (intereses.length === 0) {
    errores.push("Selecciona al menos un interés.");
  }

  if (!horario) {
    errores.push("Debes seleccionar un horario preferido.");
  }

  const contenedorMensajes = document.getElementById('mensajes-error');
  contenedorMensajes.innerHTML = '';

  if (errores.length > 0) {
    errores.forEach(error => {
      const p = document.createElement('p');
      p.style.color = 'red';
      p.textContent = error;
      contenedorMensajes.appendChild(p);
    });
  } else {
    alert("¡Registro exitoso!");
    this.submit();
  }
});