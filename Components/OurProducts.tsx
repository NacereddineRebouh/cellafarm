import React from "react";
import veg from "../public/Images/Prods/veg.jpg";
import rice from "../public/Images/Prods/rice.jpg";
import pump from "../public/Images/Prods/pumpkin.jpg";
import wheat from "../public/Images/Prods/wheat.jpg";
import ProductCard from "./ProductCard";
type Props = {};

export default function OurProducts({}: Props) {
  const prods = [
    { prod: rice, name: "Rice" },
    { prod: veg, name: "Vegetables" },
    { prod: pump, name: "Pumpkin" },
    { prod: wheat, name: "Wheat" },
  ];
  return (
    <div className="relative grid grid-rows-[1fr_3fr] w-screen gap-8 max-w-[1350px]">
      <div className="row-start-1 flex flex-col gap-6 items-center justify-center justify-self-center mx-8">
        <span className="font-bold text-[30px] md:text-[50px] lg:text-[55px] text-center truncate ">
          Our Featured Products
        </span>
        <span className="text-[18px] md:text-[22px] lg:text-[27px] text-gray-500 text-center">
          we have a wide range of agricultural products that we have exported
          all
          <br /> over the world to thousands of our partners
        </span>
      </div>
      <div className="row-start-2 flex flex-row overflow-x-scroll snap-mandatory justify-start items-center scroll-smooth gap-4 px-5">
        {prods.map((prod, i) => (
          <ProductCard
            key={i}
            image={prod.prod}
            description={
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error rerum modi voluptatibus, repellat eaque et  asperiores nulla blanditiis consequuntur ?"
            }
            name={prod.name}
          />
        ))}
      </div>

      <div className="justify-self-center text-green-600/80 font-medium cursor-pointer py-3 px-5 transition-colors duration-300 hover:bg-green-500 hover:text-teal-50 rounded-full text-center">
        See all products
      </div>
    </div>
  );
}
