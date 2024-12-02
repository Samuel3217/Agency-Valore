import Barra from "@/app/bar";
import { Menu2 } from "@/app/Menu2";
import Footer from "@/app/footer";
import Image from "next/image";
import Link from "next/link";

function page() {
  return (
    <div className="">
      <h1 className="text-3xl font-bold hover:text-cyan-500 transition-all duration-300 text-center mt-10">
        Marketing digital
      </h1>

      <div className="flex flex-col items-center justify-center px-10 text-center">
        <p className="mt-10 lg:text-xl ">
          Posicionamos tu marca o mensaje en los canales que mejor se adapten a
          tu segmento de mercado. Somos tu equipo experto en publicidad,
          relaciones públicas, medios digitales y estrategias de contenido.
        </p>

        <Image
          src="https://i.pinimg.com/564x/63/a3/f3/63a3f3ce116526d19446869dfb48b170.jpg"
          alt="Marketing digital"
          height={100}
          width={300}
          className=""
        />

        <button className="bg-cyan-600 ring-1 ring-gray-300 text-white hover:bg-white hover:text-black hover:ring-white transition-all duration-300 h-16 w-max px-5 text-2xl mt-10 rounded-lg ">
          <Link
            href="https://wa.me/5214499800425"
            passHref
            target="_blank"
            rel="noopener noreferrer"
          >
            ¡Contactanos!
          </Link>
        </button>
      </div>
      <Menu2 />
      <Footer />
    </div>
  );
}

export default page;
