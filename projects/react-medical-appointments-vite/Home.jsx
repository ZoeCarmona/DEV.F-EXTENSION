import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <h1>Bienvenido a MediCare</h1>
      <p>Plataforma inteligente para la gestión de citas médicas de forma rápida, segura y centralizada.</p>
      <div className="home-actions">
        <Link to="/doctors" className="btn-primary">Ver Especialistas</Link>
        <Link to="/appointments/new" className="btn-secondary">Agendar Cita</Link>
      </div>
    </div>
  );
}

export default Home;