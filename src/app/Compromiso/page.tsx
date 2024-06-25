import Image from "next/image";
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
      <div className="flex shadow-2xl mt-10 p-4 text">
        <p className="mt-4 text-center">
          Brindarle a todos nuestros clientes soluciones de mercadotecnia,
          publicidad y relaciones públicas, por medio de estrategias efectivas,
          útiles y funcionales, que les permita ver resultados reales.
          <br />
          <p className="text-2xl font-bold hover:text-cyan-500 transition-all duration-300 text-center mt-10">Nuestros valores</p>
          <ul className="items-center justify-center text-riight">
            <li className="hover:text-xl transition-all duration-300">Honestidad</li>
            <li className="hover:text-xl transition-all duration-300">Responsabilidad</li>
            <li className="hover:text-xl transition-all duration-300">Amor</li>
          </ul>
          <br />
          <p className="text-center opacity-95 text-2xl font-serif">Crezcamos juntos</p>
        </p>

        <Image
          src="/images/compromiso.jpg"
          alt="Imagen de un compromiso con nuestros clientes"
          width={350}
          height={200}
          className="ml-5"
        />
      </div>

      <Footer />
    </div>
  );
};

export default Page;
