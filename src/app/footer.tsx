// File: components/footer.tsx

import Link from "next/link";

function Footer() {
  return (
    <div className="bg-gray-300 w-[1330px] h-[400px] grid grid-cols-4 mt-10 gap-4">

      
      <div className="">
        <img src="" className="w-48 mt-[120px]"></img>
      </div>

      <div>
        <br />
        <br />
        <div className="flex items-center text-base hover:text-blue-700">
          <img src="/images/compromiso.png" className="w-10 mr-2"></img>
          <Link href="/Compromiso" passHref>
            Nuestro compromiso
          </Link>
        </div>

        <br />
        <br />

        <div className="flex items-center text-base hover:text-blue-700">
          <img src="/images/alianza.png" className="w-10 mr-2"></img>
          <Link href="/Alianzas" passHref>
        Alianzas comerciales
          </Link>
        </div>

        <br />
        <br />

        <div className="flex items-center text-base hover:text-blue-700">
          <img src="/images/calendar.png" className="w-10 mr-2"></img>
          <Link href="/horarios" passHref>
            Horarios
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
