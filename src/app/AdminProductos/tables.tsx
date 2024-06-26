import prisma from "@/lib/prisma";
import { Button, buttonVariants } from "@/components/ui/button";
import { DeleteProduct } from "./productAction";
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

const productSchema = z.object({
  producto_Id: z.number(),
  nombre: z.string(),
  descripcion: z.string().nullable(),
  precio: z.number(),
  imagen: z.string().nullable(),
  stock: z.number().nullable(),
  categoria_Id: z.number(),
  createdAt: z.date(),
});

type Product = z.infer<typeof productSchema>;

export default async function TablaProductos() {
  let productos: Product[] = [];

  try {
    const result = await prisma.productos.findMany();
    productos = result.map((producto) => {
      // Asegurarse de que createdAt sea una fecha válida o proporcionar un valor predeterminado
      const createdAt = producto.createdAt ? new Date(producto.createdAt) : new Date();
      return productSchema.parse({
        ...producto,
        createdAt: createdAt,
      });
    });
  } catch (error) {
    console.error("Error fetching or validating products:", error);
    return <div>Error loading products</div>;
  }

  if (!Array.isArray(productos) || !productos.length) {
    return <div>No products available</div>;
  }

  return (
    <Table className="mt-10">
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
        {productos.map((productos) => (
          <TableRow key={productos.producto_Id}>
            <TableCell className="font-medium">{productos.nombre}</TableCell>
            <TableCell>{productos.precio}</TableCell>
            <TableCell>{productos.imagen}</TableCell>
            <TableCell>{productos.descripcion}</TableCell>
            <TableCell>
              <span>{productos.createdAt.toLocaleDateString()}</span>
            </TableCell>
            <TableCell className="flex gap-3">
              <Link
                href={`ProductoAdmin/${productos.producto_Id}/edit`}
                className={buttonVariants({ variant: "secondary" })}
              >
                Editar
              </Link>
              <form action={DeleteProduct}>
                <input type="hidden" name="producto_Id" value={productos.producto_Id} />
                <Button variant="destructive">Delete</Button>
              </form>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
