import { CardWithFormProductos } from "@/app/nuevoProducto/formularioProducto"
import prisma from "@/lib/prisma"
import { redirect } from "next/navigation"

export default async function edit({params}: {
    params: {
        producto_Id: string
    }
}) {

    console.log({params})


    const nuevos = await prisma.productos.findFirst({
        where: {
            producto_Id: parseInt(params.producto_Id)
        }
    })

    if(!nuevos) {
        redirect("/AdminProductos")
    }   

    return(
        <div className="ml-[500px]">
            <CardWithFormProductos productos={nuevos}/>
        </div>

    )
}