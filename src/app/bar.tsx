"use client";
import { useRouter } from "next/navigation";
import  { NavigationMenuDemo } from "./NavigationMenu"

export default function Barra() {
  const router = useRouter();

const handleChangeImage = () => {
    router.push("/");
  };

  return (
    <div className="shadow-indigo-600/40 shadow-xl mt-5 bg-slate-100 grid grid-cols-4 ">
    <img
      src="/images/valore.png"
      className="w-24 h-15 ml-10 mt-2 opacity-80 hover:opacity-100 transition-all duration-400 "
      onClick={handleChangeImage}
    />

<div className="mt-3 ml-[-100px]">
      < NavigationMenuDemo/>
      </div>


    <button className="transition-all duration-300 text-black text-lg font-sans py-4 px-6 rounded ml-[-70px] text-center mx-auto relative overflow-hidden group hover:text-yellow-400"
    type="button"
    onClick={() => router.push("./ofertas", { scroll: false })}
    >
   Ofertas
</button>

<button className="text-black transition-all duration-300 text-lg font-sans py-4 px-6 rounded ml-[-70px] text-center mx-auto relative overflow-hidden group hover:text-green-600"
    type="button"
    onClick={() => router.push("./Nuevo", { scroll: false })}
    >
   Nuevo
</button>




        </div>
      )}




