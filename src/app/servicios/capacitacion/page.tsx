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
        Capacitacion empresarial
      </h1>

      <div className="grid lg:grid-cols-2 md:grid-cols-1 md:ml-[120px] sm:ml-[40px] ml-[-30px] mt-10 gap-5 items-center">
        <Image
          src="/images/capacitacion.jpg"
          alt="Capacitacion empresarial"
          width={400}
          height={30}
          className="rounded-2xl ml-20"
        ></Image>
        <p className="lg:text-2xl md:text-xl sm:text-xl text-xl lg:ml-[-100px] md:ml-[20px] sm:ml-[30px] ml-[70px] text-center lg:w-[550px] md:w-[500px] sm:w-[500px] w-[400px] mt-20">
          Fortalece y logra tus objetivos por medio del desarrollo de las{" "}
          <strong>capacidades, habilidades y virtudes profesionales</strong>,
          tanto a nivel individual como en el de todo tu equipo.
        </p>
      </div>

      <br />

      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 md:gap-5 mt-20 lg:ml-[100px] md:ml-[140px] sm:ml-[250px] ml-[180px]">
        <div>
          <Image
            alt="Trabajo en equipo"
            src="/images/trabajo.jpg"
            width={155}
            height={20}
            className="rounded-full border-2 border-black"
          />
          <p className="text-xl ml-[-10px] font-bold">Trabajo en equipo</p>
        </div>

        <div>
          <Image
            alt="Comunicacion efectiva"
            src="/images/comunicacion.jpg"
            width={155}
            height={10}
            className="rounded-full border-2 border-black"
          />
          <p className="text-xl ml-[-35px] font-bold">Comunicacion efectiva</p>
        </div>

        <div>
          <Image
            alt="Redes sociales"
            src="/images/redes.jpg"
            width={155}
            height={20}
            className="rounded-full border-2 border-black"
          />
          <p className="text-xl ml-[5px] font-bold">Redes sociales</p>
        </div>

        <div>
          <Image
            alt="Habilidades directivas"
            src="/images/habilidades.jpg"
            width={155}
            height={20}
            className="rounded-full border-2 border-black"
          />
          <p className="text-xl ml-[-25px] font-bold">Habilidades directivas</p>
        </div>
      </div>
      <h1 className="mt-10 items-center text-2xl font-satisfy justify-center lg:ml-[590px] md:ml-[280px] sm:ml-[240px] w-72">
        <strong>Cotiza tu taller</strong>
      </h1>

      <h1 className="mt-5 font-bold items-center text-xl justify-center lg:ml-[520px] md:ml-[240px] sm:ml-[200px]">
        Entregamos DC3 y diplomas
      </h1>

      <div>
      <button className="bg-cyan-600 ring-1 ring-gray-300 text-white hover:bg-white hover:text-black hover:ring-white transition-all duration-300 h-16 w-[300px] text-2xl mt-10 rounded-lg ml-[510px]"
         >
            <Link  href="https://wa.me/5214499800425" passHref
             target="_blank" rel="noopener noreferrer"
            >
            ¡Contactanos!
            </Link>
            </button></div>

      <Menu2 />
      <Footer />
    </div>
  );
}

export default page;
