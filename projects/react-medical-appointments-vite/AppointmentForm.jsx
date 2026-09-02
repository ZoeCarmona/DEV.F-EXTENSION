import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import './AppointmentForm.css';

function AppointmentForm() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const preselectedDoctor = searchParams.get('doctor') || '';

  const [patientName, setPatientName] = useState('');
  const [doctor, setDoctor] = useState(preselectedDoctor);
  const [date, setDate] = useState('');

  useEffect(() => {
    if (preselectedDoctor) {
      setDoctor(preselectedDoctor);
    }
  }, [preselectedDoctor]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!patientName.trim() || !doctor || !date) return;

    const appointmentId = Date.now();
    navigate(`/appointments/${appointmentId}`, { 
      state: { patientName, doctor, date } 
    });
  };

  return (
    <div className="form-container">
      <h2>📅 Agendar Nueva Cita Médica</h2>
      <form onSubmit={handleSubmit} className="appointment-form">
        <div className="form-group">
          <label>Nombre del Paciente:</label>
          <input
            type="text"
            value={patientName}
            onChange={(e) => setPatientName(e.target.value)}
            placeholder="Ej. Juan Pérez"
            required
          />
        </div>
        <div className="form-group">
          <label>Doctor / Especialista:</label>
          <select
            value={doctor}
            onChange={(e) => setDoctor(e.target.value)}
            required
          >
            <option value="">Seleccione un doctor...</option>
            <option value="Dra. Ana Gómez">Dra. Ana Gómez (Cardiología)</option>
            <option value="Dr. Carlos Ruiz">Dr. Carlos Ruiz (Pediatría)</option>
            <option value="Dra. Sofía Morales">Dra. Sofía Morales (Dermatología)</option>
          </select>
        </div>
        <div className="form-group">
          <label>Fecha y Hora:</label>
          <input
            type="datetime-local"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn-submit">Confirmar Cita</button>
      </form>
    </div>
  );
}

export default AppointmentForm;