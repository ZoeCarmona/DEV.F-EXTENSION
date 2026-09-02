import { useAuth } from '../context/AuthContext';
import './Profile.css';

function Profile() {
  const { user } = useAuth();

  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-avatar">👤</div>
        <h2>@{user.username}</h2>
        <p className="profile-meta">Miembro desde: {user.joinedAt}</p>
        <div className="profile-stats">
          <div>
            <strong>Estado:</strong> <span className="status-badge">Autenticado 🟢</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;