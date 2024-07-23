// src/app/layout.tsx

import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import Head from 'next/head';
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Agencia Valore",
  description: "Bienvenido a Agencia Valore",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Proporciona valores predeterminados si son null o undefined
  const title: string = typeof metadata.title === 'string' ? metadata.title : "Agencia Valore";
  const description: string = typeof metadata.description === 'string' ? metadata.description : "Bienvenido a Agencia Valore";

  return (
    <html lang="es" suppressHydrationWarning>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
