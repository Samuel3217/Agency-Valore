"use server"
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import prisma from "@/lib/prisma";

interface BarOfertProps {
  Limit?: number;
}

async function BarOfertas( { Limit}: BarOfertProps ) {

  let takeValue = Limit ? parseInt( Limit.toString()) : undefined;

    const products = await prisma.product.findMany({
      take: takeValue,
      orderBy: {createAt: 'desc'}
    });
    console.log(products);

  return (
    
      <div className="grid grid-cols-5 gap-4 items-center justify-center overflow-hidden  ">
        {products.map((products) => (
          <Card key={products.id}>
            <CardHeader>{products.name}</CardHeader>
            <CardContent>
              <img className="h-32 hover:h-40 transition-all duration-300 opacity-80 hover:opacity-100" src={products.picture ?? ''}></img>
              <p className="mt-4 text-xl">
                {products.price}
                </p>
                <p>
                {products.description}
              </p>

            </CardContent>
          </Card>
        ))}
      </div>
  )
}

export default BarOfertas;
