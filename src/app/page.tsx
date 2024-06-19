
import Carousel from "./Carousel";
import Barra from "./bar";
import { Menu2 }from "./Menu2";
import Footer from "./footer";





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

      <h1 className="h-10 w-[100px] ml-[545px] transition-all duration-300 font-light text-5xl text-center mt-4 font-sans hover:text-blue-800">
        Bienvenidos
      </h1>

      <div className="bg-gray-250 font-light text-sm w-96 mt-10 text-center ml-auto mr-auto">
       A tu agencia, nos especializamos en: Publicidad, Marketing y Relaciones publicas 
        <div className="bg-gray-500">
          <Carousel images={images} />
        </div>
        <br />
      </div>
      <br />

        <Menu2 />
      
      <div className="bg-white h-[130px] w-[1100px] items-center text-5xl text-black flex justify-center ml-[120px]">
        <img  className=""src="/images/envios.png"></img>
      </div>
      <br/>
      <a 
      className="items center text-3xl font-sans ml-[625px] hover:text-red-600 transition-all duration-300 m"
      href="/ofertas"
      >
        ¡¡Ofertas!!
      </a>

      <div className="mt-10 ml-[50px] shadow-lg p-4 bg-gray-200 w-[1255px] rounded-lg">

      </div>
      <br/>

      <div>
        <a 
        className="items-center text-3xl font-sans ml-[625px] mt-10 hover:text-green-500 transition-all duration-300"
        href="/Nuevo"
        >
          ¡¡Nuevos!!
          </a>
      </div>
      <div className="mt-10 ml-[45px] shadow-lg p-4 bg-gray-200 w-[1255px] rounded-lg">
      </div>

      <div>
        <Footer/>
      </div>

      
      
    </div>
  );
}
