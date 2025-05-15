import React, { useState } from "react";
import API_BASE_URL from "../baseApi"; // Ruta a tu archivo de configuración

function GestionAnimales() {
  const [codigoIdentificacion, setCodigoIdentificacion] = useState("");
  const [especie, setEspecie] = useState("");
  const [fechaNacimiento, setFechaNacimiento] = useState("");
  const [sexo, setSexo] = useState("");
  const [finca, setFinca] = useState("");
  const [municipio, setMunicipio] = useState("");
  const [región, setRegion] = useState("");

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
      región,
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
        setCodigoIdentificacion("");
        setEspecie("");
        setFechaNacimiento("");
        setSexo("");
        setFinca("");
        setMunicipio("");
        setRegion("");
      } else {
        const errorData = await response.json();
        console.error("Error:", errorData);
        alert("Error al registrar el animal");
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
      alert("Error al conectar con la API");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ textAlign: "center", color: "#126636" }}>
        Gestión de Animales
      </h2>
      <div
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          padding: "40px",
          backgroundColor: "#ffffff",
          borderRadius: "8px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h3 style={{ color: "#126636" }}>Registrar Nuevo Animal</h3>
        <form onSubmit={handleSubmit}>
          <Campo
            texto="Código de Identificación"
            id="codigoIdentificacion"
            valor={codigoIdentificacion}
            setValor={setCodigoIdentificacion}
          />
          <div style={{ marginBottom: "10px" }}>
            <label htmlFor="especie" style={labelStyle}>
              Especie
            </label>
            <select
              id="especie"
              value={especie}
              onChange={(e) => setEspecie(e.target.value)}
              style={inputStyle}
              required
            >
              <option value="">Selecciona Especie</option>
              <option value="porcino">Porcino</option>
              <option value="bovino">Bovino</option>
            </select>
          </div>

          <Campo
            tipo="date"
            texto="Fecha de Nacimiento"
            id="fechaNacimiento"
            valor={fechaNacimiento}
            setValor={setFechaNacimiento}
          />
          <div style={{ marginBottom: "10px" }}>
            <label htmlFor="sexo" style={labelStyle}>
              Sexo
            </label>
            <select
              id="sexo"
              value={sexo}
              onChange={(e) => setSexo(e.target.value)}
              style={inputStyle}
              required
            >
              <option value="">Selecciona Sexo</option>
              <option value="macho">Macho</option>
              <option value="hembra">Hembra</option>
            </select>
          </div>
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
            valor={región}
            setValor={setRegion}
          />
          <button type="submit" style={botonStyle}>
            Registrar Animal
          </button>
        </form>
      </div>
    </div>
  );
}

function Campo({ texto, id, valor, setValor, tipo = "text" }) {
  return (
    <div style={{ marginBottom: "10px" }}>
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

const labelStyle = {
  display: "block",
  fontSize: "14px",
  color: "#126636",
};

const inputStyle = {
  width: "100%",
  padding: "10px",
  borderRadius: "4px",
  border: "1px solid #ccc",
  marginTop: "5px",
};

const botonStyle = {
  backgroundColor: "#126636",
  color: "white",
  padding: "10px 20px",
  borderRadius: "4px",
  border: "none",
  width: "100%",
  cursor: "pointer",
};

export default GestionAnimales;
