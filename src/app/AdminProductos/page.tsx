import Link from "next/link"
import Barra from "../bar"
import TablaProductos from "./tables"

function page() {
  return (
    <div>
        <div className="mt-2 ml-2 w-[1325px]">
      <Barra/>
      </div>

      <div>
        <TablaProductos/>
      </div>

      <Link href="/nuevoProducto" className="mt-10 w-[100px] h-[30px] ml-[640px] rounded-xl  hover:bg-gray-200 transition-all duration-200 hover:text-green-600 text-lg " >Agregar</Link>
    
      <br/>
      <br/>

      

      
    </div>
  )
}

export default page
