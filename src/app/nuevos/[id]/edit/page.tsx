import { CardWithFormNewProduct } from "@/app/newProduct/newProduct-form"
import prisma from "@/lib/prisma"
import { redirect } from "next/navigation"

export default async function edit({params}: {
    params: {
        id: string
    }
}) {

    console.log({params})


    const nuevos = await prisma.nuevos.findFirst({
        where: {
            id: parseInt(params.id)
        }
    })

    if(!nuevos) {
        redirect("/adminNuevos")
    }   

    return(
        <div className="flex justify-center items-center h-screen">
            <CardWithFormNewProduct nuevos={nuevos}/>
        </div>

    )
}