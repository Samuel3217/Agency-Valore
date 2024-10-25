import Barra from "@/app/bar";
import { Menu2 } from "@/app/Menu2";
import Footer from "@/app/footer";
import Image from "next/image";

function page() {
  return (
    <div>
      <div className="sm:w-[250px] sm:ml-[200px] md:w-[600px] md:ml-[100px] lg:w-[1335px] lg:ml-[-0px]">
        <Barra />
      </div>

      <h1 className="text-3xl font-bold hover:text-cyan-500 transition-all duration-300 text-center mt-10">
        Marketing digital
      </h1>

      <div>
        <p className="mt-10 lg:text-xl lg:ml-[380px] lg:w-[600px] md:ml-[10px] text-center items-center">
          Posicionamos tu marca o mensaje en los canales que mejor se adapten a
          tu segmento de mercado. Somos tu equipo experto en publicidad,
          relaciones públicas, medios digitales y estrategias de contenido.
        </p>
      </div>
      <div>
        <Image src="https://i.pinimg.com/564x/63/a3/f3/63a3f3ce116526d19446869dfb48b170.jpg"
        alt="Marketing digital"
        height={100}
        width={300}
        className="mt-[-100px] ml-10"
        />
      </div>
      <div>
        <button className="bg-cyan-600 ring-1 ring-gray-300 text-white hover:bg-white hover:text-black hover:ring-white mt-10 transition-all duration-300 h-16 w-[300px] text-2xl rounded-lg ml-[525px]">
          ¡Contactanos!
        </button>
      </div>
      <Menu2 />
      <Footer />
    </div>
  );
}

export default page;
