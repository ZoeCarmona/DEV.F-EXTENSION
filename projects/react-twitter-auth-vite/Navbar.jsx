import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Navbar.css';

function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="twitter-navbar">
      <div className="nav-brand">🐦 DevF-Twitter</div>
      <div className="nav-links">
        {user ? (
          <>
            <Link to="/">Inicio</Link>
            <Link to="/profile">Mi Perfil (@{user.username})</Link>
            <button onClick={handleLogout} className="logout-btn">Cerrar Sesión</button>
          </>
        ) : (
          <Link to="/login" className="login-link-btn">Iniciar Sesión</Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;