import React, { useEffect, useState } from "react";
import axios from "axios"; // Importa axios para realizar solicitudes HTTP

function Formulario() {
  const [idAnimal, setIdAnimal] = useState("");
  const [idVacunador, setIdVacunador] = useState("");
  const [campania, setCampania] = useState("");
  const [fecha, setFecha] = useState("");
  const [itemCampania, setItemCampania] = useState([]);

  // URL de la API (reemplaza con la URL real de tu API)
  const apiUrl = "http://13.217.181.207/api/vacunacion/vacunaciones/crear/"; // URL de la API proporcionada

  // Obtén el token de alguna fuente (localStorage, etc.)
  const token = localStorage.getItem("authToken"); // Suponiendo que lo guardas en localStorage

  useEffect(() => {
    const fetchCampanias = async () => {
      // Verifica si el token existe
      if (!token) {
        alert(
          "No se ha encontrado el token de autenticación. Por favor, inicia sesión."
        );
        return;
      }

      try {
        const response = await axios.get(`${apiUrl}/campanas/`, {
          headers: {
            Authorization: `Bearer ${token}`, // Usa el token real en el encabezado
          },
        });
        setItemCampania(response.data);
      } catch (error) {
        console.error("Error al obtener las campañas:", error);
        alert("No se pudieron cargar las campañas.");
      }
    };

    fetchCampanias();
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();

    // Crear el objeto con los datos para enviar a la API
    const datosVacunacion = {
      id_animal: Number(idAnimal),
      id_vacunador: Number(idVacunador),
      id_campaña: Number(campania),
      fecha,
    };
    console.log("Datos de vacunación:", datosVacunacion);

    // Verifica si el token existe
    if (!token) {
      alert(
        "No se ha encontrado el token de autenticación. Por favor, inicia sesión."
      );
      return;
    }

    // Realizar la solicitud POST a la API usando axios
    axios
      .post(apiUrl, datosVacunacion, {
        headers: {
          Authorization: `Bearer ${token}`, // Usa el token real en el encabezado
        },
      })
      .then((response) => {
        alert("Vacunación registrada exitosamente");
        console.log(response.data); // Respuesta de la API
      })
      .catch((error) => {
        console.error("Error al registrar la vacunación:", error);
        alert("Error al registrar la vacunación");
      });

    // Limpiar los campos después de enviar el formulario
    setIdAnimal("");
    setIdVacunador("");
    setCampania("");
    setFecha("");
  };

  return (
    <div style={containerStyle}>
      <div style={formContainerStyle}>
        <h2 style={{ textAlign: "center", color: "#126636" }}>
          Registro de Vacunaciones
        </h2>
        <form onSubmit={handleSubmit}>
          {/* ID del Animal */}
          <div style={{ marginBottom: "10px" }}>
            <label htmlFor="idAnimal" style={labelStyle}>
              ID del Animal
            </label>
            <input
              type="text"
              id="idAnimal"
              value={idAnimal}
              onChange={(e) => setIdAnimal(e.target.value)}
              style={inputStyle}
              required
            />
          </div>

          {/* ID del Vacunador */}
          <div style={{ marginBottom: "10px" }}>
            <label htmlFor="idVacunador" style={labelStyle}>
              ID del Vacunador
            </label>
            <input
              type="text"
              id="idVacunador"
              value={idVacunador}
              onChange={(e) => setIdVacunador(e.target.value)}
              style={inputStyle}
              required
            />
          </div>

          {/* Campaña de Vacunación */}
          <div style={{ marginBottom: "10px" }}>
            <label htmlFor="campania" style={labelStyle}>
              Campaña de Vacunación
            </label>
            <select
              id="campania"
              value={campania}
              onChange={(e) => setCampania(e.target.value)}
              style={inputStyle}
              required
            >
              <option value="">Selecciona una campaña</option>
              {itemCampania.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.nombre}
                </option>
              ))}
            </select>
          </div>

          {/* Fecha */}
          <div style={{ marginBottom: "10px" }}>
            <label htmlFor="fecha" style={labelStyle}>
              Fecha
            </label>
            <input
              type="date"
              id="fecha"
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
              style={inputStyle}
              required
            />
          </div>

          {/* Botón de Enviar */}
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
            Enviar Vacunación
          </button>
        </form>
      </div>
    </div>
  );
}

// Estilos de los elementos
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

// Estilo para centrar el contenedor verticalmente
const containerStyle = {
  height: "100vh", // Ocupa toda la altura de la pantalla
  display: "flex",
  justifyContent: "center", // Centra horizontalmente
  alignItems: "center", // Centra verticalmente
  backgroundColor: "#b5e1a5",
};

const formContainerStyle = {
  maxWidth: "600px",
  padding: "20px",
  backgroundColor: "#ffffff",
  borderRadius: "8px",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
};

export default Formulario;
