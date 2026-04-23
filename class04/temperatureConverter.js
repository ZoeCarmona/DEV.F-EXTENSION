// Descripción: Crea una función que convierta temperaturas entre grados Celsius y Fahrenheit.

// Requisitos:

// 1.Define dos funciones: celsiusAFahrenheit y fahrenheitACelsius.
// 2.celsiusAFahrenheit debe tomar una temperatura en Celsius y devolver la temperatura equivalente en Fahrenheit.
// 3.fahrenheitACelsius debe tomar una temperatura en Fahrenheit y devolver la temperatura equivalente en Celsius.
// 4.En el programa principal, llama a ambas funciones con ejemplos de temperaturas y muestra los resultados en la consola.

// Using (°C x 9/5) + 32 =°F
let celsiusToFahrenheit = (temp) => (temp * 9/5) + 32
// Using (°F - 32) x 5/9 =°C
let fahrenheitToCelsius = (temp) => (temp -32) * 5/9

console.log(celsiusToFahrenheit(20))
console.log(fahrenheitToCelsius(68))