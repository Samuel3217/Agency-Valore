// src/app/Login/create.tsx

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
import { usuarios } from "@prisma/client"; // Usar el nombre correcto del modelo exportado
import { CreateUsuario, UpdateUsuario } from "../AdminUser/userAction"

interface CardWithFormNewProps {
  usuarios?: usuarios; // Usa el tipo inferido de Prisma
}

export function CardWithFormUsuarios({ usuarios }: CardWithFormNewProps) {
  const functionAction = usuarios?.usuario_Id ? UpdateUsuario : CreateUsuario;
  
  return (
    <form action={functionAction} method="post">
      <input type="hidden" name="usuario_Id" value={usuarios?.usuario_Id || ""} />
      <Card className="w-[350px] relative">
        <CardHeader>
          <CardTitle>Crear Usuario</CardTitle>
          <CardDescription>
            Ingresa los datos correspondientes
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="nombre">Nombre</Label>
              <Input
                name="nombre"
                id="nombre"
                placeholder="Nombre completo"
                defaultValue={usuarios?.nombre || ""}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="usuario">Usuario</Label>
              <Input
                name="usuario"
                id="usuario"
                placeholder="Algo creativo y único"
                defaultValue={usuarios?.usuario || ""}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="correo">Correo</Label>
              <Input
                name="correo"
                id="correo"
                type="email"
                placeholder="fulano@example.com"
                defaultValue={usuarios?.correo || ""}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password">Contraseña</Label>
              <Input
                name="password"
                id="password"
                type="password"
                placeholder=""
                defaultValue={usuarios?.password || ""}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="direccion">Dirección</Label>
              <Input
                name="direccion"
                id="direccion"
                type="text"
                placeholder="Tu dirección de casa"
                defaultValue={usuarios?.direccion || ""}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="birthday">Cumpleaños</Label>
              <Input
                name="birthday"
                id="birthday"
                type="date"
                defaultValue={usuarios?.birthday ? new Date(usuarios.birthday).toISOString().split('T')[0] : ""}
              />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Cancelar</Button>
          <Button type="submit">Crear cuenta</Button>
        </CardFooter>
      </Card>
    </form>
  );
}
