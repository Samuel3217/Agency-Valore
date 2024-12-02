import Barra from "../bar"
import { Menu2 } from "../Menu2"
import Footer from "../footer";
import BarNew from "../BarNew"
import BarOfertas from "../BarOfertas";

function page() {
  return (
    <div>

      <h1 className="text-center mt-5 text-3xl text-black hover:text-cyan-700 transition-all duration-300">Ofertas</h1>

      <div className="mt-10 px-5">
            <BarOfertas Limit={30}/>
        </div>

        <Menu2/>

        <Footer/>

      </div>
  )
}

export default page
