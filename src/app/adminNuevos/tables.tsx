import prisma from "@/lib/prisma";
import { Button, buttonVariants } from "@/components/ui/button";
import { DeleteNewProduct } from "./new_actions";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import { z } from "zod";

const productSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string().nullable(),
  price: z.number(),
  picture: z.string().nullable(),
  createAt: z.string(),
  updatedAt: z.string(),
});

type Product = z.infer<typeof productSchema>;

export default async function TableNewProducts() {
  let products: Product[] = [];

  try {
    const result = await prisma.nuevos.findMany();
    products = result.map((product) => productSchema.parse(product));
  } catch (error) {
    console.error("Error fetching or validating products:", error);
    return <div>Error loading products</div>;
  }

  return (
    <Table>
      <TableCaption>Ofertas disponibles</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Nombre</TableHead>
          <TableHead>Precio</TableHead>
          <TableHead>Imagen</TableHead>
          <TableHead>Descripcion</TableHead>
          <TableHead>Fecha de creacion</TableHead>
          <TableHead className="text-right">Acciones</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {products.map((nuevos) => (
          <TableRow key={nuevos.id}>
            <TableCell className="font-medium">{nuevos.name}</TableCell>
            <TableCell>{nuevos.price}</TableCell>
            <TableCell>{nuevos.picture}</TableCell>
            <TableCell>{nuevos.description}</TableCell>
            <TableCell>
              <span>{new Date(nuevos.createAt).toLocaleDateString()}</span>
            </TableCell>
            <TableCell className="flex gap-3">
              <Link
                href={`nuevos/${nuevos.id}/edit`}
                className={buttonVariants({ variant: "secondary" })}
              >
                Editar
              </Link>
              <DeleteNewProduct nuevosid={nuevos.id} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
