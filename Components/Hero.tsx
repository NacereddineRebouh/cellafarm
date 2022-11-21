"use client";
import React from "react";
import Image from "next/image";
import image1 from "../public/Images/1.jpg";
import image2 from "../public/Images/2.jpg";
import image3 from "../public/Images/3.jpg";
import Cover1 from "../public/Images/cover.jpg";
import Cover2 from "../public/Images/cover2.jpg";
import Star from "../public/Images/star.svg";
import Star2 from "../public/Images/four-star.png";
import sticker from "../public/Images/1.png";
import star from "../public/Images/four-star.png";
import Link from "next/link";

type Props = {};

export default function Hero({}: Props) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-11 items-center justify-center mx-0 sm:mx-32 xl:mx-40 max-h-[760px] ">
      <div className="flex flex-col gap-3 justify-center items-center lg:items-start text-center lg:text-start my-11 z-10">
        <div className="text-[60px] sm:text-[85px] font-bold leading-tight">
          We Are Cella Agriculture
        </div>
        <div className="text-[19px] sm:text-[27px] font-medium truncate sm:mt-2 mt-0">
          we believe Future of Food is Here
        </div>

        {/* Search input */}
        <div className="relative bg-white rounded-full h-[60px] px-5 mt-14 shadow-md max-w-md flex flex-row items-center justify-between min-w-[320px]">
          <input
            className="outline-none h-9 text-[15px] flex-grow mr-20"
            placeholder="What are you looking for "
          ></input>
          <div className="absolute cursor-pointer bg-green-500 text-center rounded-full h-[60px] px-7 text-white font-medium text-[15px] right-0 top-0 flex items-center pb-1 transition-all hover:bg-green-600/95">
            Search
          </div>
        </div>
        {/* star */}
        <Image
          src={star}
          alt={""}
          className="absolute object-cover top-[30px] left-[50%] hidden lg:flex blur-[1px]"
          width={90}
          height={90}
        ></Image>
        {/* members */}
        <div className="relative grid grid-rows-[1fr_1fr] xl:grid-cols-[minmax(190px,_2fr)_3fr] xl:mt-28 sm:ml-11 items-center justify-center self-center  lg:self-start overflow-visible max-w-[550px] mt-10 cursor-pointer">
          <Link
            className="relative self-center cursor-pointer transition-all duration-[4000ms] hover:scale-110"
            href={"https://discord.com"}
            target="_blank"
          >
            <Image
              src={image1.src}
              alt={""}
              className="absolute border-white border-4 w-20 h-20 object-cover aspect-square rounded-full left-0 -top-10"
              height={180}
              width={180}
            ></Image>

            <Image
              src={image2.src}
              alt={""}
              className="absolute border-white border-4 w-20 h-20 object-cover aspect-square rounded-full left-14 -top-10"
              height={180}
              width={180}
            ></Image>

            <Image
              src={image3.src}
              alt={""}
              className="absolute border-white border-4 w-20 h-20 object-cover aspect-square rounded-full left-28 -top-10"
              height={180}
              width={180}
            ></Image>
          </Link>
          <div className="flex flex-row self-starti items-center cursor-pointer">
            <Star className="w-20 h-20"></Star>

            {/* Join our comm */}

            <div className="text-left">
              <p>Join our community</p>
              <p className="font-medium">We are waiting for you</p>
            </div>
          </div>
        </div>
      </div>

      {/* Cover */}
      <div className="relative object-cover w-full h-full collapse lg:visible z-0 ">
        <Image
          src={Cover1}
          alt={""}
          className="object-cover rounded-t-full rounded-bl-full rounded-br-[1000px] shadow-2xl "
          fill
        ></Image>
        <Image
          src={sticker}
          alt={""}
          className=" absolute object-cover top-[550px] -rotate-12"
          width={200}
          height={200}
        ></Image>
      </div>
    </div>
  );
}
