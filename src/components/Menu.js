import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h2 style={{ color: '#126636' }}>Menú Principal</h2>
      <div style={{ marginTop: '20px' }}>
        <Link to="/formulario">
          <button style={buttonStyle}>Registrar Vacunación</button>
        </Link>
        <Link to="/crear-campania">
          <button style={buttonStyle}>Crear Campaña</button>
        </Link>
        <Link to="/ver-campanas">
          <button style={buttonStyle}>Ver Campañas</button>
        </Link>
        <Link to="/registrar-animal">
          <button style={buttonStyle}>Registrar Animal</button>
        </Link>
        <Link to="/ver-animales">
          <button style={buttonStyle}>Ver Animales</button>
        </Link>
      </div>
    </div>
  );
}

const buttonStyle = {
  backgroundColor: '#126636',
  color: 'white',
  padding: '10px 20px',
  borderRadius: '4px',
  border: 'none',
  cursor: 'pointer',
  margin: '10px',
  textDecoration: 'none'
};

export default Menu;
