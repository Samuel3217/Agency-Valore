import React from 'react'
import Barra from "../bar"
import { Menu2 } from "../Menu2"
import Footer from "../footer";

function page() {
  return (
    <div>
        <div className="mt-2 ml-2 w-[1325px]">
      <Barra/>
      </div>

      <h1
      className="text-3xl font-bold hover:text-cyan-500 transition-all duration-300 text-center mt-10"
      >Convenios Empresariales</h1>


<Footer />
      <Menu2/>
    </div>
  )
}

export default page
