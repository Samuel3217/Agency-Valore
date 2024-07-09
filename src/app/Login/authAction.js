"use server";

import prisma from "@/lib/prisma";
import bcrypt from "bcrypt";

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export async function loginHandler(req, res) {
  const { correo, password } = req.body;

  if (!correo || !password) {
    console.error("Correo y contraseña son obligatorios.");
    res.status(400).json({ error: "Correo y contraseña son obligatorios." });
    return;
  }

  try {
    console.log("Buscando usuario con correo:", correo);
    const user = await prisma.usuarios.findFirst({
      where: { correo },
    });

    if (user) {
      console.log("Usuario encontrado:", user);
      const passwordMatch = await bcrypt.compare(password, user.password);
      console.log("Resultado de comparación de contraseñas para usuario:", passwordMatch);
      if (passwordMatch) {
        console.log("Usuario autenticado");
        res.status(200).json({ redirect: '/' });
        return;
      }
    }

    console.log("Buscando empleado con correo:", correo);
    const employee = await prisma.empleados.findFirst({
      where: { correo }
    });

    if (employee) {
      console.log("Empleado encontrado:", employee);
      const passwordMatch = await bcrypt.compare(password, employee.contrase_a);
      console.log("Resultado de comparación de contraseñas para empleado:", passwordMatch);
      if (passwordMatch) {
        console.log("Empleado autenticado:", employee.empleado_Id);
        res.status(200).json({ redirect: '/adminProductos' });
        return;
      }
    }

    console.error("Credenciales inválidas.");
    res.status(401).json({ error: "Credenciales inválidas." });
  } catch (error) {
    console.error("Error en el proceso de login:", error);
    res.status(500).json({ error: "Hubo un problema al iniciar sesión. Por favor, inténtalo de nuevo más tarde." });
  }
}
