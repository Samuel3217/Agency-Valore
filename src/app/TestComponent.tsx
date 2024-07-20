// src/components/TestComponent.tsx
import React from 'react';
import { useUsuarios } from "../hooks/useUsuarios"

const TestComponent = () => {
  const { usuarios } = useUsuarios();

  return (
    <div>
      {usuarios.map(usuario => (
        <div key={usuario.usuario_Id}>
          <h2>{usuario.nombre}</h2>
          <p>{usuario.correo}</p>
        </div>
      ))}
    </div>
  );
};

export default TestComponent;
