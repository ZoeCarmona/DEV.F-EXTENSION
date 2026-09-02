import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-brand">🏥 MediCare</div>
      <div className="nav-links">
        <Link to="/">Inicio</Link>
        <Link to="/doctors">Doctores</Link>
        <Link to="/appointments/new">Agendar Cita</Link>
      </div>
    </nav>
  );
}

export default Navbar;