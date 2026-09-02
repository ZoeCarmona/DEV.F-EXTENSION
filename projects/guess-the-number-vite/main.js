import './style.css';

let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let intentosRestantes = 10;

const form = document.getElementById('guess-form');
const input = document.getElementById('guess-input');
const message = document.getElementById('message');
const attemptsDisplay = document.getElementById('attempts');
const restartBtn = document.getElementById('restart-btn');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const userGuess = parseInt(input.value);

  if (userGuess === numeroSecreto) {
    message.textContent = `🎉 ¡Felicidades! Adivinaste el número ${numeroSecreto}.`;
    message.style.color = 'green';
    endGame();
  } else if (userGuess < numeroSecreto) {
    message.textContent = '📈 Demasiado bajo. Intenta con un número mayor.';
    message.style.color = '#d97706';
    intentosRestantes--;
  } else {
    message.textContent = '📉 Demasiado alto. Intenta con un número menor.';
    message.style.color = '#d97706';
    intentosRestantes--;
  }

  attemptsDisplay.textContent = `Intentos restantes: ${intentosRestantes}`;
  input.value = '';
  input.focus();

  if (intentosRestantes === 0 && userGuess !== numeroSecreto) {
    message.textContent = `❌ ¡Se acabaron tus intentos! El número secreto era ${numeroSecreto}.`;
    message.style.color = 'red';
    endGame();
  }
});

function endGame() {
  form.style.display = 'none';
  restartBtn.style.display = 'inline-block';
}

restartBtn.addEventListener('click', () => {
  numeroSecreto = Math.floor(Math.random() * 100) + 1;
  intentosRestantes = 10;
  message.textContent = '';
  attemptsDisplay.textContent = `Intentos restantes: ${intentosRestantes}`;
  form.style.display = 'block';
  restartBtn.style.display = 'none';
  input.value = '';
  input.focus();
});