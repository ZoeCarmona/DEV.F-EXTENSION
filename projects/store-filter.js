const productos = [
  { nombre: "Teclado Mecanico", precio: 85, categoria: "Perifericos" },
  { nombre: "Mouse Inalambrico", precio: 45, categoria: "Perifericos" },
  { nombre: "Monitor 24\"", precio: 180, categoria: "Pantallas" },
  { nombre: "Audifonos Gamer", precio: 60, categoria: "Audio" },
  { nombre: "Base para Laptop", precio: 30, categoria: "Accesorios" }
];

const baratos = productos.filter(p => p.precio < 100);

const ordenados = baratos.sort((a, b) => a.nombre.localeCompare(b.nombre));

const nombres = ordenados.map(p => p.nombre);

const totalBaratos = baratos.reduce((acc, p) => acc + p.precio, 0);

console.log(baratos);
console.log(ordenados);
console.log(nombres);
console.log(totalBaratos);