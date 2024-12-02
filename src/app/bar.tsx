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
    <div className="shadow-gray-300 shadow-lg mt-5 bg-gray-100 items-center justify-between flex flex-col gap-y-3 lg:flex-row md:flex-col sm:flex-col md:py-2 py-2 mx-5 sm:py-2 rounded-xl px-5 lg:text-2xl md:text-lg md:text-opacity-75 sm:text-sm text-base ">
      <div className="bg-cyan-600 rounded-xl h-16 hover:bg-cyan-700 transition-all duration-300 flex items-center justify-center px-10">
        <Link href="/">
          <Image
            alt="Valore"
            width={120}
            height={30}
            src="/images/letters.png"
            className="opacity-80 hover:opacity-100 transition-all duration-400"
          />
        </Link>
      </div>


        <NavigationMenuDemo />


      <Link
        className="transition-all duration-300 font-sans rounded text-center hover:text-cyan-500"
        type="button"
        href="/Ofertas"
      >
        Ofertas
      </Link>

      <Link
        className=" transition-all duration-300 font-sans text-center hover:text-cyan-500"
        type="button"
        href="/Nuevos"
      >
        Nuevos
      </Link>

      <Link
        className="transition-all duration-300 font-sans rounded text-center hover:text-cyan-500"
        href="/Productos"
        type="button"
      >
        Todos los productos
      </Link>


    </div>
  );
}
