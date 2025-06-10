"use client";
import { JSX, useState } from "react";
import Image from "next/image";
import { simonetta } from "@/lib/fonts";

//definicion de tipo
type LinkItem ={
    href:string;
    label:string;
    Icon:()=>JSX.Element;
}

//nombre de id y de etiqueta de seccion 

const links: LinkItem[] = [
    {href:"#invitation", label:"Invitación", Icon:()=> <Image src="/Vectors/Icon-event.svg" alt="event" width={24} height={24} />},
    {href:"#gallery", label:"Galería", Icon:()=> <Image src="/Vectors/Icon-photos.svg" alt="gallery" width={20} height={20} />} ,
    {href:"#location", label:"Ubicación", Icon:()=> <Image src="/Vectors/Icon-location-menu.svg" alt="location" width={24} height={24} />},
    {href:"#itinerary", label:"Itinerario", Icon:()=> <Image src="/Vectors/Icon-Itinerary.svg" alt="Itinerary" width={24} height={24} />},
    {href:"#dressCode", label:"Codigo de vestimenta", Icon:()=> <Image src="/Vectors/Icon-DC.svg" alt="DC" width={24} height={24} />},
    {href:"#lodging", label:"Hospedaje", Icon:()=> <Image src="/Vectors/Icon-hotel.svg" alt="hotel" width={24} height={24} />},
    {href:"#gifts", label:"Mesa de reagalos", Icon:()=> <Image src="/Vectors/Icon-gift.svg" alt="gift" width={20} height={20} />},
    {href:"#confirmation", label:"Confirmación", Icon:()=> <Image src="/Vectors/Icon-confirmation.svg" alt="confirmation" width={20} height={20} />},
]

export default function NavBar():JSX.Element{
    const [isOpen, setIsOpen]=useState(false);
    return(
        <header className="sticky top-0 z-50  w-full bg-yellow-2 border-bot-green1 px-[16px] lg:px-[80px] ">
            <nav className="flex">
                {/*pantallas pequeñas */}
                <div className="w-full flex justify-between min-w-[390px] mx-auto lg:hidden   "> 
                    <a href="#hero">
                        <Image src="/Vectors/Icon-A&A.svg" alt="Novios" width={40} height={40} />
                    </a>
                    
                    <button onClick={()=>setIsOpen(!isOpen)}
                        className="hover:bg-[#FBFAF7] active:bg-[#FBFAF7]">
                        <Image src="/Vectors/Icon-Menu-green.svg" alt="Menu" width={24} height={24}/>
                    </button>
                </div>
                {/*pantallas grandes */}
                <div className="hidden lg:flex flex-center justify-between items-center w-full max-w-[1730px] mx-auto ">
                    <a href="#hero">
                        <Image src="/Vectors/Icon-A&A.svg" alt="Novios" width={40} height={40} />
                    </a>
                    {links.map((link)=>(
                        <a 
                        key={link.href}
                        href={link.href}
                        className={`${simonetta.className} text-xl font-bold text-[#4A4700] hover:text-[#F4F2EB] hover:bg-[#4A4700] px-4 py-2 rounded transition-colors"`}>
                        {link.label}
                        </a>
                    ))}
                </div>
            </nav>
            {/*Menu desplegable*/}
            {isOpen && (
                <div className="lg:hidden flex flex-col px-4 pb-4 border-[#4A4700] border-t">
                     {/*<p  className={`${simonetta.className} text-[24px] text-yellow-2 bg-yellow-4 px-[16px] rounded`} >Menu</p> */}
                    {links.map((link, idx)=>(
                        <a
                            key={idx}
                            href={link.href}
                            onClick={()=>setIsOpen(false)}
                            className={`${simonetta.className} flex flex-row gap-4 text-[24px] text-[#4A4700] px-[16px] active:rounded active:bg-[#927a20] active:text-[#F4F2EB] transition-colors`}
                            >
                                {link.Icon()}
                                {link.label}
                        </a>
                    ))}
                </div>
            )}

        </header>
    )
}

