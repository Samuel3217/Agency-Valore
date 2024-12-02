"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const components: {
  title: string;
  href: string;
  description: string;
  blank?: boolean;
}[] = [
  {
    title: "Imprenta",
    href: "/servicios/imprenta",
    description: "Opciónes que van desde Gran formato a impresión y diseño.",
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
    description: "Planeamos tu camino hacia un éxito asegurado.",
  },
  {
    title: "¿Buscas algo más?",
    href: "https://www.google.com.mx/maps/place/Agencia+Valore/@21.9072379,-102.2804263,17z/data=!3m1!4b1!4m6!3m5!1s0x8429ef73f5afeb9f:0x4aa07056238f3e51!8m2!3d21.9072329!4d-102.2778514!16s%2Fg%2F11tfh7nphr?entry=ttu",
    description: "Tengamos una cita, ¿te parece bien?.",
    blank: true,
  },
];

export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-cyan-600 text-white hover:bg-cyan-600 transition-all duration-300 text-base sm:text-sm lg:text-2xl w-auto px-5">
            Nuestros servicios
          </NavigationMenuTrigger>
          <NavigationMenuContent className="">
            <ul className="bg-gray-200 flex gap-3 px-3 w-max  flex-col">
              {components.map((component) => (
                <div key={component.title}>
                  {component.blank ? (
                      <ListItem
                        target="blank"
                        title={component.title}
                        href={component.href}
                      >
                        {component.description}
                      </ListItem>
                  ) : (
                    <ListItem title={component.title} href={component.href}>
                      {component.description}
                    </ListItem>
                  )}
                </div>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
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
            "bg-cyan-100 block    rounded-md w-auto  h-auto hover:bg-white transition-all duration-300",
            className
          )}
          {...props}
        >
          <div className="px-3 lg:text-base font-medium text-sm">{title}</div>
          <p className="px-3 text-sm lg-text-xl sm:text-xs md:text-base">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
