import Image from "next/image";
import Footer from "../footer";
import { Menu2 } from "../Menu2";
import Barra from "../bar";

function page() {
  return (
    <div>
          <div className="">
        <Barra />
      </div>
        <Menu2/>

      <Footer/>
    </div>
  )
}

export default page
