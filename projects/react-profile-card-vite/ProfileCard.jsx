import './ProfileCard.css';

function ProfileCard({ nombre, profesion, biografia, avatar, habilidades }) {
  return (
    <div className="profile-card">
      <img src={avatar} alt={`Avatar de ${nombre}`} className="profile-avatar" />
      <h2 className="profile-name">{nombre}</h2>
      <h3 className="profile-profession">{profession}</h3>
      <p className="profile-bio">{biografia}</p>
      
      <div className="profile-skills">
        <h4>Habilidades:</h4>
        <ul>
          {habilidades.map(( habilidad, index ) => (
            <li key={index} className="skill-tag">{habilidad}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProfileCard;