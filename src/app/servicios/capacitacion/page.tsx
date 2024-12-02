import Barra from "@/app/bar";
import { Menu2 } from "@/app/Menu2";
import Footer from "@/app/footer";
import Image from "next/image";
import Link from "next/link";

function page() {
  return (
    <div className="px-7 flex flex-col text-xl text-center items-center justify-center">
      <h1 className="text-3xl font-bold hover:text-cyan-500 transition-all duration-300 mt-10">
        Capacitacion empresarial
      </h1>

        <Image
          src="/images/capacitacion.jpg"
          alt="Capacitacion empresarial"
          width={350}
          height={30}
          className="rounded-2xl mt-5"
        ></Image>
        <p className="mt-10 ">
          Fortalece y logra tus objetivos por medio del desarrollo de las{" "}
          <strong>capacidades, habilidades y virtudes profesionales</strong>,
          tanto a nivel individual como en el de todo tu equipo.
        </p>


      <br />

      <div className="flex flex-col text-center lg:flex-row gap-10 items-center justify-center">
        <div>
          <Image
            alt="Trabajo en equipo"
            src="/images/trabajo.jpg"
            width={155}
            height={10}
            className="rounded-full border-2 border-black"
          />
          <p className="font-bold">Trabajo en equipo</p>
        </div>

        <div>
          <Image
            alt="Comunicacion efectiva"
            src="/images/comunicacion.jpg"
            width={155}
            height={10}
            className="rounded-full border-2 border-black"
          />
          <p className="font-bold">Comunicacion efectiva</p>
        </div>

        <div>
          <Image
            alt="Redes sociales"
            src="/images/redes.jpg"
            width={155}
            height={10}
            className="rounded-full border-2 border-black"
          />
          <p className="font-bold">Redes sociales</p>
        </div>

        <div>
          <Image
            alt="Habilidades directivas"
            src="/images/habilidades.jpg"
            width={155}
            height={10}
            className="rounded-full border-2 border-black"
          />
          <p className="font-bold">Habilidades directivas</p>
        </div>
      </div>
      <h1 className="mt-10 text-2xl font-satisfy ">
        <strong>Cotiza tu taller</strong>
      </h1>

      <h1 className="mt-5 font-bold items-center">Entregamos DC3 y diplomas</h1>

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


      <Menu2 />
      <Footer />
    </div>
  );
}

export default page;
