import React from 'react'
import Image from 'next/image'
import Cover5 from '../public/Images/Backgrounds/3.jpg'
import star from '../public/Images/four-star.png'

type Props = {}

export default function OurStory({}: Props) {
  return (
    <div className="relative mx-auto grid h-[500px] max-w-[2500px] grid-cols-[1fr] gap-7 rounded-[60px] md:h-[800px] lg:grid-cols-[1fr_1fr] lg:rounded-none">
      <div className="relative col-start-1 mx-16 mt-24 hidden h-full w-[520px] max-w-full overflow-y-visible text-center lg:flex xl:mx-24 xl:w-[600px] ">
        <Image
          src={Cover5}
          alt={''}
          className="animate-Hover justify-self-center rounded-b-full rounded-tl-[9950px] rounded-tr-[2690px] border-[8px] border-orange-300 object-cover text-[0px] shadow-[15px_35px_60px_-15px_rgba(0,0,0,.3)] "
          fill
          sizes="(max-width: 768px) 20vw,
          90vw"
        ></Image>
        <div className="relative top-[320px] left-[370px] h-20 w-48 truncate rounded-3xl border-[2px] border-orange-100 bg-gradient-to-r from-red-300/40 to-orange-400/40 px-5 py-6 text-center text-[22px] font-semibold tracking-widest text-white shadow-lg backdrop-blur-md xl:left-[450px]">
          Since 1986
        </div>
      </div>
      {/* mobiles & tablets */}
      <div className="absolute col-start-1 flex  h-full w-full overflow-visible text-center lg:hidden ">
        <Image
          src="https://res.cloudinary.com/dttrs30gt/image/upload/v1670567799/3_pdk4pz.jpg"
          // src={Cover5}
          alt={''}
          className="justify-self-center rounded-[60px] object-cover opacity-90 shadow-2xl blur-[2px] "
          fill
          sizes="max-width: 768px) 30vw,
          (max-width: 1024px) 60vw"
        ></Image>
      </div>
      {/* star */}
      <Image
        src={star}
        alt={''}
        className="absolute top-[30px] left-[88%] hidden object-cover blur-[1px] lg:flex"
        width={90}
        height={90}
      ></Image>
      <div className="z-40 mx-10 flex flex-col flex-wrap items-center justify-center justify-self-start text-center text-[#fafafa] lg:mx-0 lg:mr-20 lg:items-start lg:text-left lg:text-black 2xl:mr-44">
        <span className="truncate text-center text-[38px] font-bold md:text-[50px] lg:text-left lg:text-[55px]">
          Our story
        </span>
        <span className="text-[14px] italic text-white md:text-[17px] lg:text-[20px] lg:not-italic lg:text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus earum
          pariatur veritatis autem, quam maxime eum totam eos consequuntur
          sapiente quisquam animi ex obcaecati iste? Doloribus neque magnam
          harum! <br />
          <br />
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit, esse
          delectus distinctio exercitationem tempora consequatur ad totam!
          Repellendus corrupti dolorum necessitatibus odit hic cupiditate
          dolores sed quas ex quae. Dignissimos.
        </span>
        <div className="mt-7 flex h-14 w-32 scale-90 cursor-pointer items-center justify-center rounded-full bg-green-500 px-5 py-3 text-[14px] font-medium text-[#fafafa] transition-all hover:bg-green-600/95 md:scale-100">
          Learn more
        </div>
      </div>
    </div>
  )
}
