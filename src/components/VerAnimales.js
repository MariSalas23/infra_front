import React from 'react';

// Datos de ejemplo de animales
const animales = [
  { id: 'A123', especie: 'Bovino', fechaNacimiento: '2020-04-10', sexo: 'Macho', finca: 'Finca 1', municipio: 'Municipio 1', region: 'Región 1' },
  { id: 'A124', especie: 'Porcino', fechaNacimiento: '2021-05-12', sexo: 'Hembra', finca: 'Finca 2', municipio: 'Municipio 2', region: 'Región 2' },
  { id: 'A125', especie: 'Bovino', fechaNacimiento: '2019-08-22', sexo: 'Macho', finca: 'Finca 3', municipio: 'Municipio 3', region: 'Región 3' },
  // Puedes agregar más animales aquí
];

function VerAnimales() {
  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ textAlign: 'center', color: '#126636' }}>Lista de Animales</h2>
      
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
        {animales.length > 0 ? (
          animales.map((animal) => (
            <div
              key={animal.id}
              style={{
                width: '300px',
                padding: '20px',
                backgroundColor: '#ffffff',
                borderRadius: '8px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              }}
            >
              <h3 style={{ color: '#126636' }}>{`ID: ${animal.id}`}</h3>
              <p><strong>Especie:</strong> {animal.especie}</p>
              <p><strong>Fecha de Nacimiento:</strong> {animal.fechaNacimiento}</p>
              <p><strong>Sexo:</strong> {animal.sexo}</p>
              <p><strong>Finca:</strong> {animal.finca}</p>
              <p><strong>Municipio:</strong> {animal.municipio}</p>
              <p><strong>Región:</strong> {animal.region}</p>
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
