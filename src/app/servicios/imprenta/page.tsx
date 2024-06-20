import Barra from "@/app/bar";
import { Menu2 } from "@/app/Menu2";
import Footer from "@/app/footer";
import Carousel from "@/app/Carousel";
import Image from "next/image";

function page() {
  const formato = [
    "https://i.pinimg.com/564x/c3/a1/04/c3a1049f46afe924f94db808203c16b3.jpg",
    "https://i.pinimg.com/564x/c2/80/07/c280077a026b132024bd070b393f7b5c.jpg",
    "https://i.pinimg.com/564x/06/d1/19/06d119d2b675fc514b307e7177bcae2e.jpg"
  ];

  const diseño = [
    "https://i.pinimg.com/736x/3d/d8/b0/3dd8b0bfd8172a40de5c40d5d90cdfab.jpg",
    "https://i.pinimg.com/564x/74/ec/36/74ec366b36a2f2c9d3b948bdc50f6c5f.jpg",
    "https://i.pinimg.com/564x/8a/24/15/8a24151fe8b81ff04aab8667c4f9b964.jpg"
  ]

  const personalizado = [
    "https://i.pinimg.com/564x/91/a3/7e/91a37ef21e315c46606fa76994bbfb19.jpg",
    "https://i.pinimg.com/564x/46/a1/d1/46a1d1d489403835c7345652ec8d62b1.jpg",
    "https://i.pinimg.com/564x/62/7b/1a/627b1acb6a85aad16e9083d2bb72d473.jpg"
  ]
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
      <div className="w-[250px] h-[500px] mt-5">
        <Carousel images={formato} width={250} height={400}/>
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
        <div className="w-[250px] h-[500px] mt-5">
          <Carousel images={diseño} height={400} width={250}/>
        </div>

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
        <div className="w-[250px] h-[500px] mt-5">
          <Carousel images={personalizado} height={400} width={250}/>
        </div>
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
