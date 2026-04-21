// Problema: Clasificación de Frutas
// Imagina que tienes un programa que clasifica las frutas según su tipo y cuenta cuántas hay de cada tipo.

// Instrucciones para resolver el problema:
// Declara un arreglo llamado frutas con varios tipos de frutas.
// Crea un objeto para almacenar la cantidad de cada tipo de fruta.
// Usa un ciclo for/while para recorrer el arreglo y contar las frutas.
// Imprime en la consola la cantidad de cada tipo de fruta.
// Opcional: intenta implementar la solución con el otro ciclo también (for/while).

// function fruits(){
//     let fruits = ['apple', 'banana', 'pear', 'watermelon', 'kiwi', 'strawberry']
//     let contFruit = {}

//     for (let fruit of fruits){
//         if(contFruit[fruit]){
//             contFruit++
//         } else {
//             contFruit[fruit] = 1
//         }
//     }

//     return contFruit
// }

function fruits() {
    let fruits = ['apple', 'banana', 'pear', 'watermelon', 'kiwi', 'strawberry'];
    let contFruit = {};

    while (fruits.length > 0) {
        let frutaActual = fruits[0];

        if (contFruit[frutaActual]) {
            contFruit[frutaActual]++;
        } else {
            contFruit[frutaActual] = 1;
        }

        fruits.shift();
    }

    return contFruit;
}

console.log(fruits());
