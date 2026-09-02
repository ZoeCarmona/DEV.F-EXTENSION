import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './DoctorsList.css';

function DoctorsList() {
  const navigate = useNavigate();
  const [doctors] = useState([
    { id: 1, name: 'Dra. Ana Gómez', specialty: 'Cardiología', hours: '09:00 - 14:00' },
    { id: 2, name: 'Dr. Carlos Ruiz', specialty: 'Pediatría', hours: '10:00 - 16:00' },
    { id: 3, name: 'Dra. Sofía Morales', specialty: 'Dermatología', hours: '12:00 - 18:00' }
  ]);

  const handleSelectDoctor = (doctorName) => {
    navigate(`/appointments/new?doctor=${encodeURIComponent(doctorName)}`);
  };

  return (
    <div className="doctors-container">
      <h2>👨‍⚕️ Nuestros Especialistas</h2>
      <div className="doctors-grid">
        {doctors.map(doc => (
          <div key={doc.id} className="doctor-card">
            <h3>{doc.name}</h3>
            <p className="specialty">{doc.specialty}</p>
            <p className="hours">🕒 {doc.hours}</p>
            <button onClick={() => handleSelectDoctor(doc.name)} className="btn-book">
              Agendar con {doc.name.split(' ')[1]}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DoctorsList;