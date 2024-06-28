import React from 'react'
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import prisma from "@/lib/prisma";

interface BarnewProps {
  Limit?: number;
}

async function BarNew( { Limit }: BarnewProps ) {

  let takeValue = Limit ? parseInt(Limit.toString()) : undefined;

    const productos = await prisma.productos.findMany({
      take:takeValue,
      orderBy: {createdAt: 'desc'}
    });
    console.log(productos);

  return (
    
      <div className="grid grid-cols-5 gap-4 overflow-hidden">
        {productos.map((productos) => (
          <Card key={productos.producto_Id }>
            <CardHeader>{productos.nombre}</CardHeader>
            <CardContent>
              <img className="h-32 hover:h-40 transition-all duration-300 opacity-80 hover:opacity-100 ml-7" src={productos.imagen ?? ''}></img>
              <p className="mt-4 text-xl">
                {productos.precio}
                </p>
                <p>
                {productos.descripcion}
              </p>

            </CardContent>
          </Card>
        ))}
      </div>
  )
}

export default BarNew;
