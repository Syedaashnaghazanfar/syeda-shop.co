import Image from "next/image";
import Logo from "@/app/images/SHOP.CO.png";
import Downarrow from "@/app/images/Vector (4).png";
import Search from "@/app/images/Vector (5).png";
import Cart from "@/app/images/Frame.png"
import User from "@/app/images/Frame (1).png"
import bars from "@/app/images/Frame (4).png"
import search2 from "@/app/images/Frame (5).png"


export default function Navbar() {
  return (
    <div className="flex flex-row bg-white lg:w-[1440px] lg:h-[60px] h-[30px] mb-[25px] w-[390px] items-center">
      <div className="flex flex-row items-center w-[1240px] h-[48px] mt-6 ml-[100px] gap-10">
        <div className="lg:hidden block absolute top-[54px] left-[16px]"> <Image src={bars} alt="bars" width={0} height={0}/></div>
        {/* Logo */}
        <div className="lg:w-[160px] lg:h-[22px] w-[126px] h-[18px] absolute top-[57px] left-[56px] lg:static">
          <Image src={Logo} alt="logo" width={160} height={22} />
        </div>

        <div className="lg:flex flex-row lg:items-center lg:w-[321px] lg:h-[22px] lg:gap-6 hidden">
          <li className="list-none font-satoshi font-normal leading-[21.6px] flex items-center gap-x-6 ">
            <span className="relative flex items-center">
              Shop
              <Image
                src={Downarrow}
                alt="arrow"
                width={11.5}
                height={6.5}
                className="absolute top-[5.25px] ml-[42px]"
              />
            </span>
            <span className="ml-3">On Sale</span>
            <span>New Arrivals</span>
            <span>Brands</span>
          </li>
        </div>
        <div className="lg:w-[577px] lg:h-[48px] bg-[#F0F0F0] lg:rounded-[62px] lg:px-4 lg:py-3 lg:gap-3 lg:flex lg:items-center hidden">
          <Image src={Search} alt="logo" width={24} height={24}/>
          <p className="font-satoshi font-normal text-[16px] leading-[21.6px] text-[#00000066]">
            Search for products...
          </p>
        </div>
        {/* icons for small screen */}
        <div className="w-[96px] h-[24px] flex absolute top-[54px] left-[330px] gap-3 lg:hidden">
        <div className="lg:hidden flex  text-black ">
        <Image src={search2} alt="logo" width={24} height={24}/>
        <Image src={Cart} alt="logo" width={24} height={24} />
        <Image src={User} alt="logo" width={24} height={24} />
        </div>

        </div>
        
        <div className="lg:w-[62px] lg:h-[62px] lg:gap-[14px] lg:flex lg:items-center hidden">
        <Image src={Cart} alt="logo" width={22.13} height={20.25} />
        <Image src={User} alt="logo" width={22.13} height={20.25} />
        </div>
      </div>
    </div>
  );
}
