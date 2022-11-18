import React from "react";

type Props = {};

export default function OurProducts({}: Props) {
  return (
    <div className="relative grid grid-rows-[1fr_3fr] w-screen gap-9">
      <div className="row-start-1 flex flex-col gap-6">
        <span className="font-bold text-[38px] md:text-[68px] lg:text-[55px] text-center truncate ">
          Our Featured Products
        </span>
        <span className="text-[14px] md:text-[27px] text-gray-500 text-center">
          we have a wide range of agricultural products that we jave exported
          all
          <br /> over the world to thousands of our partners
        </span>
      </div>
      <div className="row-start-2"></div>
    </div>
  );
}
