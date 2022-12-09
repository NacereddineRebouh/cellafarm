import React from 'react'
import Image from 'next/image'
import Cover2 from '../public/Images/cover2.jpg'
import Cover3 from '../public/Images/Backgrounds/1.jpg'
import Cover4 from '../public/Images/Backgrounds/2.jpg'
import Cover5 from '../public/Images/Backgrounds/3.jpg'
import Cover6 from '../public/Images/Backgrounds/4.jpg'
import star from '../public/Images/four-star.png'
import { ArrowRightIcon } from '@heroicons/react/24/solid'

type Props = {}

export default function JoinUs({}: Props) {
  return (
    <div className="relative mx-auto mb-20 grid h-[500px] max-w-[2500px] grid-cols-[1fr] gap-7 rounded-[60px] bg-white py-10  md:h-[880px] lg:mb-0 lg:grid-cols-[1fr_1fr] lg:rounded-none">
      <div className="z-40 col-start-1 mx-6 flex flex-col flex-wrap items-center justify-center gap-7 justify-self-start text-center text-[#fafafa] md:ml-10 lg:ml-14 lg:items-start lg:text-left lg:text-black 2xl:ml-36">
        <span className="text-center text-[26px] font-bold leading-[49px] md:text-[36px] lg:text-left lg:text-[44px]">
          Thousands of people trust our agricultural products
        </span>
        <span className="text-[14px] italic text-white md:text-[14px] lg:text-[17px] lg:not-italic lg:text-gray-500 xl:text-[20px]">
          Join the amazing <span className="font-medium italic">Farming</span>{' '}
          that we provide for you and just for you
        </span>

        {/* large screens */}
        <div className="lg:scale-60 relative mt-10 hidden h-24 min-h-[86px] w-fit scale-90 cursor-pointer flex-row items-center justify-center overflow-visible rounded-3xl bg-green-800 py-3 pl-9 pr-6 text-[14px] font-medium text-[#fafafa] md:flex md:gap-4 lg:gap-6 xl:scale-100 xl:gap-10">
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
          <div className="my-4 min-h-[64px] min-w-[64px] rounded-3xl bg-green-400 p-4 transition-all duration-300 hover:bg-green-300">
            <ArrowRightIcon className="text-black" />
          </div>
        </div>

        {/* small screens */}
        <div className="lg:scale-60 relative mt-10 flex h-24 min-h-[86px] w-fit scale-90 cursor-pointer flex-row items-center justify-center overflow-visible rounded-3xl bg-green-800 px-5 py-3 text-[14px] font-medium text-[#fafafa] md:hidden md:gap-4 lg:gap-6 xl:scale-100 xl:gap-10">
          <div className="my-4 min-h-[64px] min-w-[64px] rounded-3xl bg-green-400 p-4 transition-all duration-300 hover:bg-green-300">
            <ArrowRightIcon className="text-black" />
          </div>
        </div>
      </div>

      <div className="relative col-start-2 mx-auto my-10 hidden max-h-full w-[520px] max-w-full text-center lg:flex xl:w-[600px] ">
        <div className="trasition-all relative h-full w-full overflow-hidden rounded-b-[100px] rounded-tr-[300px] rounded-tl-[100px] shadow-[15px_35px_60px_-15px_rgba(0,0,0,.3)] duration-[4000ms] hover:shadow-[15px_35px_60px_-15px_rgba(0,0,0,.6)]">
          <Image
            src="https://res.cloudinary.com/dttrs30gt/image/upload/v1670567829/4-min_kdqigw.jpg"
            // src={Cover6}
            alt={''}
            className="trasition-all  justify-self-center object-cover text-[0px] duration-[4000ms] hover:scale-110 hover:shadow-[15px_35px_60px_-15px_rgba(0,0,0,.9)]"
            fill
          ></Image>
        </div>
        <div className="absolute top-[320px] left-[-50px] flex h-32 w-72 cursor-pointer items-center justify-center truncate rounded-[50px] bg-white/30 px-5 py-6 text-center text-[28px] font-semibold tracking-widest text-white shadow-lg backdrop-blur-lg xl:left-[-50px]">
          Join Now
        </div>
      </div>
      {/* mobiles & tablets */}
      <div className="absolute col-start-1 mb-20 flex h-full w-full overflow-visible text-center lg:mb-0 lg:hidden">
        <Image
          src={Cover6}
          alt={''}
          className="justify-self-center rounded-[60px] object-cover opacity-90 shadow-2xl blur-[2px] "
          fill
        ></Image>
      </div>
      {/* star */}
      <Image
        src={star}
        alt={''}
        className="absolute top-[30px] left-[20%] hidden object-cover blur-[1px] hue-rotate-60 lg:flex"
        width={90}
        height={90}
      ></Image>
    </div>
  )
}
