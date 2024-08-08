"use client";

import React, { useState } from 'react';
import BarOfertas from '../BarOfertas';
import { CardWithFormPromocion } from '../nuevaPromocion/formularioPromocion';
import { producto_promocion } from '@prisma/client';

const CrearOferta = () => {
  const [productos, setProductos] = useState<producto_promocion[]>([]);

  const handlePromocionCreatedOrUpdated = (newPromocion: producto_promocion) => {
    setProductos((prevProductos) => [
      ...prevProductos.filter(p => p.productoPromo_Id !== newPromocion.productoPromo_Id),
      newPromocion,
    ]);
  };

  return (
    <div>
      <CardWithFormPromocion onPromocionCreatedOrUpdated={handlePromocionCreatedOrUpdated} />
      <BarOfertas productos={productos} />
    </div>
  );
};
 
export default CrearOferta;
