import Link from "next/link";
import  { NavigationMenuDemo } from "./NavigationMenu"
import Image from "next/image";

export default function Barra() {

  return (
    <div className="shadow-gray-300 shadow-lg mt-5 bg-gray-100 grid grid-cols-7 rounded-xl h-16">
      <div className="bg-cyan-600 rounded-xl h-16 hover:bg-cyan-700 transition-all duration-300">
      <Link href="/">
    <img
      src="/images/letters.png"
      className="w-28 h-15 mt-[-20px] opacity-80 hover:opacity-100 transition-all duration-400 ml-[35px]"
    />
    </Link>
    </div>

<div className="mt-2 ml-[200px]">
      < NavigationMenuDemo/>
      </div>


    <Link className="transition-all duration-300 text-xl font-sans py-4 px-6 rounded ml-[200px] text-center mx-auto relative overflow-hidden group hover:text-cyan-500"
    type="button"
    href="/ofertas"
    >
   Ofertas
</Link>

<Link className=" transition-all duration-300 text-xl font-sans py-4 px-6 rounded ml-[200px] text-center mx-auto relative overflow-hidden group hover:text-cyan-500"
    type="button"
    href="/Nuevo"
    >
   Nuevos
</Link>

<Link className="transition-all duration-300 text-xl font-sans py-4 px-6 rounded ml-[200px] text-center mx-auto relative overflow-hidden group w-42 mt-[-12px] hover:text-cyan-500"
    href=""
    type="button"
>
  Todos los productos
</Link>

<Link
href="/Login"
>
  <Image
  src="/images/login.png"
  alt="Login"
  width={50}
  height={30}
  className="rounded-full mt-[6px] ml-[300px] hover:bg-gray-300 transition-all duration-500"
  ></Image>
</Link>




        </div>
      )}




