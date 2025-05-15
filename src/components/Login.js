import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Realizar la solicitud POST a la API usando fetch
      const response = await fetch('http://13.217.181.207/api/usuarios/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: username,
          password,
        }),
      });

      // Verifica si la respuesta es exitosa
      if (response.ok) {
        const data = await response.json();
        
        // Suponiendo que la API devuelve el token de acceso
        const { token } = data;

        // Guardar el token en localStorage
        localStorage.setItem('authToken', token);

        alert(`Bienvenido de nuevo, ${username}`);
        navigate('/menu'); // Redirige a la página de menú después de login
      } else {
        const errorData = await response.json();
        console.error('Error en el login:', errorData);
        alert('Error al iniciar sesión. Por favor, revisa tus credenciales.');
      }
    } catch (error) {
      console.error('Error al hacer la solicitud:', error);
      alert('Hubo un problema con la solicitud. Intenta de nuevo.');
    }
  };

  return (
    <div style={containerStyle}>
      <div style={formContainerStyle}>
        <h2 style={{ textAlign: 'center', color: '#126636' }}>Iniciar sesión</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="username" style={{ display: 'block', fontSize: '16px', color: '#126636' }}>Email</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
              required
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="password" style={{ display: 'block', fontSize: '16px', color: '#126636' }}>Contraseña</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
              required
            />
          </div>
          <button
            type="submit"
            style={{
              backgroundColor: '#126636',
              color: 'white',
              padding: '10px 20px',
              borderRadius: '20px',
              border: 'none',
              width: '100%',
              cursor: 'pointer',
            }}
          >
            Iniciar sesión
          </button>
        </form>
      </div>
    </div>
  );
}

// Estilo para centrar el formulario verticalmente
const containerStyle = {
  height: '100vh', // Ocupa toda la altura de la pantalla
  display: 'flex',
  justifyContent: 'center', // Centra horizontalmente
  alignItems: 'center', // Centra verticalmente
  backgroundColor: '#c5efb4',
};

const formContainerStyle = {
  maxWidth: '400px',
  padding: '20px',
  backgroundColor: '#ffffff',
  borderRadius: '8px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  width: '300px',
};

export default Login;
