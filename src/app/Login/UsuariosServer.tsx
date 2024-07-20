// src/app/Login/UsuariosServer.tsx

import { PrismaClient } from '@prisma/client';
import { Usuario } from '@/types/Usuario';
import { CardWithFormUsuarios }from './create';

const prisma = new PrismaClient();

async function UsuariosServer() {
  const usuarios: Usuario[] = await prisma.usuarios.findMany();
  await prisma.$disconnect();

  return (
    <CardWithFormUsuarios usuarios={usuarios} />
  );
}

export default UsuariosServer;
