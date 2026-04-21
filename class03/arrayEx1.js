// 1. Crear un Array: Crea un array llamado colores con al menos cuatro colores diferentes.

let colores = ['rojo', 'verde', 'azul', 'amarillo'];

// 2.- Imprimir el Segundo Color: Imprime el segundo color del array.
console.log(colores[1]); 

// 3.- Modificar el Tercer Color: Cambia el tercer color a otro color de tu elección.
colores[2] = 'colorImaginario'
console.log(colores)

// 4.- Añadir un Nuevo Color: Añade un nuevo color al final del array.
colores.push('nuevoColor')
console.log(colores)

// 5.- Eliminar el Primer Color: Elimina el primer color del array y muestra el resultado.
colores.shift()
console.log(colores)