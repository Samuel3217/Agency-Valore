// src/app/AdminPromociones/CardWithFormPromocion.tsx
"use client";

import React, { useState } from "react";
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
import { CreatePromocion, UpdatePromocion } from "../AdminPromociones/promocionAction";

interface CardWithFormNewProps {
  promocion?: producto_promocion;
  onPromocionCreatedOrUpdated?: (promocion: producto_promocion) => void;
}

export function CardWithFormPromocion({ promocion, onPromocionCreatedOrUpdated }: CardWithFormNewProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const functionAction = promocion?.productoPromo_Id ? UpdatePromocion : CreatePromocion;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target as HTMLFormElement);
    const result = await functionAction(formData);

    if (result && onPromocionCreatedOrUpdated) {
      onPromocionCreatedOrUpdated(result);
    }

    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} method="POST">
      <Card className="w-[350px] relative">
        <CardHeader>
          <div className="flex justify-between absolute top-0 right-0">
            <ModeToggle />
          </div>
          <CardTitle>{promocion?.productoPromo_Id ? "Actualizar Promoción" : "Agregar Promoción"}</CardTitle>
          <CardDescription>
            {promocion?.productoPromo_Id ? "Actualiza los datos de la promoción" : "Agrega una nueva promoción"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            {promocion && (
              <input type="hidden" name="productoPromo_Id" value={promocion.productoPromo_Id} />
            )}
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="producto_Id">ID Producto</Label>
              <Input
                name="producto_Id"
                type="number"
                id="producto_Id"
                placeholder="ID del producto a asignar"
                defaultValue={promocion?.producto_Id ?? ""}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="promocion_Id">ID Promoción</Label>
              <Input
                name="promocion_Id"
                id="promocion_Id"
                type="number"
                placeholder="ID de la promoción a asignar (consulta ID)"
                defaultValue={promocion?.promocion_Id ?? ""}
              />
              <br />
              <Label htmlFor="imagen">Agrega la imagen de la promoción</Label>
              <Input
                name="imagen"
                id="imagen"
                type="text"
                placeholder="agrega el link de la imagen"
                defaultValue={promocion?.imagen ?? ""}
              />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" type="button">Cancelar</Button>
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Enviando..." : promocion?.productoPromo_Id ? "Actualizar promoción" : "Crear promoción"}
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
}
