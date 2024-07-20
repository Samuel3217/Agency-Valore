// src/app/Login/page.tsx

import React from 'react';
import Footer from "../footer";
import { Menu2 } from "../Menu2";
import Barra from "../bar";
import { LoginForm } from "@/app/Login/Login";
import UsuariosServer from './UsuariosServer';

const Page = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="mt-[-20px]">
        <Barra />
      </div>
      <Menu2 />

      <h1 className="text-3xl font-bold hover:text-cyan-500 transition-all duration-300 text-center mt-10">
        Crear o iniciar sesión
      </h1>

      <h3 className="text-center text-red-800">
        Los correos serán usados para fines de mandar recordatorios y seguimiento de pedidos
      </h3>
      <h3 className="text-center text-red-500">Y NADA MÁS</h3>

      <div className="grid grid-cols-2 gap-5 mt-10 ml-[250px]">
        <div>
          <UsuariosServer />
        </div>

        <div className="">
          <LoginForm />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Page;
