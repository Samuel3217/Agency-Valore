import Barra from "../bar"
import { Menu2 } from "../Menu2"
import Footer from "../footer";
import BarNew from "../BarNew"
import BarOfertas from "../BarOfertas";

function page() {
  return (
    <div>
    <div className="mt-2 ml-2 w-[1325px]">
      <Barra/>
      </div>

      <h1 className="text-center mt-5 text-3xl text-black hover:text-cyan-700 transition-all duration-300">Nuevos</h1>

      <div className="mt-10 ml-[-10px] w-[1350px]">
            <BarOfertas Limit={30}/>
        </div>

        <Menu2/>

        <Footer/>

      </div>
  )
}

export default page
