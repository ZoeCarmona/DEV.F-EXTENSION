// 2. Suma de Pares: Modifica el ciclo para que solo sume los números pares del 1 al 20 y muestre el resultado.

function sumEvens(){
    let sum = 0
    for (let i = 20; i > 0; i--){
        if(i % 2 === 0)
            sum += i
    }
    return sum
}

console.log(sumEvens())