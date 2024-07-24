// /src/app/AdminProductos/productAction.tsx

"use server";

import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";

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

  try {
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

    console.log("Nuevo producto creado:", newProduct);

  } catch (error) {
    console.error("Error al crear el producto:", error);
    throw new Error("Hubo un problema al crear el producto. Por favor, inténtalo de nuevo más tarde.");
  }

  redirect("/"); // Usa redirect aquí fuera del bloque try-catch
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

  redirect("/AdminProductos")
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

  redirect("/");
}
