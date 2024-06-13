import Link from "next/link";

function Footer() {
  return (
    <div className="bg-gray-200 w-[1330px] h-[320px] grid grid-cols-4 mt-10 gap-4">

      
      <Link className="" href="/">
        <img src="images/ave.png" className="w-48 mt-buttonpx] ml-10 opacity-80 hover:opacity-100 transition-all duration-300"></img>
        <img src="images/valore.png" className="w-48 mt-[-30px] ml-10 opacity-80 hover:opacity-100 transition-all duration-300"></img>
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
        Alianzas comerciales
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
    </div>
  );
}

export default Footer;
