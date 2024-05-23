'use client';
import { useRouter } from 'next/navigation';
import Barra from '../bar';



function ProductList() {
  const router = useRouter();

  return (
    <div className="">
          <Barra/>
      <h1 className="mt-5 text-4xl text-center">Nuestros Servicios</h1>
      <button className="text-white font-light text-2xl hover:text-gray-200 text-center"  onClick={() => router.push('./products/Lonas')} >Lonas</button>
      <br/>
      <button className="font-light text-2xl hover:text-gray-700"  onClick={() => router.push('./products/Impresiones')}>Impresiones</button>
      <br/>
      <button className="font-light text-2xl hover:text-gray-700"  onClick={() => router.push('./products/Stickers',)}>Stickers</button>
      <br/>
      <button className="font-light text-2xl hover:text-gray-700"  onClick={() => router.push('./products/camisas', { scroll: false })}>Camisas</button>
      <br/>
      <button className="font-light text-2xl hover:text-gray-700">Otros...</button>

  


      
    </div> 
  )
}


export default ProductList;
