import Barra from "../bar"
import { Menu2 } from "../Menu2"
import Footer from "../footer";
import BarNew from "../BarNew"

function page() {
  return (
    <div>
    <div className="sm:w-[250px] sm:ml-[200px] md:w-[600px] md:ml-[100px] lg:w-[1335px] lg:ml-[-0px]">
        <Barra />
      </div>

      <h1 className="text-center mt-5 text-3xl text-black hover:text-cyan-700 transition-all duration-300">Nuevos</h1>

      <div className="mt-10 ml-6 lg:w-[1350px]">
            <BarNew Limit={10}/>
        </div>

        <Menu2/>

        <Footer/>

      </div>
  )
}

export default page
