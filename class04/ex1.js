// Clasificar las estapas del humano 012 niño, 13-17 adolescente, 18-60 adulto

function lifeStages(age) {
    if (age < 0) return "Invalid age";
    if (age <= 12) return "You're a child";
    if (age <= 17) return "You're a teenager";
    if (age <= 60) return "You're an adult";
    return "You're a senior";
}

console.log(lifeStages(12))