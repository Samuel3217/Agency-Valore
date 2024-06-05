
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
    "https://scontent.fagu5-1.fna.fbcdn.net/v/t39.30808-6/438031835_432395266044062_3764579479154209438_n.jpg?stp=dst-jpg_p526x296&_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=kblzuqmAKncQ7kNvgExwlQH&_nc_ht=scontent.fagu5-1.fna&oh=00_AYAYE8QmKY0ENLs1ghWcdQT_RWUDPu4yqXHqMkiOpPk9wA&oe=66641477",
    "https://scontent.fagu5-1.fna.fbcdn.net/v/t39.30808-6/433434501_418824774067778_1599718755014309678_n.jpg?stp=dst-jpg_p526x296&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=3L-W3aSaXsMQ7kNvgGWKAj5&_nc_ht=scontent.fagu5-1.fna&oh=00_AYDM5cf7xpxUovLwBy9WEtjilwpuiAExJPOFpyKudvKjLQ&oe=66642643",
    "https://scontent.fagu5-1.fna.fbcdn.net/v/t39.30808-6/433440323_418822510734671_1879906526150812338_n.jpg?stp=dst-jpg_p526x296&_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=nhN_TPDhLi4Q7kNvgH0wDPp&_nc_ht=scontent.fagu5-1.fna&oh=00_AYBHyfVPcwZgz49p4J1beA8l7LVaNuOEOJsKgNZlzRPzKw&oe=666408E7",
    "https://scontent.fagu5-1.fna.fbcdn.net/v/t39.30808-6/427620276_400864475863808_7871621789067152602_n.jpg?stp=dst-jpg_p526x296&_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=NoVLPjU8kdoQ7kNvgE0O26o&_nc_ht=scontent.fagu5-1.fna&oh=00_AYCwofqIX8GBGpPkMmoN_N6X1ESeS6AVS7wMEGDR92PCOw&oe=666406BA",
    "https://scontent.fagu5-1.fna.fbcdn.net/v/t39.30808-6/426490593_399626059320983_3062021575532439940_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=HU5h3NJ61aQQ7kNvgFqCCHT&_nc_ht=scontent.fagu5-1.fna&oh=00_AYBWsO_HZYhISjTWPJrJum-pCRQXeKlFXiwWuZs9JMmjzA&oe=6664293C",
    "https://scontent.fagu5-1.fna.fbcdn.net/v/t39.30808-6/424811848_392332056717050_7962886491396988325_n.jpg?stp=dst-jpg_p526x296&_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=BpLfv5wxBLMQ7kNvgGPKtge&_nc_ht=scontent.fagu5-1.fna&oh=00_AYCVsYZNVGkeOW4n1HKQ0xpZZivxCQQU1RffhME1L8O68g&oe=66642432",
    "https://scontent.fagu5-1.fna.fbcdn.net/v/t39.30808-6/420058020_383604330923156_8232870970890317483_n.jpg?stp=dst-jpg_p526x296&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=E62mwAo4xc0Q7kNvgHyqSUn&_nc_ht=scontent.fagu5-1.fna&oh=00_AYD29q-rJGaezT6Tdj9v-raoTjjB3KWlTVy_sapJM_tuLA&oe=66642816",
    "https://scontent.fagu5-1.fna.fbcdn.net/v/t39.30808-6/419467398_380652524551670_3838663861045408624_n.jpg?stp=dst-jpg_p526x296&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=jzMlcdsP1ukQ7kNvgFZWB5a&_nc_ht=scontent.fagu5-1.fna&oh=00_AYBxhHB_lRQByoKUuj4UxD7xTenZI3JFivJ9I5D2d7rpCA&oe=6664034E",
    "https://scontent.fagu5-1.fna.fbcdn.net/v/t39.30808-6/419493573_380650784551844_650859993992574688_n.jpg?stp=dst-jpg_p526x296&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=lsFXeBEPI4IQ7kNvgEIGMha&_nc_ht=scontent.fagu5-1.fna&oh=00_AYB1BpU-D8wb8ciceKFa2oKxrITTv9ZkV5EUQS9nn73uQw&oe=6664165C",
    "https://scontent.fagu5-1.fna.fbcdn.net/v/t39.30808-6/411346321_368096352473954_3210585832638129073_n.jpg?stp=dst-jpg_p526x296&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Ed8y42T5oJoQ7kNvgEgz2zO&_nc_ht=scontent.fagu5-1.fna&oh=00_AYCfrQcp8C6DK3l9KYwL7P8E5FOWKjz2OW7RIyFxKYbfAg&oe=66642FE5",
    "https://scontent.fagu5-1.fna.fbcdn.net/v/t39.30808-6/403058452_351222494161340_2054668170353747938_n.jpg?stp=dst-jpg_p526x296&_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=4zP2_KxqFTYQ7kNvgHC-vGF&_nc_ht=scontent.fagu5-1.fna&oh=00_AYCiWVq2twWMu1KEksSVXXTzxc1uRHeHVzmjqVg1Iev-uA&oe=66642B58",
    "https://scontent.fagu5-1.fna.fbcdn.net/v/t39.30808-6/402576317_349121744371415_551413677572418699_n.jpg?stp=dst-jpg_p526x296&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=36w5-51gWP0Q7kNvgFLfGq1&_nc_ht=scontent.fagu5-1.fna&oh=00_AYAsFqt7HmA0vyE1_sjrINk-Tnx5AoRrbzcLPbGNEWOhOg&oe=666435E0",
    "https://scontent.fagu5-1.fna.fbcdn.net/v/t39.30808-6/378579025_313473057936284_3461029105671811668_n.jpg?stp=dst-jpg_p526x296&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=8M50mg2bUx0Q7kNvgHSYmEB&_nc_ht=scontent.fagu5-1.fna&oh=00_AYAXV5PC3W5ttxhu2iVcoibWK5FOvhGo1sY_ESwRMwH64g&oe=6664206D",
    
    
  ];

  return (
    <div className="flex-justify items-center">

      <div className="mt-2 ml-2 w-[1325px]">
      <Barra />
      </div>
      <br/>

      <h1 className="h-10 w-[100px] ml-[545px] transition-all duration-300 font-light text-5xl text-center mt-4 font-sans hover:text-cyan-400">
        Bienvenidos
      </h1>

      <div className="bg-gray-250 font-light text-sm w-96 mt-10 text-center ml-auto mr-auto">
       A tu agencia, nos especializamos en: Publicidad, Marketing digital y Relaciones publicas 
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
        ¡¡Ofertas!!
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
          ¡¡Nuevos!!
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
