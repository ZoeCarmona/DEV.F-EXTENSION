function encontrarParejaInvitados(invitados) {
  let izquierda = 0;
  let derecha = 1;

  while (derecha < invitados.length) {
    const inicial1 = invitados[izquierda].charAt(0).toUpperCase();
    const inicial2 = invitados[derecha].charAt(0).toUpperCase();

    if (inicial1 === inicial2) {
      return [invitados[izquierda], invitados[derecha]];
    }

    izquierda++;
    derecha++;
  }

  return null;
}

const listaInvitados = ["Ana", "Andrés", "Carlos", "Sofía", "Saúl"];
const resultado = encontrarParejaInvitados(listaInvitados);

console.log(resultado);