import React, { useState, useEffect } from "react";
import BackButton from "./BackButton";

function VerCampanas() {
  const [campañas, setCampanas] = useState([]);

  useEffect(() => {
    const fetchCampanas = async () => {
      const token = localStorage.getItem("authToken");
      if (!token) {
        alert("No se ha encontrado el token. Por favor, inicia sesión.");
        return;
      }

      try {
        const response = await fetch(
          "http://13.217.181.207/api/vacunacion/campanas/",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) throw new Error("Error en la respuesta de la API");

        const data = await response.json();
        console.log("Campañas:", data);

        setCampanas(data);
      } catch (error) {
        console.error("Error al obtener las campañas.", error);
        alert("No se pudieron cargar las campañas.");
      }
    };

    fetchCampanas();
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
          Ver Campañas
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
        {campañas.map((campaña) => (
          <div
            key={campaña.id}
            style={{
              width: "300px",
              padding: "20px",
              backgroundColor: "#ffffff",
              borderRadius: "8px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            <h3 style={{ color: "#126636" }}>{campaña.nombre}</h3>
            <p>
              <strong>Fecha de Inicio:</strong> {campaña.fecha_inicio}
            </p>
            <p>
              <strong>Fecha de Fin:</strong> {campaña.fecha_fin}
            </p>
            <p>
              <strong>Estado:</strong> {campaña.estado}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VerCampanas;
