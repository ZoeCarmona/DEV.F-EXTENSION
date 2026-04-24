// Ten 3 números y muestra cuál es el mayor de los 3

function greatestNumber(a,b,c){
    maxNumber = a

    if (b > maxNumber) maxNumber = b
    if (c > maxNumber) maxNumber = c

    return maxNumber
}

console.log(greatestNumber(102,90,91))