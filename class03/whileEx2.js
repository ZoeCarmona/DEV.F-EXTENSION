// 2.Modifica el ciclo para que imprima solo los números pares.

function countNumbers() {
    let number = 10;

    while (number !== 0) {
        if (number % 2 === 0){
            console.log(number);
        }

        number--;
    }
}

countNumbers();