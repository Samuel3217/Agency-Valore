'use client';
import React from 'react'
import { useRouter } from 'next/navigation';


function page() {
    const router = useRouter();

    const handleChangeImage = () => {
        router.push('/');
    };

  return (
    <div className="">
        <img src="/images/valore.png" className="w-24 h-15" onClick={handleChangeImage} />
      <h1 className="text-center text-5xl">Stickers</h1>
      <p className="columns-4 mt-10">
        <img src="/images/sticker.png" className="w-80"></img>
        <img src="/images/sticker2.png" className="w-80"></img>
        <img src="/images/sticker3.png" className="w-80"></img>
        <img src="/images/sticker4.png" className="w-72"></img>
      </p>
    </div>
  )
}

export default page
