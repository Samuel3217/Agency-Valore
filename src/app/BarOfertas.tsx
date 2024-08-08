"use client";

import React, { useEffect, useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import Image from 'next/image';

interface BarOfertasProps {
  productos?: any[];
  Limit?: number;
}

interface ProductoPromocion {
  productoPromo_Id: string;
  imagen?: string;
  producto_Id: string;
}

const BarOfertas: React.FC<BarOfertasProps> = ({ productos = [], Limit }) => {
  const [productList, setProductList] = useState<ProductoPromocion[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProductoPromocion = async () => {
    setLoading(true);
    try {
      const response = await fetch(`/api/offers?limit=${Limit}`);
      if (!response.ok) {
        throw new Error('Error fetching producto_promocion');
      }
      const data = await response.json();
      setProductList(data);
    } catch (error) {
      setError((error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProductoPromocion();
  }, [Limit]);

  useEffect(() => {
    // Solo actualiza productList si productos cambia
    if (productos.length > 0) {
      setProductList(productos);
    }
  }, [productos]);

  if (loading) return <p>Cargando ofertas...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 overflow-hidden">
      {productList.map((producto_promocion: ProductoPromocion) => (
        <Card key={producto_promocion.productoPromo_Id} className="flex flex-col items-center">
          <CardContent className='w-full md:w-[500px] h-[440px] flex items-center justify-center'>
            <Image 
              height={300} 
              width={400} 
              className="transition-all duration-300 opacity-80 hover:opacity-100" 
              src={producto_promocion.imagen ?? '/default-image.jpg'} 
              alt={`Producto ${producto_promocion.producto_Id}`} 
            />
          </CardContent>
        </Card>
      ))}
    </div>
  );
  
};

export default BarOfertas;
