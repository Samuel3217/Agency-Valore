import Carousel from "./Carousel";
import Barra from "./bar";
import { Menu2 } from "./Menu2";
import Footer from "./footer";
import BarNew from "./BarNew";
import Link from "next/link";
import Image from "next/image";
import Head from 'next/head';
import BarOfertas from "./BarOfertas";
import Carrusel from '../components/carrusel'

export default function Page() {
  const images = [
    "/images/Tarjetas.jpg",
    "/images/diseño-marca.jpg",
    "/images/Diseños.jpg",
  ];

  return (
    <div>
      <Head>
        <title>Agencia Valore</title>
        <meta name="description" content="Bienvenido a Agencia Valore" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="sm:w-[250px] sm:ml-[200px] md:w-[600px] md:ml-[100px] lg:w-[1335px] lg:ml-[-0px]">
        <Barra />
      </div>

      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-center mt-5 lg:mt-4 md:mt-4 sm:mt-4  transition-all duration-300 hover:text-cyan-700">
        Bienvenidos
      </h1>

      <div className="bg-gray-250 font-light text-sm w-full max-w-screen-md flex flex-col justify-center mt-10 mx-auto p-4 ">
        <p className="text-center">A tu agencia, nos especializamos en: Publicidad, Marketing y Relaciones públicas</p>
        <div className=" mt-16 mx-auto">
        <Carousel images={images} width={400} height={400} />
        </div>
      </div>

      <Menu2 />

      <div className="bg-white text-black flex justify-center mt-10 px-4">
        <Image src="/images/envios.png" width={1100} height={20} alt="Envios a toda la republica" />
      </div>

      <Link
        className="text-2xl sm:text-3xl font-sans mt-10 hover:text-cyan-700 transition-all duration-300 mx-auto text-center lg:ml-[600px] ml-[180px]"
        href="/Ofertas"
      >
        ¡¡Ofertas!!
      </Link>

      <div className="mt-5 w-full max-w-screen-lg mx-auto shadow-lg p-4 bg-gray-200 rounded-lg ">
        <BarOfertas Limit={2} />
      </div>

      <Link
        className="text-2xl sm:text-3xl font-sans lg:mt-10 hover:text-cyan-700 transition-all duration-300 mx-auto lg:ml-[600px] ml-[180px]"
        href="/Nuevos"
      >
        ¡¡Nuevos!!
      </Link>

      <div className="mt-5 w-full max-w-screen-lg mx-auto shadow-lg p-4 bg-gray-200 rounded-lg">
        <BarNew Limit={5} />
      </div>

      <Footer  />
    </div>
  );
}
