import Barra from "@/app/bar";
import { Menu2 } from "@/app/Menu2";
import Footer from "@/app/footer";
import Image from "next/image";

function page() {
  return (
    <div>
      <div className="mt-2 ml-2 w-[1325px]">
        <Barra />
      </div>

      <h1 className="mt-10 text-5xl text-red-800 hover:text-black transition-all duration-300 w-20 ml-[550px]">
        Consultorias
      </h1>

      <div className="flex mt-10 ml-[100px] gap-10">
      <div className="bg-gray-100 w-[450px] h-[400px]">
        <Image
          src="/images/consultoria.png"
          alt="sala de reuniones con mesa centrica y 6 sillas alrededor"
          height={100}
          width={400}
          className="items-center flex ml-[20px]"
        ></Image>
        </div>
      
        
        <h1 className="w-[550px]">
          Super titulo
          <p>
          Super texto aqui para definir las consultorias, que son, que ofrecemos y que posibles beneficios tendra en un futuro
          </p>
        </h1>
        
      </div>

      <Menu2 />

      <Footer />
    </div>
  );
}

export default page;
