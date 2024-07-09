// /src/app/AdminProductos/productAction.tsx

"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";

export async function CreateUsuario(formData: FormData) {
  const nombre = formData.get("nombre")?.toString();
  const usuario = formData.get("usuario")?.toString();
  const correo = formData.get("correo")?.toString();
  const password = formData.get("password")?.toString();
  const direccion = formData.get("direccion")?.toString();
  const birthdayStr = formData.get("birthday")?.toString() ?? "";
  const birthday = birthdayStr ? new Date(birthdayStr) : undefined;
  

  if (!nombre || !usuario || !correo || !password || !direccion || !birthday) {
    console.error("Todos los campos son obligatorios.");
    return;
  }
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const newUser = await prisma.usuarios.create({
      data: {
        nombre,
        usuario,
        correo,
        password: hashedPassword,
        direccion,
        birthday,
      },
    });

    console.log("Nuevo usuario creado:", newUser);
  } catch (error) {
    console.error("Error al crear el usuario:", error);
    throw new Error("Hubo un problema al crear el usuario. Por favor, inténtalo de nuevo más tarde.");
  }

  redirect("/");
}

export async function DeleteUsuario(formData: FormData) {
  const usuario_IdStr = formData.get("usuario_Id")?.toString();
  if (!usuario_IdStr) {
    return;
  }

  const usuario_Id = parseInt(usuario_IdStr, 10);

  if (isNaN(usuario_Id)) {
    console.error("Invalid user ID");
    return;
  }

  await prisma.usuarios.delete({
    where: {
      usuario_Id: usuario_Id,
    },
  });
  revalidatePath("/adminProductos");
}
export async function UpdateUsuario(formData: FormData) {
  const usuario_Id = formData.get("usuario_Id")?.toString();
  const nombre = formData.get("nombre")?.toString();
  const usuario = formData.get("usuario")?.toString();
  const correo = formData.get("correo")?.toString();
  const password = formData.get("password")?.toString();
  const direccion = formData.get("direccion")?.toString();
  const birthdayStr = formData.get("birthday")?.toString() ?? "";
  const birthday = birthdayStr ? new Date(birthdayStr) : undefined;

  if (!usuario_Id || !nombre || !usuario || !correo || !password || !direccion || !birthday) {
    console.error("Todos los campos son obligatorios.");
    return;
  }
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    await prisma.usuarios.update({
      where: {
        usuario_Id: parseInt(usuario_Id, 10),
      },
      data: {
        nombre,
        usuario,
        correo,
        password: hashedPassword,
        direccion,
        birthday,
      },
    });

    console.log("Usuario actualizado:", usuario_Id);
  } catch (error) {
    console.error("Error al actualizar el usuario:", error);
    throw new Error("Hubo un problema al actualizar el usuario. Por favor, inténtalo de nuevo más tarde.");
  }

  redirect("/");
}