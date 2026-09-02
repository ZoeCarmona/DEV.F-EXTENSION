function mostrarPersonajes(personajes) {
  const container = document.getElementById('data-container');
  container.innerHTML = '';
  
  personajes.forEach(personaje => {
    const tarjeta = document.createElement('div');
    tarjeta.innerHTML = `
      <h3>${personaje.name}</h3>
      <img src="${personaje.image}" alt="${personaje.name}" width="100">
    `;
    container.appendChild(tarjeta);
  });
}

async function obtenerConFetch() {
  try {
    const response = await fetch('https://rickandmortyapi.com/api/character');
    const data = await response.json();
    mostrarPersonajes(data.results.slice(0, 5));
  } catch (error) {
    console.error('Error con fetch:', error);
  }
}

async function obtenerConAxios() {
  try {
    const response = await axios.get('https://rickandmortyapi.com/api/character');
    mostrarPersonajes(response.data.results.slice(0, 5));
  } catch (error) {
    console.error('Error con axios:', error);
  }
}

document.getElementById('btn-fetch').addEventListener('click', obtenerConFetch);
document.getElementById('btn-axios').addEventListener('click', obtenerConAxios);