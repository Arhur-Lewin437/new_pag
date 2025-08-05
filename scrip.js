const form = document.getElementById('contacto-form');
const correoInput = document.getElementById('correo');
const mensajeInput = document.getElementById('mensaje');
const errorDiv = document.getElementById('mensaje-error');
const exitoDiv = document.getElementById('mensaje-exito');

form.addEventListener('submit', function(e) {
  e.preventDefault(); // Evita que el formulario se envíe

  // Limpiar mensajes
  errorDiv.textContent = '';
  exitoDiv.textContent = '';

  const correo = correoInput.value.trim();
  const mensaje = mensajeInput.value.trim();

  // Validar correo con expresión regular simple
  const correoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo);

  if (!correoValido) {
    errorDiv.textContent = 'Por favor ingresa un correo válido.';
    correoInput.focus();
    return;
  }

  if (mensaje === '') {
    errorDiv.textContent = 'El mensaje no puede estar vacío.';
    mensajeInput.focus();
    return;
  }

  // Si todo está correcto:
  exitoDiv.textContent = 'Mensaje enviado con éxito';
  form.reset(); // Limpia el formulario
});

/* inserta el año automaticamente en el pie de pagina*/

const yearSpan = document.getElementById('year');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

