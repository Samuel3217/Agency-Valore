// src/app/layout.tsx

import type { Metadata } from "next";
import { Inter as FontSans, Satisfy } from "next/font/google";
import Head from "next/head";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import Barra from "./bar";

// Configuración de la fuente 'Inter'
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const satisfy = Satisfy({
  weight: "400",
  variable: "--satisfy",
  subsets: ["latin"],
})

// Definición de metadatos
export const metadata: Metadata = {
  title: "Agencia Valore",
  description: "Bienvenido a Agencia Valore",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const title: string =
    typeof metadata.title === "string" ? metadata.title : "Agencia Valore";
  const description: string =
    typeof metadata.description === "string"
      ? metadata.description
      : "Bienvenido a Agencia Valore";

  return (
    <html lang="es" suppressHydrationWarning>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
        {/* Añadir Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Satisfy&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable, satisfy.variable)}>
        <Barra/>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
