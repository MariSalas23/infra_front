import React, { useState } from "react";
import API_BASE_URL from "../baseApi"; // Ruta a tu archivo de configuración
import BackButton from "./BackButton";

function GestionAnimales() {
  const [codigoIdentificacion, setCodigoIdentificacion] = useState("");
  const [especie, setEspecie] = useState("");
  const [fechaNacimiento, setFechaNacimiento] = useState("");
  const [sexo, setSexo] = useState("");
  const [finca, setFinca] = useState("");
  const [municipio, setMunicipio] = useState("");
  const [region, setRegion] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("authToken");
    if (!token) {
      alert(
        "No se ha encontrado el token de autenticación. Por favor, inicia sesión."
      );
      return;
    }

    const nuevoAnimal = {
      codigo_identificacion: codigoIdentificacion,
      especie,
      fecha_nacimiento: fechaNacimiento,
      sexo,
      finca,
      municipio,
      región: region,
    };

    try {
      const response = await fetch(`${API_BASE_URL}animal/animales/crear/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(nuevoAnimal),
      });

      if (response.ok) {
        alert("Animal registrado exitosamente");
        limpiarFormulario();
      } else {
        const errorData = await response.json();
        console.error("Error en API:", errorData);
        alert("Error al registrar el animal. Intenta de nuevo.");
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
      alert("Error de conexión con la API.");
    }
  };

  const limpiarFormulario = () => {
    setCodigoIdentificacion("");
    setEspecie("");
    setFechaNacimiento("");
    setSexo("");
    setFinca("");
    setMunicipio("");
    setRegion("");
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

          <h3 style={subtitleStyle}>Registrar Nuevo Animal</h3>
        </div>
        <form onSubmit={handleSubmit}>
          <Campo
            texto="Código de Identificación"
            id="codigoIdentificacion"
            valor={codigoIdentificacion}
            setValor={setCodigoIdentificacion}
          />

          <SelectCampo
            texto="Especie"
            id="especie"
            valor={especie}
            setValor={setEspecie}
            opciones={[
              { value: "", label: "Selecciona Especie" },
              { value: "porcino", label: "Porcino" },
              { value: "bovino", label: "Bovino" },
            ]}
          />

          <Campo
            tipo="date"
            texto="Fecha de Nacimiento"
            id="fechaNacimiento"
            valor={fechaNacimiento}
            setValor={setFechaNacimiento}
          />

          <SelectCampo
            texto="Sexo"
            id="sexo"
            valor={sexo}
            setValor={setSexo}
            opciones={[
              { value: "", label: "Selecciona Sexo" },
              { value: "macho", label: "Macho" },
              { value: "hembra", label: "Hembra" },
            ]}
          />

          <Campo texto="Finca" id="finca" valor={finca} setValor={setFinca} />
          <Campo
            texto="Municipio"
            id="municipio"
            valor={municipio}
            setValor={setMunicipio}
          />
          <Campo
            texto="Región"
            id="region"
            valor={region}
            setValor={setRegion}
          />

          <button type="submit" style={buttonStyle}>
            Registrar Animal
          </button>
        </form>
      </div>
    </div>
  );
}

// Input text/date component reutilizable
function Campo({ texto, id, valor, setValor, tipo = "text" }) {
  return (
    <div style={fieldContainerStyle}>
      <label htmlFor={id} style={labelStyle}>
        {texto}
      </label>
      <input
        type={tipo}
        id={id}
        value={valor}
        onChange={(e) => setValor(e.target.value)}
        style={inputStyle}
        required
      />
    </div>
  );
}

// Select component reutilizable
function SelectCampo({ texto, id, valor, setValor, opciones }) {
  return (
    <div style={fieldContainerStyle}>
      <label htmlFor={id} style={labelStyle}>
        {texto}
      </label>
      <select
        id={id}
        value={valor}
        onChange={(e) => setValor(e.target.value)}
        style={selectStyle}
        required
      >
        {opciones.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
}

// Estilos

const containerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const formContainerStyle = {
  margin: "40px auto",
  maxWidth: "600px",
  width: "100%",
  padding: "40px",
  backgroundColor: "#ffffff",
  borderRadius: "10px",
  boxShadow: "0 6px 12px rgba(0,0,0,0.15)",
};

const titleStyle = {
  textAlign: "center",
  color: "#126636",
  fontSize: "2.2rem",
  fontWeight: "700",
  marginBottom: "30px",
};

const subtitleStyle = {
  width: "80%",
  color: "#126636",
  fontSize: "1.6rem",
  fontWeight: "600",
  marginBottom: "25px",
};

const fieldContainerStyle = {
  marginBottom: "18px",
};

const labelStyle = {
  display: "block",
  fontSize: "15px",
  color: "#126636",
  marginBottom: "6px",
  fontWeight: "600",
};

const inputStyle = {
  width: "100%",
  padding: "12px",
  borderRadius: "6px",
  border: "1.5px solid #b2d8a6",
  fontSize: "1rem",
  transition: "border-color 0.3s ease",
};

const selectStyle = {
  ...inputStyle,
  appearance: "none",
  backgroundColor: "white",
  cursor: "pointer",
};

const buttonStyle = {
  backgroundColor: "#126636",
  color: "white",
  padding: "14px 20px",
  borderRadius: "25px",
  border: "none",
  width: "100%",
  fontSize: "1.1rem",
  fontWeight: "700",
  cursor: "pointer",
  boxShadow: "0 5px 15px rgba(18, 102, 54, 0.4)",
  transition: "background-color 0.3s ease, transform 0.2s ease",
};

export default GestionAnimales;
