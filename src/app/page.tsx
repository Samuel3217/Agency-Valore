"use client"

import Carousel from "./Carousel";
import Barra from "./bar";
import { Menu2 } from "./Menu2";
import Footer from "./footer";
import BarNew from "./BarNew";
import Link from "next/link";
import Image from "next/image";
import Head from 'next/head';
import BarOfertas from "./BarOfertas";
import { useEffect, useState } from 'react';

export default function Page() {
  const [offers, setOffers] = useState([]);

  const fetchOffers = async () => {
    const response = await fetch('/api/offers');
    const data = await response.json();
    setOffers(data);
  };

  useEffect(() => {
    fetchOffers();
  }, []);

  const images = [
    "/images/Tarjetas.jpg",
    "/images/diseño-marca.jpg",
    "/images/Diseños.jpg",
  ];

  return (
    <div className="flex-justify items-center">

      <Head>
        <title>Agencia Valore</title>
        <meta name="description" content="Bienvenido a Agencia Valore" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="mt-2 ml-2 w-[1325px]">
        <Barra />
      </div>
      <br/>

      <h1 className="h-10 w-[100px] ml-[545px] transition-all duration-300 font-light text-5xl text-center mt-4 font-sans hover:text-cyan-700">
        Bienvenidos
      </h1>

      <div className="bg-gray-250 font-light text-sm w-96 mt-10 text-center ml-auto mr-auto">
        A tu agencia, nos especializamos en: Publicidad, Marketing y Relaciones públicas 
        <div className="bg-gray-500">
        <Carousel images={images} width={400} height={400}/>
        </div>
        <br />
      </div>
      <br />

      <Menu2 />
      
      <div className="bg-white items-center text-5xl text-black flex justify-center ml-[70px]">
        <Image src="/images/envios.png" width={1100} height={20} alt="Envios a toda la republica" />
      </div>
      <br/>
      <Link
        className="items-center text-3xl font-sans ml-[625px] hover:text-cyan-700 transition-all duration-300"
        href="/Ofertas"
      >
        ¡¡Ofertas!!
      </Link>

      <div className="mt-10 ml-[50px] shadow-lg p-4 bg-gray-200 w-[1255px] rounded-lg">
        <BarOfertas Limit={2}/>
      </div>
      <br/>

      <div>
        <Link
          className="items-center text-3xl font-sans ml-[625px] mt-10 hover:text-cyan-700 transition-all duration-300"
          href="/Nuevos"
        >
          ¡¡Nuevos!!
        </Link>
      </div>

      <div className="mt-10 ml-[45px] shadow-lg p-4 bg-gray-200 w-[1255px] rounded-lg">
        <BarNew Limit={5}/>
      </div>

      <Footer />
    </div>
  );
}
