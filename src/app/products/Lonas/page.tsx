"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Barra from "@/app/bar";

function page() {

  return (
    
    <div className=" items-center justify-center">
 
      <Barra/>

      <h1 className=" text-center text-5xl">Lonas</h1>
      
      <div className="bg-gray-200 h-72 w-96 ml-[200px] mt-10">
        <img src="/images/lona.png" className="w-80 h-72"></img>
        <p className="bg-gray-200 shadow-2xl ml-[325px] mt-[-230px] text-sm h-40 w-96 opacity-100 text-left font-sans text-black italic">
          {" "}
          Las lonas son herramientas versátiles que se utilizan para una
          variedad de propósitos. Desde la promoción de eventos hasta la
          protección de objetos contra los elementos, las lonas ofrecen una
          solución duradera y económica. Su resistencia al agua y su capacidad
          para ser personalizadas las hacen ideales para publicidad, cubiertas
          temporales e incluso como decoración en eventos especiales.
        </p>
      </div>

      <div className="bg-gray-200 h-72 w-96 ml-[200px] mt-10">
        <img src="/images/lona2.png" className="w-80 h-72"></img>
        <p className="bg-gray-200 shadow-2xl ml-[325px] mt-[-230px] text-sm h-48 w-96 opacity-100 text-left font-sans text-black italic">
          {" "}
          Las lonas son herramientas versátiles que se utilizan para una
          variedad de ¿Sabías que las lonas son como los superhéroes del mundo
          material? Desde salvar eventos del aburrimiento hasta proteger objetos
          del caos de los elementos, estas súper lonas ofrecen una solución tan
          duradera y económica que hasta Batman las envidiaría. Con su
          resistencia al agua, pueden enfrentarse a tormentas como si fueran
          duchas calientes, y su capacidad para ser personalizadas las convierte
          en las estrellas del espectáculo, ¡listas para brillar en cualquier
          evento especial!
        </p>
      </div>
    </div>
  );
}
export default page;
