const { z } = Zod;

const schemaRegistro = z.object({
  nombre: z.string().min(2, "El nombre debe tener al menos 2 caracteres."),
  correo: z.string().email("Por favor, introduce un correo electrónico válido."),
  contrasena: z.string().min(6, "La contraseña debe tener al menos 6 caracteres.")
});

document.getElementById('registroForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const formData = {
    nombre: document.getElementById('nombre').value.trim(),
    correo: document.getElementById('correo').value.trim(),
    contrasena: document.getElementById('contrasena').value
  };

  const resultado = schemaRegistro.safeParse(formData);
  const contenedorErrores = document.getElementById('errores');
  contenedorErrores.innerHTML = '';

  if (!resultado.success) {
    resultado.error.errors.forEach(error => {
      const p = document.createElement('p');
      p.style.color = 'red';
      p.textContent = error.message;
      contenedorErrores.appendChild(p);
    });
  } else {
    alert("¡Registro exitoso! Datos validados correctamente.");
    this.submit();
  }
});