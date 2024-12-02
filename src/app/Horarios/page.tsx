import Image from "next/image";
import Footer from "../footer";
import { Menu2 } from "../Menu2";
import Barra from "../bar";

function page() {
  return (
    <div>


      <div className="mt-10 ml-[400px] shadow-lg w-[580px]">
        <Image
        src="/images/horarios.png"
        alt="Horario de apertura de la agencia"
        width={600}
        height={500}
        ></Image>
      </div>

        <Menu2/>

      <Footer/>
    </div>
  )
}

export default page
