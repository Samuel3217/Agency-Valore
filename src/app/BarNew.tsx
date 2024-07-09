// /src/app/components/BarNew.tsx

import React from 'react';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import prisma from "@/lib/prisma";

interface BarnewProps {
  Limit?: number;
}

async function BarNew({ Limit }: BarnewProps): Promise<JSX.Element> {

  const takeValue = Limit ? parseInt(Limit.toString()) : undefined;

  const productos = await prisma.productos.findMany({
    take: takeValue,
    orderBy: { createdAt: 'desc' }
  });

  console.log(productos);

  if (!productos.length) {
    return <p>No hay productos disponibles.</p>;
  }

  return (
    <div className="grid grid-cols-5 gap-4 overflow-hidden">
      {productos.map((producto) => (
        <Card key={producto.producto_Id}>
          <CardHeader>{producto.nombre}</CardHeader>
          <CardContent>
            <img className="h-32 hover:h-40 transition-all duration-300 opacity-80 hover:opacity-100 ml-7" src={producto.imagen ?? ''} alt={producto.nombre} />
            <p className="mt-4 text-xl">{producto.precio}</p>
            <p>{producto.descripcion}</p>
            <p className='text-sm'>Cantidad: {producto.stock}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default BarNew;
