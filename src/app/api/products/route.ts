// /src/app/api/products/route.ts

import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const limit = parseInt(searchParams.get('limit') ?? '10', 10);

  try {
    const productos = await prisma.productos.findMany({
      take: limit,
      orderBy: { createdAt: 'desc' }
    });
    return NextResponse.json(productos);
  } catch (error) {
    console.error('Error fetching productos:', error);
    return NextResponse.error();
  }
}
