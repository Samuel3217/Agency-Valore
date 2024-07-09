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
import { productos } from "@prisma/client";
import { CreateProduct, UpdateProduct } from "../AdminProductos/productAction"


interface CardWithFormNewProps {
  productos?: productos;
}

export function CardWithFormProductos({ productos }: CardWithFormNewProps) {
    

    const functionAction = productos?.producto_Id ? UpdateProduct: CreateProduct
  
    return (
      <form action={functionAction}>
        <input type="hidden" name="producto_Id" value={productos?.producto_Id} />
        <Card className="w-[350px] relative">
          <CardHeader>
            <div className="flex justify-between absolute top-0 right-0">
              <ModeToggle />
            </div>
            <CardTitle>Agregar producto</CardTitle>
            <CardDescription>
              Aqui puedes agregar o modificar cualquier cosa a la pagina web!!
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="nombre">Nombre</Label>
                <Input
                  name="nombre"
                  id="nombre"
                  placeholder="Dale un nombre creativo"
                  defaultValue={productos?.nombre}
                />
              </div>
              <Label htmlFor="descripcion">Descripcion</Label>
              <div className="flex flex-col space-y-1.5">
                <textarea
                  name="descripcion"
                  id="descripcion"
                  placeholder="Describe tu producto"
                  defaultValue={productos?.descripcion || ""}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label>Precio</Label>{" "}
                <Input
                  name="precio"
                  id="precio"
                  type="float"
                  placeholder="00.00"
                  defaultValue={productos?.precio}
                />
                 <Label>Stock</Label>{" "}
                <Input
                  name="stock"
                  id="stock"
                  type="number"
                  placeholder="0"
                  defaultValue={productos?.stock}
                />
                <br></br>
                <Label>Imagen</Label>
                <Input
                  name="imagen"
                  id="imagen"
                  type="text"
                  placeholder="agrega el link de la imagen"
                  defaultValue={productos?.imagen || ""}
                />
                 <Label>Categoría Id</Label> {/* Campo para categoria_Id */}
              <Input
                name="categoria_Id"
                id="categoria_Id"
                type="number"
                placeholder="ID de la categoría"
                defaultValue={productos?.categoria_Id?.toString() || ""}
              />
                <Label>Creado el dia...</Label>
                <Input
                name="createdAt"
                id="createdAt"
                type="datetime-local" // Ajustar según el formato requerido por Prisma
                defaultValue={productos?.createdAt ? new Date(productos.createdAt).toISOString().substring(0, 16) : ""}
              />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">Cancel</Button>
            <Button type="submit">{productos?.producto_Id ? "Actualizar producto" : "Crear producto"}</Button>
          </CardFooter>
        </Card>
      </form>
    );
}