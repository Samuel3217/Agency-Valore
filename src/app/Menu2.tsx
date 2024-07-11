import { Button } from "@/components/ui/button"
import { CalendarDays } from "lucide-react"
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
  } from "@/components/ui/hover-card"
import Link from "next/link"
import Image from "next/image"
  
export function Menu2() {
  return (
    <div className="fixed bottom-5 right-5  flex round">
    <HoverCard>
      <HoverCardTrigger asChild>
        <Image 
        src="/images/telefono.png"
        alt="Contactanos"
        height={50}
        width={50}
        className="hover:opacity-70 opacity-100 transition-all duration-500 bg-gray-200 hover:bg-white rounded-full"
        ></Image>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
         
          <div className="space-y-1">
            <h4 className="text-1xl font-semibold">Valore</h4>
            <p className="text-sm">
              Puedes contactarnos mediante:
            </p>
            <div className="items-center pt-2">
            <ul className="list-none pt-2">
                                <li className="flex items-center hover:text-blue-600 transition-all duration-300 hover:opacity-100 opacity-80">
                                
                                  <img src="/images/facebook.png"
                                  className="w-8 hover:opacity-80 rounded-full mr-2"
                                  ></img>
                                    <Link
                                        href="https://www.facebook.com/rrpp.publicidad"
                                        className="text-sm block"
                                    >
                                        Facebook
                                    </Link>
                                  
                                </li>
                                <br></br>
                                <li className="flex items-center hover:text-green-600 transition-all duration-300 hover:opacity-100 opacity-80">

                                  <img
                                  className="w-8 hover:opacity80 rounded-full mr-2"
                                  src="/images/whatsapp.png"
                                  ></img>
                                    <Link
                                        href="https://wa.me/5214499800425"
                                        className="text-sm block"
                                    >
                                        WhatsApp
                                    </Link>
                                </li>
                                <br></br>
                                <li className="flex items-center hover:text-red-600 transition-all duration-300 hover:opacity-100 opacity-80">
                                  <img src="/images/gmail.png"
                                  className="w-8 hover:opacity-80 rounded-full mr-2"
                                  >
                                    
                                  </img>
                                    <Link
                                    href="mailto:agencia.valore@gmail.com"
                                    className="text-sm block"
                                    >Gmail
                                    </Link>
                                </li>
                                <br></br>
                                <li className="flex items-center hover:text-orange-600 transition-all duration-300 hover:opacity-100 opacity-80">
                                  <img src="/images/instagram.png"
                                  className="w-7 hover:opacity-80 mr-2"
                                  ></img>
                                  <Link
                                  href="https://www.instagram.com/agencia_valore/"
                                  className="text-sm block"
                                  >Instagram
                                  </Link>
                                </li>
                            </ul>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
    </div>
  )
}
