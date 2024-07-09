"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useRouter } from "next/navigation";

export function LoginForm() {
  const router = useRouter();
  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');

    if (!correo || !password) {
      setError('Por favor, llena todos los campos');
      return;
    }

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ correo, password }),
      });

      const data = await response.json();

      if (response.ok && data.redirect) {
        router.push(data.redirect);
      } else {
        setError(data.error || 'Error desconocido');
      }
    } catch (error) {
      console.error('Error de conexión:', error);
      setError('Error de conexión');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Card className="w-[350px] relative">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>
            Ingresa tu correo y contraseña
          </CardDescription>
        </CardHeader>
        <CardContent>
          {error && <p className="text-red-500">{error}</p>}
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="correo">Correo</Label>
              <Input
                name="correo"
                id="correo"
                type="email"
                placeholder="Tu correo"
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password">Contraseña</Label>
              <Input
                name="password"
                id="password"
                type="password"
                placeholder="Tu contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" type="button" onClick={() => router.back()}>Cancelar</Button>
          <Button type="submit">Ingresar</Button>
        </CardFooter>
      </Card>
    </form>
  );
}
