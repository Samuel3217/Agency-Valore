// api/login/route.ts

import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import prisma from '@/lib/prisma';

const JWT_SECRET = process.env.JWT_SECRET || 'your_secret_key';

// Definición del tipo User
type User = {
  usuario_Id?: number;
  nombre?: string;
  usuario?: string;
  correo: string;
  password: string;
  direccion?: string;
  birthday?: Date | null;
  isEmployee?: boolean;
};

export async function POST(req: NextRequest) {
  try {
    console.log('Inicio de sesión: solicitud recibida');
    const { correo, password } = await req.json();

    if (!correo || !password) {
      console.log('Error: campos incompletos');
      return NextResponse.json({ error: 'Por favor, llena todos los campos' }, { status: 400 });
    }

    // Buscar en la tabla de usuarios
    let user: User | null = await prisma.usuarios.findUnique({
      where: { correo: correo },
    });
    console.log('Usuario encontrado:', user);

    // Si no se encuentra en usuarios, buscar en empleados
    if (!user) {
      console.log('Usuario no encontrado en tabla usuarios, buscando en empleados...');
      const employee = await prisma.empleados.findFirst({
        where: { correo: correo },
      });

      console.log('Empleado encontrado:', employee);
      if (employee) {
        user = {
          correo: employee.correo,
          password: employee.contrase_a, // Usa el nombre del campo Prisma
          isEmployee: true,
        };
      }
    }

    console.log('Usuario final:', user);
    if (user) {
      const isMatch = await bcrypt.compare(password, user.password);
      console.log('Contraseña comparada:', isMatch);
      if (isMatch) {
        // Generar el token JWT
        const token = jwt.sign({ correo: user.correo, isEmployee: user.isEmployee }, JWT_SECRET, { expiresIn: '1h' });

        // Configurar la cookie
        const cookie = `authToken=${token}; HttpOnly; Path=/; Max-Age=3600`;

        // Redirección basada en el tipo de usuario
        const redirectUrl = user.isEmployee ? '/AdminProductos' : '/';

        console.log('Inicio de sesión exitoso, redireccionando a:', redirectUrl);
        return NextResponse.json({ message: 'Inicio de sesión exitoso', redirect: redirectUrl }, {
          headers: { 'Set-Cookie': cookie }
        });
        
      } else {
        console.log('Error: contraseña incorrecta');
        return NextResponse.json({ error: 'Contraseña o correo incorrectos' }, { status: 401 });
      }
    } else {
      console.log('Error: usuario no encontrado');
      return NextResponse.json({ error: 'Contraseña o correo incorrectos' }, { status: 404 });
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error de autenticación:', {
        message: error.message,
        stack: error.stack,
      });
    } else {
      console.error('Error de autenticación desconocido:', error);
    }
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}
