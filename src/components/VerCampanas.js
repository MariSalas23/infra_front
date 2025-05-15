import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Importa axios para realizar solicitudes HTTP

function VerCampanas() {
  // Estado para almacenar las campañas obtenidas desde la API
  const [campañas, setCampañas] = useState([]);

  // URL de la API para obtener las campañas (ajusta según la ruta correcta)
  const apiUrl = 'http://13.217.181.207/api/campañas'; // Reemplaza con la URL real de tu API

  // Función para obtener campañas desde la API
  const obtenerCampanas = async () => {
    try {
      const token = localStorage.getItem('authToken'); // Obtén el token desde localStorage
      if (!token) {
        alert('No se ha encontrado el token de autenticación. Por favor, inicia sesión.');
        return;
      }

      const response = await axios.get(apiUrl, {
        headers: {
          Authorization: `Bearer ${token}`, // Usa el token real en el encabezado
        },
      });

      setCampañas(response.data); // Guarda las campañas obtenidas de la API
    } catch (error) {
      console.error('Error al obtener las campañas:', error);
      alert('Hubo un error al obtener las campañas');
    }
  };

  // Llamar a la API cuando el componente se monta
  useEffect(() => {
    obtenerCampanas();
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ textAlign: 'center', color: '#126636' }}>Ver Campañas</h2>
      
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
        {campañas.map((campaña) => (
          <div
            key={campaña.id}
            style={{
              width: '300px',
              padding: '20px',
              backgroundColor: '#ffffff',
              borderRadius: '8px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            }}
          >
            <h3 style={{ color: '#126636' }}>{campaña.nombre}</h3>
            <p><strong>Fecha de Inicio:</strong> {campaña.fechaInicio}</p>
            <p><strong>Fecha de Fin:</strong> {campaña.fechaFin}</p>
            <p><strong>Estado:</strong> {campaña.estado}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VerCampanas;
