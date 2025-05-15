import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BackButton from "./BackButton";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://13.217.181.207/api/usuarios/login/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: username,
            password: password,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        const token = data.access;
        localStorage.setItem("authToken", token);
        alert(`Bienvenido de nuevo, ${username}`);
        navigate("/menu");
      } else {
        alert("Credenciales incorrectas.");
      }
    } catch (error) {
      console.error("Error en login:", error);
      alert("Ocurrió un error al iniciar sesión.");
    }
  };

  return (
    <div style={containerStyle}>
      <div style={formContainerStyle}>
        <div
          style={{
            display: "flex",
            alignItems: "self-center",
            justifyItems: "center",
          }}
        >
          <div style={{ margin: "auto" }}>
            <BackButton />
          </div>

          <h2 style={titleStyle}>Iniciar Sesión</h2>
        </div>

        <form onSubmit={handleSubmit}>
          <div style={formGroupStyle}>
            <label htmlFor="username" style={labelStyle}>
              Correo electrónico
            </label>
            <input
              type="email"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={inputStyle}
              required
            />
          </div>

          <div style={formGroupStyle}>
            <label htmlFor="password" style={labelStyle}>
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={inputStyle}
              required
            />
          </div>

          <button type="submit" style={buttonStyle}>
            Iniciar Sesión
          </button>
        </form>
      </div>
    </div>
  );
}

// 🎨 Estilos
const containerStyle = {
  height: "100vh",
  backgroundColor: "#b5e1a5",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const formContainerStyle = {
  backgroundColor: "#ffffff",
  padding: "40px",
  borderRadius: "12px",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
  width: "100%",
  maxWidth: "400px",
};

const titleStyle = {
  width: "100%",
  color: "#126636",
  textAlign: "center",
  marginBottom: "30px",
};

const formGroupStyle = {
  marginBottom: "20px",
};

const labelStyle = {
  display: "block",
  fontSize: "14px",
  color: "#126636",
  marginBottom: "6px",
};

const inputStyle = {
  width: "100%",
  padding: "10px",
  borderRadius: "6px",
  border: "1px solid #ccc",
  fontSize: "14px",
};

const buttonStyle = {
  backgroundColor: "#126636",
  color: "#fff",
  padding: "12px",
  borderRadius: "6px",
  border: "none",
  width: "100%",
  cursor: "pointer",
  fontSize: "16px",
};

export default Login;
