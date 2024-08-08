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
    <div className="grid grid-cols-5 gap-4 overflow-hidden">
      {productos.map((producto: any) => (
        <Card key={producto.producto_Id}>
          <CardHeader>{producto.nombre}</CardHeader>
          <CardContent>
            <Image height={120} width={120} className="h-32 hover:w-[130px] hover:h-36 transition-all duration-300 opacity-80 hover:opacity-100 ml-7" src={producto.imagen ?? ''} alt={producto.nombre} />
            <p className="mt-4 text-xl">{producto.precio}</p>
            <p>{producto.descripcion}</p>
            <p className='text-sm'>Cantidad: {producto.stock}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default BarNew;
