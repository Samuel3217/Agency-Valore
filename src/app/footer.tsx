
import Link from "next/link";
import Image from "next/image";

function Footer() {
  return (
    <div className="bg-gray-200 w-[1320px] h-[320px] grid grid-cols-4 mt-10 gap-4 ml-4">

      
      <Link className="" href="/" >
        <Image alt="Logo de valore" width={200} height={20} src="/images/ave.png" className="mt-[30px] ml-10"></Image>
        <Image alt="Logo de valore" width={200} height={20} src="/images/valore.png" className="mt-[-30px] ml-10 "></Image>
      </Link>

      <div>
        <br />
        <br />
        <div className="flex items-center text-base hover:text-cyan-600">
          <img src="/images/compromiso.png" className="w-10 mr-2"></img>
          <Link href="/Compromiso" passHref>
            Nuestro compromiso
          </Link>
        </div>

        <br />
        <br />

        <div className="flex items-center text-base hover:text-cyan-600">
          <img src="/images/alianza.png" className="w-10 mr-2"></img>
          <Link href="/Alianzas" passHref>
        Convenios empresariales
          </Link>
        </div>

        <br />
        <br />

        <div className="flex items-center text-base hover:text-cyan-600">
          <img src="/images/calendar.png" className="w-10 mr-2"></img>
          <Link href="/Horarios" passHref>
            Horarios
          </Link>
        </div>
      </div>

      <div>
        <div className="mt-12 flex items-center text-base hover:text-cyan-600">
          <Image
          src="/images/equipo.png"
          alt="equipo de trabajo"
          width={40}
          height={50}
          className="w-10 mr-2"
          ></Image>
          <Link href="/Equipo">Nuestro equipo</Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
