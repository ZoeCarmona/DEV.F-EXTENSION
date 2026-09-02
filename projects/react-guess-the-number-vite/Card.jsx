import './Card.css';

function Card({ children, title }) {
  return (
    <div className="game-card">
      {title && <h2 className="card-title">{title}</h2>}
      <div className="card-body">
        {children}
      </div>
    </div>
  );
}

export default Card;