"use client";
import { JSX } from "react";
import { simonetta, tangerine } from "@/lib/fonts";
import Image from "next/image";

type ScheduleIcon={
    Icon: ()=>JSX.Element;
    title:string;
    hour:string
}

const titleIcons: ScheduleIcon[]=[
    {
        Icon: ()=>( <Image src="/Vectors/Vector-I-rings.svg" alt="Rings" width={100} height={63}/>),
        title: "Ceremonia",
        hour: "5:00 pm" 
    },
    {
        Icon: ()=>( <Image src="/Vectors/Vector-I-camera.svg" alt="Photos" width={100} height={72.62}/>),
        title: "Sesión de fotos",
        hour: "6:30 pm" 
    },
    {
        Icon: ()=>( <Image src="/Vectors/Vector-I-floral-arch.svg" alt="Rings" width={100} height={107.67}/>),
        title: "Recepción",
        hour: "7:00 pm" 
    },
    {
        Icon: ()=>( <Image src="/Vectors/Vector-I-drinking.svg" alt="Toast" width={100} height={119.17}/>),
        title: "Brindis",
        hour: "8:00 pm" 
    },
    {
        Icon: ()=>( <Image src="/Vectors/Vector-I-Dish.svg" alt="Dinner" width={125} height={96.1}/>),
        title: "Cena",
        hour: "8:30 pm" 
    },
    {
        Icon: ()=>( <Image src="/Vectors/Vector-I-couple.svg" alt="Couple" width={65} height={118.66}/>),
        title: "Primer baile",
        hour: "9:00 pm" 
    },
    {
        Icon: ()=>( <Image src="/Vectors/Vector-I-party.svg" alt="Party" width={100} height={114.74}/>),
        title: "Fiesta",
        hour: "9:30 pm" 
    }
]

export default function Schedule(): JSX.Element{
    return(
        <section className="h-full flex flex-col justify-center lg:px-[80px] py-[32px] rounded-[16px] bg-yellow-2 gap-0">
            <h1 className={`${tangerine.className} font-extrabold text-center text-[48px] text-yellow-4`}>Itinerario</h1>
            <img src="/Vectors/Detail-flower.svg" alt="flower" width={151.48} height={75.97} className="mx-auto" />
            <div className="flex flex-row justify-between ">
                {titleIcons.map((element, index)=>(
                    <div 
                    key={index}
                    className="flex flex-col justify-end items-center gap-1 ">
                        {element.Icon()}
                        <p className={`${tangerine.className} text-black font-black text-[30px]`}>{element.title}</p>
                        <p className={`${simonetta.className} text-yellow-4 font-medium text-[20px]`}>{element.hour}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}
