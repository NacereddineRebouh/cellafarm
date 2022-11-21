import React from "react";
import Image, { ImageProps, StaticImageData } from "next/image";

type Props = {
  image: StaticImageData;
  description: string;
  name: string;
};

export default function ProductCard({ image, description, name }: Props) {
  return (
    <div className="relative bg-white rounded-[60px] flex flex-col min-w-[280px] max-w-[320px] items-center gap-4 text-center px-7 py-14 h-fit cursor-default transition-all duration-200 hover:scale-105 mt-5 shadow-lg ">
      <div className="relative w-[90px] h-[90px]">
        <Image src={image} alt={""} fill className="rounded-3xl object-cover" />
      </div>
      <p className="text-[18px] font-bold">{name}</p>
      <p className="text-[14px] text-gray-400 font-medium">{description}</p>
    </div>
  );
}
