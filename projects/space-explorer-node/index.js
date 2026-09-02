const { mostrarPlanetas } = require('./planets');

console.log("Iniciando computadora de abordo...\n");
setTimeout(() => {
  mostrarPlanetas();
}, 1000);