import React from 'react'
import TableNewProducts from "./tables"
import Link from 'next/link'

function pageNewProducts() {
  return (
    <div>
      <div className="grid grid-cols-3">
        <Link
        href="/adminOfertas"
        className="text-3xl  hover:text-orange-500 transition-all duration-300"
        >
          Ofertas</Link>

          <Link
        href="/adminNuevos"
        className="text-3xl  hover:text-green-500 transition-all duration-300"
        >
          Nuevos</Link>

          <Link
          href="/"
          className="text-3xl hover:text-gray-400 transition-all duration-300"
          >
          Home
          </Link>


        </div>
        <TableNewProducts/>
    </div>
  )
}

export default pageNewProducts
