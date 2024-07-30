'use client'
import { useState, useEffect } from 'react';

export default function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
        "/ensure.svg",
        "/la_roche_posay.png",
        "/loreal.png",
        "/nivea.svg",
        "/eucerin.svg"
    ];

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000); // Cambia de imagen cada 5 segundos

        return () => clearInterval(interval);
    }, []);

    return (
        <div id="default-carousel" className="relative w-full  flex flex-row justify-evenly" >


            {/* brand circle */}
            <div className=' rounded-full bg-white w-fit shadow-xl flex items-center overflow-hidden'>
                {/* brand Image */}
                <img src="/ensure.svg" className='h-10 md:h-24 w-10 md:w-24' alt="ensure logo" />
            </div>

            {/* brand circle */}
            <div className=' rounded-full bg-white w-fit shadow-xl flex items-center overflow-hidden'>
                {/* brand Image */}
                <img src="/la_roche_posay.png" className=' w-10 md:w-24' alt="ensure logo" />
            </div>

            {/* brand circle */}
            <div className=' rounded-full bg-white w-fit shadow-xl flex items-center overflow-hidden '>
                {/* brand Image */}
                <img src="/loreal.png" className=' w-10 md:w-24' alt="ensure logo" />
            </div>

            {/* brand circle */}
            <div className=' rounded-full bg-white w-fit shadow-xl flex items-center overflow-hidden'>
                {/* brand Image */}
                <img src="/nivea.svg" className='h-10 md:h-24 w-10 md:w-24' alt="ensure logo" />
            </div>

            {/* brand circle */}
            <div className=' rounded-full bg-white w-fit shadow-xl flex items-center overflow-hidden'>
                {/* brand Image */}
                <img src="/eucerin.svg" className='h-10 md:h-24 w-10 md:w-24' alt="ensure logo" />
            </div>
        </div>
    );
}
