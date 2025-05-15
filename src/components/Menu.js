import React from "react";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Menú Principal</h2>
      <div style={buttonContainerStyle}>
        <Link to="/formulario" style={linkStyle}>
          <button style={buttonStyle}>Registrar Vacunación</button>
        </Link>
        <Link to="/crear-campania" style={linkStyle}>
          <button style={buttonStyle}>Crear Campaña</button>
        </Link>
        <Link to="/ver-campanas" style={linkStyle}>
          <button style={buttonStyle}>Ver Campañas</button>
        </Link>
        <Link to="/registrar-animal" style={linkStyle}>
          <button style={buttonStyle}>Registrar Animal</button>
        </Link>
        <Link to="/ver-animales" style={linkStyle}>
          <button style={buttonStyle}>Ver Animales</button>
        </Link>
      </div>
    </div>
  );
}

// Estilos
const containerStyle = {
  textAlign: "center",
  padding: "40px 20px",
  backgroundColor: "#b5e1a5",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const titleStyle = {
  color: "#126636",
  fontSize: "2rem",
  marginBottom: "40px",
  fontWeight: "700",
};

const buttonContainerStyle = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: "20px",
  maxWidth: "600px",
  width: "100%",
};

const linkStyle = {
  textDecoration: "none",
  width: "calc(50% - 20px)", // Dos columnas con espacio entre
};

const buttonStyle = {
  backgroundColor: "#126636",
  color: "white",
  padding: "15px 0",
  borderRadius: "10px",
  border: "none",
  width: "100%",
  fontSize: "1.1rem",
  fontWeight: "600",
  cursor: "pointer",
  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  transition: "background-color 0.3s ease, transform 0.2s ease",
};

buttonStyle[":hover"] = {
  backgroundColor: "#0f4d27",
  transform: "scale(1.05)",
};

// Como React no soporta ':hover' en objetos de estilo inline, si quieres efectos hover
// deberías usar CSS o styled-components. Pero para simplicidad aquí, puedes agregar un simple efecto:

export default Menu;
