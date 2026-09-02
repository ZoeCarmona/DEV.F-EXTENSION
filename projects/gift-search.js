function buscarRegalo(gifts, giftName, index = 0) {
  if (index === gifts.length) {
    return "El regalo no está en la lista.";
  }
  if (gifts[index] === giftName) {
    return `El regalo está en la posición ${index}.`;
  }
  return buscarRegalo(gifts, giftName, index + 1);
}

const listaRegalos = ["Bicicleta", "Carro de juguete", "Videojuego", "Libro"];
console.log(buscarRegalo(listaRegalos, "Videojuego"));