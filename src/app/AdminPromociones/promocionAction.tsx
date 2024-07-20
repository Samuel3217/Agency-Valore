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
    const newPromocion = await prisma.producto_promocion.create({
      data: {
        producto_Id,
        promocion_Id,
        imagen,
      },
    });

    console.log("Nueva promoción creada:", newPromocion);
    redirect("/");
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error al crear la promoción:", error.message);
      console.error("Detalles del error:", error);
      throw new Error(`Hubo un problema al crear la promoción: ${error.message}`);
    } else {
      console.error("Error desconocido al crear la promoción:", error);
      throw new Error("Hubo un problema desconocido al crear la promoción.");
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
  const productoPromo_Id = formData.get("producto_Id")?.toString();

  const productoStr = formData.get("comprar_cantidad")?.toString() ?? "";
  const producto_Id = productoStr ? parseInt(productoStr, 10) : undefined;

  const promocionStr = formData.get("comprar_cantidad")?.toString() ?? "";
  const promocion_Id = promocionStr ? parseInt(promocionStr, 10) : undefined;

  const imagen = formData.get("imagen")?.toString();

  if (!productoPromo_Id || !producto_Id || !promocion_Id || !imagen) {
    return;
  }

  await prisma.producto_promocion.update({
    where: {
      productoPromo_Id: parseInt(productoPromo_Id, 10),
    },
    data: {
      producto_Id,
      promocion_Id,
      imagen,
    },
  });
}
