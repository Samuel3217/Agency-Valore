import { CardWithFormOferta } from "@/app/newOferta/product-form"
import prisma from "@/lib/prisma"
import { redirect } from "next/navigation"

export default async function edit({params}: {
    params: {
        id: string
    }
}) {

    console.log({params})


    const product = await prisma.product.findFirst({
        where: {
            id: parseInt(params.id)
        }
    })

    if(!product) {
        redirect("/adminOfertas")
    }

    return(
        <div className="flex justify-center items-center h-screen">
            <CardWithFormOferta product={product}/>
        </div>

    )
}