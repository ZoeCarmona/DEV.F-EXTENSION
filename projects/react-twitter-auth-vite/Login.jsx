import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Login.css';

function Login() {
  const [username, setUsername] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username.trim()) return;

    login(username);
    navigate('/');
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>✨ Únete a DevF-Twitter</h2>
        <p>Inicia sesión con tu nombre de usuario para comenzar a publicar.</p>
        <form onSubmit={handleSubmit} className="login-form">
          <input
            type="text"
            placeholder="Nombre de usuario..."
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            autoFocus
          />
          <button type="submit" className="login-btn">Acceder</button>
        </form>
      </div>
    </div>
  );
}

export default Login;