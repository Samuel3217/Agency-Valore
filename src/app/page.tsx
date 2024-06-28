
import Carousel from "./Carousel";
import Barra from "./bar";
import { Menu2 }from "./Menu2";
import Footer from "./footer";
import BarNew   from "./BarNew";
import Link from "next/link";





export default async function Page() {


  const images = [
    "/images/Tarjetas.jpg",
    "/images/diseño-marca.jpg",
    "/images/Diseños.jpg",
  ];

  return (
    <div className="flex-justify items-center">

<div className="mt-2 ml-2 w-[1325px]">
      <Barra />
      </div>
      <br/>

      <h1 className="h-10 w-[100px] ml-[545px] transition-all duration-300 font-light text-5xl text-center mt-4 font-sans hover:text-cyan-700">
        Bienvenidos
      </h1>

      <div className="bg-gray-250 font-light text-sm w-96 mt-10 text-center ml-auto mr-auto">
       A tu agencia, nos especializamos en: Publicidad, Marketing y Relaciones publicas 
        <div className="bg-gray-500">
          <Carousel images={images} width={400} height={400}/>
        </div>
        <br />
      </div>
      <br />

        <Menu2 />
      
      <div className="bg-white h-[130px] w-[1100px] items-center text-5xl text-black flex justify-center ml-[120px]">
        <img  className=""src="/images/envios.png"></img>
      </div>
      <br/>
      <Link
      className="items center text-3xl font-sans ml-[625px] hover:text-cyan-700 transition-all duration-300 m"
      href="/ofertas"
      >
        ¡¡Ofertas!!
      </Link>

      <div className="mt-10 ml-[50px] shadow-lg p-4 bg-gray-200 w-[1255px] rounded-lg">

      </div>
      <br/>

      <div>
        <Link
        className="items-center text-3xl font-sans ml-[625px] mt-10 hover:text-cyan-700 transition-all duration-300"
        href="/Nuevos"
        >
          ¡¡Nuevos!!
          </Link>
      </div>

      <div className="mt-10 ml-[45px] shadow-lg p-4 bg-gray-200 w-[1255px] rounded-lg">
        <BarNew Limit={5}/>
      </div>

      <div>
        <Footer/>
      </div>

      
      
    </div>
  );
}
