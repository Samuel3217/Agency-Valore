import Link from "next/link";
import Image from "next/image";

function Footer() {
  return (
    <div className="bg-gray-200 w-full lg:w-[1320px] h-auto lg:h-[320px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-10 lg:ml-[-16px] lg:grid-cols-4 gap-4 p-4 mx-auto">
      
      <Link className="flex flex-col items-center" href="/">
        <Image
          alt="Logo de valore"
          width={200}
          height={20}
          src="/images/ave.png"
          className="mb-2"
        />
        <Image
          alt="Logo de valore"
          width={200}
          height={20}
          src="/images/valore.png"
        />
      </Link>

      <div className="flex flex-col">
        <div className="flex items-center text-base hover:text-cyan-600 mb-4">
          <Image
            alt="Compromiso"
            width={40}
            height={20}
            src="/images/compromiso.png"
            className="mr-2"
          />
          <Link href="/Compromiso" passHref>
            Nuestro compromiso
          </Link>
        </div>

        <div className="flex items-center text-base hover:text-cyan-600 mb-4">
          <Image
            alt="Convenios"
            width={40}
            height={20}
            src="/images/alianza.png"
            className="mr-2"
          />
          <Link href="/Alianzas" passHref>
            Convenios empresariales
          </Link>
        </div>

        <div className="flex items-center text-base hover:text-cyan-600 mb-4">
          <Image
            alt="horarios"
            width={40}
            height={20}
            src="/images/calendar.png"
            className="mr-2"
          />
          <Link href="/Horarios" passHref>
            Horarios
          </Link>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <div className="flex items-center text-base hover:text-cyan-600 mb-4">
          <Image
            src="/images/equipo.png"
            alt="equipo de trabajo"
            width={40}
            height={50}
            className="mr-2"
          />
          <Link href="/Equipo">Nuestro equipo</Link>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <Image
          src="/images/qr.jpg"
          alt="Codigo QR"
          width={250}
          height={400}
          className="mt-4"
        />
      </div>
    </div>
  );
}

export default Footer;
