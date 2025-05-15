import React, { useState } from 'react';

function CrearCampania() {
  const [nombre, setNombre] = useState('');
  const [fechaInicio, setFechaInicio] = useState('');
  const [fechaFin, setFechaFin] = useState('');
  const [estado, setEstado] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Campaña registrada');
    // Aquí podrías enviar los datos a un backend, por ejemplo.
  };

  return (
    <div style={containerStyle}>
      <div style={formContainerStyle}>
        <h2 style={{ textAlign: 'center', color: '#126636' }}>Crear Campaña de Vacunación</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="nombre" style={labelStyle}>Nombre de la campaña</label>
            <input
              type="text"
              id="nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              style={inputStyle}
              required
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="fechaInicio" style={labelStyle}>Fecha de inicio</label>
            <input
              type="date"
              id="fechaInicio"
              value={fechaInicio}
              onChange={(e) => setFechaInicio(e.target.value)}
              style={inputStyle}
              required
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="fechaFin" style={labelStyle}>Fecha de fin</label>
            <input
              type="date"
              id="fechaFin"
              value={fechaFin}
              onChange={(e) => setFechaFin(e.target.value)}
              style={inputStyle}
              required
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="estado" style={labelStyle}>Estado</label>
            <select
              id="estado"
              value={estado}
              onChange={(e) => setEstado(e.target.value)}
              style={inputStyle}
              required
            >
              <option value="">Selecciona el estado</option>
              <option value="activa">Activa</option>
              <option value="finalizada">Finalizada</option>
              <option value="cancelada">Cancelada</option>
            </select>
          </div>
          <button
            type="submit"
            style={{
              backgroundColor: '#126636',
              color: 'white',
              padding: '10px 20px',
              borderRadius: '4px',
              border: 'none',
              width: '100%',
              cursor: 'pointer',
            }}
          >
            Crear Campaña
          </button>
        </form>
      </div>
    </div>
  );
}

const labelStyle = {
  display: 'block',
  fontSize: '14px',
  color: '#126636',
};

const inputStyle = {
  width: '100%',
  padding: '10px',
  borderRadius: '4px',
  border: '1px solid #ccc',
  marginTop: '5px',
};

// Estilos para el contenedor y centrarlo verticalmente
const containerStyle = {
  height: '100vh', // Ocupa toda la altura de la pantalla
  display: 'flex',
  justifyContent: 'center', // Centra horizontalmente
  alignItems: 'center', // Centra verticalmente
  backgroundColor: '#b5e1a5',
};

const formContainerStyle = {
  maxWidth: '600px',
  padding: '20px',
  backgroundColor: '#ffffff',
  borderRadius: '8px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
};

export default CrearCampania;
