
import mail from "@/app/images/mail.png";
import Image from "next/image";
import logo from "@/app/images/SHOP.CO.png"
import twitter from "@/app/images/1.png";
import facebook from "@/app/images/2.png";
import instagram from "@/app/images/3.png";
import github from "@/app/images/4.png";
import line from "@/app/images/Line 8.png";
import card2 from "@/app/images/card2.png";
import gpay from "@/app/images/Badge (4).png";
import paypal from "@/app/images/Badge (3).png";
import visa from "@/app/images/visa.jpg";
import apple from "@/app/images/Badge (2).png"

export default function Footer(){
    return(
        <div>
            
      <div className="w-[1441px] h-[589px] absolute top-[51px] left-[-1px] z-10">
  <div className="lg:w-[1240px] w-[358px] lg:h-[180px] h-[293px] absolute flex lg:top-[3781px] top-[3480px] lg:left-[100px] left-[16px] rounded-[20px] justify-between px-[64px] py-[36px] bg-black">
    <h1 className="lg:w-[551px] w-[297px] lg:h-[94px] h-[105px] absolute font-integral font-bold lg:text-[40px] text-[32px] lg:leading-[45px] leading-[35px] text-white">
      STAY UPTO DATE ABOUT OUR LATEST OFFERS
    </h1>
    <div className="lg:w-[349px] w-[311px] flex flex-col  absolute lg:left-[800px] left-[20px] lg:top-[35px] top-[150px] gap-[14px]">
      <div className="flex items-center w-full bg-white rounded-[62px] px-[16px] py-[12px]">
        <Image src={mail} alt="mail" width={24} height={24} />
        <p className="ml-4 font-satoshi font-normal text-[16px] text-[#00000066]">
          Enter Your Email Address
        </p>
      </div>

     
      <div className="flex items-center w-full bg-white rounded-[62px] px-[16px] py-[12px] hover:bg-[#8e9291f5]">
        <p className="ml-[70px] font-satoshi font-medium text-[16px] text-black">
          Subscribe to Newsletter
        </p>
      </div>
    </div>
  </div>
</div>


<div className="lg:w-[1441px] w-[392px] lg:h-[499px] h-[846px] absolute lg:top-[3871px] top-[3615px] left-[-1px] bg-[#F0F0F0] z-0">
    <div className="w-[1240px] h-[177px] absolute top-[190px] left-[100px] justify-between">
        <div className="w-[248px] h-[177px] flex  gap-[35px]">
              <div className="w-[167px] h-[23px] absolute flex flex-1 gap-[25px]">
                <Image src={logo} alt="logo" width={144} height={20} className="lg:w-[167px] lg:h-[20px] absolute top-[30px] left-[-60px] lg:static"/>
                <p className="lg:w-[248px] w-[357px] lg:h-[66px] h-[40px] font-satoshi font-normal absolute top-[60px] left-[-60px] lg:left-[1px] text-[14px] lg:leading-[22px] leading-[20px] lg:top-[45px] text-[#00000099]">
                We have clothes that suits your style and which you’re proud to wear. From women to men.
                </p>
              </div>
              <div className="w-[148px] h-[28px] flex absolute lg:top-[150px] top-[130px] left-[-60px] lg:left-[1px] justify-between">
               <Image src={twitter} alt="twitter" width={0} height={0}/>
               <Image src={facebook} alt="facebook" width={0} height={0}/>
               <Image src={instagram} alt="ig" width={0} height={0}/>
               <Image src={github} alt="gh" width={0} height={0}/>
              </div>
        </div>
            {/* COMPANY */}
            <div className="lg:w-[104px] w-[91px] lg:h-[177px] h-[146px] absolute lg:left-[400px] left-[-60px] lg:top-[0px] top-[190px] flex flex-col lg:gap-[26px] gap-3">
                 <div className="w-[98px] h-[18px] font-satoshi font-medium lg:text-[16px] text-[14px] leading-[18px] tracking-[3px]">COMPANY</div>  
                  <div className="w-[104px] h-[133px] flex flex-col font-satoshi font-normal text-[16px] leading-[19px] text-[#00000099] lg:space-y-5 space-y-3">
                  <span>About </span>
                   <span>Features</span>
                   <span>Work</span>
                   <span>Career</span></div> 
            </div>

            {/* HELP */}
            
             <div className="w-[136px] h-[177px] absolute lg:left-[600px] left-[130px] lg:top-[0px] top-[190px] flex flex-col lg:gap-[26px] gap-3">
                 <div className="w-[98px] h-[18px] font-satoshi font-medium lg:text-[16px] text-[14px] leading-[18px] tracking-[3px]">HELP</div>  
                  <div className="w-[104px] h-[133px] flex flex-col font-satoshi whitespace-nowrap font-normal text-[16px] leading-[19px] text-[#00000099] lg:space-y-5 space-y-3">
                  <span>Customer Support</span>
                   <span>Delivery Details</span>
                   <span>Terms & Conditions</span>
                   <span>Privacy Policy</span></div> 
            </div>

            {/* FAQ */}
            <div className="w-[149px] h-[177px] absolute lg:left-[800px] left-[-60px] lg:top-[0px] top-[390px] flex flex-col lg:gap-[26px] gap-3">
                 <div className="w-[98px] h-[18px] font-satoshi font-medium lg:text-[16px] text-[14px] leading-[18px] tracking-[3px]">FAQ</div>  
                  <div className="w-[104px] h-[133px] flex flex-col font-satoshi whitespace-nowrap font-normal text-[16px] leading-[19px] text-[#00000099] lg:space-y-5 space-y-3">
                  <span>Account</span>
                   <span>Manage Deliveries
                   </span>
                   <span>Orders</span>
                   <span>Payments</span></div> 
            </div>

            {/* Resources */}
            <div className="w-[149px] h-[177px] absolute lg:left-[1000px] left-[130px] lg:top-[0px] top-[390px] flex flex-col lg:gap-[26px] gap-3">
                 <div className="w-[98px] h-[18px] font-satoshi font-medium lg:text-[16px] text-[14px] leading-[18px] tracking-[3px]">RESOURCES</div>  
                  <div className="w-[104px] h-[133px] flex flex-col font-satoshi whitespace-nowrap font-normal text-[16px] leading-[19px] text-[#00000099] lg:space-y-5 space-y-3">
                  <span>Free eBooks</span>
                   <span>Development Tutorial
                   </span>
                   <span>How to - Blog</span>
                   <span>Youtube Playlist</span></div> 
            </div>
    </div>
</div>
               <div className="lg:w-[1240px] w-[358px] absolute lg:top-[4288px] top-[4367px] lg:left-[100px] left-[16px] rounded">
                <Image src={line} alt="line" width={0} height={0}/>
               </div>
               
               <div className="w-[269px] h-[19px]  absolute lg:top-[4310px] top-[4390px] lg:left-[100px] left-[61px] font-satoshi font-normal text-[14px] leading-[18.9px] text-[#00000099]">Shop.co © 2000-2023, All Rights Reserved</div>
                
                <div className="lg:w-[281.07px] w-[39.96px] lg:h-[30.03px] h-[25.74px] flex absolute lg:top-[4310px] top-[4420px] lg:left-[1059px] left-[74px] lg:gap-[12px] gap-[10.29px]">
                   <Image src={visa} alt="v" width={0} height={0}/>
                   <Image src={card2} alt="v" width={0} height={0}/>
                   <Image src={paypal} alt="v" width={0} height={0}/>
                   <Image src={apple} alt="v" width={0} height={0}/>
                   <Image src={gpay} alt="v" width={0} height={0}/>
                </div>
        </div>
    )
}
