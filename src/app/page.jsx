import Image from "next/image";
import { Baloo_Bhaijaan_2 } from "next/font/google";

const font = Baloo_Bhaijaan_2({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      {/* Hero section */}
      <section className="z-30 h-screen w-full flex flex-row items-center">
        {/* text */}
        <div className="z-30 flex flex-col gap-2 w-1/3 mx-auto">
          <div>
            <h2 className="text-[#ff7d00] scroll-m-20 text-xl font-semibold tracking-tight">La salud a tu alcance</h2>
            <h1 className={`${font.className} drop-shadow bg-gradient-to-r text-[#fb3640] scroll-m-20 text-5xl font-extrabold tracking-wide lg:text-6xl`}>Tu Farmacia Vecina</h1>
          </div>
          <p className="text-[#2b2c28] text-wrap">Desde 2017, ofrecemos una amplia gama de productos de salud y bienestar, siempre con atención personalizada y profesional. Ubicados en Astorga 319, Local 1 y Av. Libertador Gral. Bernardo O Higgins 01586, Rancagua. </p>
          <div className="flex flex-row gap-2 justify-evenly ">
            <a className="flex bg-gradient-to-bl from-[#ff7d00] to-[#fb3640] shadow-lg rounded-3xl py-2 px-3 text-white text-lg font-semibold" href="/Articulos">Nuestros Productos</a>
            <a className="hidden lg:flex bg-[#ff7d00]  rounded-3xl py-2 px-3 text-white text-lg font-semibold" href="/Contacto">Contáctanos</a>
          </div>
        </div>

        {/* img */}
        <div className="absolute top-0 bottom-0 right-0 h-full w-1/2 z-0 gradient-image">
          <img className="object-cover object-center h-full w-full" src="/farma_vecina_land.jpg" alt="img" />
        </div>
      </section>
      
    </>
  );
}
