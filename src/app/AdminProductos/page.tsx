import Link from "next/link"
import TablaProductos from "./tables"
import TablaPromociones from "../AdminPromociones/table"

function page() {
  return (
    <div>

<div>
    <Link href="/" className=" mt-10 text-2xl ml-5 hover:text-blue-600 transition-all duration-300">Home</Link>
      </div>
    <div className="grid grid-cols-2 gap-10">



      <div>
        
<Link href="/nuevoProducto" className=" w-[100px] h-[30px] ml-[260px] rounded-xl mt-5  hover:bg-gray-200 transition-all duration-200 hover:text-green-600 text-lg " >Agregar</Link>
        <TablaProductos/>
      </div>

      

      <div className="">
        <Link href="/nuevaPromocion" className=" w-[100px] h-[30px] ml-[260px] rounded-xl mt-[-10px]  hover:bg-gray-200 transition-all duration-200 hover:text-green-600 text-lg">Agregar</Link>
  <TablaPromociones/>

  <p className="text-sl text-center mt-10 ">Los siguientes numeros son los que representan los tipos de ofertas que existen en la base de datos, estos deben de ponerse adecuadamente al crear una promocion, asi como el id del producto
</p>
<p className="text-red-600 text-center mt-5 text-sl">1: Por cada X te llevas Y</p>
<p className="text-red-600 text-center mt-5 text-sl">2: Con la compra de X tienes Y de descuento</p>
<p className="text-red-600 text-center mt-5 text-sl">3: En el producto X tienes Y de descuento</p>
</div>
      <br/>


      <br/>
      <br/>

      

      
    </div>
    </div>
  )
}

export default page
