
import Barra from "../bar"
import BarOfertas from '../products';
import { Menu2 } from "../Menu2"
import Footer from "../footer";

export default function Page() {
  return (
    <div className="">

      <Menu2/>
      
    <div className="flex-justify items-center">
      <div className="mt-2 ml-2 w-[1325px]">
         <Barra/>
         </div>
    </div>
    <div>
        <h1
        className="text-4xl text-center items-center justify-center text-orange-500 mt-5"
        >Ofertas</h1>
      </div>
    <div className="mt-10">
      <BarOfertas/>
    </div>

    <Footer/>
    </div>

  )
}
