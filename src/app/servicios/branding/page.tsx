import Barra from "@/app/bar";
import { Menu2 } from "@/app/Menu2";
import Footer from "@/app/footer";
import Carousel from "@/app/Carousel";

function page() {

  const branding = [
    ""
  ];

  return (
    <div>
      <div className="mt-2 ml-2 w-[1325px]">
        <Barra />
      </div>

      <h1 className="text-3xl font-bold hover:text-cyan-500 transition-all duration-300 text-center mt-10">
        Branding Corporativo
      </h1>

      <div className="grid grid-cols-2 mt-10 ml-20">
        
      <Carousel images={branding} width={300} height={400}/>

      <p className="text-2xl mt-[200px] text-justify ml-[-100px] w-[700px]">
        Somos tu equipo de profesionales creativos. Trabajamos en conjunto para
        ayudar a las empresas, freelance; para que todos nuestros clientesa
        alcancen sus objetivos comerciales y/o de comunicación, mediante
        estrategias de marketing visual y comunicación efectiva.
      </p>
      </div>

    
      <Menu2 />
      <Footer />
    </div>
  );
}

export default page;
