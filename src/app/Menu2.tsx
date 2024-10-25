
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
            <h4 className="text-1xl font-semibold text-center">Valore</h4>
            <p className="text-sm border-b border-gray-300 w-[300px] text-center">
              Puedes contactarnos mediante:
            </p>
            <div className="items-center pt-2">
            <ul className="list-none pt-2">
                                <li className="flex items-center hover:text-blue-600 transition-all duration-300 hover:opacity-100 opacity-80">

                                  <Image src="/images/facebook.png"
                                  alt="facebook"
                                  width={30}
                                  height={10}
                                  className="hover:opacity-80 rounded-full mr-2"
                                  ></Image>
                                    <Link
                                        href="https://www.facebook.com/rrpp.publicidad" passHref
                                        className="text-sm block"
                                       target="_blank" rel="noopener noreferrer"
                                    >
                                        Facebook
                                    </Link>

                                </li>
                                <br></br>
                                <li className="flex items-center hover:text-green-600 transition-all duration-300 hover:opacity-100 opacity-80">

                                  <Image
                                  className="hover:opacity-80 rounded-3xl mr-2"
                                  src="/images/whatsapp.png"
                                  alt="whatsapp"
                                  width={30}
                                  height={20}
                                  ></Image>
                                    <Link
                                        href="https://wa.me/5214499800425" passHref
                                        className="text-sm block"
                                        target="_blank" rel="noopener noreferrer"
                                    >
                                        WhatsApp
                                    </Link>
                                </li>
                                <br></br>
                                <li className="flex items-center hover:text-red-600 transition-all duration-300 hover:opacity-100 opacity-80">
                                  <Image src="/images/gmail.png"
                                  className="hover:opacity-80 rounded-full mr-2"
                                  alt="Gmail"
                                  width={30}
                                  height={20}
                                  >

                                  </Image>
                                    <Link
                                    href="mailto:agencia.valore@gmail.com" passHref
                                    className="text-sm block"
                                    target="_blank" rel="noopener noreferrer"
                                    >Gmail
                                    </Link>
                                </li>
                                <br></br>
                                <li className="flex items-center hover:text-orange-600 transition-all duration-300 hover:opacity-100 opacity-80">
                                  <Image src="/images/instagram.png"
                                  className="w-7 hover:opacity-80 mr-2"
                                  alt="instagram"
                                  width={30}
                                  height={20}
                                  ></Image>
                                  <Link
                                  href="https://www.instagram.com/agencia_valore/" passHref
                                  className="text-sm block"
                                  target="_blank" rel="noopener noreferrer"
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
