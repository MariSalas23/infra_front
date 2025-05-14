import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import SignIn from './components/SignIn';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <div className="App" style={{ backgroundColor: '#e8f5e9', height: '100vh' }}>
        <h1 style={{ textAlign: 'center', padding: '20px', color: '#388e3c' }}>Bienvenido a FEDEGÁN</h1>
        
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <Link to="/signin">
            <button style={buttonStyle}>Crear Cuenta</button>
          </Link>
          <Link to="/login">
            <button style={buttonStyle}>Iniciar Sesión</button>
          </Link>
        </div>

        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
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

export default App;
