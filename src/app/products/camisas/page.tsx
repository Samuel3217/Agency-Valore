'use client';
import React from 'react'
import { useRouter } from 'next/navigation';

function page() {
    const router = useRouter();

    const handleChangeImage = () => {
        router.push('/');
    }
  return (
    <div className=" items-center justify-center">
      <img src="/images/valore.png" className="w-24 h-15" onClick={handleChangeImage} />
      <h1 className=" text-center text-5xl">Camisas</h1>
      <h2 className="text-center text-2xl text-gray-700">Personalizadas</h2>
    </div>
  )
}

export default page
