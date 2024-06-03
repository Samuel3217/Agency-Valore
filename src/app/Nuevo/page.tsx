import BarNew from '@/app/barNew'
import Barra from "../bar"
import { Menu2 } from "../Menu2"


function page() {
  return (
    <div>
      <Menu2/>

      <div className="mt-2 ml-2 w-[1325px]">
      <Barra/>
      </div>
        <div className="justify-center items-center text-center">
            <h1 className="text-4xl text-green-500 mt-5">Nuevo</h1>
        </div>
        <div className="mt-10 ml-[50px]">
            <BarNew/>
        </div>
      
    </div>
  )
}

export default page
