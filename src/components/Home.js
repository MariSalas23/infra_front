import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import '../estilos/Home.css';

function Home() {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1>Bienvenido a FEDEGÁN</h1>
        <h2>Selecciona una opción</h2>

        {/* Botones para navegar a Sign In o Log In */}
        <div className="home-buttons">
          <Link to="/signin">
            <button className="home-button">Sign In</button>
          </Link>

          <Link to="/login">
            <button className="home-button">Log In</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
