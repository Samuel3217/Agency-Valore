// src/app/AdminPromociones/promocionAction.tsx

"use server";

import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";

export async function CreatePromocion(formData: FormData) {
  const productoStr = formData.get("producto_Id")?.toString() ?? "";
  const producto_Id = productoStr ? parseInt(productoStr, 10) : undefined;

  const promocionStr = formData.get("promocion_Id")?.toString() ?? "";
  const promocion_Id = promocionStr ? parseInt(promocionStr, 10) : undefined;

  const imagen = formData.get("imagen")?.toString();

  console.log("Datos recibidos:");
  console.log("producto_Id:", producto_Id);
  console.log("promocion_Id:", promocion_Id);
  console.log("imagen:", imagen);

  if (!producto_Id || !promocion_Id || !imagen) {
    console.error("Faltan datos necesarios");
    return;
  }

  try {
    // Verificar si el producto existe
    const productoExists = await prisma.productos.findUnique({
      where: {
        producto_Id: producto_Id,
      },
    });

    if (!productoExists) {
      throw new Error("El producto con el ID especificado no existe.");
    }

    // Verificar si ya existe la promoción
    const existingPromocion = await prisma.producto_promocion.findUnique({
      where: {
        producto_Id_promocion_Id: {
          producto_Id,
          promocion_Id,
        },
      },
    });

    if (existingPromocion) {
      throw new Error("La promoción con el mismo producto y promoción ya existe.");
    }

    const newPromocion = await prisma.producto_promocion.create({
      data: {
        producto_Id,
        promocion_Id,
        imagen,
      },
    });

    console.log("Nueva promoción creada:", newPromocion);

    // Redirigir al usuario después de crear la promoción
    redirect("/");

  } catch (error) {
    if (error instanceof Error) {
      console.error("Error al crear la promoción:", error.message);
      console.error("Detalles del error:", error);
      // No lanzar excepción después de redirect
    } else {
      console.error("Error desconocido al crear la promoción:", error);
      // No lanzar excepción después de redirect
    }
  }
}


export async function DeletePromocion(formData: FormData) {
  const promocion_IdStr = formData.get("productoPromo_Id")?.toString();
  if (!promocion_IdStr) {
    return;
  }

  const productoPromo_Id = parseInt(promocion_IdStr, 10);

  if (isNaN(productoPromo_Id)) {
    console.error("Invalid promoción ID");
    return;
  }

  await prisma.producto_promocion.delete({
    where: {
      productoPromo_Id: productoPromo_Id,
    },
  });
}

export async function UpdatePromocion(formData: FormData) {
  const productoPromo_IdStr = formData.get("productoPromo_Id")?.toString();
  const productoPromo_Id = productoPromo_IdStr ? parseInt(productoPromo_IdStr, 10) : undefined;

  const productoStr = formData.get("producto_Id")?.toString() ?? "";
  const producto_Id = productoStr ? parseInt(productoStr, 10) : undefined;

  const promocionStr = formData.get("promocion_Id")?.toString() ?? "";
  const promocion_Id = promocionStr ? parseInt(promocionStr, 10) : undefined;

  const imagen = formData.get("imagen")?.toString();

  console.log("Datos recibidos para actualización:");
  console.log("productoPromo_Id:", productoPromo_Id);
  console.log("producto_Id:", producto_Id);
  console.log("promocion_Id:", promocion_Id);
  console.log("imagen:", imagen);

  if (!productoPromo_Id || !producto_Id || !promocion_Id || !imagen) {
    console.error("Faltan datos necesarios para la actualización");
    return;
  }

  try {
    const updatedPromocion = await prisma.producto_promocion.update({
      where: {
        productoPromo_Id: productoPromo_Id, // Mantener igual, no se actualiza
      },
      data: {
        producto_Id,
        promocion_Id,
        imagen,
      },
    });

    console.log("Promoción actualizada:", updatedPromocion);
    redirect("/");
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error al actualizar la promoción:", error.message);
      console.error("Detalles del error:", error);
    } else {
      console.error("Error desconocido al actualizar la promoción:", error);
    }
  }
}
