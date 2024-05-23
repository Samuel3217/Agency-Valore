"use server"
import { Button } from '@/components/ui/button'
import prisma from "@/lib/prisma"
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';


export async function CreateNewProduct(formData: FormData) {
    const name = formData.get("name")?.toString();
  const description = formData.get("description")?.toString();
  const priceStr = formData.get("price")?.toString() ?? ""; // Obtener el valor del formulario como cadena, con un valor predeterminado de una cadena vacía si es null o undefined
  const price = parseFloat(priceStr);
  const picture = formData.get("picture")?.toString();

  console.log({ name, description, price, picture });

  if (!name || !description || !price || !picture) {
    return;
  }
    const newProduct = await prisma.nuevos.create({
        data: {
          name: name,
          description: description,
          price: price,
          picture: picture,
        },
      });
      console.log(newProduct);
      redirect("/");
  }
  
export async function DeleteNewProduct({nuevosid}: {nuevosid: number}) {

    async function removeNewProduct(formData: FormData){
        "use server"
            const nuevosid = formData.get("nuevosid")?.toString();
        
            if (!nuevosid) {
              return;
            }
        
            await prisma.nuevos.delete({
              where:{
                id: parseInt(nuevosid)
              }
            })
            revalidatePath("/adminNuevos")
          
          }

          return (
            <div>
              <form action={removeNewProduct}>
                <input type="hidden" name="nuevosid" value={nuevosid}></input>
              <Button variant="destructive">
                Delete
              </Button>
              </form>
            </div>
          )
}

export async function UdateNewProduct(formData : FormData) {
    const id = formData.get("id")?.toString();
  const name = formData.get("name")?.toString();
  const description = formData.get("description")?.toString();
  const picture = formData.get("picture")?.toString();
  const priceStr = formData.get("price")?.toString() ?? "";
  const price = parseFloat(priceStr);

  if (!id || !name || !price || !picture || !description) {
    return;
  }

  await prisma.nuevos.update({
    where: {
      id: parseInt(id),
    },
    data: {
      name: name,
      description: description,
      picture: picture,
      price: price
    }
  });
  
  redirect("/adminNuevos")
}