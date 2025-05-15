import React, { useState } from 'react';

function GestionAnimales() {
  // Estado para el formulario
  const [codigoIdentificacion, setCodigoIdentificacion] = useState('');
  const [especie, setEspecie] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState('');
  const [sexo, setSexo] = useState('');
  const [finca, setFinca] = useState('');
  const [municipio, setMunicipio] = useState('');
  const [region, setRegion] = useState('');

  // Estado para almacenar la lista de animales
  const [animales, setAnimales] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Crear un nuevo animal
    const nuevoAnimal = {
      codigoIdentificacion,
      especie,
      fechaNacimiento,
      sexo,
      finca,
      municipio,
      region,
    };

    // Agregar el nuevo animal a la lista de animales
    setAnimales([...animales, nuevoAnimal]);

    // Limpiar los campos del formulario
    setCodigoIdentificacion('');
    setEspecie('');
    setFechaNacimiento('');
    setSexo('');
    setFinca('');
    setMunicipio('');
    setRegion('');
    alert('Animal registrado');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ textAlign: 'center', color: '#126636' }}>Gestión de Animales</h2>

      {/* Contenedor con borde blanco para el formulario */}
      <div style={{
        maxWidth: '600px',
        margin: '0 auto',
        padding: '40px',
        backgroundColor: '#ffffff',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      }}>
        {/* Formulario de Registro de Animal */}
        <h3 style={{ color: '#126636' }}>Registrar Nuevo Animal</h3>
        <form onSubmit={handleSubmit}>
          {/* Código de Identificación */}
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="codigoIdentificacion" style={labelStyle}>Código de Identificación</label>
            <input
              type="text"
              id="codigoIdentificacion"
              value={codigoIdentificacion}
              onChange={(e) => setCodigoIdentificacion(e.target.value)}
              style={inputStyle}
              required
            />
          </div>

          {/* Especie */}
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="especie" style={labelStyle}>Especie</label>
            <input
              type="text"
              id="especie"
              value={especie}
              onChange={(e) => setEspecie(e.target.value)}
              style={inputStyle}
              required
            />
          </div>

          {/* Fecha de Nacimiento */}
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="fechaNacimiento" style={labelStyle}>Fecha de Nacimiento</label>
            <input
              type="date"
              id="fechaNacimiento"
              value={fechaNacimiento}
              onChange={(e) => setFechaNacimiento(e.target.value)}
              style={inputStyle}
              required
            />
          </div>

          {/* Sexo */}
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="sexo" style={labelStyle}>Sexo</label>
            <select
              id="sexo"
              value={sexo}
              onChange={(e) => setSexo(e.target.value)}
              style={inputStyle}
              required
            >
              <option value="">Selecciona Sexo</option>
              <option value="Macho">Macho</option>
              <option value="Hembra">Hembra</option>
            </select>
          </div>

          {/* Finca */}
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

          {/* Municipio */}
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

          {/* Región */}
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
            Registrar Animal
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

export default GestionAnimales;
