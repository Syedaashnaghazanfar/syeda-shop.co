import Image from "next/image";
import shirt1 from "@/app/images/blackshirt.png";
import jeans1 from "@/app/images/bluejeans.png";
import shirt2 from "@/app/images/checkbluered.png";
import shirt3 from "@/app/images/orangestripes.png";
import stars from "@/app/images/starsrate.png";
import stars2 from "@/app/images/starsreview.png";
import line from "@/app/images/Line 4.png";
import shirt4 from "@/app/images/bluestripes.png";
import shirt5 from "@/app/images/courageorange.png";
import shorts from "@/app/images/blueshorts.png";
import jeans2 from "@/app/images/blackjeans.png";
import stars5 from "@/app/images/5stars.png";
import stars4 from "@/app/images/4stars.png";
import stars3 from "@/app/images/3stars.png";
import casual from "@/app/images/casual.png";
import formal from "@/app/images/formal.png";
import party from "@/app/images/party.png";
import gym from "@/app/images/gym1.png";
import tick from "@/app/images/tick.png";
import mail from "@/app/images/mail.png";

export default function Products() {
  return (
    <div className="lg:w-[1440px] w-[410px] h-auto">
      <div className="lg:w-[403px] w-[269px] h-[38px] lg:h-[58px] flex absolute lg:top-[991px] top-[1147px] left-[61px] lg:left-[518px] font-integral font-semibold lg:text-[48px] text-[32px] items-center justify-center text-black ">
        NEW ARRIVALS
      </div>
      <Image
        src={shirt1}
        alt="shirt"
        width={198}
        height={200}
        className="absolute lg:w-[296px]  lg:top-[1104px] top-[1217px] lg:left-[100px] left-[16px] lg:rounded-[20px] rounded-[13.42px] hover: border-black hover:border-2 transition-transform duration-300 hover:scale-105"
      />
      <Image
        src={jeans1}
        alt="jeans"
        width={198}
        height={200}
        className="absolute lg:w-[295px] lg:top-[1104px] top-[1217px] lg:left-[415px] left-[230px] lg:rounded-[20px] rounded-[13.42px] hover: border-black hover:border-2  transition-transform duration-300 hover:scale-105"
      />
      <Image
        src={shirt2}
        alt="shirt"
        width={295}
        height={298}
        className="absolute top-[1104px] left-[730px] rounded-[20px] hover: border-black hover:border-2  transition-transform duration-300 hover:scale-105 lg:block hidden"
      />
      <Image
        src={shirt3}
        alt="shirt"
        width={295}
        height={298}
        className="absolute top-[1104px] left-[1045px] rounded-[20px] hover: border-black hover:border-2  transition-transform duration-300 hover:scale-105 lg:block hidden"
      />

      {/* shirt1 */}
      <h1 className="lg:w-[225px] w-[180px] lg:h-[27px] h-[22px] absolute lg:top-[1418px] top-[1427.01px] lg:left-[100px] left-[16px] font-satoshi font-bold  text-black lg:text-[15px] text-[12px] lg:leading-[27px] leading-[21.6px]">
        T-SHIRT WITH TAPE DETAILS
      </h1>
      <div className="lg:w-[150px] w-[127px] h-[16px]  lg:h-[19px] absolute flex  lg:top-[1453px] top-[1453px] lg:left-[100px] left-[16px] lg:gap-[13px] gap-[11px]">
        <Image src={stars} alt="stars" width={87} height={15.47} />
        <p className="lg:w-[33px] w-[29px] lg:h-[19px] h-[16px] font-satoshi font-normal lg:text-[14px] text-[12px] lg:leading-[18.9px] leading-[16.2px]">
          4.5/5
        </p>
        <div className="lg:w-[55px] w-[46px] lg:h-[32px] h-[27px] absolute lg:top-[27px] top-[27px] gap-[10px]">
          <p className="font-satoshi font-bold text-[24px] leading-[32.4px] text-black">
            $120
          </p>
        </div>
      </div>

      {/* jeans1 */}
      <h1 className="lg:w-[225px] w-[120px]  lg:h-[27px] h-[22px] absolute flex lg:top-[1418px] top-[1427.01px] lg:left-[415px] left-[230px] font-satoshi font-bold  text-black lg:text-[15px] text-[12px] lg:leading-[27px] leading-[21.6px]">
        SKINNY FIT JEANS
      </h1>
      <div className="lg:w-[126.6px] w-[106.09px] lg:h-[19px] h-[16px] absolute flex top-[1453px] lg:left-[415px] left-[230px] lg:gap-[13px] gap-[11px]">
        <Image src={stars2} alt="stars" width={67.09} height={15.47} />
        <p className="lg:w-[33px] w-[28px] lg:h-[19px] h-[16px] font-satoshi font-normal lg:text-[14px] text-[12px] lg:leading-[18.9px] leading-[16.2px]">
          4.5/5
        </p>
        <div className="w-[200px] h-[32px]  flex absolute top-[27px]  gap-[10px] ">
          <p className="font-satoshi font-bold lg:text-[24px] text-[20px] lg:leading-[32.4px] leading-[27px] text-black">
            $240
          </p>
          <p className="w-[61px] h-[32px] font-satoshi font-bold text-[24px]  leading-[32.4px] text-[#00000066] line-through">
            $260
          </p>
          <div className="w-[58px] h-[28px] rounded-[62px] px-[14px] py-[6px] gap-[12px] bg-[#FF33331A] text-[#FF3333] font-satoshi font-medium text-[12px] leading-[16.2px] animate-bounce">
            -20%
          </div>
        </div>
      </div>

      {/* shirt2 */}
      <h1 className="lg:block hidden w-[151px] h-[27px] absolute md:flex top-[1418px] left-[730px] font-satoshi font-bold  text-black text-[15px] leading-[27px]">
        CHECKERED SHIRT
      </h1>
      <div className=" lg:block hidden w-[150px] h-[19px] absolute md:flex top-[1453px] left-[730px] gap-[13px]">
        <Image src={stars} alt="stars" width={0} height={0} />
        <p className="w-[33px] h-[19px]  font-satoshi font-normal text-[14px] leading-[18.9px]">
          4.5/5
        </p>
        <div className="w-[55px] h-[32px] absolute top-[27px] gap-[10px]">
          <p className="font-satoshi font-bold text-[24px] leading-[32.4px] text-black">
            $180
          </p>
        </div>
      </div>

      {/* shirt3 */}
      <h1 className=" lg:block hidden w-[199px] h-[27px] absolute md:flex top-[1418px] left-[1045px] font-satoshi font-bold  text-black text-[15px] leading-[27px]">
        SLEEVE STRIPED T-SHIRT
      </h1>
      <div className=" lg:block hidden w-[150px] h-[19px] absolute   top-[1453px] left-[1045px] gap-[13px]">
        <Image src={stars} alt="stars" width={0} height={0} />
        <p className="w-[33px] h-[19px]  font-satoshi font-normal text-[14px] leading-[18.9px]">
          4.5/5
        </p>
        <div className="w-[200pxpx] h-[32px]  flex absolute top-[27px] gap-[10px] ">
          <p className="font-satoshi font-bold text-[24px] leading-[32.4px] text-black">
            $130
          </p>
          <p className="w-[61px] h-[32px] font-satoshi font-bold text-[24px]  leading-[32.4px] text-[#00000066] line-through">
            $160
          </p>
          <div className="w-[58px] h-[28px] rounded-[62px] px-[14px] py-[6px] gap-[12px] bg-[#FF33331A] text-[#FF3333] font-satoshi font-medium text-[12px] leading-[16.2px]  animate-bounce">
            -30%
          </div>
        </div>
      </div>

       {/* button */}
      <button className="lg:w-[218px] w-[358px] lg:h-[52px] h-[46px] absolute lg:top-[1548px] top-[1542px] lg:left-[611px] left-[16px] rounded-[62px] border px-[54px] py-[16px] gap-[12px] border-[#0000001A] text-black font-satoshi font-medium lg:text-[16px] text-[14px] lg:leading-[21.6px] leading-[18.9px] hover:bg-[#8b8787fb]">
        {" "}
        Veiw All
      </button>
      {/* line */}
      <div className="lg:w-[1240px] w-[358px] absolute lg:top-[1664px] top-[1610px] lg:left-[100px] left-[16px]">
        <Image src={line} alt="line" width={0} height={0} />
      </div>

      {/* top selling */}
      <div className="lg:w-[346px] w-[231px] lg:h-[58px] h-[38px] flex absolute lg:top-[1728px] top-[1650px] lg:left-[546px]  left-[80px] font-integral font-semibold lg:text-[48px] text-[32px] items-center justify-center text-black lg:leading-[57.6px] leading-[38.4px]">
        TOP SELLING
      </div>
      <Image
        src={shirt4}
        alt="shirt"
        width={198}
        height={200}
        className="lg:w-[296px] lg:h-[298px] absolute lg:top-[1841px] top-[1720px] lg:left-[100px] left-[16px] lg:rounded-[20px] rounded-[13.42px]  hover: border-black hover:border-2 transition-transform duration-300 hover:scale-105"
      />
      <Image
        src={shirt5}
        alt="jeans"
        width={198}
        height={200}
        className="lg:w-[295px] lg:h-[298px] absolute lg:top-[1841px] top-[1720px] lg:left-[415px] left-[230px] lg:rounded-[20px] rounded-[13.42px] hover: border-black hover:border-2  transition-transform duration-300 hover:scale-105"
      />
      <Image
        src={shorts}
        alt="shirt"
        width={295}
        height={298}
        className=" lg:block hidden absolute top-[1841px] left-[730px] rounded-[20px] hover: border-black hover:border-2  transition-transform duration-300 hover:scale-105"
      />
      <Image
        src={jeans2}
        alt="shirt"
        width={295}
        height={298}
        className="lg:block hidden absolute top-[1841px] left-[1045px] rounded-[20px] hover: border-black hover:border-2  transition-transform duration-300 hover:scale-105"
      />

      {/* shirt4 */}
      <h1 className="lg:w-[194px] w-[154px] lg:h-[27px] h-[22px] absolute lg:top-[2155px] top-[1930.01px] lg:left-[100px]  left-[16px] font-satoshi font-bold  text-black lg:text-[15px] text-[11px] leading-[27px]">
        VERTICAL STRIPED SHIRT
      </h1>
      <div className="lg:w-[160.7px] w-[136.11px] lg:h-[19px] h-[16px] absolute flex  lg:top-[2190px] top-[1956.01px] lg:left-[100px] left-[16px] lg:gap-[13px] gap-[11px]">
        <Image src={stars5} alt="stars" width={0} height={0} />
        <p className="w-[34px] h-[19px]  font-satoshi font-normal text-[14px] leading-[18.9px]">
          5.0/5
        </p>
        <div className="w-[55px] h-[32px] flex  absolute top-[27px] gap-[10px]">
          <p className="font-satoshi font-bold text-[24px] leading-[32.4px] text-black">
            $212
          </p>
          <p className="w-[61px] h-[32px] font-satoshi font-bold text-[24px]  leading-[32.4px] text-[#00000066] line-through">
            $232
          </p>
          <div className="w-[58px] h-[28px] rounded-[62px] px-[14px] py-[6px] gap-[12px] bg-[#FF33331A] text-[#FF3333] font-satoshi font-medium text-[12px] leading-[16.2px] animate-bounce">
            -20%
          </div>
        </div>
      </div>

      {/* shirt5*/}
      <h1 className="lg:w-[226px] w-[186px] lg:h-[27px] h-[22px] absolute lg:top-[2155px] top-[1930.01px] lg:left-[415px] font-satoshi font-bold  text-black lg:text-[15px] text-[11px] leading-[27px] left-[230px]">
        COURAGE GRAPHIC T-SHIRT
      </h1>
      <div className="lg:w-[137.9px] w-[116.2px] lg:h-[19px] h-[16px] absolute flex  lg:top-[2190px] top-[1956.01px] lg:left-[415px] left-[230px] lg:gap-[13px] gap-[11px]">
        <Image src={stars4} alt="stars" width={0} height={0} />
        <p className="w-[35px] h-[19px]  font-satoshi font-normal text-[14px] leading-[18.9px]">
          4.0/5
        </p>
        <div className="w-[54px] h-[32px]  flex absolute top-[27px]  ">
          <p className="font-satoshi font-bold text-[24px] leading-[32.4px] text-black">
            $145
          </p>
        </div>
      </div>

      {/* shorts */}
      <h1 className="lg:block hidden w-[239px] h-[27px] absolute top-[2155px] left-[730px] font-satoshi font-bold  text-black text-[15px] leading-[27px]">
        LOOSE FIT BERMUDA SHORTS
      </h1>
      <div className="lg:block hidden w-[113.09px] h-[19px] absolute md:flex  top-[2190px] left-[730px] gap-[13px]">
        <Image src={stars3} alt="stars" width={0} height={0} />
        <p className="w-[33px] h-[19px]  font-satoshi font-normal text-[14px] leading-[18.9px]">
          3.0/5
        </p>
        <div className="w-[55px] h-[32px] absolute top-[27px] gap-[10px]">
          <p className="font-satoshi font-bold text-[24px] leading-[32.4px] text-black">
            $80
          </p>
        </div>
      </div>

      {/* jeans2 */}
      <h1 className=" lg:block hidden w-[185px] h-[27px] absolute top-[2155px] left-[1045px] font-satoshi font-bold  text-black text-[15px] leading-[27px]">
        FADED SKINNY JEANS
      </h1>
      <div className=" lg:block hidden w-[150px] h-[19px] absolute md:flex  top-[2190px] left-[1045px] gap-[13px]">
        <Image src={stars} alt="stars" width={0} height={0} />
        <p className="w-[33px] h-[19px]  font-satoshi font-normal text-[14px] leading-[18.9px]">
          4.5/5
        </p>
        <div className="w-[200pxpx] h-[32px]  flex absolute top-[27px] gap-[10px] ">
          <p className="font-satoshi font-bold text-[24px] leading-[32.4px] text-black">
            $210
          </p>
        </div>
      </div>

      <button className="lg:w-[218px] w-[358px] lg:h-[52px] h-[46px] absolute lg:top-[2285px] top-[2027px] lg:left-[611px] left-[16px] rounded-[62px]  border px-[54px] py-[16px] gap-[12px] border-[#0000001A] text-black font-satoshi font-medium lg:text-[16px] text-[14px] leading-[21.6px] hover:bg-[#8b8787fb]">
        {" "}
        Veiw All
      </button>

      <div className="lg:w-[1239px] w-[358px] lg:h-[866px] h-[975px] absolute flex lg:top-[2417px] top-[2123px] lg:left-[100px] left-[16px] lg:rounded-[40px] rounded-[20px] bg-[#F0F0F0]">
        <h1 className="lg:w-[687px] w-[246px] lg:h-[58px] h-[72px] absolute lg:top-[70px] top-[40px] lg:left-[276px] left-[56px] font-integral font-bold lg:text-[48px] text-[32px] justify-center items-center lg:leading-[57.6px] leading-[36px]">
          BROWSE BY DRESS STYLE
        </h1>
        <Image
          src={casual}
          alt="casual"
          width={310}
          height={190}
          className="lg:w-[407px] lg:h-[289px] absolute lg:top-[192px] top-[140px] lg:left-[64px] left-[24px] rounded-[20px] hover: border-black hover:border-2  transition-transform duration-300 hover:scale-105"
        />
        <Image
          src={formal}
          alt="formal"
          width={310}
          height={190}
          className=" lg:w-[684px] lg:h-[289px] absolute lg:top-[192px] top-[386px] lg:left-[491px] left-[24px] rounded-[20px] hover: border-black hover:border-2  transition-transform duration-300 hover:scale-105"
        />
        <Image
          src={party}
          alt="party"
          width={310}
          height={190}
          className="lg:w-[684px] lg:h-[289px] absolute lg:top-[501px] top-[552px] lg:left-[64px] left-[24px] rounded-[20px] hover: border-black hover:border-2  transition-transform duration-300 hover:scale-105"
        />
        <Image
          src={gym}
          alt="gym"
          width={310}
          height={190}
          className="lg:w-[407px] lg:h-[289px] absolute lg:top-[501px] top-[708px] lg:left-[768px] left-[24px] rounded-[20px] hover: border-black hover:border-2  transition-transform duration-300 hover:scale-105"
        />
      </div>

      <div className="lg:w-[654px] w-[286px] lg:h-[58px] h-[72px] absolute  lg:top-[3363px] top-[3148px] lg:left-[100px] left-[16px] font-integral font-semibold lg:text-[48px] text-[32px] lg:leading-[57.6px] leading-[36px]">
        OUR HAPPY CUSTOMERS
      </div>

      <div className="lg:w-[400px] w-[358px] lg:h-[240px] h-[186.19px] absolute lg:top-[3461px] top-[3244px] lg:left-[100px] left-[16px] rounded-[20px] border border-[#0000001A] lg:px-[32px] lg:py-[28px] p-[24px] gap-[342px]">
        <div className="lg:w-[336px] w-[310px] lg:h-[161.58px] h-[138.19px] absolute lg:gap-[15px] gap-[22px]">
          <Image
            src={stars5}
            alt="stars"
            width={118}
            height={19.19}
            className="lg:w-[138.84px] lg:h-[22.58px] lg:gap-[6.49] gap-[5.51px]"
          />
          <div className="lg:w-[336px] w-[310px] lg:h-[124px] h-[107px] absolute flex lg:gap-[12px] gap-[8px]">
            <div className="lg:w-[110px] w-[89px] lg:h-[24px] h-[19px] gap-[4px]">
              <h1 className="lg:w-[82px] w-[66px] lg:h-[15px] h-[12px] font-satoshi font-bold leading-[22px] text-black text-[16px] lg:text-[0px] whitespace-nowrap">
                Sarah M.
              </h1>
              <Image src={tick} alt="tick" width={24} height={24} />
              <p className="w-[336px] h-[88px] font-satoshi font-normal leading-[22px] text-[16px] text-[#00000099]">
                "I'm blown away by the quality and style of the clothes I
                received from Shop.co. From casual wear to elegant dresses,
                every piece I've bought has exceeded my expectations.”
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:block hidden w-[400px] h-[240px] absolute top-[3461px] left-[520px] rounded-[20px] border border-[#0000001A] px-[32px] py-[28px] gap-[342px]">
        <div className="w-[336px] h-[161.58px] absolute gap-[15px]">
          <Image
            src={stars5}
            alt="stars"
            width={138.84}
            height={22.58}
            className="gap-[6.49]"
          />
          <div className="w-[336px] h-[124px] absolute flex gap-[12px]">
            <div className="w-[110px] h-[24px] absolute gap-[4px]">
              <h1 className="w-[82px] h-[15px] font-satoshi font-bold leading-[22px] text-black">
                Alex K.
              </h1>
              <Image src={tick} alt="tick" width={24} height={24} />
              <p className="w-[336px] h-[88px] font-satoshi font-normal leading-[22px] text-[16px] text-[#00000099]">
                "Finding clothes that align with my personal style used to be a
                challenge until I discovered Shop.co. The range of options they
                offer is truly remarkable, catering to a variety of tastes and
                occasions.”
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:block hidden w-[400px] h-[240px] absolute top-[3461px] left-[940px] rounded-[20px] border border-[#0000001A] px-[32px] py-[28px] gap-[342px]">
        <div className="w-[336px] h-[161.58px] absolute gap-[15px]">
          <Image
            src={stars5}
            alt="stars"
            width={138.84}
            height={22.58}
            className="gap-[6.49]"
          />
          <div className="w-[336px] h-[124px] absolute flex gap-[12px]">
            <div className="w-[110px] h-[24px] absolute gap-[4px]">
              <h1 className="w-[82px] h-[15px] font-satoshi font-bold leading-[22px] text-black">
                James L.
              </h1>
              <Image src={tick} alt="tick" width={24} height={24} />
              <p className="w-[336px] h-[88px] font-satoshi font-normal leading-[22px] text-[16px] text-[#00000099]">
                "As someone who's always on the lookout for unique fashion
                pieces, I'm thrilled to have stumbled upon Shop.co. The
                selection of clothes is not only diverse but also on-point with
                the latest trends.”
              </p>
            </div>
          </div>
        </div>
      </div>

    

     
    </div>
  );
}
