import Image from "next/image";
import Footer from "../footer";
import { Menu2 } from "../Menu2";
import Barra from "../bar";


function page() {
  return (
    <div>
          <div className="mt-2 ml-2 w-[1325px]">
        <Barra />
      </div>

      <div>
        <h1 className="text-3xl font-bold hover:text-cyan-500 transition-all duration-300 text-center mt-10"
        >Nuestro equipo.</h1>
        <h2 className="text-2xl italic text-black text-center mt-5">Nuestro equipo especializado y profecional.</h2>
      </div>

      <div className="grid grid-cols-5 gap-5 mt-10">
        <div>
          <Image
          src="/images/diseño.jpg"
          alt="Equipo de diseño"
          width={200}
          height={30}
          className="ml-5 rounded-full border-4 border-black "
          ></Image>
          <p
          className="text-center h-8 text-2xl ml-8 w-[204px] mt-8"
          >Diseño grafico</p>
        </div>

        <div>
          <Image
          src="/images/RH.jpg"
          alt="Recursos humanos"
          width={220}
          height={30}
          className=" ml-5 rounded-full border-4 border-black"
          ></Image>
          <p 
          className="text-center text-2xl ml-7 w-[220px] mt-6"
          >Recursos humanos</p>
        </div>

        <div>
          <Image
          src="/images/administracion.jpg"
          alt="Equipo de administracion"
          width={200}
          height={30}
          className="ml-5 rounded-full border-4 border-black"
          ></Image>
          <p
          className="text-center text-2xl ml-7 w-[200px] mt-3"
          >Administracion</p>
        </div>

        <div>
          <Image
          src="/images/marketingDigital.jpg"
          alt="Equipo de marketing digital"
          width={200}
          height={30}
          className="ml-5 rounded-full border-4 border-black"
          ></Image>
          <p
          className="text-center text-2xl ml-7 w-[200px] mt-6"
          >Marketing digital</p>
        </div>

        <div>
          <Image
          src="/images/web.jpg"
          alt="Equipo de desarrollo web"
          width={230}
          height={30}
          className="ml-2 rounded-full border-4 border-black"
          ></Image>
          <p
          className="text-center text-2xl ml-7 w-[200px] mt-3"
          >Desarrollo web</p>
        </div>
      </div>


      <div className="grid grid-cols-4 gap-5 mt-10">
        <div>
          <Image
          src="/images/imprenta.jpg"
          alt="Equipo de imprenta"
          width={190}
          height={30}
          className="ml-5 rounded-full border-4 border-black"
          ></Image>
          <p
          className="text-center bg-white h-8 text-2xl ml-7 w-[204px] text-black mt-5"
          >imprenta</p>
        </div>

        <div>
          <Image
          src="/images/capacitadores.jpg"
          alt="capacitadores"
          width={220}
          height={30}
          className=" ml-5 rounded-full border-4 border-black"
          ></Image>
          <p 
          className="text-center text-2xl ml-7 w-[220px] mt-6"
          >Capacitadores</p>
        </div>

        <div>
          <Image
          src="/images/mercadotecnia.jpg"
          alt="Equipo de mercadotecnia"
          width={240}
          height={30}
          className="ml-5 rounded-full border-4 border-black"
          ></Image>
          <p
          className="text-center text-2xl ml-12 w-[200px] mt-7 "
          >Mercadotecnia</p>
        </div>

        <div>
          <Image
          src="/images/relaciones.jpg"
          alt="Equipo de relaciones publicas"
          width={250}
          height={30}
          className="ml-5 rounded-full border-4 border-black"
          ></Image>
          <p
          className="text-center text-2xl ml-12 w-[230px] mt-4"
          >Relaciones publicas</p>
        </div>

      </div>
        <Menu2/>

      <Footer/>
    </div>
  )
}

export default page
