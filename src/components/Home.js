import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div style={{ padding: '20px', backgroundColor: '#e8f5e9', height: '100vh' }}>
      <div style={{
        maxWidth: '400px',
        margin: '0 auto',
        padding: '40px',
        backgroundColor: '#ffffff',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
      }}>
        <h2 style={{ color: '#388e3c' }}>Bienvenido a FEDEGÁN</h2>
        <h3 style={{ color: '#388e3c' }}>Selecciona una opción</h3>

        {/* Botones para navegar a Sign In o Log In */}
        <div style={{ marginTop: '20px' }}>
          <Link to="/signin">
            <button
              style={{
                backgroundColor: '#388e3c',
                color: 'white',
                padding: '10px 20px',
                borderRadius: '4px',
                border: 'none',
                width: '100%',
                cursor: 'pointer',
                marginBottom: '10px',
              }}
            >
              Sign In
            </button>
          </Link>

          <Link to="/login">
            <button
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
              Log In
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
