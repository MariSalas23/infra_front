import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h2 style={{ color: '#388e3c' }}>Menú Principal</h2>
      <div style={{ marginTop: '20px' }}>
        <Link to="/formulario">
          <button style={buttonStyle}>Registrar Vacunación</button>
        </Link>
        <Link to="/crear-campania">
          <button style={buttonStyle}>Crear Campaña</button>
        </Link>
        {/* Más opciones del menú pueden añadirse aquí */}
      </div>
    </div>
  );
}

const buttonStyle = {
  backgroundColor: '#388e3c',
  color: 'white',
  padding: '10px 20px',
  borderRadius: '4px',
  border: 'none',
  cursor: 'pointer',
  margin: '10px',
  textDecoration: 'none'
};

export default Menu;
