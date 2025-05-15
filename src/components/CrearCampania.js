import { useState } from "react";
import BackButton from "./BackButton";

function CrearCampania() {
  const [nombre, setNombre] = useState("");
  const [fechaInicio, setFechaInicio] = useState("");
  const [fechaFin, setFechaFin] = useState("");
  const [estado, setEstado] = useState("");

  const token = localStorage.getItem("authToken");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!token) {
      alert("No se encontró el token. Inicia sesión.");
      return;
    }

    if (fechaInicio > fechaFin) {
      alert("La fecha de inicio no puede ser posterior a la fecha de fin.");
      return;
    }

    try {
      const response = await fetch(
        "http://13.217.181.207/api/vacunacion/campañas/crear/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            nombre,
            fecha_inicio: fechaInicio,
            fecha_fin: fechaFin,
            estado,
          }),
        }
      );

      if (response.ok) {
        alert("Campaña registrada exitosamente");
        // Limpiar formulario
        setNombre("");
        setFechaInicio("");
        setFechaFin("");
        setEstado("");
      } else {
        const errorData = await response.json();
        console.error("Error:", errorData);
        alert("Ocurrió un error al registrar la campaña.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error de conexión con el servidor.");
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

          <h2 style={tituloStyle}>Crear Campaña de Vacunación</h2>
        </div>

        <form onSubmit={handleSubmit}>
          <Campo
            id="nombre"
            texto="Nombre de la campaña"
            valor={nombre}
            setValor={setNombre}
          />
          <Campo
            id="fechaInicio"
            texto="Fecha de inicio"
            valor={fechaInicio}
            setValor={setFechaInicio}
            tipo="date"
          />
          <Campo
            id="fechaFin"
            texto="Fecha de fin"
            valor={fechaFin}
            setValor={setFechaFin}
            tipo="date"
          />
          <Select
            id="estado"
            texto="Estado"
            valor={estado}
            setValor={setEstado}
            opciones={[
              { valor: "", texto: "Selecciona el estado" },
              { valor: "activa", texto: "Activa" },
              { valor: "finalizada", texto: "Finalizada" },
              { valor: "cancelada", texto: "Cancelada" },
            ]}
          />
          <button type="submit" style={botonStyle}>
            Crear Campaña
          </button>
        </form>
      </div>
    </div>
  );
}

function Campo({ id, texto, valor, setValor, tipo = "text" }) {
  return (
    <div style={{ marginBottom: "12px" }}>
      <label htmlFor={id} style={labelStyle}>
        {texto}
      </label>
      <input
        id={id}
        type={tipo}
        value={valor}
        onChange={(e) => setValor(e.target.value)}
        style={inputStyle}
        required
      />
    </div>
  );
}

function Select({ id, texto, valor, setValor, opciones }) {
  return (
    <div style={{ marginBottom: "12px" }}>
      <label htmlFor={id} style={labelStyle}>
        {texto}
      </label>
      <select
        id={id}
        value={valor}
        onChange={(e) => setValor(e.target.value)}
        style={inputStyle}
        required
      >
        {opciones.map((opt) => (
          <option key={opt.valor} value={opt.valor}>
            {opt.texto}
          </option>
        ))}
      </select>
    </div>
  );
}

const tituloStyle = {
  textAlign: "center",
  color: "#126636",
  width: "80%",
  marginBottom: "20px",
};

const labelStyle = {
  display: "block",
  fontSize: "14px",
  color: "#126636",
  marginBottom: "4px",
};

const inputStyle = {
  width: "100%",
  padding: "10px",
  borderRadius: "4px",
  border: "1px solid #ccc",
};

const botonStyle = {
  backgroundColor: "#126636",
  color: "#fff",
  padding: "12px",
  borderRadius: "4px",
  border: "none",
  width: "100%",
  fontWeight: "bold",
  cursor: "pointer",
  marginTop: "16px",
};

const containerStyle = {
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#b5e1a5",
};

const formContainerStyle = {
  width: "100%",
  maxWidth: "500px",
  padding: "30px",
  backgroundColor: "#fff",
  borderRadius: "10px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
};

export default CrearCampania;
