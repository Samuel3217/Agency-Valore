
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
          <Image 
          alt="Compromiso"
          width={40}
          height={20}
          src="/images/compromiso.png" className="mr-2"></Image>
          <Link href="/Compromiso" passHref>
            Nuestro compromiso
          </Link>
        </div>

        <br />
        <br />

        <div className="flex items-center text-base hover:text-cyan-600">
          <Image 
          alt="Convenios"
          width={40}
          height={20}
          src="/images/alianza.png" className=" mr-2"></Image>
          <Link href="/Alianzas" passHref>
        Convenios empresariales
          </Link>
        </div>

        <br />
        <br />

        <div className="flex items-center text-base hover:text-cyan-600">
          <Image 
          alt="horarios"
          width={40}
          height={20}
          src="/images/calendar.png" className="w-10 mr-2"></Image>
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
          className=" mr-2"
          ></Image>
          <Link href="/Equipo">Nuestro equipo</Link>
        </div>
      </div>
      <div>
        <Image
        src=""
        alt="Codigo QR"
        width={500}
        height={500}
        className=""
        />
      </div>
    </div>
  );
}

export default Footer;
