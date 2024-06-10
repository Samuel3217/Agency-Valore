"use client"
 
import * as React from "react"
import Link from "next/link"
 
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
 
  const components: { title: string; href: string; description: string }[] = [
    {
      title: "Camisas",
      href: "/servicios/camisas",
      description:
        "Camisas personalizadas muy aesthetic.",
    },
    {
      title: "Gorras",
      href: "/servicios/gorras",
      description:
        "Gorras personalizada para cualquier persona y con cualquier diseño.",
    },
    {
      title: "Impresiones",
      href: "/servicios/impresiones",
      description:
        "Papel con colores, no se que mas poner, matan arboles por esto.",
    },
    {
      title: "Lonas",
      href: "/servicios/lonas",
      description: "Cosas publicitarias para darle visto bueno a tu emprendimiento.",
    },
    {
      title: "Consultorias",
      href: "/servicios/consultorias",
      description:
        "Tutoriales en persona para ayudarles a ser mejor.",
    },
    {
      title: "otros",
      href: "/servicios/otros",
      description:
        "Lo que la jefa diga que se agregue, se agrega *saca una pistola*.",
    },
  ]

  export function NavigationMenuDemo() {
  
    return(
        
  <NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger
      className="bg-slate-100 hover:text-violet-400 transition-all duration-300 text-lg"
      >Nuestros servicios</NavigationMenuTrigger>
      <NavigationMenuContent>
      <ul className="bg-slate-100 grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>

    )
  }

 
  const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "bg-white block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
