"use client";
import { useRouter } from "next/navigation";





export default function Barra() {
  const router = useRouter();

const handleChangeImage = () => {
    router.push("/");
  };

  return (
    <div className="shadow-indigo-600/40 shadow-xl mt-5 flex">
    <img
      src="/images/valore.png"
      className="w-24 h-15 ml-10 mt-2"
      onClick={handleChangeImage}
    />
    <button
      className="transition-all duration-300 text-black text-lg font-sans py-4 px-6 rounded hover:text-violet-500 mx-auto"
      type="button"
      onClick={() => router.push("./products", { scroll: false })}
      
    >
      Lo que ofrecemos!
    </button>

    <button className="transition-all duration-300 text-black text-lg font-sans py-4 px-6 rounded ml-[-200px] text-center mx-auto relative overflow-hidden group hover:text-yellow-400"
    type="button"
    onClick={() => router.push("./ofertas", { scroll: false })}
    >
   Ofertas
</button>

<button className="text-black transition-all duration-300 text-lg font-sans py-4 px-6 rounded ml-[-200px] text-center mx-auto relative overflow-hidden group hover:text-green-600"
    type="button"
    onClick={() => router.push("./Nuevo", { scroll: false })}
    >
   Nuevo
</button>

        </div>
      )}




