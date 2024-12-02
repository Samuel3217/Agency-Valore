import Barra from "@/app/bar";
import { Menu2 } from "@/app/Menu2";
import Footer from "@/app/footer";
import Image from "next/image";
import Link from "next/link";

function page() {
  return (
    <div>
      <h1 className="text-3xl font-bold hover:text-cyan-500 transition-all duration-300 text-center mt-10">
        Estrategia y gestion empresarial
      </h1>

      <div className="flex flex-col items-center text-xl text-center w-auto px-5 justify-center">
        <Image
          src="/images/consultoria.png"
          alt="estrategia y gestion empresarial"
          height={100}
          width={400}
          className="mt-20"
        ></Image>

        <p className="mt-28">
          Te guiamos en la toma de decisiones efectivas, para beneficio de los
          objetivos  por medio de la planeación, organización, integración de
          áreas, dirección y control de recursos (intelectuales, humanos,
          materiales, financieros, entre otros).
        </p>

        <button className="bg-cyan-600 ring-1 ring-gray-300 text-white hover:bg-white hover:text-black hover:ring-white transition-all duration-300 h-16 w-max px-5 text-2xl mt-10 rounded-lg">
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
