"use client"
import {JSX} from "react";
import { simonetta, tangerine } from "@/lib/fonts";
import Image from "next/image";
import { useEffect, useState } from "react";
import GreenButton from "./Buttons";

function prettyName(txtname:string):string{
    if (!txtname) return ""
    return txtname.replace(/([A-Z])/g, ' $1').trim();
}

function suitCode(txtcode:string):string{
    if(!txtcode)return ""
    return txtcode.split('.').join(' ')
}

function InfoBankCard({name, code, account}:{name:string; code:string; account:string}):JSX.Element{
    const [showInfo, setShowInfo] = useState(false);
    
    const togglecard=()=>{
        setShowInfo((prev)=>!prev);
    };

    return(
        <div className="flex flex-col items-center gap-4">
            <GreenButton 
            btnText={showInfo ? "Ocultar datos" : "Ver datos"}
            onClick={togglecard}/>
            {
                showInfo && (
                    <div className={`${simonetta.className} text-black font-normal text-[16px] text-start`}>
                        <p ><span className="font-semibold">Titular:</span> {name}</p>
                        <p > <span className="font-semibold">Clabe interbancaria:</span>  {code}</p>
                        <p ><span className="font-semibold">Número de cuenta:</span> {account}</p>
                    </div>
                )
            }
        </div>
    )
}


export default function GiftsTableCard(): JSX.Element{
    
    const [hostName, setHostName] =useState("");
    const [bankCode, setBankCode]=useState("");
    const [bankAccount, setBankAccount]=useState("");
    const [liverpoolUrl, setLiverpoolUrl] =useState("");
    const [liverpoolNum, setLiverpoolNum] =useState("");
    const [amazonUrl, setAmazonUrl] =useState("");
    
    const linkPage = (url:string)=>{
        window.open(url, "_blank");
    }

    
    
    useEffect(()=>{
        const nameValue = process.env.NEXT_PUBLIC_SANTANDER_NAME;
        if (nameValue) setHostName(nameValue);

        const bandkCodeNum = process.env.NEXT_PUBLIC_SANTANDER_CODE_NUMBER;
        if (bandkCodeNum) setBankCode(bandkCodeNum);

        const AccountNum = process.env.NEXT_PUBLIC_SANTANDER_ACCOUNT_NUMBER;
        if (AccountNum) setBankAccount(AccountNum);  

        const liberpoolUrlValue = process.env.NEXT_PUBLIC_LIVERPOOL_GIFT_URL;
        if (liberpoolUrlValue) setLiverpoolUrl(liberpoolUrlValue);

        const liberpoolNumValue = process.env.NEXT_PUBLIC_LIVERPOOL_NUMBER;
        if (liberpoolNumValue) setLiverpoolNum(liberpoolNumValue);

        const amazonUrlValue = process.env.NEXT_PUBLIC_AMAZON_GIFT_URL;
        if (amazonUrlValue) setAmazonUrl(amazonUrlValue)   
            
        },[]); 

        type GiftCards ={
            Icon: ()=>JSX.Element;
            numberList: string
            page: string;
        }
        
        const InfoCards:GiftCards[]=[
            {
                Icon: ()=>( <Image src="/Vectors/Logo-Liverpool.svg" alt="Liverpool" width={212.36} height={50}/>),
                numberList: liverpoolNum,
                page: liverpoolUrl,
            },
            {
                Icon: ()=>( <Image src="/Vectors/Logo-amazon.svg" alt="Amazon" width={190} height={55}/>),
                numberList: "",
                page: amazonUrl,
            },
        
        ]

        return (

        <section className="w-full bg-yellow-2 flex flex-col justify-center pt-[40px] pb-[80px]">
            <h1 className={`${tangerine.className} font-extrabold text-center text-[48px] text-yellow-4`}>Mesa de Regalos </h1>
            <Image src="/Vectors/Leafs_Form.svg" alt="leafs" width={151.48} height={75.97} className="mx-auto" />
            <p className={`${simonetta.className} text-black font-normal text-[24px] text-center`}>Tu presencia es nuestro mejor regalo, pero si quieres tener un detalle con nosotros te damos algunas sugerencias.</p>
            <div className="w-full h-[150px] flex flex-row justify-between mt-[24px] px-[80px]">
                <div className="w-full h-full flex flex-row ">
                    {InfoCards.map((elem, idx)=>(        
                        <div 
                        key={idx}
                        className="h-full w-full flex flex-col justify-between items-center ">
                            {elem.Icon()}   
                            {elem.numberList && elem.numberList.trim()!=="" &&(
                                <p className={`${simonetta.className} text-black font-normal text-[20px] text-start`}> <span className= "font-semibold" > No. Evento</span> {elem.numberList}</p>
                            )} 
                            <GreenButton btnText="Ingresar" onClick={()=>linkPage(elem.page)}/>
                        </div>
                    ))}
                </div>
                <div className="w-full h-full flex flex-row justify-between">
                    <div className="w-full h-full flex flex-col justify-between items-center gap-[24px]">
                        <Image src="/Vectors/Logo-Santander.svg" alt="Santander" width={230} height={60} />
                        <InfoBankCard 
                        name={prettyName(hostName)} 
                        code={suitCode(bankCode)}
                        account={bankAccount}/>
                    </div>
                    <div className="w-full h-full flex flex-col items-center">
                         <Image src="/Vectors/Logo-evelope.svg" alt="evelop" width={150} height={160} />
                         <p className={`${simonetta.className} text-[24px] font-bold text-yellow-4`}>LLuvia de Sobres</p>
                    </div>

                </div>
            </div>

        </section>
  );
}


