// src/middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import jwt from 'jsonwebtoken';
import prisma from '@/lib/prisma'; // Asegúrate de tener correctamente configurada la ruta a tu archivo Prisma

const JWT_SECRET = process.env.JWT_SECRET || 'your_secret_key';

export async function middleware(req: NextRequest) {
  const token = req.cookies.get('authToken');

  if (!token) {
    return NextResponse.redirect(new URL('/Login', req.url));
  }

  try {
    const decodedToken = jwt.verify(token, JWT_SECRET) as { correo: string, isEmployee?: boolean };

    // Buscar en la tabla de usuarios
    let user = await prisma.usuarios.findUnique({
      where: { correo: decodedToken.correo },
    });

    // Si no se encuentra en usuarios, buscar en empleados
    if (!user && decodedToken.isEmployee) {
      user = await prisma.empleados.findFirst({
        where: { correo: decodedToken.correo },
      });
    }

    if (user) {
      if (decodedToken.isEmployee) {
        // Si es empleado, redirigir a las páginas protegidas para empleados
        const protectedRoutes = ['/AdminProductos', '/AdminPromociones'];
        if (protectedRoutes.some(route => req.url.pathname.startsWith(route))) {
          return NextResponse.next();
        } else {
          return NextResponse.redirect(new URL('/Login', req.url));
        }
      } else {
        // Si no es empleado, puede seguir navegando
        return NextResponse.next();
      }
    } else {
      // Usuario no encontrado, redirigir a login
      return NextResponse.redirect(new URL('/Login', req.url));
    }
  } catch (error) {
    console.error('Error de verificación del token:', error);
    return NextResponse.redirect(new URL('/Login', req.url));
  }
}

export const config = {
  matcher: ['/AdminProductos', '/AdminPromociones'], // Añade aquí las rutas que quieres proteger
};
