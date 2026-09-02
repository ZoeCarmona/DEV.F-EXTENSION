import { useState, useEffect, useMemo } from 'react';
import './TaskTimer.css';

function TaskTimer() {
  const [tasks, setTasks] = useState([
    { id: 1, name: 'Diseñar interfaz en Figma', hours: 4 },
    { id: 2, name: 'Configurar entorno Vite + React', hours: 2 },
    { id: 3, name: 'Implementar lógica de estado', hours: 5 }
  ]);
  
  const [newTaskName, setNewTaskName] = useState('');
  const [newTaskHours, setNewTaskHours] = useState('');
  const [currentTime, setCurrentTime] = useState(new Date());

  // useEffect para el reloj en tiempo real
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Función de limpieza para desmontar el intervalo
    return () => clearInterval(timer);
  }, []);

  // useMemo para optimizar el cálculo de horas totales
  const totalHours = useMemo(() => {
    console.log('Calculando horas totales...');
    return tasks.reduce((acc, task) => acc + Number(task.hours), 0);
  }, [tasks]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (!newTaskName.trim() || !newTaskHours || Number(newTaskHours) <= 0) return;

    const newTask = {
      id: Date.now(),
      name: newTaskName.trim(),
      hours: Number(newTaskHours)
    };

    setTasks([...tasks, newTask]);
    setNewTaskName('');
    setNewTaskHours('');
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="timer-container">
      <div className="clock-banner">
        <h2>⏱️ Hora Actual: {currentTime.toLocaleTimeString()}</h2>
      </div>

      <h2>📋 Control de Tiempos y Tareas</h2>

      <form onSubmit={handleAddTask} className="timer-form">
        <input
          type="text"
          placeholder="Nombre de la tarea..."
          value={newTaskName}
          onChange={(e) => setNewTaskName(e.target.value)}
          className="timer-input"
        />
        <input
          type="number"
          placeholder="Horas"
          min="1"
          value={newTaskHours}
          onChange={(e) => setNewTaskHours(e.target.value)}
          className="timer-input-small"
        />
        <button type="submit" className="timer-btn">Añadir</button>
      </form>

      <ul className="timer-list">
        {tasks.length === 0 ? (
          <p className="empty-msg">No hay tareas registradas.</p>
        ) : (
          tasks.map((task) => (
            <li key={task.id} className="timer-item">
              <span className="task-name">{task.name}</span>
              <div className="task-info">
                <span className="task-hours">{task.hours} hrs</span>
                <button 
                  onClick={() => handleDeleteTask(task.id)} 
                  className="delete-btn"
                  title="Eliminar tarea"
                >
                  ❌
                </button>
              </div>
            </li>
          ))
        )}
      </ul>

      <div className="timer-footer">
        <strong>Total de horas invertidas:</strong>
        <span className="total-badge">{totalHours} horas</span>
      </div>
    </div>
  );
}

export default TaskTimer;