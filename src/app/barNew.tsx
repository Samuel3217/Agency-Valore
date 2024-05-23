import React from 'react'
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import prisma from "@/lib/prisma";

async function BarNew() {

    const nuevos = await prisma.nuevos.findMany({
      take:5,
      orderBy: {createAt: 'desc'}
    });
    console.log(nuevos);

  return (
    
      <div className="grid grid-cols-5 gap-4 overflow-hidden">
        {nuevos.map((nuevos) => (
          <Card key={nuevos.id}>
            <CardHeader>{nuevos.name}</CardHeader>
            <CardContent>
              <img className="h-32 hover:h-40 transition-all duration-300 opacity-80 hover:opacity-100" src={nuevos.picture ?? ''}></img>
              <p className="mt-4 text-xl">
                {nuevos.price}
                </p>
                <p>
                {nuevos.description}
              </p>

            </CardContent>
          </Card>
        ))}
      </div>
  )
}

export default BarNew;
