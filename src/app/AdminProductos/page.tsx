import Link from "next/link"
import TablaProductos from "./tables"
import TablaPromociones from "../AdminPromociones/table"

function page() {
  return (
    <div className="grid grid-cols-2 gap-10">



      <div>
        
<Link href="/nuevoProducto" className=" w-[100px] h-[30px] ml-[260px] rounded-xl  hover:bg-gray-200 transition-all duration-200 hover:text-green-600 text-lg " >Agregar</Link>
        <TablaProductos/>
      </div>

      <div className="mt-7">
  <TablaPromociones/>
</div>
      <br/>


      <br/>
      <br/>

      

      
    </div>
  )
}

export default page
