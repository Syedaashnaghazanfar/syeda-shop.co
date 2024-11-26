"use client";

import Image from "next/image";
import versage from "@/app/images/versage.png";
import zara from "@/app/images/zara.png";
import gucci from "@/app/images/gucci.png";
import prada from "@/app/images/parada.png";
import calvin from "@/app/images/calvin-clein.png";
import box from "@/app/images/Rectangle 3.png"

export default function Brands() {
  return (
    <div>
        <div className="w-full h-[122px] bg-black overflow-hidden relative lg:block hidden">
      {/* Wrapper for the infinite animation */}
      <div className="flex animate-loop ">
        <Image
          src={versage}
          alt="versage"
          width={166.48}
          height={33.16}
          className="ml-[100px] mt-[40px]"  
        />
        <Image
          src={zara}
          alt="zara"
          width={91}
          height={38}
          className="ml-[100px] mt-[40px]"  
        />
        <Image
          src={gucci}
          alt="gucci"
          width={156}
          height={36}
          className="ml-[100px] mt-[40px]"  
        />
        <Image
          src={prada}
          alt="prada"
          width={194}
          height={32}
          className="ml-[100px] mt-[40px]"  
        />
        <Image
          src={calvin}
          alt="calvin"
          width={206.79}
          height={33.35}
          className="ml-[100px] mt-[40px]"  
        />
        {/* Duplicate images for seamless looping */}
        <Image
          src={versage}
          alt="versage"
          width={166.48}
          height={33.16}
          className="ml-[100px] mt-[40px]"  
        />
        <Image
          src={zara}
          alt="zara"
          width={91}
          height={38}
          className="ml-[100px] mt-[40px]" 
        />
        <Image
          src={gucci}
          alt="gucci"
          width={156}
          height={36}
          className="ml-[100px] mt-[40px]"  
        />
        <Image
          src={prada}
          alt="prada"
          width={194}
          height={32}
          className="ml-[100px] mt-[40px]"  
        />
        <Image
          src={calvin}
          alt="calvin"
          width={206.79}
          height={33.35}
          className="ml-[100px] mt-[40px]" 
        />
         <Image
          src={versage}
          alt="versage"
          width={166.48}
          height={33.16}
          className="ml-[100px] mt-[40px]"  
        />
         <Image
          src={zara}
          alt="zara"
          width={91}
          height={38}
          className="ml-[100px] mt-[40px]"  
        />
        <Image
          src={gucci}
          alt="gucci"
          width={156}
          height={36}
          className="ml-[100px] mt-[40px]"  
        />
      </div>

     
      <style jsx>{`
        @keyframes loop {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-60%);
          }
        }
        .animate-loop {
          animation: loop 20s linear infinite;
          display: flex;
          width: calc(100% + 1440px); 
        }
      `}</style>  
    </div>
         {/* for mobile */}
         <div className="lg:hidden w-[410px] h-[166px] absolute top-[951px] bg-black">
         <Image
          src={versage}
          alt="versage"
          width={116.74}
          height={23.25}
          className="absolute top-[40px] left-[16px]"  
        />
        <Image
          src={zara}
          alt="zara"
          width={63.81}
          height={26.65}
          className="absolute top-[40px] left-[166.74px]"  
        />
        <Image
          src={gucci}
          alt="gucci"
          width={109.39}
          height={25.24}
          className="absolute top-[40px] left-[264.55px]"  
        />
        <Image
          src={prada}
          alt="prada"
          width={127}
          height={21}
          className="absolute top-[90px] left-[48px]"  
        />
        <Image
          src={calvin}
          alt="calvin"
          width={134.84}
          height={21.75}
          className="absolute top-[90px] left-[206.16px]"  
        />
         </div>
    
    </div>
  
  );
}
