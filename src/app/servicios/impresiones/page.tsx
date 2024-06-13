import Barra from "@/app/bar";
import { Menu2 }from "@/app/Menu2";
import Footer from "@/app/footer";

function page() {
  return (
    <div>

   <div className="mt-2 ml-2 w-[1325px]">
      <Barra />
      </div>

      <Menu2/>
      <Footer/>
    </div>
  )
}

export default page
