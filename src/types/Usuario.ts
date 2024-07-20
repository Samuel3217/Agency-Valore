// src/types/Usuario.ts
export interface Usuario {
    usuario_Id: number;
    nombre: string;
    usuario: string;
    correo: string;
    password: string;
    direccion: string;
    birthday: Date | null;
    imagen: string | null;
  }
  