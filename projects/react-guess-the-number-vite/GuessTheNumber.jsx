import { useState } from 'react';
import Card from './Card';
import Message from './Message';
import './GuessTheNumber.css';

function GuessTheNumber() {
  const [targetNumber, setTargetNumber] = useState(() => Math.floor(Math.random() * 100) + 1);
  const [guess, setGuess] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [gameState, setGameState] = useState({ type: '', text: '¡Adivina un número entre 1 y 100!' });
  const [isWon, setIsWon] = useState(false);

  const handleGuessSubmit = (e) => {
    e.preventDefault();
    const userGuess = Number(guess);

    if (!userGuess || userGuess < 1 || userGuess > 100) {
      setGameState({ type: 'error', text: 'Por favor, introduce un número válido entre 1 y 100.' });
      return;
    }

    const newAttempts = attempts + 1;
    setAttempts(newAttempts);

    if (userGuess === targetNumber) {
      setIsWon(true);
      setGameState({ 
        type: 'success', 
        text: `🎉 ¡Felicidades! Adivinaste el número en ${newAttempts} intentos.` 
      });
    } else if (userGuess < targetNumber) {
      setGameState({ type: 'hint', text: '📈 El número secreto es mayor.' });
    } else {
      setGameState({ type: 'hint', text: '📉 El número secreto es menor.' });
    }

    setGuess('');
  };

  const handleReset = () => {
    setTargetNumber(Math.floor(Math.random() * 100) + 1);
    setGuess('');
    setAttempts(0);
    setGameState({ type: '', text: '¡Nuevo juego iniciado! Adivina un número entre 1 y 100.' });
    setIsWon(false);
  };

  return (
    <div className="game-container">
      <Card title="🎯 Adivina el Número Secreto">
        <Message type={gameState.type} text={gameState.text} />

        {!isWon ? (
          <form onSubmit={handleGuessSubmit} className="game-form">
            <input
              type="number"
              min="1"
              max="100"
              value={guess}
              onChange={(e) => setGuess(e.target.value)}
              placeholder="Tu número..."
              className="game-input"
              autoFocus
            />
            <button type="submit" className="game-btn btn-primary">
              Probar Suerte
            </button>
          </form>
        ) : (
          <button onClick={handleReset} className="game-btn btn-success">
            Jugar Nuevamente
          </button>
        )}

        <div className="game-stats">
          <span>Intentos realizados: <strong>{attempts}</strong></span>
          {isWon && <span className="win-badge">¡Completado!</span>}
        </div>
      </Card>
    </div>
  );
}

export default GuessTheNumber;