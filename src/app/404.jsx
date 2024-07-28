
import { Baloo_Bhaijaan_2 } from "next/font/google";

const font = Baloo_Bhaijaan_2({ subsets: ['latin'] })

export default function Contacto() {

    return (
        <>
            {/* Hero section */}
            <section className="z-30 h-screen w-full flex flex-row items-center">
                {/* text */}
                <div className="z-30 flex flex-col gap-2 w-1/3 mx-auto">
                    <div>
                        <h2 className="text-[#ff7d00] scroll-m-20 text-xl font-semibold tracking-tight">Error 404:</h2>
                        <h1 className={`${font.className} drop-shadow bg-gradient-to-r text-[#fb3640] scroll-m-20 text-5xl font-extrabold tracking-wide lg:text-6xl`}>La Pagina no Existe</h1>
                    </div>
                    <p className="text-[#2b2c28] text-wrap">Este sitio web se encuentra en desarrollo esta pagina no existe todavia</p>
                </div>

                {/* img */}
                <div className="absolute top-0 bottom-0 right-0 h-full w-1/2 z-0 gradient-image">
                    <img className="object-cover object-center h-full w-full" src="/farma_vecina_land.jpg" alt="img" />
                </div>
            </section>
        </>
    )
}