import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import SignIn from './components/SignIn';
import Login from './components/Login';
import Menu from './components/Menu';
import Formulario from './components/Formulario';
import CrearCampania from './components/CrearCampania';

function App() {
  return (
    <Router>
      <div className="App" style={{ backgroundColor: '#e8f5e9', height: '100vh' }}>
        <h1 style={{ textAlign: 'center', padding: '20px', color: '#388e3c' }}>Bienvenido a FEDEGÁN</h1>

        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/login" element={<Login />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/formulario" element={<Formulario />} />
          <Route path="/crear-campania" element={<CrearCampania />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
