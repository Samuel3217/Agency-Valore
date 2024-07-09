import prisma from "@/lib/prisma";
import { Button, buttonVariants } from "@/components/ui/button";
import { DeletePromocion } from "./promocionAction";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import { z } from "zod";

const promocionSchema = z.object({
  productoPromo_Id: z.number(),
  producto_Id: z.number(),
  promocion_Id: z.number(),

});

type Promocion = z.infer<typeof promocionSchema>;

export default async function TablaPromociones() {
  let Promocion: Promocion[] = [];

  try {
    const result = await prisma.producto_promocion.findMany();
    Promocion = result.map((producto_promocion) => {
      // Asegurarse de que createdAt sea una fecha válida o proporcionar un valor predeterminado

      return promocionSchema.parse({
        ...producto_promocion,
      });
    });
  } catch (error) {
    console.error("Error fetching or validating promotions:", error);
    return <div>Error loading promotions</div>;
  }

  if (!Array.isArray(Promocion) || !Promocion.length) {
    return <div>No promotions available</div>;
  }

  return (
    <Table className="mt-10">
      <TableCaption>Promociones disponibles</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Producto Id</TableHead>
          <TableHead>Promocion Id</TableHead>
          <TableHead>Imagen</TableHead>
          <TableHead>Acciones</TableHead>
          

        </TableRow>
      </TableHeader>
      <TableBody>
        {Promocion.map((producto_promocion) => (
          <TableRow key={producto_promocion.productoPromo_Id}>
            <TableCell className="font-medium">{producto_promocion.producto_Id}</TableCell>
            <TableCell>{producto_promocion.promocion_Id}</TableCell>

            <TableCell className="flex gap-3">
              <Link
                href={`editPromocion/${producto_promocion.productoPromo_Id}/edit`}
                className={buttonVariants({ variant: "secondary" })}
              >
                Editar
              </Link>
              <form action={DeletePromocion}>
                <input type="hidden" name="promocion_Id" value={producto_promocion.productoPromo_Id} />
                <Button variant="destructive">Delete</Button>
              </form>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
