
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
    
  ];

  return (
    <div className="flex-justify items-center">

      <div className="mt-2 ml-2 w-[1325px]">
      <Barra />
      </div>

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
      <br/>
      <a 
      className="items center text-3xl font-sans ml-[625px] hover:text-red-600 transition-all duration-300 m"
      href="/ofertas"
      >
        Ofertas!!
      </a>

      <div className="mt-10 ml-[50px] shadow-lg p-4 bg-gray-200 w-[1255px] rounded-lg">
        <BarOfertas Limit= {5} />
      </div>
      <br/>

      <div>
        <a 
        className="items-center text-3xl font-sans ml-[625px] mt-10 hover:text-green-500 transition-all duration-300"
        href="/Nuevo"
        >
          Nuevos!!
          </a>
      </div>
      <div className="mt-10 ml-[45px] shadow-lg p-4 bg-gray-200 w-[1255px] rounded-lg">
        <BarNew Limit= {5}/>
      </div>

      <div>
        <Footer/>
      </div>
      
    </div>
  );
}
