function toggleInfo(button) {
  // Obtenemos el siguiente elemento hermano justo después del botón
  // En este caso, es el <div class="info"> que queremos mostrar u ocultar
  const info = button.nextElementSibling;

  // Verificamos si ese elemento tiene el atributo 'hidden' (si está oculto)
  const isHidden = info.hasAttribute('hidden');

  // Si el elemento está oculto (tiene 'hidden')
  if (isHidden) {
    // Lo mostramos quitando el atributo 'hidden'
    info.removeAttribute('hidden');

    // Cambiamos el texto del botón para que diga "Ocultar"
    button.textContent = "Ocultar";

    // Actualizamos el atributo aria-expanded para accesibilidad,
    // indicando que el contenido ahora está expandido (visible)
    button.setAttribute('aria-expanded', 'true');

  } else {
    // Si el elemento NO está oculto (no tiene 'hidden')

    // Lo ocultamos agregando el atributo 'hidden'
    info.setAttribute('hidden', '');

    // Cambiamos el texto del botón para que diga "Ver mas"
    button.textContent = "Ver más";

    // Actualizamos aria-expanded indicando que el contenido está contraído (oculto)
    button.setAttribute('aria-expanded', 'false');
  }
}
