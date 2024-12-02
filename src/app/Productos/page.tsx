import Barra from "../bar"
import { Menu2 } from "../Menu2"
import Footer from "../footer";
import BarNew from "../BarNew"

function page() {
  return (
    <div>

      <h1 className="text-center mt-5 text-3xl text-black hover:text-cyan-700 transition-all duration-300">Todos los productos</h1>

      <div className="mt-10 px-5">
            <BarNew Limit={200}/>
        </div>

        <Menu2/>

        <Footer/>

      </div>
  )
}

export default page
