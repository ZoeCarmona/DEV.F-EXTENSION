function encontrarMaximo(arreglo) {
  if (arreglo.length === 1) {
    return arreglo[0];
  }

  const mitad = Math.floor(arreglo.length / 2);
  const izquierda = arreglo.slice(0, mitad);
  const derecha = arreglo.slice(mitad);

  const maxIzquierda = encontrarMaximo(izquierda);
  const maxDerecha = encontrarMaximo(derecha);

  return Math.max(maxIzquierda, maxDerecha);
}

const numeros = [12, 45, 7, 89, 23, 56];
console.log(encontrarMaximo(numeros));