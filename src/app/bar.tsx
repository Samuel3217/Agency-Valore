import Link from "next/link";
import { NavigationMenuDemo } from "./NavigationMenu";
import Image from "next/image";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export default function Barra() {
  return (
    <div className="shadow-gray-300 shadow-lg mt-5 bg-gray-100 grid lg:grid-cols-7 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 lg:h-[68px] sm:h-[300px]  rounded-xl">
      <div className="bg-cyan-600 rounded-xl h-16 hover:bg-cyan-700 transition-all duration-300  w-[180px] lg:w-[180px] sm:w-[180px] sm:ml-[30px] ml-[160px]">
        <Link href="/">
          <Image
            alt="Valore"
            width={110}
            height={20}
            src="/images/letters.png"
            className="mt-[-20px] opacity-80 hover:opacity-100 transition-all duration-400 ml-[35px]"
          />
        </Link>
      </div>

      <div className="mt-2 lg:ml-[200px] ml-[150px] sm:ml-[20px]">
        <NavigationMenuDemo />
      </div>

      <Link
        className="transition-all duration-300 text-xl font-sans py-4 px-6 rounded lg:ml-[200px] text-center mx-auto relative overflow-hidden group hover:text-cyan-500"
        type="button"
        href="/Ofertas"
      >
        Ofertas
      </Link>

      <Link
        className=" transition-all duration-300 text-xl font-sans py-4 px-6 rounded lg:ml-[200px] text-center mx-auto relative overflow-hidden group hover:text-cyan-500"
        type="button"
        href="/Nuevos"
      >
        Nuevos
      </Link>

      <Link
        className="transition-all duration-300 text-xl font-sans py-4 px-6 rounded lg:mt-[-10px] lg:ml-[200px] sm:mt-2 text-center mx-auto relative overflow-hidden group w-42 mt-[-12px] hover:text-cyan-500"
        href="/Productos"
        type="button"
      >
        Todos los productos
      </Link>

   
    </div>
  );
}
