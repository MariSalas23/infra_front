import React, { useState } from 'react';

function Formulario() {
  const [finca, setFinca] = useState('');
  const [municipio, setMunicipio] = useState('');
  const [region, setRegion] = useState('');
  const [fecha, setFecha] = useState('');
  const [especie, setEspecie] = useState('');
  const [cantidad, setCantidad] = useState('');
  const [campania, setCampania] = useState(''); // Estado para la campaña

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Formulario enviado');
    // Aquí podrías manejar el envío del formulario (por ejemplo, guardarlo en una base de datos)
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px', backgroundColor: '#ffffff', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
      <h2 style={{ textAlign: 'center', color: '#388e3c' }}>Registro de Vacunaciones</h2>
      <form onSubmit={handleSubmit}>
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
            <option value="Campaña 1">Campaña 1</option>
            <option value="Campaña 2">Campaña 2</option>
            <option value="Campaña 3">Campaña 3</option>
          </select>
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="finca" style={labelStyle}>Finca</label>
          <input
            type="text"
            id="finca"
            value={finca}
            onChange={(e) => setFinca(e.target.value)}
            style={inputStyle}
            required
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="municipio" style={labelStyle}>Municipio</label>
          <input
            type="text"
            id="municipio"
            value={municipio}
            onChange={(e) => setMunicipio(e.target.value)}
            style={inputStyle}
            required
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="region" style={labelStyle}>Región</label>
          <input
            type="text"
            id="region"
            value={region}
            onChange={(e) => setRegion(e.target.value)}
            style={inputStyle}
            required
          />
        </div>
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
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="especie" style={labelStyle}>Especie (bovino o porcino)</label>
          <select
            id="especie"
            value={especie}
            onChange={(e) => setEspecie(e.target.value)}
            style={inputStyle}
            required
          >
            <option value="">Selecciona una especie</option>
            <option value="bovino">Bovino</option>
            <option value="porcino">Porcino</option>
          </select>
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="cantidad" style={labelStyle}>Cantidad</label>
          <input
            type="number"
            id="cantidad"
            value={cantidad}
            onChange={(e) => setCantidad(e.target.value)}
            style={inputStyle}
            required
          />
        </div>
        <button
          type="submit"
          style={{
            backgroundColor: '#388e3c',
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
  );
}

const labelStyle = {
  display: 'block',
  fontSize: '14px',
  color: '#388e3c',
};

const inputStyle = {
  width: '100%',
  padding: '10px',
  borderRadius: '4px',
  border: '1px solid #ccc',
  marginTop: '5px',
};

export default Formulario;
