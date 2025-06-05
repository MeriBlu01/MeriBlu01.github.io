"use client"
import { JSX } from "react";
import { simonetta } from "@/lib/fonts";

type ButtonsElement ={
    btnText: string;
    onClick?: ()=> void;
}

export default function GreenButton({btnText, onClick}: ButtonsElement){

    return (
        <button 
        onClick={onClick}
        className= {`${simonetta.className} font-light text-[24px] flex justify-center text-center py-[8px] px-[16px] bg-[#4a4700] rounded-[8px] hover:bg-[#927a20] hover:cursor-pointer hover:shadow-2xl hover:scale-110 transition-colors text-[#f4f2eb] `}>
            {btnText}
        </button>
    )
}