// /src/app/BarNew.tsx

"use client";

import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from 'next/image';

interface BarnewProps {
  Limit?: number;
}

const BarNew: React.FC<BarnewProps> = ({ Limit }) => {
  const [productos, setProductos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const response = await fetch(`/api/products?limit=${Limit}`);
        if (!response.ok) {
          throw new Error('Error fetching productos');
        }
        const data = await response.json();
        setProductos(data);
      } catch (error) {
        console.error('Failed to fetch productos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductos();
  }, [Limit]);

  if (loading) {
    return <p>Cargando productos...</p>;
  }

  if (!productos.length) {
    return <p>No hay productos disponibles.</p>;
  }
  return (
    <div className="flex gap-5 flex-col lg:flex-row ">
      {productos.map((producto: any) => (
        <Card
          key={producto.producto_Id}
          className="flex flex-col  lg:flex-row items-center  w-auto"
        >
          <CardHeader className="text-2xl">
            <Image
              height={300}
              width={300}
              className="transition-all duration-300 opacity-80 hover:opacity-100"
              src={producto.imagen ?? ""}
              alt={producto.nombre}
            />
          </CardHeader>
          <CardContent className="flex flex-col text-xl items-center w-full">
            {producto.nombre}
            <p className="mt-2 text-base sm:text-sm md:text-base lg:text-base">
              {producto.precio}
            </p>
            <p className="text-base sm:text-sm md:text-base lg:text-base text-center">
              {producto.descripcion}
            </p>
            <p className="text-base sm:text-sm md:text-base lg:text-base">
              Cantidad: {producto.stock}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );


};

export default BarNew;
