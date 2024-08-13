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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:ml-0 ml-[90px] overflow-hidden">
      {productos.map((producto: any) => (
        <Card key={producto.producto_Id} className="flex flex-col items-center  max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl p-4 sm:p-5 md:p-6 lg:p-1">
          <CardHeader className="text-center text-sm sm:text-base md:text-lg lg:text-xl">{producto.nombre}</CardHeader>
          <CardContent className="flex flex-col items-center w-full">
            <Image 
              height={100} 
              width={100} 
              className="h-24 w-24 hover:w-[110px] hover:h-28 transition-all duration-300 opacity-80 hover:opacity-100" 
              src={producto.imagen ?? ''} 
              alt={producto.nombre} 
            />
            <p className="mt-2 text-base sm:text-sm md:text-base lg:text-base">{producto.precio}</p>
            <p className="text-base sm:text-sm md:text-base lg:text-base text-center">{producto.descripcion}</p>
            <p className="text-base sm:text-sm md:text-base lg:text-base">Cantidad: {producto.stock}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
  
  
};

export default BarNew;
