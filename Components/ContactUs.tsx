import React from 'react'
import Image from 'next/image'
import Cover5 from '../public/Images/Backgrounds/5.jpg'
import { SocialIcon } from 'react-social-icons'
type Props = {}

export default function ContactUs({}: Props) {
  return (
    <div className="relative h-[500px] w-screen cursor-default items-center overflow-hidden text-white">
      <div className="absolute top-0 right-0 z-0 h-full w-full overflow-hidden">
        <Image
          src="https://res.cloudinary.com/dttrs30gt/image/upload/v1670567797/5-min_g7ffll.jpg"
          // src={Cover5}
          alt={''}
          className="trasition-all relative object-cover object-[0px,90%] duration-[4000ms] hover:scale-110"
          fill
          sizes="100vw"
        ></Image>
      </div>
      {/* grid-rows-[3fr_1fr]  */}
      <div className="relative z-10 mx-auto grid h-full max-w-[2500px] gap-6 lg:grid-cols-[5fr_3fr]">
        <div className="flex flex-col items-center justify-center gap-4 lg:items-start ">
          <span className="mx-3 text-center text-[30px] font-bold leading-[49px] text-amber-50 md:text-[36px] lg:ml-10 lg:text-left lg:text-[36px] ">
            Get informations about us
          </span>
          <span className="mx-5 text-center text-[16px] italic text-amber-50 lg:ml-10 lg:text-left lg:text-[17px] lg:not-italic xl:text-[17px]">
            What are waiting for ? Lets get you{' '}
            <span className="font-medium italic">started</span>
          </span>
          {/* Search input */}
          <div className="relative mx-3 mt-5 flex h-[60px] min-w-[320px] max-w-md flex-row items-center justify-between rounded-full bg-white px-5 shadow-md lg:mx-10">
            <input
              className="mr-20 h-9 flex-grow text-[15px] text-gray-600 outline-none focus:font-medium"
              placeholder="Email"
            ></input>
            <div className="absolute -right-1 top-0 flex h-[60px] cursor-pointer items-center rounded-full bg-green-500 px-7 text-center text-[15px] font-medium text-white transition-all hover:bg-green-600/95">
              Submit
            </div>
          </div>
        </div>
        <div className="flex h-full w-full flex-row items-center justify-center gap-5">
          <SocialIcon
            url="https://facebook.com"
            className="cursor-pointer rounded-full transition-all duration-500 hover:scale-110"
            style={{ height: 35, width: 35 }}
            target="_blank"
            bgColor="white"
            fgColor="transparent"
          />
          <SocialIcon
            url="https://instagram.com"
            className="cursor-pointer rounded-full transition-all duration-500 hover:scale-110"
            style={{ height: 35, width: 35 }}
            target="_blank"
            bgColor="white"
            fgColor="transparent"
          />
          <SocialIcon
            url="https://twitter.com"
            className="cursor-pointer rounded-full transition-all duration-500 hover:scale-110"
            target="_blank"
            style={{ height: 35, width: 35 }}
            bgColor="white"
            fgColor="transparent"
          />
        </div>
      </div>
    </div>
  )
}
