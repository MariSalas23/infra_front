import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import SignIn from './components/SignIn';
import Login from './components/Login';
import Menu from './components/Menu';
import Formulario from './components/Formulario';
import CrearCampania from './components/CrearCampania';
import VerCampanas from './components/VerCampanas';
import GestionAnimales from './components/GestionAnimales';
import VerAnimales from './components/VerAnimales';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <div className="App" style={{ backgroundColor: '#b5e1a5', height: '100vh' }}>

        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/login" element={<Login />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/formulario" element={<Formulario />} />
          <Route path="/crear-campania" element={<CrearCampania />} />
          <Route path="/ver-campanas" element={<VerCampanas />} />
          <Route path="/registrar-animal" element={<GestionAnimales />} />
          <Route path="/ver-animales" element={<VerAnimales />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
