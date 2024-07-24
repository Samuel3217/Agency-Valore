// src/app/Login/UsuariosServer.tsx

import { PrismaClient } from '@prisma/client';
import { CardWithFormUsuarios } from './create';

const prisma = new PrismaClient();

async function UsuariosServer() {
  await prisma.$disconnect();

  // Renderiza el formulario sin un usuario para la creación
  return (
    <CardWithFormUsuarios usuario={undefined} />
  );
}

export default UsuariosServer;
