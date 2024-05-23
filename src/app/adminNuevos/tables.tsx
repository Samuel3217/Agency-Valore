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

export default async function TableNewProducts() {
    const products = await prisma.nuevos.findMany();
  
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
                {" "}
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