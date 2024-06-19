import Barra from "@/app/bar";
import { Menu2 } from "@/app/Menu2";
import Footer from "@/app/footer";
import Carousel from "@/app/Carousel";
import Image from "next/image";

function page() {
  const formato = [
    "https://i.pinimg.com/564x/c3/a1/04/c3a1049f46afe924f94db808203c16b3.jpg",
  ];

  return (
    <div>
      <div className="mt-2 ml-2 w-[1325px]">
        <Barra />
      </div>
      <h1 className="text-5xl ml-[575px] mt-8 text-blue-700 hover:text-black transition-all duration-300 w-20">
      Imprenta
      </h1>
    <div className="grid grid-cols-3 mt-10 ml-[100px]">
      <div className="">
        <Image
        className=""
        src="/images/formato.png"
        alt="gran formato"
        width={250}
        height={30}

        >

        </Image>
      <div className="w-[250px] mt-5">
        <Carousel images={formato} />
      </div>

      </div>

      <div>
      <Image
        className=""
        src="/images/diseño.png"
        alt="Impresion y diseño"
        width={250}
        height={30}

        >

        </Image>
      </div>

      <div>
      <Image
        className=""
        src="/images/personalizado.png"
        alt="Souvenirs personalizados"
        width={250}
        height={30}

        >

        </Image>
      </div>
    </div>
      <div>
        <Menu2 />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default page;
