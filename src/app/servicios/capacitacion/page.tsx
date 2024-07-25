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

      <div className="grid grid-cols-2 mt-10 gap-5 items-center">
        <Image
          src="/images/capacitacion.jpg"
          alt="Capacitacion empresarial"
          width={400}
          height={30}
          className="rounded-2xl ml-20"
        ></Image>
        <p className="text-2xl ml-[-100px] text-justify w-[550px] mt-20">
  Fortalece y logra tus objetivos por medio del desarrollo de las 
  <strong> capacidades, habilidades y virtudes profesionales</strong> tanto individual
  como el de todo tu equipo.
</p>
</div>

        <br/>

        <div className="grid grid-cols-4 mt-20 ml-[100px]">

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
        <h1 className="mt-10 items-center text-2xl font-satisfy justify-center ml-[590px] w-72"><strong>Cotiza tu taller</strong></h1>
        
        <h1 className="mt-5 font-bold items-center text-xl justify-center ml-[550px]">Entregamos DC3 y diplomas</h1>
      

      <Menu2 />
      <Footer />
    </div>
  );
}

export default page;
