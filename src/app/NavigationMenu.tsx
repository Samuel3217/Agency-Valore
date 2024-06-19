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
      title: "Imprenta",
      href: "/servicios/imprenta",
      description:
        "Opciones que van desde Gran formato a impresion y diseño.",
    },
    {
      title: "Branding Corporativo",
      href: "/servicios/branding",
      description:
        "Alcanza tus metas con nosotros, mejora tu imagen publicitaria.",
    },
    {
      title: "Marketing digital",
      href: "/servicios/marketing",
      description:
        "La mejor opcion para publicidad y contenido en las redes sociales.",
    },
    {
      title: "Capacitacion empresarial",
      href: "/servicios/capacitacion",
      description: "Se la mejor version de ti mismo que sabemos que puedes ser.",
    },
    {
      title: "Estrategia y gestion empresarial",
      href: "/servicios/estrategia",
      description:
        "Planeamos tu camino hacia un exito rotundo.",
    },
    {
      title: "otros",
      href: "/servicios/otros",
      description:
        "Proximamente, solo en cines tambien en 3D.",
    },
  ]

  export function NavigationMenuDemo() {
  
    return(
        
  <NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger
      className="bg-cyan-600 text-white transition-all duration-300 text-lg mt-1"
      >Nuestros servicios</NavigationMenuTrigger>
      <NavigationMenuContent className="hover:text-gray-500">
      <ul className="bg-gray-200 grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
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
