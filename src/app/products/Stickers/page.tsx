import Barra from "@/app/bar";

function page() {

  return (
    <div className="">

      <Barra/>

      <h1 className="text-center text-5xl">Stickers</h1>
      <p className="columns-4 mt-10">
        <img src="/images/sticker.png" className="w-80"></img>
        <img src="/images/sticker2.png" className="w-80"></img>
        <img src="/images/sticker3.png" className="w-80"></img>
        <img src="/images/sticker4.png" className="w-72"></img>
      </p>
    </div>
  )
}

export default page
