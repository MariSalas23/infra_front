import React, { useState, useEffect } from 'react';

function VerCampanas() {
  const [campañas, setCampañas] = useState([]);

  const apiUrl = 'http://13.217.181.207/api/vacunacion/campanas';

  useEffect(() => {
    const fetchCampanas = async () => {
      const token = localStorage.getItem('authToken');

      if (!token) {
        alert('No se ha encontrado el token de autenticación. Por favor, inicia sesión.');
        return;
      }

      try {
        const response = await fetch(apiUrl, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await response.json();

        if (response.ok) {
          setCampañas(data);
        } else {
          alert('Error al obtener las campañas');
        }
      } catch (error) {
        console.error('Error al obtener las campañas:', error);
        alert('Hubo un error al obtener las campañas');
      }
    };

    fetchCampanas();
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

