import Link from "next/link";
import React from "react";

type Props = {};

export default function Header({}: Props) {
  return (
    <header>
      <div className=" h-20 grid grid-cols-[1fr_4fr] text-[17px] px-6 sm:px-20 md:px-32 xl:px-40 py-4 bg-[#FAFAFA]/40">
        <div className="text-center flex items-center font-bold">CELLA</div>
        <div className="justify-end flex flex-row items-center gap-12 mr-0 font-medium">
          <Link className="hidden lg:flex " href={"/"}>
            <div className="rounded-full px-4 py-3 transition-all duration-300 hover:bg-zinc-200">
              Home
            </div>
          </Link>
          <Link className="lg:flex hidden" href={"/"}>
            <div className="rounded-full px-4 py-3 transition-all duration-300 hover:bg-zinc-200">
              Product
            </div>
          </Link>
          <Link className="lg:flex hidden" href={"/"}>
            <div className="rounded-full px-4 py-3 transition-all duration-300 hover:bg-zinc-200">
              Shop
            </div>
          </Link>
          <Link className="lg:flex hidden" href={"/"}>
            <div className="rounded-full px-4 py-3 transition-all duration-300 hover:bg-zinc-200">
              Contact
            </div>
          </Link>

          {/* Button */}

          <div className="rounded-full border-[1px] border-gray-300 font-medium h-14 px-5 drop-shadow-sm truncate flex items-center cursor-pointer transition-all duration-300 hover:bg-zinc-100 hover:shadow-md hover:scale-105 bg-[#FAFAFA]">
            Get Started
          </div>
        </div>
      </div>
    </header>
  );
}
