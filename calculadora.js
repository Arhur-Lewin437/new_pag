// --- Obtener los valores seleccionados por el usuario ---
// .value nos da el valor que el usuario eligió en el select o input (<input> es un elemento que permite al usuario ingresar datos en una página web. Es como un cajón donde el usuario puede escribir, marcar, elegir o seleccionar algo. manipulacion del DOM)
const objetivo = document.getElementById("objetivo").value; // Lee el objetivo de salud elegido
const frecuencia = parseInt(document.getElementById("frecuencia").value); 
// parseInt convierte el valor de texto del input número en un número entero
const extra = document.querySelector('input[name="extra"]:checked')?.value || "ninguno"; 
// Selecciona el radio button que está marcado (checked)(checked es un atributo que se usa con inputs de tipo radio o checkbox para saber si están seleccionados o marcados.) dentro de los extras.
// Si no hay ninguno seleccionado, usa "ninguno" por defecto.
// El signo ? es opcional chaining, evita errores si no hay nada seleccionado.

// --- Calcular precio base según frecuencia de asistencia ---
// Este precio cambia dependiendo de cuántas veces a la semana se vaya al centro
let precioBase = 0;
if (frecuencia <= 2) precioBase = 700;  // Hasta 2 veces por semana
else if (frecuencia <= 4) precioBase = 1000; // Entre 3 y 4 veces
else precioBase = 1400; // Más de 4 veces

// --- Calcular precio de los extras ---
// Dependiendo del extra que eligió el usuario, se suma un costo adicional
let precioExtra = 0;
let extraTexto = "Ninguno"; // Texto que se mostrará en la tarjeta de resultado
switch(extra) {
  case "nutricionista":
    precioExtra = 450; // Precio del extra nutricionista
    extraTexto = "Nutricionista"; // Nombre legible para mostrar
    break;
  case "clases_especiales":
    precioExtra = 500;
    extraTexto = "Clases especiales";
    break;
  case "evaluacion":
    precioExtra = 300;
    extraTexto = "Evaluación y seguimiento";
    break;
  case "ninguno":
    precioExtra = 0;
    extraTexto = "Ninguno";
    break;
}

// --- Calcular el total mensual ---
// Suma del precio base + cualquier extra
const totalMes = precioBase + precioExtra;

// --- Definir los planes disponibles ---
// Cada plan tiene un nombre y la cantidad de meses que dura
const planes = [
  { nombre: "Plan 3 meses", meses: 3 },
  { nombre: "Plan 6 meses", meses: 6 },
  { nombre: "Plan 1 año", meses: 12 }
];

// --- Construir el HTML que se mostrará en pantalla ---
// Creamos un string donde iremos agregando el HTML de cada plan
let resultadoHTML = `<h3>Planes sugeridos</h3>`;

// Recorremos todos los planes y generamos la tarjeta de cada uno
planes.forEach(plan => {
  // Calcula el precio total para el plan multiplicando el mensual por los meses
  let totalPlan = totalMes * plan.meses;

  // Añadimos el HTML de cada plan al string resultadoHTML usando template literals
  resultadoHTML += `
    <div class="plan">
      <h4>${plan.nombre}</h4>
      <p><strong>Objetivo:</strong> ${formatearObjetivo(objetivo)}</p>
      <p><strong>Asistencias por semana:</strong> ${frecuencia}</p>
      <p><strong>Extras incluidos:</strong> ${extraTexto}</p>
      <p><strong>Duración:</strong> ${plan.meses} meses</p>
      <p><strong>Precio estimado:</strong> $${totalPlan} MXN</p>
      <button onclick="alert('Has seleccionado ${plan.nombre}')">Adquirir</button>
    </div>
    <hr>
  `;
});

// --- Insertar el HTML generado en la página ---
// Obtenemos el div donde vamos a mostrar los resultados
const resultadoDiv = document.getElementById("resultado");
resultadoDiv.innerHTML = resultadoHTML; // Ponemos el HTML dentro del div
resultadoDiv.style.display = "flex"; // Mostramos el div en pantalla
resultadoDiv.style.flexDirection = "column"; // Los planes se muestran uno debajo del otro

// --- Función para mostrar el objetivo de forma legible ---
// La función convierte los valores internos como "perder_peso" a texto bonito
function formatearObjetivo(obj) {
  switch(obj) {
    case "perder_peso": return "Perder peso";
    case "ganar_musculo": return "Ganar músculo";
    case "mantener": return "Mantenerme en forma";
    case "relajacion": return "Relajación y bienestar";
    default: return obj; // Si no coincide con ningún caso, devuelve el valor tal cual
  }
}


