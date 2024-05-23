import prisma from "@/lib/prisma";
import { Button, buttonVariants } from "@/components/ui/button";
import {Product_delete} from "./product_action";

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

export default async function TableOfertas() {
  const products = await prisma.product.findMany();

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
          <TableHead className="text-right">Acciones </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {products.map((products) => (
          <TableRow key={products.id}>
            <TableCell className="font-medium">{products.name}</TableCell>
            <TableCell>{products.price}</TableCell>
            <TableCell>{products.picture}</TableCell>
            <TableCell>{products.description}</TableCell>
            <TableCell>
              <span>{new Date(products.createAt).toLocaleDateString()}</span>
            </TableCell>
            <TableCell className="flex gap-3">
              {" "}
              <Link
                href={`product/${products.id}/edit`}
                className={buttonVariants({ variant: "secondary" })}
              >
                Editar
              </Link>
              <Product_delete productid={products.id} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
