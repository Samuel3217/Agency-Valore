import { CardWithFormPromocion } from "@/app/nuevaPromocion/formularioPromocion"
import prisma from "@/lib/prisma"
import { redirect } from "next/navigation"

export default async function edit({params}: {
    params: {
        productoPromo_Id: string
    }
}) {

    console.log({params})


    const nuevos = await prisma.producto_promocion.findFirst({
        where: {
            productoPromo_Id: parseInt(params.productoPromo_Id)
        }
    })

    if(!nuevos) {
        redirect("/AdminPromociones")
    }   

    return(
        <div className="ml-[500px]">
            <CardWithFormPromocion/>
        </div>

    )
}