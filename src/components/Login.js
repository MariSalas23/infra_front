import React, { useState } from 'react';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Bienvenido de nuevo, ${username}`);
    // Aquí puedes verificar el usuario con un backend
  };

  return (
    <div className="login" style={{ maxWidth: '400px', margin: '0 auto', padding: '20px', backgroundColor: '#ffffff', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
      <h2 style={{ textAlign: 'center', color: '#388e3c' }}>Iniciar sesión</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="username" style={{ display: 'block', fontSize: '14px', color: '#388e3c' }}>Nombre de usuario</label>
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
          <label htmlFor="password" style={{ display: 'block', fontSize: '14px', color: '#388e3c' }}>Contraseña</label>
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
            backgroundColor: '#388e3c',
            color: 'white',
            padding: '10px 20px',
            borderRadius: '4px',
            border: 'none',
            width: '100%',
            cursor: 'pointer',
          }}
        >
          Iniciar sesión
        </button>
      </form>
    </div>
  );
}

export default Login;
