"use client"
import { useState } from "react";
import { simonetta, tangerine } from "@/lib/fonts";
import GreenButton from "./Buttons";
import Image from "next/image";


type Hotel = {
    name:string;
    location: string;
    phone: string;
    mapView:string;
    page:string;
}

const InfoHotel: Hotel[] = [
    {
        name: "Hotel Fiesta Inn Colima",
        location: "Prolongación, Blvrd Camino Real 1101 Col, El Diezmo, 28010 Colima, Col.",
        phone: "312 316 4444",
        mapView: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3766.5189970325705!2d-103.69153682479002!3d19.259783781982964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x84255a8c7db99e21%3A0x64c8723b96093751!2sFiesta%20Inn%20Colima!5e0!3m2!1ses-419!2smx!4v1749011935681!5m2!1ses-419!2smx",
        page:"https://www.fiestamericanatravelty.com/fiesta-inn/hoteles/fiesta-inn-colima",
    }, 
    {
        name: "Hotel Maria Isabel",
        location: "Blvrd Camino Real 351, Jardines Vista Hermosa III, 28017 Colima, Col.",
        phone: "312 316 0750",
        mapView: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3766.774322312797!2d-103.705772!3d19.248664800000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x84255aa2a1b04c55%3A0x72c331e366fd08b3!2sHotel%20Mar%C3%ADa%20Isabel!5e0!3m2!1ses-419!2smx!4v1749012045522!5m2!1ses-419!2smx",
        page: "https://www.hotelmariaisabel.com.mx/",
    }
];

export default function HotelCard(){

    const [selectMap, setSelectMap] = useState<Set<string>>(new Set());

    const toggleMap = (hotelName:string)=>{
        setSelectMap((prev)=>{
            const newSet = new Set(prev);
            if(newSet.has(hotelName)){
                newSet.delete(hotelName);
            }else{
                newSet.add(hotelName);
            }
            return newSet;
        })
    }

    return (
        <section className="w-full lg:px-[80px]">
            <div className="w-full flex flex-col justify-center">
                <h1 className={`${tangerine.className} font-extrabold text-center text-[48px] text-yellow-4`}>Hospedaje</h1>
                <Image src="/Vectors/Detail-keys.svg" alt="hotel-key" width={75} height={154.27} className="mx-auto"/>
                <p className={`${simonetta.className} text-black font-normal text-[24px] text-center`}>Con mucho cariño, compartimos opciones de hospedaje para nuestros invitados que viajan desde lejos </p>
            </div>
            <div className="w-full flex flex-row justify-between gap-[24px] my-[24px]">
                {InfoHotel.map((info)=>(
                    <div 
                    key={info.name}
                    className="w-full flex flex-col justify-center items-center gap-[16px]  relative">
                        <h2 className={`${tangerine.className} font-extrabold text-center text-[36px] text-red-brown`}>{info.name}</h2>
                        <div className="w-full flex flex-row justify-items-start items-center gap-[16px]">
                            <Image src="/Vectors/Icon-location.svg" width={32} height={42.67} alt=""  />
                            <p className={`${simonetta.className} text-[24px] font-normal text-black`}>{info.location}</p>
                        </div>

                        <div className="w-full flex flex-row justify-items-start items-center gap-[16px]">
                            <Image src="/Vectors/Icon-phone.svg" width={40} height={40} alt="" />
                            <p className={`${simonetta.className} text-[24px]  font-normal text-black`}>{info.phone}</p>
                        </div>

                        <GreenButton 
                            btnText={selectMap.has(info.name) ? "Ocultar mapa": "Ver mapa"} 
                            onClick={()=>toggleMap(info.name)}
                        />

                            {selectMap.has(info.name) && (
                                <div className="w-full h-[300px] mt-4 transition-all duration-500 ease-in-out">
                                    <iframe 
                                    src={info.mapView}
                                    width="100%"
                                    height="100%"
                                    className="border-yellow-3 rounded-[16px]"
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"></iframe>

                                </div>
                            )}

                        <a className="w-full flex flex-row gap-[8px] justify-end hover:bg-[#f4f2eb] px-[24px] items-center" 
                           href={info.page}
                           target="_blank"
                           rel="noopener noreferrer"
                           > 
                            <p className={`${simonetta.className} text-[16px] font-normal text-yellow-3`} > Ir al sitio </p> 
                             <Image src="/Vectors/Icon-arrowR-yellow.svg"  alt="arrow" width={40} height={40} />
                        </a>
                    </div>
                ))}

            </div>

        </section>
    )
}

