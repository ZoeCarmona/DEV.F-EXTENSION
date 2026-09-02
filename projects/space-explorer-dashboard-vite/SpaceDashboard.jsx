import { useState, useEffect, useMemo } from 'react';
import './SpaceDashboard.css';

function SpaceDashboard() {
  const [fuel, setFuel] = useState(100);
  const [distance, setDistance] = useState(0);
  const [isFlying, setIsFlying] = useState(false);
  const [planets, setPlanets] = useState(['Kepler-186f', 'Gliese 581g', 'TRAPPIST-1e']);

  // useEffect para gestionar el ciclo de vida del vuelo (simulación y limpieza)
  useEffect(() => {
    let flightInterval;

    if (isFlying && fuel > 0) {
      flightInterval = setInterval(() => {
        setDistance(prevDistance => prevDistance + 12);
        setFuel(prevFuel => {
          if (prevFuel <= 5) {
            setIsFlying(false);
            return 0;
          }
          return prevFuel - 5;
        });
      }, 1000);
    }

    // Función de limpieza: desmonta o limpia el intervalo al cambiar de estado
    return () => {
      clearInterval(flightInterval);
    };
  }, [isFlying, fuel]);

  // useMemo para optimizar el cálculo de estadísticas de la misión
  const missionStats = useMemo(() => {
    console.log('Calculando métricas de rendimiento espacial...');
    const totalPlanets = planets.length;
    const efficiency = distance > 0 ? (distance / (101 - fuel)).toFixed(2) : 0;
    return { totalPlanets, efficiency };
  }, [planets, distance, fuel]);

  const toggleFlight = () => {
    if (fuel > 0) {
      setIsFlying(!isFlying);
    }
  };

  const refuelShip = () => {
    setFuel(100);
    setIsFlying(false);
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>🌌 Panel del Explorador Espacial</h1>
        <span className={`badge ${isFlying ? 'active' : 'inactive'}`}>
          {isFlying ? '🛸 En Vuelo Activo' : '🛰️ En Órbita Estática'}
        </span>
      </header>

      <div className="metrics-grid">
        <div className="metric-card">
          <h3>Combustible</h3>
          <p className={fuel < 25 ? 'danger' : ''}>{fuel}%</p>
        </div>
        <div className="metric-card">
          <h3>Distancia Recorrida</h3>
          <p>{distance} años luz</p>
        </div>
        <div className="metric-card">
          <h3>Planetas Visitados</h3>
          <p>{missionStats.totalPlanets}</p>
        </div>
      </div>

      <div className="control-panel">
        <button 
          onClick={toggleFlight} 
          className={`btn ${isFlying ? 'btn-stop' : 'btn-start'}`}
          disabled={fuel === 0}
        >
          {isFlying ? 'Pausar Vuelo' : 'Iniciar Vuelo'}
        </button>
        <button onClick={refuelShip} className="btn btn-refuel">
          Recargar Propulsores
        </button>
      </div>

      <div className="memo-stats">
        <p><strong>Eficiencia Energética Calculada:</strong> {missionStats.efficiency} ly/unit</p>
      </div>

      <div className="planets-section">
        <h3>✨ Bitácora de Planetas</h3>
        <ul className="planets-list">
          {planets.map((planet, index) => (
            <li key={index} className="planet-item">{planet}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SpaceDashboard;