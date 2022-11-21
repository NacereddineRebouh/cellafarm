import React from "react";
import Image from "next/image";
import Cover5 from "../public/Images/Backgrounds/5.jpg";
import { SocialIcon } from "react-social-icons";
type Props = {};

export default function ContactUs({}: Props) {
  return (
    <div className="relative items-center h-[500px] w-screen text-white overflow-hidden cursor-default">
      <div className="absolute top-0 right-0 h-full w-full overflow-hidden z-0">
        <Image
          src={Cover5}
          alt={""}
          className="relative object-cover object-[0px,90%] trasition-all duration-[4000ms] hover:scale-110"
          fill
        ></Image>
      </div>
      {/* grid-rows-[3fr_1fr]  */}
      <div className="relative grid lg:grid-cols-[5fr_3fr] z-10 h-full gap-6">
        <div className="flex flex-col items-center justify-center lg:items-start gap-4 ">
          <span className="font-bold text-[30px] md:text-[36px] lg:text-[36px] text-center lg:text-left mx-3 lg:ml-10 leading-[49px] text-amber-50 ">
            Get informations about us
          </span>
          <span className="lg:text-[17px] xl:text-[20px] text-[16px] text-amber-50 italic lg:not-italic text-center lg:text-left mx-5 lg:ml-10">
            What are waiting for ? Lets get you{" "}
            <span className="italic font-medium">started</span>
          </span>
          {/* Search input */}
          <div className="relative bg-white rounded-full h-[60px] px-5 mt-5 shadow-md max-w-md flex flex-row items-center justify-between min-w-[320px] mx-3 lg:mx-10">
            <input
              className="outline-none h-9 text-[15px] flex-grow mr-20 text-gray-600 focus:font-medium"
              placeholder="Email"
            ></input>
            <div className="absolute cursor-pointer bg-green-500 text-center rounded-full h-[60px] px-7 text-white font-medium text-[15px] right-0 top-0 flex items-center pb-1 transition-all hover:bg-green-600/95">
              Submit
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-5 w-full h-full items-center justify-center">
          <SocialIcon
            url="https://facebook.com"
            className="rounded-full cursor-pointer transition-all duration-500 hover:scale-110"
            style={{ height: 35, width: 35 }}
            target="_blank"
            bgColor="white"
            fgColor="transparent"
          />
          <SocialIcon
            url="https://instagram.com"
            className="rounded-full cursor-pointer transition-all duration-500 hover:scale-110"
            style={{ height: 35, width: 35 }}
            target="_blank"
            bgColor="white"
            fgColor="transparent"
          />
          <SocialIcon
            url="https://twitter.com"
            className="rounded-full cursor-pointer transition-all duration-500 hover:scale-110"
            target="_blank"
            style={{ height: 35, width: 35 }}
            bgColor="white"
            fgColor="transparent"
          />
        </div>
      </div>
    </div>
  );
}
