import Barra from "@/app/bar";
import { Menu2 } from "@/app/Menu2";
import Footer from "@/app/footer";
import Carousel from "@/app/Carousel";
import Link from "next/link";

function page() {
  const branding = ["/images/branding1.jpg",
    "/images/branding2.jpg",
    "/images/branding3.jpg",
    "/images/branding4.jpg",
    "/images/branding5.png",
    "/images/branding6.png",
    "/images/branding7.png",
    "/images/branding8.png",
    "/images/branding9.png",
    "/images/branding10.png",
    "/images/branding11.png",
  ];

  return (
    <div>
     <div className="sm:w-[250px] sm:ml-[200px] md:w-[600px] md:ml-[100px] lg:w-[1335px] lg:ml-[-0px]">
        <Barra />
      </div>

      <h1 className="text-3xl font-bold hover:text-cyan-500 transition-all duration-300 text-center mt-10">
        Branding Corporativo
      </h1>

      <div className="grid lg:grid-cols-2 md:grid-cols-1 mt-10 lg:ml-20 md:ml-[240px] sm:ml-[170px] ml-[100px]">
        <Carousel images={branding} width={300} height={400} />

        <p className="lg:text-2xl md:text-2xl text-xl lg:mt-[200px] sm:text-xl sm:text-center text-justify lg:ml-[-100px] md:ml-[-40px] sm:ml-[-90px] ml-[-60px] lg:w-[700px] md:w-[400px] sm:w-[500px] w-[400px]">
          Somos tu equipo de profesionales creativos. Trabajamos en conjunto
          para ayudar a las empresas y freelance. Nuestro objetivo es que todos
          nuestros clientes alcancen sus objetivos comerciales y/o de
          comunicación, mediante estrategias de marketing visual y comunicación
          efectiva.
        </p>
        <div>
        <button className="bg-cyan-600 ring-1 ring-gray-300 text-white hover:bg-white hover:text-black hover:ring-white transition-all duration-300 h-16 w-[300px] text-2xl mt-10 rounded-lg ml-[510px]"
         >
            <Link  href="https://wa.me/5214499800425" passHref
             target="_blank" rel="noopener noreferrer"
            >
            ¡Contactanos!
            </Link>
            </button>
            </div>
      </div>

      <Menu2 />
      <Footer />
    </div>
  );
}

export default page;
