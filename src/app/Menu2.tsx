import { Button } from "@/components/ui/button"
import { CalendarDays } from "lucide-react"
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
  } from "@/components/ui/hover-card"
import Link from "next/link"
  
export function Menu2() {
  return (
    <div className="fixed bottom-5 right-5  flex round">
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link" className="hover:text-gray-600 ">@Contactanos</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
         
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">Valore</h4>
            <p className="text-sm">
              Puedes contactarnos mediante:
            </p>
            <div className="items-center pt-2">
            <ul className="list-none pt-2">
                                <li className="flex items-center">
                                
                                  <img src="/images/facebook.png"
                                  className="w-8 hover:opacity-80 rounded-full mr-2"
                                  ></img>
                                    <Link
                                        href="https://www.facebook.com/rrpp.publicidad"
                                        className="text-sm hover:text-blue-600 transition-all duration-300 block"
                                    >
                                        Facebook
                                    </Link>
                                  
                                </li>
                                <br></br>
                                <li className="flex items-center">

                                  <img
                                  className="w-8 hover:opacity80 rounded-full mr-2"
                                  src="/images/whatsapp.png"
                                  ></img>
                                    <Link
                                        href="https://wa.me/5214499800425"
                                        className="text-sm hover:text-green-600 transition-all duration-300 block"
                                    >
                                        WhatsApp
                                    </Link>
                                </li>
                                <br></br>
                                <li className="flex items-center">
                                  <img src="/images/gmail.png"
                                  className="w-8 hover:opacity-80 rounded-full mr-2"
                                  >
                                    
                                  </img>
                                    <Link
                                    href="mailto:agencia.valore@gmail.com"
                                    className="text-sm hover:text-red-600 transition-all duration-300 block"
                                    >Gmail
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
