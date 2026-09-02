function prepararPedido(id) {
  return new Promise((resolve) => {
    const tiempo = Math.floor(Math.random() * 3000) + 1000;
    setTimeout(() => {
      resolve(id);
    }, tiempo);
  });
}

async function gestionarPedido(id) {
  console.log(`Pedido ${id}: En Proceso`);
  await prepararPedido(id);
  console.log(`Pedido ${id}: Completado`);
}

async function simularCafeteria() {
  for (let i = 1; i <= 3; i++) {
    gestionarPedido(i);
  }
}

simularCafeteria();