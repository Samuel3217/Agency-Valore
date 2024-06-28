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

      

      
    </div>
  )
}

export default page
