
import Barra from "../bar"
import BarOfertas from '../products';

export default function Page() {
  return (
    <div className="">
      
    <div className="flex-justify items-center">
         <Barra textoAdicional=''/>
    </div>
    <div>
        <h1
        className="text-4xl text-center items-center justify-center text-orange-500 mt-5"
        >Ofertas</h1>
      </div>
    <div className="mt-10">
      <BarOfertas/>
    </div>
    </div>

  )
}
