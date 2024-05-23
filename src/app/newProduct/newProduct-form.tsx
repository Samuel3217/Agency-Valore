import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/theme-toggle-button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { nuevos } from "@prisma/client";
import { CreateNewProduct, UdateNewProduct } from "../adminNuevos/new_actions"

interface CardWithFormNewProps {
  nuevos?: nuevos;
}

export function CardWithFormNewProduct({ nuevos }: CardWithFormNewProps) {
    

    const functionAction = nuevos?.id ? UdateNewProduct: CreateNewProduct
  
    return (
      <form action={functionAction}>
        <input type="hidden" name="id" value={nuevos?.id} />
        <Card className="w-[350px] relative">
          <CardHeader>
            <div className="flex justify-between absolute top-0 right-0">
              <ModeToggle />
            </div>
            <CardTitle>Agregar producto</CardTitle>
            <CardDescription>
              Aqui puedes agregar cualquier cosa a la pagina web!!
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Nombre</Label>
                <Input
                  name="name"
                  id="name"
                  placeholder="Dale un nombre creativo"
                  defaultValue={nuevos?.name}
                />
              </div>
              <Label htmlFor="description">Descripcion</Label>
              <div className="flex flex-col space-y-1.5">
                <textarea
                  name="description"
                  id="description"
                  placeholder="Describe tu producto"
                  defaultValue={nuevos?.description || ""}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label>Precio</Label>{" "}
                <Input
                  name="price"
                  id="price"
                  type="float"
                  placeholder="00.00"
                  defaultValue={nuevos?.price}
                />
                <br></br>
                <Label>Imagen</Label>
                <Input
                  name="picture"
                  id="picture"
                  type="text"
                  placeholder="agrega el link de la imagen"
                  defaultValue={nuevos?.picture || ""}
                />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">Cancel</Button>
            <Button type="submit">{nuevos?.id ? "Actualizar producto" : "Crear producto"}</Button>
          </CardFooter>
        </Card>
      </form>
    );
}