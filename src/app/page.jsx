import Image from "next/image";
import { Baloo_Bhaijaan_2 } from "next/font/google";
import Carousel from "@/Components/Carousel";

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

          <p className="text-[#2b2c28] mb-2 hidden md:flex text-wrap">Desde 2017, ofrecemos una amplia gama de productos de salud y bienestar, siempre con atención personalizada y profesional. Ubicados en Astorga 319, Local 1 y Av. Libertador Gral. Bernardo O Higgins 01586, Rancagua. </p>

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


      {/* Social Prof */}
      <section className="md:h-screen bg-gradient-to-b from-[#ff7d00]   to-white py-20 flex flex-col items-center justify-evenly">
        <h1 className="scroll-m-20 border-b-4 w-fit border-white rounded-lg text-white drop-shadow text-2xl font-extrabold tracking-tight lg:text-3xl">Cuenta con nosotros</h1>

        {/* Cards container*/}
        <div className="flex w-full  p-4 justify-center items-center flex-col sm:flex-row gap-4 md:gap-12 ">

          {/* card */}
          <div className="flex flex-col min-h-56 bg-white p-4 sm:w-3/4 md:max-w-64 rounded-lg gap-2 items-center drop-shadow">
            <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#ff7d00"><path d="M480.09-490q28.91 0 49.41-20.59 20.5-20.59 20.5-49.5t-20.59-49.41q-20.59-20.5-49.5-20.5t-49.41 20.59q-20.5 20.59-20.5 49.5t20.59 49.41q20.59 20.5 49.5 20.5ZM480-159q133-121 196.5-219.5T740-552q0-117.79-75.29-192.9Q589.42-820 480-820t-184.71 75.1Q220-669.79 220-552q0 75 65 173.5T480-159Zm0 79Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z" /></svg>
            <div>
              <h2 className="scroll-m-20 text-xl bg-clip-text  fill-[#ff7d00] bg-gradient-to-tr from-[#ff7d00] to-[#fb3640] text-transparent drop-shadow-sm font-semibold tracking-tight">En Rancagua</h2>
              <p className="">
                Astorga 319, Local 1. Y
                Av. Libertador Gral. Bernardo O Higgins 01586.
              </p>
            </div>

          </div>

          {/* card */}
          <div className="flex flex-col min-h-56 bg-white p-4 sm:w-3/4 md:max-w-64 rounded-lg  gap-2 items-center drop-shadow">
            <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#ff7d00"><path d="M863-404 557-97q-9 8.5-20.25 12.75T514.25-80Q503-80 492-84.5T472-97L98-472q-8-8-13-18.96-5-10.95-5-23.04v-306q0-24.75 17.63-42.38Q115.25-880 140-880h307q12.07 0 23.39 4.87Q481.7-870.25 490-862l373 373q9.39 9 13.7 20.25 4.3 11.25 4.3 22.5t-4.5 22.75Q872-412 863-404ZM516-138l306-307-375-375H140v304l376 378ZM245-664q21 0 36.5-15.5T297-716q0-21-15.5-36.5T245-768q-21 0-36.5 15.5T193-716q0 21 15.5 36.5T245-664Zm236 185Z" /></svg>
            <div>
              <h2 className="scroll-m-20 text-xl bg-clip-text  fill-[#ff7d00] bg-gradient-to-tr from-[#ff7d00] to-[#fb3640] text-transparent drop-shadow-sm font-semibold tracking-tight">Ofertas semanales</h2>
              <p className="">
                Revisa nuestros productos y redes sociales para enterarte de las ultimas ofertas.
              </p>
            </div>
          </div>

          {/* card */}
          <div className="flex flex-col min-h-56 bg-white p-4 sm:w-3/4 md:max-w-64 rounded-lg  gap-2 items-center drop-shadow">
            <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#ff7d00"><path d="m694-120 53-54-93-93-54 53q-20 20-19.5 47t19.5 47q20 19 47 19.5t47-19.5Zm94-95 54-53q20-20 19.5-47T841-362q-20-20-46.28-20T748-362l-53 54 93 93ZM736-78q-37 37-89 37t-89-37q-37-37-37-89t37-89l148-148q37-37 89-37t89 37q37 37 37 89t-37 89L736-78ZM180-180v-600 600Zm0 60q-24.75 0-42.37-17.63Q120-155.25 120-180v-600q0-24.75 17.63-42.38Q155.25-840 180-840h205q5-35 32-57.5t63-22.5q36 0 63 22.5t32 57.5h205q24.75 0 42.38 17.62Q840-804.75 840-780v284q-15-4-30-5t-30 1v-280H180v600h281q-1 15 .5 30t5.5 30H180Zm300-677q14 0 24.5-10.5T515-832q0-14-10.5-24.5T480-867q-14 0-24.5 10.5T445-832q0 14 10.5 24.5T480-797ZM280-620v-60h400v60H280Zm0 170v-60h400v49q-3 2-6.5 5t-6.5 6H280Zm0 170v-60h277l-42 42q-5 5-8.5 9t-7.5 9H280Z" /></svg>
            <div>
              <h2 className="scroll-m-20 text-xl bg-clip-text  fill-[#ff7d00] bg-gradient-to-tr from-[#ff7d00] to-[#fb3640] text-transparent drop-shadow-sm font-semibold tracking-tight">Variedad de medicamentos</h2>
              <p className="">
                Medicamentos, bioequivalentes, genericos, perfumeria y mas.
              </p>
            </div>
          </div>

          {/* card */}
          <div className="flex flex-col min-h-56 bg-white p-4 sm:w-3/4 md:max-w-64 rounded-lg  gap-2 items-center drop-shadow">
            <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#ff7d00"><path d="M475-140q5 0 11.5-2.5T497-149l337-338q13-13 19.5-29.67Q860-533.33 860-550q0-17-6.5-34T834-614L654-794q-13-13-30-19.5t-34-6.5q-16.67 0-33.33 6.5Q540-807 527-794l-18 18 81 82q13 14 23 32.5t10 40.5q0 38-29.5 67T526-525q-25 0-41.5-7.5t-30.19-21.34L381-627 200-446q-5 5-7 10.53-2 5.52-2 11.84 0 12.63 8.5 21.13 8.5 8.5 21.17 8.5 6.33 0 11.83-3t9.5-7l138-138 42 42-137 137q-5 5-7 11t-2 12q0 12 9 21t21 9q6 0 11.5-2.5t9.5-6.5l138-138 42 42-137 137q-4 4-6.5 10.33-2.5 6.34-2.5 12.67 0 12 9 21t21 9q6 0 11-2t10-7l138-138 42 42-138 138q-5 5-7 11t-2 11q0 14 8 22t22 8Zm.06 60Q442-80 416-104.5t-31-60.62Q351-170 328-193t-28-57q-34-5-56.5-28.5T216-335q-37-5-61-30t-24-60q0-17 6.72-34.05Q144.45-476.1 157-489l224-224 110 110q8 8 17.33 12.5 9.34 4.5 18.67 4.5 13 0 24.5-11.5t11.5-24.65q0-5.85-3.5-13.35T548-651L405-794q-13-13-30-19.5t-34-6.5q-16.67 0-33.33 6.5-16.67 6.5-29.61 19.36L126-642q-14 14-19.5 29.5t-6.5 35q-1 19.5 7.5 38T128-506l-43 43q-20-22-32.5-53T40-579q0-30 11.5-57.5T84-685l151-151q22-22 49.79-32.5 27.8-10.5 57-10.5 29.21 0 56.71 10.5T448-836l18 18 18-18q22-22 49.79-32.5 27.8-10.5 57-10.5 29.21 0 56.71 10.5T697-836l179 179q22 22 33 50.03 11 28.04 11 57 0 28.97-11 56.47T876-444L539-107q-13 13-29.53 20t-34.41 7ZM377-626Z" /></svg>
            <div>
              <h2 className="scroll-m-20 text-xl bg-clip-text  fill-[#ff7d00] bg-gradient-to-tr from-[#ff7d00] to-[#fb3640] text-transparent drop-shadow-sm font-semibold tracking-tight">Independientes</h2>
              <p className="">
                Somos una Farmacia independiente, atendiendo a nuestros vecinos desde 2017.
              </p>
            </div>
          </div>



        </div>
        {/*  Feature brands */}
        <div className="w-4/5 flex flex-col  justify-center items-center mx-auto ">
          <h1 className="scroll-m-20 border-b-4 border-[#ff7d00] rounded-lg text-[#ff7d00] drop-shadow mb-6 text-2xl font-extrabold tracking-tight lg:text-3xl">Marcas Destacadas</h1>
          <Carousel />
        </div>
      </section>
    </>
  );
}
