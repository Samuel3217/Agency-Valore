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
        "Opciónes que van desde Gran formato a impresión y diseño.",
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
        "La mejor opción para publicidad y contenido en las redes sociales.",
    },
    {
      title: "Capacitación empresarial",
      href: "/servicios/capacitacion",
      description: "Se la mejor versión de ti mismo que sabemos que puedes ser.",
    },
    {
      title: "Estrategia y gestión empresarial",
      href: "/servicios/estrategia",
      description:
        "Planeamos tu camino hacia un exito asegurado.",
    },
    {
      title: "¿Buscas algo mas?",
      href: "https://www.google.com.mx/maps/place/Agencia+Valore/@21.9072379,-102.2804263,17z/data=!3m1!4b1!4m6!3m5!1s0x8429ef73f5afeb9f:0x4aa07056238f3e51!8m2!3d21.9072329!4d-102.2778514!16s%2Fg%2F11tfh7nphr?entry=ttu",
      description:
        "Tengamos una cita, ¿te parece bien?.",
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
