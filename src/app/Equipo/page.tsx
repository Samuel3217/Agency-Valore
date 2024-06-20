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
        >Nuestro equipo</h1>
      </div>
        <Menu2/>

      <Footer/>
    </div>
  )
}

export default page
