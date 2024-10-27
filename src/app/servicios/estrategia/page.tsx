import Barra from "@/app/bar";
import { Menu2 } from "@/app/Menu2";
import Footer from "@/app/footer";
import Image from "next/image";
import Link from "next/link";

function page() {
  return (
    <div>
      <div className="sm:w-[250px] sm:ml-[200px] md:w-[600px] md:ml-[100px] lg:w-[1335px] lg:ml-[-0px]">
        <Barra />
      </div>

      <h1 className="text-3xl font-bold hover:text-cyan-500 transition-all duration-300 text-center mt-10">
        Estrategia y gestion empresarial
      </h1>

      <div className="grid lg:grid-cols-2 md:grid-cols-1">
        <Image
          src="/images/consultoria.png"
          alt="estrategia y gestion empresarial"
          height={100}
          width={400}
          className="items-center lg:ml-20 md:ml-[180px] sm:ml-[120px] ml-[50px] mt-20"
        ></Image>

        <p className="lg:text-2xl md:text-xl sm:text-base  text-center lg:ml-[-200px ] mt-28">
          Te guiamos en la toma de decisiones efectivas, para beneficio de los
          objetivos  por medio de la planeación, organización, integración de
          áreas, dirección y control de recursos (intelectuales, humanos,
          materiales, financieros, entre otros).
        </p>
      </div>

      <div>
        <button className="bg-cyan-600 ring-1 ring-gray-300 text-white hover:bg-white hover:text-black hover:ring-white transition-all duration-300 h-16 w-[300px] text-2xl mt-10 rounded-lg ml-[510px]"
         >
            <Link  href="https://wa.me/5214499800425" passHref
             target="_blank" rel="noopener noreferrer"
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
