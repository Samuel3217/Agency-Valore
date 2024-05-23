"use server"
import { Button } from '@/components/ui/button'
import prisma from "@/lib/prisma"
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function Product_delete({productid}: {productid: number}) {

  async function removeProduct(formData: FormData){
"use server"
    const productid = formData.get("productid")?.toString();

    if (!productid){
      return;
    }

    await prisma.product.delete({
      where:{
        id: parseInt(productid)
      }
    })
    revalidatePath("/adminOfertas")
  
  }
  
  

  return (
    <div>
      <form action={removeProduct}>
        <input type="hidden" name="productid" value={productid}></input>
      <Button variant="destructive">
        Delete
      </Button>
      </form>
    </div>
  )
}

export async function createProduct(formData: FormData) {
  const name = formData.get("name")?.toString();
  const description = formData.get("description")?.toString();
  const priceStr = formData.get("price")?.toString() ?? ""; // Obtener el valor del formulario como cadena, con un valor predeterminado de una cadena vacía si es null o undefined
  const price = parseFloat(priceStr);
  const picture = formData.get("picture")?.toString();

  console.log({ name, description, price, picture });

  if (!name || !description || !price || !picture) {
    return;
  }

  const newProduct = await prisma.product.create({
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

export async function updateProduct(formData: FormData){

  const id = formData.get("id")?.toString();
  const name = formData.get("name")?.toString();
  const description = formData.get("description")?.toString();
  const picture = formData.get("picture")?.toString();
  const priceStr = formData.get("price")?.toString() ?? "";
  const price = parseFloat(priceStr);

  if (!id || !name || !price || !picture || !description) {
    return;
  }

  await prisma.product.update({
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
  
  redirect("/adminOfertas")
}
