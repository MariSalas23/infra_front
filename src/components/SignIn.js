import React, { useState } from 'react';
import axios from 'axios';

function SignIn() {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [rol, setRol] = useState('vacunador');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Verificar que las contraseñas coincidan
    if (password !== password2) {
      alert('Las contraseñas no coinciden');
      return;
    }

    // Crear el objeto con los datos del formulario
    const userData = {
      email,
      first_name: firstName,
      last_name: lastName,
      rol,
      password,
      password2
    };

    try {
      // Enviar la solicitud POST a la API
      const response = await axios.post('http://tu-api-url/usuarios/registro', userData);
      
      if (response.status === 201) {
        alert('Cuenta creada exitosamente');
        // Aquí podrías redirigir a la página de inicio de sesión o a otra parte
      }
    } catch (error) {
      console.error('Error al registrar el usuario:', error);
      alert('Hubo un problema al registrar el usuario');
    }
  };

  return (
    <div style={{ padding: '20px', backgroundColor: '#93ba84', height: '100vh' }}>
      <div style={{
        maxWidth: '400px',
        margin: '0 auto',
        padding: '40px',
        backgroundColor: '#ffffff',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
      }}>
        <h2 style={{ color: '#126636' }}>Crear Cuenta</h2>

        <form onSubmit={handleSubmit}>
          {/* Email */}
          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="email" style={labelStyle}>Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={inputStyle}
              required
            />
          </div>

          {/* First Name */}
          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="firstName" style={labelStyle}>Nombre</label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              style={inputStyle}
              required
            />
          </div>

          {/* Last Name */}
          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="lastName" style={labelStyle}>Apellido</label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              style={inputStyle}
              required
            />
          </div>

          {/* Rol */}
          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="rol" style={labelStyle}>Rol</label>
            <select
              id="rol"
              value={rol}
              onChange={(e) => setRol(e.target.value)}
              style={inputStyle}
              required
            >
              <option value="vacunador">Vacunador</option>
              <option value="admin">Administrador</option>
            </select>
          </div>

          {/* Contraseña */}
          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="password" style={labelStyle}>Contraseña</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={inputStyle}
              required
            />
          </div>

          {/* Confirmar Contraseña */}
          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="password2" style={labelStyle}>Confirmar Contraseña</label>
            <input
              type="password"
              id="password2"
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
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
            Crear Cuenta
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

export default SignIn;
