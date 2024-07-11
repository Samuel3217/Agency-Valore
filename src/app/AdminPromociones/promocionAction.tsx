// /src/app/AdminProductos/productAction.tsx

"use server";

import prisma from "@/lib/prisma";

export async function CreatePromocion(formData: FormData) {
  
    const productoStr = formData.get("producto_Id")?.toString() ?? "";
  const producto_Id = productoStr ? parseInt(productoStr, 10) : undefined;

  const promocionStr = formData.get("promocion_Id")?.toString() ?? "";
  const promocion_Id = promocionStr ? parseInt(promocionStr, 10) : undefined;
    

  if ( !producto_Id || !promocion_Id) {
    return;
  }

  try {
    const newPromocion = await prisma.producto_promocion.create({
      data: {
        producto_Id,
        promocion_Id,
      },
    });

    console.log("Nueva promocion creada:", newPromocion);

  } catch (error) {
    console.error("Error al crear la promocion:", error);
    throw new Error("Hubo un problema al crear la promocion. Por favor, inténtalo de nuevo más tarde.");
  }

}

export async function DeletePromocion(formData: FormData) {
  const promocion_IdStr = formData.get("productoPromo_Id")?.toString();
  if (!promocion_IdStr) {
    return;
  }

  const productoPromo_Id = parseInt(promocion_IdStr, 10);

  if (isNaN(productoPromo_Id)) {
    console.error("Invalid promocion ID");
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
  
  if (!productoPromo_Id || !producto_Id || !promocion_Id) {
    return;
  }

  await prisma.producto_promocion.update({
    where: {
      productoPromo_Id: parseInt(productoPromo_Id, 10),
    },
    data: {
        producto_Id,
        promocion_Id,
    },
  });

}
