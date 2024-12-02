import React from 'react'

function page() {
  return (
    <div className='ml-[100px] mt-10'>
    <div className=''>
      <p className='font-satisfy text-xl'>Satisfy</p>
      <p className='font-satisfy text-2xl'>Satisfy</p>
      <p className='font-satisfy text-3xl'>Satisfy</p>
      <p className='font-satisfy text-4xl'>Satisfy</p>
    </div>

    <div className='mt-10'>
        <p className='text-xl'>Inter</p>
        <p className='text-2xl'>Inter</p>
        <p className='text-3xl'>Inter</p>
        <p className='text-4xl'>Inter</p>
    </div>

    <div className='mt-10'>
        <p className='text-xl font-bold'>Bold</p>
        <p className='text-2xl font-bold'>Bold</p>
        <p className='text-3xl font-bold'>Bold</p>
        <p className='text-4xl font-bold'>Bold</p>
    </div>

    <div className='grid grid-cols-3 gap-3'>
    <div className='bg-cyan-600 w-20 h-20 mt-5'>Jade 600</div>
    <div className='bg-cyan-400 w-20 h-20'>Cyan 400</div>
    <div className='bg-slate-200 w-20 h-20'>Slate 200</div>
    <div className='bg-gray-300 w-20 h-20'>gris 300</div>
    <div className='bg-gray-200 w-20 h-20'>gris 200</div>
    <div className='bg-black w-20 h-20 text-white'>Negro</div>
</div>

    <div ></div>
    </div>
  )
}

export default page
