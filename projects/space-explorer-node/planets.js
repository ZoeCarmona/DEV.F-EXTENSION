const planetasFavoritos = [
  { nombre: "Marte", tipo: "Rocoso", lunas: 2, habitado: false },
  { nombre: "Kepler-186f", tipo: "Exoplaneta", lunas: 0, habitado: true },
  { nombre: "Europa", tipo: "Satélite / Océano Subsuperficial", lunas: 0, habitado: false },
  { nombre: "Saturno", tipo: "Gigante Gaseoso", lunas: 146, habitado: false }
];

function mostrarPlanetas() {
  console.log("🌌 BITÁCORA ESTELAR: Registro de Planetas Favoritos 🌌\n");
  planetasFavoritos.forEach((planeta, index) => {
    console.log(`[${index + 1}] ${planeta.nombre}`);
    console.log(`    - Clasificación: ${planeta.tipo}`);
    console.log(`    - Satélites naturales: ${planeta.lunas}`);
    console.log(`    - ¿Vida detectada?: ${planeta.habitado ? 'Sí 🚀' : 'No ❌'}`);
    console.log('--------------------------------------------------');
  });
}

module.exports = { planetasFavoritos, mostrarPlanetas };