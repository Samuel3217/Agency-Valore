import React from 'react'
import Barra from "../bar"
import { Menu2 } from "../Menu2"
import Footer from "../footer";
import Image from 'next/image';

function page() {
  return (
    <div>
        <div className="mt-2 ml-2 w-[1325px]">
      <Barra/>
      </div>

      <h1
      className="text-3xl font-bold hover:text-cyan-500 transition-all duration-300 text-center mt-10"
      >Convenios Empresariales</h1>

      <h1
      className='text-2xl font-bold text-cyan-600 transition-all duration-300 text-center mt-10'
      >&quot;Trabajemos juntos para mostrar la mejor version de nosotros&quot;
</h1>

      <div className='grid grid-cols-5 ml-10 mt-16 gap-10'>

        <div className='shadow-lg w-[200px]'>
          <Image
          src="/images/unea.svg"
          alt="Universidad de estudios avanzados"
          width={200}
          height={30}
          ></Image>
          
        </div>

        <div className='shadow-lg w-[240px]'>
          <Image
          src="/images/marchand.svg"
          alt="marchand papeleria"
          width={300}
          height={30}
          >
          </Image>
     
        </div>

        <div className='shadow-lg w-[240px]'>
          <Image
          src="/images/girasol.jpg"
          alt="Girasol"
          width={300}
          height={30}
          ></Image>

        </div>

        <div className='shadow-lg w-[200px] mt-[-50px] ' >
          <Image
          src="/images/ensfa.png"
          alt='Universidad Normal Superior Federal de Aguascalientes'
          width={100}
          height={30}
          className='ml-8'
          ></Image>

        </div>

        <div className='shadow-lg w-[250px] ml-[-40px]'>
          <Image
          src="/images/concordia.svg"
          alt='Universidad la concordia'
          width={250}
          height={30}
          ></Image>

        </div>
        <div className="mt-32" ></div>

      </div>


<Footer />
      <Menu2/>
    </div>
  )
}

export default page
