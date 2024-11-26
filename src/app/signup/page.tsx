import Image from "next/image";
import Cross from "@/app/images/cross.png";

export default function Signup() {
  return (
    <div className="lg:w-[1440px] w-[410px] lg:h-33px h-[38px] bg-[#000000]">
      <div className="flex flex-row lg:w-[1440px] w-[351px] h-[38px] lg:h-[19px] absolute top-[9px] lg:left-[544px] left-[47px] text-white">
        <div className="font-satoshi font-normal text-sm leading-[18.9px]">
          Sign up and get 20% off to your first order. <br />
        </div>
        <div className="font-satoshi font-medium text-sm leading-[18.9px] underline solid">
          Sign up now
        </div>
      </div>
      <div className=" hidden lg:w-[20px] lg:h-[20px] lg:mt-[-20px]  lg:ml-[1320px]">
        <Image 
          src={Cross}
          alt="icon" 
          width={13} 
          height={13} />
      </div>
     

      </div>
    
  );
}
