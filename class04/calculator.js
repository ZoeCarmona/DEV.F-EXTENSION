// Descripción: Crea una calculadora simple que permita realizar operaciones matemáticas básicas: suma, resta, multiplicación y división.

// Requisitos:

// 1.Define cuatro funciones: sumar, restar, multiplicar, y dividir, cada una de las cuales toma dos parámetros y devuelve el resultado de la operación correspondiente.
// 2. En el programa principal, llama a cada función con diferentes pares de números y muestra el resultado en la consola.

let addition = (a,b) => a + b
let subtraction = (a,b) => a - b
let multiplication = (a,b) => a * b

function division(a,b){
    if (b === 0)
        return `second value cannot be 0, please switch values`
    return a / b
}

console.log(`The addition is ${addition(5,5)}`)
console.log(`The subtraction is ${subtraction(5,5)}`)
console.log(`The multiplication is ${multiplication(5,5)}`)
console.log(`The division is ${division(5,0)}`)
