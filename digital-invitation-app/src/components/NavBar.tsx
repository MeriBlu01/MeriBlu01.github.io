"use client";
import { JSX, useState } from "react";
import Image from "next/image";
import { simonetta } from "@/lib/fonts";

//definicion de tipo
type LinkItem ={
    href:string;
    label:string;
}

//nombre de id y de etiqueta de seccion 

const links: LinkItem[] = [
    {href:"#invitation", label:"Invitación"},
    {href:"#gallery", label:"Galería"},
    {href:"#location", label:"Ubicación"},
    {href:"#itinerary", label:"Itinerario"},
    {href:"#dressCode", label:"Codigo de vestimenta"},
    {href:"#lodging", label:"Hospedaje"},
    {href:"#gifts", label:"Mesa de reagales"},
    {href:"#confirmation", label:"Confirmación"},
]

export default function NavBar():JSX.Element{
    const [isOpen, setIsOpen]=useState(false);
    return(
        <header className="w-full bg-[#F4F2EB] border-b-[2px] border-[#4A4700] px-[16px] lg:px-[80px]">
            <nav className="flex">
                {/*pantallas pequeñas */}
                <div className="w-full flex justify-between lg:hidden "> 
                    <Image src="/Vectors/Icon-A&A.svg" alt="Novios" width={40} height={40} />
                    <button onClick={()=>setIsOpen(!isOpen)}
                        className="hover:bg-[#FBFAF7]">
                        <Image src="/Vectors/Icon-Menu-green.svg" alt="Menu" width={24} height={24}/>
                    </button>
                </div>
                {/*pantallas grandes */}
                <div className="hidden lg:flex flex-center justify-between w-full">
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
                <div className="lg:hidden flex flex-col items-stat px-4 pb-4">
                    {links.map((link)=>(
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={()=>setIsOpen(false)}
                            className="text-[#4A4700] py-2 w-full border-b border-[#4A4700] hover:text-[#F4F2EB] hover:bg-[#4A4700]"
                            >
                                {link.label}
                        </a>
                    ))}
                </div>
            )}

        </header>
    )
}

