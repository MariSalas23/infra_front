import React, { useState } from 'react';

function Formulario() {
  const [idAnimal, setIdAnimal] = useState(''); // Estado para el ID del animal
  const [idVacunador, setIdVacunador] = useState(''); // Estado para el ID del vacunador
  const [campania, setCampania] = useState(''); // Estado para la campaña
  const [fecha, setFecha] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Formulario enviado');
    // Aquí podrías manejar el envío del formulario (por ejemplo, guardarlo en una base de datos)
  };

  return (
    <div style={containerStyle}>
      <div style={formContainerStyle}>
        <h2 style={{ textAlign: 'center', color: '#126636' }}>Registro de Vacunaciones</h2>
        <form onSubmit={handleSubmit}>
          {/* ID del Animal */}
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="idAnimal" style={labelStyle}>ID del Animal</label>
            <input
              type="text"
              id="idAnimal"
              value={idAnimal}
              onChange={(e) => setIdAnimal(e.target.value)}
              style={inputStyle}
              required
            />
          </div>

          {/* ID del Vacunador */}
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="idVacunador" style={labelStyle}>ID del Vacunador</label>
            <input
              type="text"
              id="idVacunador"
              value={idVacunador}
              onChange={(e) => setIdVacunador(e.target.value)}
              style={inputStyle}
              required
            />
          </div>

          {/* Campaña de Vacunación */}
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="campania" style={labelStyle}>Campaña de Vacunación</label>
            <select
              id="campania"
              value={campania}
              onChange={(e) => setCampania(e.target.value)}
              style={inputStyle}
              required
            >
              <option value="">Selecciona una campaña</option>
              <option value="Campaña 1">Campaña Prueba</option>
            </select>
          </div>

          {/* Fecha */}
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="fecha" style={labelStyle}>Fecha</label>
            <input
              type="date"
              id="fecha"
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
              style={inputStyle}
              required
            />
          </div>

          {/* Botón de Enviar */}
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
            Enviar Vacunación
          </button>
        </form>
      </div>
    </div>
  );
}

// Estilos de los elementos
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

// Estilo para centrar el contenedor verticalmente
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

export default Formulario;
