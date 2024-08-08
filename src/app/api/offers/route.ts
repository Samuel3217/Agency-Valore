import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma'; // Asegúrate de importar tu instancia de Prisma

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const limit = searchParams.get('limit') || '10'; // Valor por defecto

  try {
    const ofertas = await prisma.producto_promocion.findMany({
      take: Number(limit),
      orderBy: {
        productoPromo_Id: 'desc'
      }
    });
    return NextResponse.json(ofertas);
  } catch (error) {
    console.error('Error fetching producto_promocion:', error);
    return NextResponse.json({ error: 'Error fetching producto_promocion' }, { status: 500 });
  }
}
