// Pide 3 lados de un triángulo y determina si es quilatero, isoceles o escaleno

function typeOfTriangle(a,b,c){
    if (a === b && b === c) return 'Equilateral'
    if (a === b || a === c || b === c) return 'Isosceles'
    
    return 'Scalene'
}

console.log(typeOfTriangle(2,2,2))