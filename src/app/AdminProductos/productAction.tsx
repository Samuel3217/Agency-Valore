"use server";

import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export async function CreateProduct(formData: FormData) {
  const nombre = formData.get("nombre")?.toString();
  const descripcion = formData.get("descripcion")?.toString();
  const precioStr = formData.get("precio")?.toString() ?? "";
  const precio = parseFloat(precioStr);
  const imagen = formData.get("imagen")?.toString();
  
  const stockStr = formData.get("stock")?.toString() ?? "";
  const stock = stockStr ? parseInt(stockStr, 10) : undefined;
  
  const categoriaIdStr = formData.get("categoria_Id")?.toString() ?? "";
  const categoria_Id = categoriaIdStr ? parseInt(categoriaIdStr, 10) : undefined;
  
  const createdAtStr = formData.get("createdAt")?.toString() ?? "";
  const createdAt = createdAtStr ? new Date(createdAtStr) : undefined;

  if (!nombre || !descripcion || !precio || !imagen || !stock || !categoria_Id || !createdAt) {
    return;
  }

  const newProduct = await prisma.productos.create({
    data: {
      nombre,
      descripcion,
      precio,
      imagen,
      stock,
      categoria_Id,
      createdAt,
    },
  });

  console.log(newProduct);
  redirect("/");
}

export async function DeleteProduct(formData: FormData) {
  const producto_IdStr = formData.get("producto_Id")?.toString();
  if (!producto_IdStr) {
    return;
  }

  const producto_Id = parseInt(producto_IdStr, 10);

  if (isNaN(producto_Id)) {
    console.error("Invalid product ID");
    return;
  }

  await prisma.productos.delete({
    where: {
      producto_Id: producto_Id,
    },
  });
  revalidatePath("/adminProductos");
}

export async function UpdateProduct(formData: FormData) {
  const producto_Id = formData.get("producto_Id")?.toString();
  const nombre = formData.get("nombre")?.toString();
  const descripcion = formData.get("descripcion")?.toString();
  const precioStr = formData.get("precio")?.toString() ?? "";
  const precio = parseFloat(precioStr);
  const imagen = formData.get("imagen")?.toString();
  
  const stockStr = formData.get("stock")?.toString() ?? "";
  const stock = stockStr ? parseInt(stockStr, 10) : undefined;
  
  const categoriaIdStr = formData.get("categoria_Id")?.toString() ?? "";
  const categoria_Id = categoriaIdStr ? parseInt(categoriaIdStr, 10) : undefined;
  
  const createdAtStr = formData.get("createdAt")?.toString() ?? "";
  const createdAt = createdAtStr ? new Date(createdAtStr) : undefined;

  if (!producto_Id || !nombre || !precio || !imagen || !descripcion || !stock || !categoria_Id || !createdAt) {
    return;
  }

  await prisma.productos.update({
    where: {
      producto_Id: parseInt(producto_Id, 10),
    },
    data: {
      nombre,
      descripcion,
      precio,
      imagen,
      stock,
      categoria_Id,
      createdAt,
    },
  });

  redirect("/adminNuevos");
}
