// File: pages/compromiso.tsx

import Image from "next/image";
import React from "react";
import Footer from "../footer";
import { Menu2 } from "../Menu2";
import Barra from "../bar";

const Page = () => {
  return (
    <div className="container mx-auto p-4 flex-justify items-center">
      <div className="mt-[-20px]">
        <Barra />
      </div>
      <Menu2 />
      <h1 className="text-3xl font-bold hover:text-cyan-500 transition-all duration-300 text-center mt-10">
        Nuestro Compromiso
      </h1>
      <div className="flex shadow-2xl mt-10 p-4">
        <p className="mt-4 text-justify">
          En Valore, nos dedicamos a ayudar a empresas, microempresas y
          establecimientos menos formales a alcanzar la visibilidad que merecen.
          Entendemos la importancia de destacar en un mercado competitivo, y es
          por eso que ofrecemos soluciones creativas y efectivas en publicidad y
          diseño. Nuestra misión es proporcionar herramientas de publicidad
          accesibles y de alta calidad, como lonas, viniles y otros materiales
          promocionales, que permitan a nuestros clientes atraer a más clientes
          y crecer sus negocios.
          <br />
          Nos comprometemos a trabajar mano a mano con cada cliente para
          entender sus necesidades únicas y proporcionar soluciones
          personalizadas que se adapten a sus objetivos. Creemos que cada
          negocio, sin importar su tamaño, tiene el potencial de brillar. Por
          ello, en Valore nos esforzamos por ofrecer un servicio de excelencia,
          utilizando materiales de alta calidad y técnicas innovadoras para
          garantizar que cada proyecto sea un éxito. Nuestro equipo de
          profesionales está siempre dispuesto a brindar asesoramiento y apoyo
          en cada etapa del proceso, asegurando que el resultado final supere
          las expectativas. Con Valore, tu éxito es nuestro compromiso.{" "}
        </p>

        <Image
          src="/images/compromiso.jpg"
          alt="Imagen de un compromiso con nuestros clientes"
          width={350}
          height={200}
          className="ml-5"
        ></Image>
      </div>

      <Footer />
    </div>
  );
};

export default Page;
