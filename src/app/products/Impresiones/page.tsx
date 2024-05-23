"use client";
import React from "react";
import { useRouter } from "next/navigation";

function Page() {
  const router = useRouter();

  const handleChangeImage = () => {
    router.push("/");
  };

  return (
    <div className="items-center justify-center ">
      <img
        src="/images/valore.png"
        className="w-24 h-15"
        onClick={handleChangeImage}
      />
      <h1 className="text-center text-5xl">Impresiones</h1>

      <div className="bg-gray-200 h-72 w-96 ml-[200px] mt-10">
        <img src="/images/impresora.jpg" className="w-80 h-72"></img>
        <p className="bg-gray-200 shadow-2xl ml-[325px] mt-[-230px] text-sm h-44 w-96 opacity-100 text-left font-sans text-black italic">
          Las impresoras son como los asistentes secretos del mundo digital.
          Desde imprimir documentos importantes hasta crear obras maestras de
          arte ASCII, estas máquinas ingeniosas ofrecen un servicio tan vital
          que incluso Sherlock Holmes estaría impresionado. Con su capacidad
          para escanear, copiar y, por supuesto, imprimir, son como el comodín
          en una partida de cartas, siempre listas para salvar el día cuando se
          trata de transformar pixeles en papel. ¡Son los héroes silenciosos de
          la oficina, listos para resolver cualquier misterio de papel!
        </p>
      </div>

      <div className="bg-gray-200 h-72 w-96 ml-[200px] mt-10">
        <img src="/images/hojas.png" className="w-80 h-72"></img>
        <p className="bg-gray-200 shadow-2xl ml-[325px] mt-[-230px] text-sm h-52 w-96 opacity-100 text-left font-sans text-black italic">
          Las hojas de papel de todos los colores son como el arcoíris en forma
          de papel. Desde ser el lienzo perfecto para notas de amor hasta ser el
          disfraz de una carta de cumpleaños, estas hojas mágicas ofrecen un
          mundo de posibilidades tan amplio que incluso un mago estaría
          impresionado. Con su versatilidad para ser dobladas, cortadas y
          decoradas, son como artistas esperando ser inspirados por la
          creatividad de su dueño. ¡Son el lienzo en blanco listo para ser
          transformado en cualquier cosa que tu imaginación pueda concebir, y el
          único límite es tu propia creatividad!
        </p>
      </div>

      <div className="bg-gray-200 h-96 w-96 ml-[200px] mt-10 justify-center">
        <img src="/images/impresion.png" className="w-64 h-86"></img>
        <p className="bg-gray-200 shadow-2xl ml-[325px] mt-[-230px] text-sm h-52 w-96 opacity-100 text-left font-sans text-black italic">
          ¡Bienvenido al mundo de la impresión en Valore! Donde cada página
          impresa cuenta una historia, cada gráfico despierta emociones y cada
          palabra cobra vida. En Valore, no solo imprimimos documentos, creamos
          obras maestras. Con la más avanzada tecnología y un equipo de expertos
          en impresión, garantizamos resultados que impresionan en cada
          proyecto. Desde informes ejecutivos hasta invitaciones de boda,
          estamos aquí para dar vida a tus ideas y convertirlas en realidad.
          ¡Confía en nosotros para hacer que cada impresión sea una experiencia
          memorable!
        </p>
      </div>
    </div>
  );
}

export default Page;
