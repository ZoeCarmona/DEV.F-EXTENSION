import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import DoctorsList from './pages/DoctorsList';
import AppointmentForm from './pages/AppointmentForm';
import AppointmentDetail from './pages/AppointmentDetail';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app-layout">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/doctors" element={<DoctorsList />} />
            <Route path="/appointments/new" element={<AppointmentForm />} />
            <Route path="/appointments/:id" element={<AppointmentDetail />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;