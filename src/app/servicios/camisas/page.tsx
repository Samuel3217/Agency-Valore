import Barra from "@/app/bar";
import { Menu2 } from "@/app/Menu2";
import Footer from "@/app/footer";
import Carousel from "@/app/Carousel";

function page() {
  const images = [
    "https://i.pinimg.com/564x/db/31/b9/db31b939da3121fd55d5e2edb2b3b374.jpg",
    "https://i.pinimg.com/564x/2e/ef/2e/2eef2eb7e5cebd71d83575e6f0623533.jpg",
    "https://i.pinimg.com/564x/00/d0/4b/00d04b951874d7559a864cc763d700be.jpg",
    "https://i.pinimg.com/736x/f2/5f/d9/f25fd98a7ffede0a1a6289346cbad9f2.jpg",

  ];

  return (
    <div>
      <div className="mt-2 ml-2 w-[1325px]">
        <Barra />
      </div>
      <h1 className="text-5xl ml-[575px] mt-8 text-blue-700 hover:text-black transition-all duration-300 w-20">
        Camisas
      </h1>

      <div className="w-60 mt-10 ml-[550px]">
        <Carousel images={images} />
      </div>

      <div className="flex flex-col">
        <h1 className="mt-10 w-25 text-3xl text-center text-blue-600">¿Que ofrecemos?</h1>
        <div className="w-[650px] text-center ml-[350px] bg-gray-200 mt-10 ">
          <h1 className="mt-10 text-2xl text-gray-800">Diseños Personalizados:</h1> 
          <p className="mt-5">Tú imaginas, nosotros lo hacemos. Puedes
          elegir cualquier diseño, desde gráficos llamativos hasta mensajes
          especiales, y nosotros lo plasmamos en una camisa de alta calidad.
          </p>
          </div>
          <div className="w-[650px] text-center ml-[350px] mt-5 bg-gray-200">
         <h1 className="text-2xl mt-10 text-gray-800">Variedad de Opciones:</h1>
          <p className="mt-5">Disponemos de una amplia gama de colores y
          estilos para que encuentres la camisa perfecta que se adapte a tu
          gusto y personalidad.
          </p>
          </div>
          <div className="w-[650px] text-center ml-[350px] mt-5 bg-gray-200">
          <h1 className="text-2xl mt-10 text-gray-800 ">Materiales de Primera:</h1> 
          <p className="mt-5">Nuestras camisas están
          confeccionadas con materiales suaves y duraderos, garantizando
          comodidad y estilo en cada uso.
          </p>
          </div>
          <div className="w-[700px] text-center ml-[330px] bg-gray-100 mt-20">
          <h1 className="text-2xl mt-10 text-blue-600 ">¿Como tener la tuya?</h1> 
          <p className="mt-5">Las camisas personalizadas se piden bajo encargo ya sea por medio
            de los contactos digitales o en persona en la agencia, cualquiera de las 2 opciones 
            permite pedirlas y obtener tu obra de arte en forma de camisa 
          </p>
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
