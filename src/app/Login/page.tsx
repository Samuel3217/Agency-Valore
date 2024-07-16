import Footer from "../footer";
import { Menu2 } from "../Menu2";
import Barra from "../bar";
import { CardWithFormUsuarios }  from "./create"
import { LoginForm } from "./Login"

const Page = () => {
  return (
    <div className="container mx-auto p-4 flex-justify items-center">
      <div className="mt-[-20px]">
        <Barra />
      </div>
      <Menu2 />

      <h1 className="text-3xl font-bold hover:text-cyan-500 transition-all duration-300 text-center mt-10">
        Crear o iniciar sesion
      </h1>

      <h3 className="text-center text-red-800"
      >Los correos seran usados para fines de mandar recordatorios y seguimiento de pedidos</h3>
      <h3 className="text-center text-red-500">Y NADA MAS</h3>

      <div className="grid grid-cols-2 gap-5 mt-10 ml-[250px]">
        <div>
        <CardWithFormUsuarios usuarios={usuarios}/>
        </div>

        <div className="">
        <LoginForm/>
        </div>

      </div>

      <Footer />
    </div>
  );
};

export default Page;
