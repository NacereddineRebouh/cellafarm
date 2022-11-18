import React from "react";
import Image from "next/image";
import Cover2 from "../public/Images/cover2.jpg";
import Cover3 from "../public/Images/Backgrounds/1.jpg";
import Cover4 from "../public/Images/Backgrounds/2.jpg";
import Cover5 from "../public/Images/Backgrounds/3.jpg";
import star from "../public/Images/four-star.png";

type Props = {};

export default function OurStory({}: Props) {
  return (
    <div className="relative bg-white h-[500px] md:h-[800px] grid grid-cols-[1fr] lg:grid-cols-[1fr_1fr] gap-7 rounded-[60px] lg:rounded-none mx-0 md:mx-14 lg:mx-0">
      <div className="relative mx-16 xl:mx-24 mt-24 h-full w-[520px] xl:w-[600px] max-w-full col-start-1 text-center overflow-y-visible hidden lg:flex ">
        <Image
          src={Cover5}
          alt={""}
          className="object-cover rounded-tl-[9950px] rounded-tr-[2690px] rounded-b-full shadow-[15px_35px_60px_-15px_rgba(0,0,0,.3)] justify-self-center border-[8px] border-orange-300 animate-Hover text-[0px] "
          fill
        ></Image>
        <div className="relative shadow-lg rounded-3xl top-[320px] left-[370px] xl:left-[450px] text-white text-center backdrop-blur-md bg-gradient-to-r from-red-300/40 to-orange-400/40 font-semibold text-[22px] w-48 h-20 px-5 truncate tracking-widest py-6 border-[2px] border-orange-100">
          Since 1986
        </div>
      </div>
      {/* mobiles & tablets */}
      <div className="absolute h-full w-full  col-start-1 text-center overflow-visible flex lg:hidden ">
        <Image
          src={Cover5}
          alt={""}
          className="object-cover rounded-[60px] blur-[2px] shadow-2xl justify-self-center opacity-90 "
          fill
        ></Image>
      </div>
      {/* star */}
      <Image
        src={star}
        alt={""}
        className="absolute object-cover top-[30px] left-[88%] hidden lg:flex blur-[1px]"
        width={90}
        height={90}
      ></Image>
      <div className="flex flex-col items-center lg:items-start justify-center text-center lg:text-left flex-wrap lg:mr-20 2xl:mr-44 z-40 text-[#fafafa] lg:text-black mx-10 lg:mx-0 justify-self-start">
        <span className="font-bold text-[38px] md:text-[68px] lg:text-[55px] text-center truncate lg:text-left">
          Our story
        </span>
        <span className="lg:text-[24px] text-[14px] md:text-[24px] text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus earum
          quas deserunt corrupti molestiae illum enim velit cupiditate alias
          dolores ipsam, non doloribus vero ad animi similique ipsum tempore
          obcaecati! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quis modi aspernatur, pariatur veritatis autem, quam maxime eum totam
          eos consequuntur sapiente quisquam animi ex obcaecati iste? Doloribus
          neque magnam harum! <br />
          <br />
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit, esse
          delectus distinctio exercitationem tempora consequatur ad totam!
          Repellendus corrupti dolorum necessitatibus odit hic cupiditate
          dolores sed quas ex quae. Dignissimos.
        </span>
        <div className="w-32 h-14 bg-green-500 px-5 py-3 text-[14px] font-medium text-[#fafafa] mt-7 cursor-pointer flex items-center justify-center rounded-full scale-90 md:scale-100 transition-all hover:bg-green-600/95">
          Learn more
        </div>
      </div>
    </div>
  );
}
