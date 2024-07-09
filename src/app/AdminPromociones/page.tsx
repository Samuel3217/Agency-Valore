import Barra from "../bar"
import TablaPomociones from "./table"

function page() {
  return (
    <div>
        <div className="mt-2 ml-2 w-[1325px]">
      <Barra/>
      </div>

      <div>
        <TablaPomociones/>
      </div>

      <div>
        <p className="text-justify text-gray-600 text-2xl mt-10 w-[700px] ml-[300px]"> Favor de revisar la pagina /AdminProductos para tener
            una referencia del ID de los productos a agregar y/o editar la promocion
            Ademas de que los siguientes numeros corresponden a un tipo de promocion
        </p>

        <div className="grid grid-cols-3 gap-5">

        <p className="text-justify text-red-700 text-2xl mt-10 w-[400px] ml-10">
            1: porcentaje por descuento
        </p>

        <p className="text-justify text-blue-700 text-2xl mt-10 w-[300px] ml-10">
            2: Compra X paga Y
        </p>

        <p className="text-justify text-green-700 text-2xl mt-10 w-[400px] ">
            3: por cada X te descontamos Y
        </p>
        </div>

      </div>

      

      
    </div>
  )
}

export default page
