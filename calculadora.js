// Esperamos a que la página cargue
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("calcularBtn");
  btn.addEventListener("click", calcularPlanes);
});

function calcularPlanes() {
  // --- Obtener valores seleccionados ---
  const objetivo = document.getElementById("objetivo").value;
  const frecuencia = parseInt(document.getElementById("frecuencia").value);
  const extra = document.querySelector('input[name="extra"]:checked')?.value || "ninguno";

  // --- Precio base según frecuencia ---
  let precioBase = 0;
  if (frecuencia <= 2) precioBase = 700;
  else if (frecuencia <= 4) precioBase = 1000;
  else precioBase = 1400;

  // --- Precio extra ---
  let precioExtra = 0;
  let extraTexto = "Ninguno";
  switch(extra) {
    case "nutricionista":
      precioExtra = 450;
      extraTexto = "Nutricionista";
      break;
    case "clases_especiales":
      precioExtra = 500;
      extraTexto = "Clases especiales";
      break;
    case "evaluacion":
      precioExtra = 300;
      extraTexto = "Evaluación y seguimiento";
      break;
    default:
      precioExtra = 0;
      extraTexto = "Ninguno";
  }

  // --- Total mensual ---
  const totalMes = precioBase + precioExtra;

  // --- Planes ---
  const planes = [
    { nombre: "Plan 3 meses", meses: 3 },
    { nombre: "Plan 6 meses", meses: 6 },
    { nombre: "Plan 1 año", meses: 12 }
  ];

  // --- Generar HTML ---
  let resultadoHTML = `<h3>Planes sugeridos</h3>`;
  planes.forEach(plan => {
    let totalPlan = totalMes * plan.meses;
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

  // --- Mostrar resultados ---
  const resultadoDiv = document.getElementById("resultado");
  resultadoDiv.innerHTML = resultadoHTML;
  resultadoDiv.style.display = "flex";
  resultadoDiv.style.flexDirection = "column";
}

// --- Función para mostrar objetivo bonito ---
function formatearObjetivo(obj) {
  switch(obj) {
    case "perder_peso": return "Perder peso";
    case "ganar_musculo": return "Ganar músculo";
    case "mantener": return "Mantenerme en forma";
    case "relajacion": return "Relajación y bienestar";
    default: return obj;
  }
}
