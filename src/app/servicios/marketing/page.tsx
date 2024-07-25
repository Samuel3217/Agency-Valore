import Barra from "@/app/bar";
import { Menu2 } from "@/app/Menu2";
import Footer from "@/app/footer";
import Image from "next/image";

function page() {
  return (
    <div>
      <div className="mt-2 ml-2 w-[1325px]">
        <Barra />
      </div>

      <h1 className="text-3xl font-bold hover:text-cyan-500 transition-all duration-300 text-center mt-10">
        Marketing digital
      </h1>

      <div>
        <p className="mt-10 text-xl ml-[380px] w-[600px] text-center items-center">
          Posicionamos tu marca o mensaje en los canales que mejor se adapten a
          tu segmento de mercado. Somos tu equipo experto en publicidad,
          relaciones públicas, medios digitales y estrategias de contenido.
        </p>
      </div>

      <Menu2 />
      <Footer />
    </div>
  );
}

export default page;
