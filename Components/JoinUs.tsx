import React from "react";
import Image from "next/image";
import Cover2 from "../public/Images/cover2.jpg";
import Cover3 from "../public/Images/Backgrounds/1.jpg";
import Cover4 from "../public/Images/Backgrounds/2.jpg";
import Cover5 from "../public/Images/Backgrounds/3.jpg";
import Cover6 from "../public/Images/Backgrounds/4.jpg";
import star from "../public/Images/four-star.png";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

type Props = {};

export default function JoinUs({}: Props) {
  return (
    <div className="relative bg-white h-[500px] md:h-[880px] grid grid-cols-[1fr] lg:grid-cols-[1fr_1fr] gap-7 rounded-[60px] lg:rounded-none mx-0 md:mx-14 lg:mx-0 py-10 mb-20 lg:mb-0">
      <div className="flex flex-col items-center lg:items-start justify-center text-center lg:text-left flex-wrap mx-6 md:ml-10 lg:ml-14 2xl:ml-36 z-40 text-[#fafafa] lg:text-black justify-self-start col-start-1 gap-7">
        <span className="font-bold text-[26px] md:text-[36px] lg:text-[44px] text-center lg:text-left leading-[49px]">
          Thousands of people trust our agricultural products
        </span>
        <span className="lg:text-[17px] xl:text-[20px] text-[14px] md:text-[14px] text-white lg:text-gray-500 italic lg:not-italic">
          Join the amazing <span className="italic font-medium">Farming</span>{" "}
          that we provide for you and just for you
        </span>

        {/* large screens */}
        <div className="relative w-fit h-24 bg-green-800 min-h-[86px] pl-9 pr-6 py-3 text-[14px] font-medium text-[#fafafa] mt-10 cursor-pointer rounded-3xl scale-90 lg:scale-60 xl:scale-100 md:flex hidden flex-row items-center justify-center md:gap-4 lg:gap-6 xl:gap-10 overflow-visible">
          <div>
            <p className="text-[18px]">20.000 +</p>
            <p className="font-normal text-gray-300 line-clamp-1">
              People joined us
            </p>
          </div>
          <div>
            <p className="text-[18px]">20 +</p>
            <p className="font-normal text-gray-300 line-clamp-1">
              Contries cooperate with us
            </p>
          </div>
          <div className="min-w-[64px] min-h-[64px] bg-green-400 transition-all duration-300 hover:bg-green-300 rounded-3xl p-4 my-4">
            <ArrowRightIcon className="text-black" />
          </div>
        </div>

        {/* small screens */}
        <div className="relative w-fit h-24 bg-green-800 min-h-[86px] px-5 py-3 text-[14px] font-medium text-[#fafafa] mt-10 cursor-pointer rounded-3xl scale-90 lg:scale-60 xl:scale-100 md:hidden flex flex-row items-center justify-center md:gap-4 lg:gap-6 xl:gap-10 overflow-visible">
          <div className="min-w-[64px] min-h-[64px] bg-green-400 transition-all duration-300 hover:bg-green-300 rounded-3xl p-4 my-4">
            <ArrowRightIcon className="text-black" />
          </div>
        </div>
      </div>

      <div className="relative mx-12 xl:mx-24 max-h-full my-10 w-[520px] xl:w-[600px] max-w-full col-start-2 text-center hidden lg:flex ">
        <div className="relative w-full h-full rounded-tr-[300px] rounded-tl-[100px] rounded-b-[100px] overflow-hidden shadow-[15px_35px_60px_-15px_rgba(0,0,0,.3)] trasition-all duration-[4000ms] hover:shadow-[15px_35px_60px_-15px_rgba(0,0,0,.6)]">
          <Image
            src={Cover6}
            alt={""}
            className="object-cover  justify-self-center text-[0px] trasition-all duration-[4000ms] hover:scale-110 hover:shadow-[15px_35px_60px_-15px_rgba(0,0,0,.9)]"
            fill
          ></Image>
        </div>
        <div className="absolute shadow-lg rounded-[50px] top-[320px] left-[-50px] xl:left-[-50px] text-white text-center backdrop-blur-lg bg-white/30 font-semibold text-[28px] w-72 h-32 px-5 truncate tracking-widest py-6 flex justify-center items-center cursor-pointer">
          Join Now
        </div>
      </div>
      {/* mobiles & tablets */}
      <div className="absolute h-full w-full col-start-1 text-center overflow-visible flex lg:hidden mb-20 lg:mb-0">
        <Image
          src={Cover6}
          alt={""}
          className="object-cover rounded-[60px] blur-[2px] shadow-2xl justify-self-center opacity-90 "
          fill
        ></Image>
      </div>
      {/* star */}
      <Image
        src={star}
        alt={""}
        className="absolute object-cover top-[30px] left-[20%] hidden lg:flex blur-[1px] hue-rotate-60"
        width={90}
        height={90}
      ></Image>
    </div>
  );
}
