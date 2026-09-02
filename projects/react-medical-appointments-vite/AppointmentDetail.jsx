import { useParams, useLocation, Link } from 'react-router-dom';
import './AppointmentDetail.css';

function AppointmentDetail() {
  const { id } = useParams();
  const location = useLocation();
  const appointmentData = location.state;

  return (
    <div className="detail-container">
      <h2>✅ ¡Cita Agendada con Éxito!</h2>
      {appointmentData ? (
        <div className="ticket-card">
          <p><strong>Folio de Cita:</strong> #{id}</p>
          <p><strong>Paciente:</strong> {appointmentData.patientName}</p>
          <p><strong>Doctor:</strong> {appointmentData.doctor}</p>
          <p><strong>Fecha y Hora:</strong> {new Date(appointmentData.date).toLocaleString()}</p>
        </div>
      ) : (
        <p>No se encontraron datos para la cita con ID: {id}</p>
      )}
      <Link to="/" className="btn-home">Volver al Inicio</Link>
    </div>
  );
}

export default AppointmentDetail;