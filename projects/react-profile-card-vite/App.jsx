import ProfileCard from './components/ProfileCard';
import './App.css';

function App() {
  const datosPerfil = {
    nombre: "Alex Vance",
    profession: "Desarrollador Frontend Junior",
    biografia: "Apasionado por crear experiencias web interactivas y limpias con JavaScript y React. Amante del café y del código modular.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80",
    habilidades: ["JavaScript (ES6+)", "React", "Vite", "Git", "CSS Modules"]
  };

  return (
    <div className="app-container">
      <header>
        <h1>🚀 Mi Portafolio en React</h1>
      </header>
      <main>
        <ProfileCard {...datosPerfil} />
      </main>
    </div>
  );
}

export default App;