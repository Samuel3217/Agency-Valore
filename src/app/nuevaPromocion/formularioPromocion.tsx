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
import { producto_promocion } from "@prisma/client";
import { CreatePromocion, UpdatePromocion } from "../AdminPromociones/promocionAction"


interface CardWithFormNewProps {
  promocion?: producto_promocion;
}

export function CardWithFormPromocion({ promocion }: CardWithFormNewProps) {
    

    const functionAction = promocion?.productoPromo_Id ? UpdatePromocion: CreatePromocion
  
    return (
      <form action={functionAction}>
        <input type="hidden" name="producto_Id" value={promocion?.productoPromo_Id} />
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
                <Label htmlFor="producto_Id">ID Producto</Label>
                <Input
                  name="producto_Id"
                  type="number"
                  id="producto_Id"
                  placeholder="ID del producto a asignar"
                  defaultValue={promocion?.producto_Id}
                />

              </div>
              <div className="flex flex-col space-y-1.5">
                <Label>ID Promocion</Label>{" "}
                <Input
                  name="promocion_Id"
                  id="promocion_Id"
                  type="number"
                  placeholder="ID de la promocion a asignar (consulta ID)"
                  defaultValue={promocion?.promocion_Id}
                />
                <br></br>
                <Label></Label>
                <Input
                  name="imagen"
                  id="imagen"
                  type="hidden"
                  placeholder="agrega el link de la imagen"
                  defaultValue={""}
                />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">Cancel</Button>
            <Button type="submit">{promocion?.productoPromo_Id ? "Actualizar promocion" : "Crear promocion"}</Button>
          </CardFooter>
        </Card>
      </form>
    );
}