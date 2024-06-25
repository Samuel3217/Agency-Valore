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
        Capacitacion empresarial
      </h1>

      <div className="grid grid-cols-2 mt-10">
        <Image
          src="/images/capacitacion.jpg"
          alt="Capacitacion empresarial"
          width={400}
          height={30}
          className="rounded-2xl ml-20"
        ></Image>
        <p className="text-2xl ml-[-100px] text-justify w-[550px] mt-20">
          Fortalece y logra tus objetivos por medio del desarrollo de las
          capacidades, habilidades y virtudes profesionales tanto individual
          como el de todo tu equipo.
        </p>
      </div>

      <Menu2 />
      <Footer />
    </div>
  );
}

export default page;
