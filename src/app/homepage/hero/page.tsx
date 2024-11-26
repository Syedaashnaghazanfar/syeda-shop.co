import Image from "next/image";
import text from "@/app/images/Text.png";
import Line from "@/app/images/Line 9.png";
import couple from "@/app/images/couple.jpg";
import star from "@/app/images/Vector (6).png";
import star2 from "@/app/images/Vector.png"

export default function Hero() {
  return (
    <div className="lg:w-[1440px] w-[410px] lg:h-[663px] h-[853px] bg-[#F2F0F1] flex ">
      <div className="lg:w-[577px] lg:h-[173px] lg:ml-[100px] w-[315px] h-[93px] absolute top-[138px] left-[16px] lg:static">
        <p className="font-integral font-extrabold lg:text-[64px] lg:leading-[64px] text-[36px] leading-[34px] lg:mt-[100px]">
          FIND CLOTHES THAT MATCHES YOUR STYLE
        </p>
        <p className="lg:w-[545px] lg:h-[33px] text-[#00000099] lg:mt-[20px] w-[358px] h-[50px] absolute lg:static top-[120px] left-[10px] font-satoshi lg:text-[16px] text-[14px] font-normal lg:leading-[22px] leading-[20px]">
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </p>
      </div>
      {/* shop button */}
      <button className="absolute lg:w-[210px] h-[52px] w-[358px] left-[16px] top-[340px] lg:top-[140px] lg:ml-[100px] lg:mt-[380px] rounded-[62px] bg-black text-white px-[54px] py-[16px] gap-3 font-medium text-[16px] leading-[21.6px] hover:bg-[#8b8787fb]">
        Shop Now</button>

        {/* collabs */}
        <div className=" lg:absolute lg:flex lg:w-[596px] lg:h-[74px] lg:gap-[32px] lg:left-[100px] lg:top-[607px] hidden">
            <div className=" w-[141px] h-[74px] mr-[10px]">
                <h1 className=" w-[107px] h-[54px] font-satoshi font-bold text-[40px] text-black leading-[54px]">
                    200+
                </h1>
                <div className=" w-[141px] h-[22px] ">
                <p className="text-[#00000099] font-satoshi font-normal text-[16px] leading-[22px]  whitespace-nowrap">International Brands</p>
                </div>
                <Image src={Line} alt="line" className="ml-[170px] mt-[-70px]" />
            </div>
            <div className="w-[141px] h-[74px] mr-[10px]">
                <h1 className=" w-[107px] h-[54px] font-satoshi font-bold text-[40px] text-black leading-[54px]">
                    2,000+
                </h1>
                <div className="  w-[141px] h-[22px] ">
                <p className="text-[#00000099] font-satoshi font-normal text-[16px] leading-[22px]  whitespace-nowrap">High-Quality Products</p>
                </div>
                <Image src={Line} alt="line" className="ml-[170px] mt-[-70px]" />
            </div>
            <div className=" w-[141px] h-[74px]">
                <h1 className=" w-[107px] h-[54px] font-satoshi font-bold text-[40px] text-black leading-[54px]">
                    30,000+
                </h1>
                <div className="  w-[141px] h-[22px]  ">
                <p className="text-[#00000099] font-satoshi font-normal text-[16px] leading-[22px]  whitespace-nowrap">Happy Customers</p>
                </div>
               
            </div>   
       </div>

       {/* collabs for sm size */}
       
        <div className="lg:hidden absolute flex w-[278px] h-[52px] left-[56px] top-[410px] justify-between">
            <div className=" w-[106px] h-[48px]">
                <h1 className=" w-[64px] h-[32px] font-satoshi font-bold text-[24px] text-black leading-[32.4pxpx]">
                    200+
                </h1>
                <div className=" w-[106px] h-[22px] ">
                <p className="text-[#00000099] font-satoshi font-normal text-[12px] leading-[22px]  whitespace-nowrap">International Brands</p>
                </div>
                <Image src={Line} alt="line" className="ml-[130px] mt-[-70px]" />
            </div>
            <div className="w-[117px] h-[48px]">
                <h1 className=" w-[88px] h-[32px] font-satoshi font-bold text-[24px] text-black leading-[32.4px]">
                    2,000+
                </h1>
                <div className="  w-[117px] h-[22px] ">
                <p className="text-[#00000099] font-satoshi font-normal text-[12px] leading-[22px]  whitespace-nowrap">High-Quality Products</p>
                </div>
               
            </div>
            </div>

            <div className=" w-[103px] h-[48px] lg:hidden absolute top-[481px] left-[144px]">
                <h1 className=" w-[103px] h-[32px] font-satoshi font-bold text-[24px] text-black leading-[32.4px]">
                    30,000+
                </h1>
                <div className="  w-[95px] h-[22px]  ">
                <p className="text-[#00000099] font-satoshi font-normal text-[12px] leading-[22px]  whitespace-nowrap">Happy Customers</p>
                </div>
               
            </div>   
       

       {/* couples */}
           <Image src={couple} alt="couples" width={500} height={0} className="ml-[150px] hidden lg:block"/>
           {/* stars */}
           <div className="w-[104px] h-[104px] mt-[100px] left-[1255px] mr-[40px] hidden lg:block">
                <Image src={star} alt="star" width={104} height={104} className="animate-spin" />
           </div>
           <div className="w-[56px] h-[56px]  absolute top-[431px] left-[750px] animate-spin hidden lg:block  ">
                <Image src={star2} alt="star" width={56} height={56} />
           </div>

           {/* for mobile */}
           <div className=" lg:hidden w-[390px] h-[448px] absolute top-[533px]">
           <Image src={couple} alt="couples" width={0} height={0} />
           </div>
           <div className="w-[76px] h-[76px] absolute top-[563px] left-[293px] lg:hidden">
           <Image src={star} alt="star" width={0} height={0} className="animate-spin" />
           </div>
           <div className="w-[44px] h-[44px] absolute top-[640px] left-[27px] lg:hidden">
           <Image src={star2} alt="star" width={0} height={0} className="animate-spin" />
           </div>
    </div>
  );
}
