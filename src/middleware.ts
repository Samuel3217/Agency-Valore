import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { jwtVerify } from 'jose';

const JWT_SECRET = process.env.JWT_SECRET || 'your_secret_key';
const secret = new TextEncoder().encode(JWT_SECRET);

export async function middleware(req: NextRequest) {
  const token = req.cookies.get('authToken')?.value; // Obtener el valor del token de la cookie

  console.log('Token obtenido de la cookie:', token); // Log para verificar el token obtenido

  if (!token) {
    return NextResponse.redirect(new URL('/Login', req.url)); // Redireccionar si no hay token
  }

  try {
    console.log('Tipo de token:', typeof token); // Verificar el tipo de token

    // Verificar y decodificar el token usando jose
    const { payload } = await jwtVerify(token, secret);

    console.log('Token verificado y decodificado:', payload); // Log para verificar el token decodificado

    const decodedToken = payload as { correo: string, isEmployee?: boolean };

    // Aquí se puede agregar una verificación adicional según sea necesario
    const currentPath = req.nextUrl.pathname;

    if (decodedToken.isEmployee && currentPath !== '/AdminProductos') {
      // Si es empleado y no está en la página de administración, redirigir a la página de administración
      return NextResponse.redirect(new URL('/AdminProductos', req.url));
    }

    // Continuar con la solicitud si el usuario es válido y no es empleado
    return NextResponse.next();
  } catch (error) {
    console.error('Error de verificación del token:', error);
    return NextResponse.redirect(new URL('/Login', req.url)); // Redireccionar si hay un error con el token
  }
}

export const config = {
  matcher: [], // Añade aquí las rutas que quieres proteger
};
