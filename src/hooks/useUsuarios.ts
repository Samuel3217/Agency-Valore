// src/hooks/useUsuarios.ts
import { useState, useEffect } from 'react';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export function useUsuarios() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    async function fetchUsuarios() {
      try {
        const usuariosData = await prisma.usuarios.findMany();
        setUsuarios(usuariosData);
      } catch (error) {
        console.error('Error fetching usuarios:', error);
      }
    }

    fetchUsuarios();

    // Cleanup function to disconnect Prisma client
    return () => {
      prisma.$disconnect();
    };
  }, []); // Empty dependency array ensures useEffect runs only once

  return { usuarios };
}
