import Link from 'next/link'
import React from 'react'

function BarAdmin() {
  return (
    <div className='bg-gray-300 w-[1300px] ml-6 mt-5 h-16 grid grid-cols-5 gap-3'>



<Link
        href="/"
        className='text-xl font-sans ml-2 w-[170px] h-10 mt-4  hover:text-gray-700 transition-all duration-300'
        >Home</Link>


      
    </div>
  )
}

export default BarAdmin
