
import { TrianguloVerde, TrianguloAzul, TrianguloAmarillo } from "./triangulos";
import Carousel from "./Carousel";
import Barra from "./bar";
import BarOfertas from "./products";
import BarNew from "./barNew";
import { Menu2 }from "./Menu2";
import Footer from "./footer";



export default async function Page() {


  const images = [
    "/images/Tarjetas.jpg",
    "/images/diseño-marca.jpg",
    "/images/Diseños.jpg",
    "https://scontent.fagu5-1.fna.fbcdn.net/v/t39.30808-6/438031835_432395266044062_3764579479154209438_n.jpg?stp=dst-jpg_p526x296&_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFpwUAEUnO7SEVVTb7Sj6A2tnwL-xsWuSO2fAv7Gxa5I3RooPx06Ryf3A-mImPduc9GJayedB6k6-n6RnzW9b0W&_nc_ohc=lO2c9UdlObYQ7kNvgGtJ88S&_nc_oc=AdhvpTcSJkpplgDTy7y0dfeIBB7X3RDvB7oxY-o5anrZNhJ_2ZffX6osgT2UNx0f8p4&_nc_ht=scontent.fagu5-1.fna&oh=00_AYCXZIlL7NxHTEfYyUN19GULzh2hRvfRmNYZc_0oVXGzYA&oe=66482CB7",
  ];

  return (
    <div className="flex-justify items-center">
      
      <Barra />

      <h1 className="h-10 w-[100px] ml-[545px] transition-all duration-300 font-light text-5xl text-center mt-4 font-sans hover:text-cyan-400">
        Bienvenidos
      </h1>

      <div className="bg-gray-250 font-light text-sm w-96 mt-10 text-center ml-auto mr-auto">
        La agencia Valore se especializa en publicidad y diseño, ofreciendo
        soluciones creativas como lonas, stickers y más.
        <div className="bg-gray-500">
          <Carousel images={images} />
        </div>
        <br />
      </div>
      <br />

      <p className="h-24 w-24 ml-40 mt-[-300px] transform rotate-180">
        <TrianguloAmarillo></TrianguloAmarillo>
      </p>
      <p className=" h-24 w-24  rotate-45">
        <TrianguloAzul></TrianguloAzul>
      </p>
      <p className=" h-24 w-24 mt-28 transform -rotate-12">
        <TrianguloVerde></TrianguloVerde>
      </p>
      <p className=" h-24 w-24 ml-[1000px] mt-[-430px] rotate-90">
        <TrianguloVerde></TrianguloVerde>
      </p>
      <p className=" h-24 w-24 ml-[1050px] rotate-12">
        <TrianguloAzul></TrianguloAzul>
      </p>

      <p className=" h-24 w-24  ml-[1020px] mt-[143px] -rotate-90 ">
        <TrianguloAmarillo></TrianguloAmarillo>
      </p>

        <Menu2 />
      
      <div className="bg-white h-[130px] w-[1100px] items-center text-5xl text-black flex justify-center ml-[120px]">
        <img  className=""src="/images/envios.png"></img>
      </div>
      <h1 className="items center text-3xl font-sans ml-[625px] mt-10 hover:text-red-600 transition-all duration-300">
        Ofertas!!
      </h1>

      <div className="mt-10 ml-[50px] shadow-lg p-4 bg-gray-200 w-[1255px] rounded-lg">
        <BarOfertas />
      </div>

      <div>
        <h1 className="items-center text-3xl font-sans ml-[625px] mt-10 hover:text-green-500 transition-all duration-300">Nuevos!!</h1>
      </div>
      <div className="mt-10 ml-[45px] shadow-lg p-4 bg-gray-200 w-[1255px] rounded-lg">
        <BarNew/>
      </div>

      <div>
        <Footer/>
      </div>
      
    </div>
  );
}
