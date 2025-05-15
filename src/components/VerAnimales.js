import React, { useEffect, useState } from "react";
import BackButton from "./BackButton";

function VerAnimales() {
  const [animales, setAnimales] = useState([]);

  useEffect(() => {
    const fetchAnimales = async () => {
      const token = localStorage.getItem("authToken");
      if (!token) {
        alert("No se ha encontrado el token. Por favor, inicia sesión.");
        return;
      }

      try {
        const response = await fetch(
          "http://13.217.181.207/api/animal/animales/",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) throw new Error("Error en la respuesta de la API");

        const data = await response.json();
        console.log(data);

        setAnimales(data);
      } catch (error) {
        console.error("Error al obtener animales:", error);
        alert("No se pudieron cargar los animales.");
      }
    };

    fetchAnimales();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
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
          Lista de Animales
        </h2>
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        {animales.length > 0 ? (
          animales.map((animal) => (
            <div
              key={animal.id}
              style={{
                width: "300px",
                padding: "20px",
                backgroundColor: "#ffffff",
                borderRadius: "8px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              }}
            >
              <h3
                style={{ color: "#126636" }}
              >{`ID: ${animal.codigo_identificacion}`}</h3>
              <p>
                <strong>Especie:</strong> {animal.especie}
              </p>
              <p>
                <strong>Fecha de Nacimiento:</strong> {animal.fecha_nacimiento}
              </p>
              <p>
                <strong>Sexo:</strong> {animal.sexo}
              </p>
              <p>
                <strong>Finca:</strong> {animal.finca}
              </p>
              <p>
                <strong>Municipio:</strong> {animal.municipio}
              </p>
              <p>
                <strong>Región:</strong> {animal.región}
              </p>
            </div>
          ))
        ) : (
          <p>No se encontraron animales registrados.</p>
        )}
      </div>
    </div>
  );
}

export default VerAnimales;
