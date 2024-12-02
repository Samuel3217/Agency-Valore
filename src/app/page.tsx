
import { Menu2 } from "./Menu2";
import Footer from "./footer";
import BarNew from "./BarNew";
import Link from "next/link";
import Head from "next/head";
import BarOfertas from "./BarOfertas";
import Image from "next/image";


export default function Page() {

  return (
    <div>
      <Head>
        <title>Agencia Valore</title>
        <meta name="description" content="Bienvenido a Agencia Valore" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-center mt-5 lg:mt-4 md:mt-4 sm:mt-4  transition-all duration-300 hover:text-cyan-700">
        Bienvenidos
      </h1>

      <div className="bg-gray-250 font-light text-sm w-full  flex flex-col justify-center mt-10 mx-auto p-4 ">
        <p className="text-center">
          A tu agencia, nos especializamos en: Publicidad, Marketing y
          Relaciones públicas
        </p>
        <div className=" mt-16 mx-auto ">
          <Image src="/images/diseño-marca.jpg" alt="diseños" width={400} height={300} />
        </div>
      </div>

      <Menu2 />

      <Link
        className=" flex justify-center mt-14 text-2xl sm:text-3xl font-sans hover:text-cyan-700 transition-all duration-300 mx-auto text-center "
        href="/Ofertas"
      >
        {" "}
        ¡¡Ofertas!!
      </Link>

      <div className="mt-10 w-full max-w-screen-lg mx-auto shadow-lg p-4 bg-gray-200 rounded-lg ">
        <BarOfertas Limit={2} />
      </div>

      <Link
        className="flex justify-center mt-14 text-2xl sm:text-3xl font-sans hover:text-cyan-700 transition-all duration-300 mx-auto text-center"
        href="/Nuevos"
      >
        ¡¡Nuevos!!
      </Link>

      <div className="mt-10 w-full max-w-screen-lg mx-auto shadow-lg p-4 bg-gray-200 rounded-lg">
        <BarNew Limit={5} />
      </div>

      <Footer />
    </div>
  );
}
