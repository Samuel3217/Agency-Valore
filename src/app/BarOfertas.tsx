// /src/app/components/BarNew.tsx

import React from 'react';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import prisma from "@/lib/prisma";
import Image from 'next/image';

interface BarnOfertaProps {
  Limit?: number;
}

async function BarOfertas({ Limit }: BarnOfertaProps): Promise<JSX.Element> {

    const takeValue = Limit ? parseInt(Limit.toString()) : undefined;

  const producto_promocion = await prisma.producto_promocion.findMany({
    take: takeValue,
    orderBy: { productoPromo_Id: 'desc' }
  });

  console.log(producto_promocion);

  if (!producto_promocion.length) {
    return <p>No hay productos disponibles.</p>;
  }

  return (
    <div className="grid grid-cols-2 gap-4 overflow-hidden">
      {producto_promocion.map((producto_promocion: any) => (
        <Card key={producto_promocion.productoPromo_Id}>
          <CardContent className='w-[500px] h-[440px]'>
            <Image height={300} width={400} className="transition-all duration-300 opacity-80 hover:opacity-100 ml-12 mt-10 items-center" src={producto_promocion.imagen ?? ''} alt={producto_promocion.producto_Id} />
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default BarOfertas;
