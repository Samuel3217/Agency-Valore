import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import prisma from '../../../lib/prisma';

const JWT_SECRET = process.env.JWT_SECRET || 'your_secret_key';

export async function POST(req: NextRequest) {
  try {
    const { correo, password } = await req.json();

    if (!correo || !password) {
      return NextResponse.json({ error: 'Por favor, llena todos los campos' }, { status: 400 });
    }

    // Buscar en la tabla de usuarios
    let user = await prisma.usuarios.findUnique({
      where: { correo: correo },
    });

    // Si no se encuentra en usuarios, buscar en empleados
    if (!user) {
      const employee = await prisma.empleados.findFirst({
        where: { correo: correo },
      });

      if (employee) {
        user = {
          correo: employee.correo,
          password: employee.contrase_a,
          isEmployee: true,
        };
      }
    }

    if (user) {
      const isMatch = await bcrypt.compare(password, user.password || user.contrase_a);
      if (isMatch) {
        // Generar el token JWT
        const token = jwt.sign({ correo: user.correo, isEmployee: user.isEmployee }, JWT_SECRET, { expiresIn: '1h' });

        // Configurar la cookie
        const cookie = `authToken=${token}; HttpOnly; Path=/; Max-Age=3600`;

        return NextResponse.json({ message: 'Inicio de sesión exitoso', redirect: '/' }, {
          headers: { 'Set-Cookie': cookie }
        });
        
      } else {
        return NextResponse.json({ error: 'Contraseña incorrecta' }, { status: 401 });
      }
    } else {
      return NextResponse.json({ error: 'Usuario no encontrado' }, { status: 404 });
    }
  } catch (error) {
    console.error('Error de autenticación:', error);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}
