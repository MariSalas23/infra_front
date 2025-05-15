import React, { useEffect, useState } from "react";
import axios from "axios";
import BackButton from "./BackButton";

function FormularioVacunacion() {
  const [idAnimal, setIdAnimal] = useState("");
  const [idVacunador, setIdVacunador] = useState("");
  const [campaniaSeleccionada, setCampaniaSeleccionada] = useState("");
  const [fecha, setFecha] = useState("");
  const [campanias, setCampanias] = useState([]);

  const API_URL = "http://13.217.181.207/api/vacunacion/";
  const token = localStorage.getItem("authToken");

  useEffect(() => {
    if (!token) {
      alert("Por favor inicia sesión. No se encontró el token.");
      return;
    }

    const obtenerCampanias = async () => {
      try {
        const response = await axios.get(`${API_URL}campanas/`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setCampanias(response.data);
      } catch (error) {
        console.error("Error al obtener campañas:", error);
        alert("No se pudieron cargar las campañas.");
      }
    };

    obtenerCampanias();
  }, [token]);

  const limpiarFormulario = () => {
    setIdAnimal("");
    setIdVacunador("");
    setCampaniaSeleccionada("");
    setFecha("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!token) {
      alert("No hay token de autenticación. Inicia sesión.");
      return;
    }

    const datos = {
      id_animal: parseInt(idAnimal, 10),
      id_vacunador: parseInt(idVacunador, 10),
      id_campaña: parseInt(campaniaSeleccionada, 10),
      fecha,
    };

    try {
      const response = await axios.post(
        `${API_URL}vacunaciones/crear/`,
        datos,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Vacunación registrada exitosamente.");
      console.log("Respuesta:", response.data);
      limpiarFormulario();
    } catch (error) {
      console.error("Error al registrar vacunación:", error.response || error);
      alert("Error al registrar la vacunación. Verifica los datos.");
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

          <h2 style={{ textAlign: "center", color: "#126636", width: "100%" }}>
            Registrar Vacunación
          </h2>
        </div>

        <form onSubmit={handleSubmit}>
          <CampoTexto
            id="idAnimal"
            label="ID del Animal"
            value={idAnimal}
            onChange={setIdAnimal}
          />
          <CampoTexto
            id="idVacunador"
            label="ID del Vacunador"
            value={idVacunador}
            onChange={setIdVacunador}
          />
          <CampoSelect
            id="campania"
            label="Campaña de Vacunación"
            value={campaniaSeleccionada}
            onChange={setCampaniaSeleccionada}
            opciones={campanias}
          />
          <CampoFecha
            id="fecha"
            label="Fecha"
            value={fecha}
            onChange={setFecha}
          />
          <BotonSubmit texto="Registrar Vacunación" />
        </form>
      </div>
    </div>
  );
}

const CampoTexto = ({ id, label, value, onChange }) => (
  <div style={{ marginBottom: "10px" }}>
    <label htmlFor={id} style={labelStyle}>
      {label}
    </label>
    <input
      type="number"
      id={id}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      style={inputStyle}
      required
    />
  </div>
);

const CampoSelect = ({ id, label, value, onChange, opciones }) => (
  <div style={{ marginBottom: "10px" }}>
    <label htmlFor={id} style={labelStyle}>
      {label}
    </label>
    <select
      id={id}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      style={inputStyle}
      required
    >
      <option value="">Selecciona una campaña</option>
      {opciones.map((op) => (
        <option key={op.id} value={op.id}>
          {op.nombre}
        </option>
      ))}
    </select>
  </div>
);

const CampoFecha = ({ id, label, value, onChange }) => (
  <div style={{ marginBottom: "10px" }}>
    <label htmlFor={id} style={labelStyle}>
      {label}
    </label>
    <input
      type="date"
      id={id}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      style={inputStyle}
      required
    />
  </div>
);

const BotonSubmit = ({ texto }) => (
  <button
    type="submit"
    style={{
      backgroundColor: "#126636",
      color: "white",
      padding: "10px 20px",
      borderRadius: "4px",
      border: "none",
      width: "100%",
      cursor: "pointer",
    }}
  >
    {texto}
  </button>
);

// Estilos generales
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

const containerStyle = {
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#b5e1a5",
};

const formContainerStyle = {
  maxWidth: "600px",
  padding: "40px",
  width: "25%",
  backgroundColor: "#ffffff",
  borderRadius: "8px",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
};

export default FormularioVacunacion;
