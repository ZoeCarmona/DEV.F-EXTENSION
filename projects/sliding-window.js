function encontrarPalabraMasLarga(texto) {
  const palabras = texto.split(' ');
  let palabraMasLarga = '';

  for (let i = 0; i < palabras.length; i++) {
    if (palabras[i].length > palabraMasLarga.length) {
      palabraMasLarga = palabras[i];
    }
  }

  return palabraMasLarga;
}

const texto = "Estás desarrollando una herramienta para ayudar a escritores a identificar";
console.log(encontrarPalabraMasLarga(texto));