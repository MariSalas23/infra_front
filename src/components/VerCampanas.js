import React from 'react';

// Datos de ejemplo de campañas
const campañas = [
  {
    id: 1,
    nombre: 'Campaña Prueba',
    fechaInicio: '2023-06-01',
    fechaFin: '2023-06-30',
    estado: 'Activa',
  },
  // Aquí podrías agregar más campañas si fuera necesario
];

function VerCampanas() {
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
