'use client'
import React from 'react'
import Image from 'next/image'
import image1 from '../public/Images/1.jpg'
import image2 from '../public/Images/2.jpg'
import image3 from '../public/Images/3.jpg'
import Cover1 from '../public/Images/cover.jpg'
import Cover2 from '../public/Images/cover2.jpg'
import Star from '../public/Images/star.svg'
import Star2 from '../public/Images/four-star.png'
import sticker from '../public/Images/1.png'
import star from '../public/Images/four-star.png'
import Link from 'next/link'

type Props = {}

export default function Hero({}: Props) {
  return (
    <div className="mx-0 grid max-h-[760px] grid-cols-1 items-center justify-center gap-11 sm:mx-32 lg:grid-cols-2 xl:mx-40 ">
      <div className="z-10 my-11 flex flex-col items-center justify-center gap-3 text-center lg:items-start lg:text-start">
        <div className="text-[60px] font-bold leading-tight sm:text-[85px]">
          We Are Cella Agriculture
        </div>
        <div className="mt-0 truncate text-[19px] font-medium sm:mt-2 sm:text-[27px]">
          we believe Future of Food is Here
        </div>

        {/* Search input */}
        <div className="relative mt-14 flex h-[60px] min-w-[320px] max-w-md flex-row items-center justify-between rounded-full bg-white px-5 shadow-md">
          <input
            className="mr-20 h-9 flex-grow text-[15px] outline-none"
            placeholder="What are you looking for "
          ></input>
          <div className="absolute -right-1 top-0 flex h-[60px] cursor-pointer items-center rounded-full bg-green-500 px-7 text-center text-[15px] font-medium text-white transition-all hover:bg-green-600/95">
            Search
          </div>
        </div>
        {/* star */}
        <Image
          src={star}
          alt={''}
          className="absolute top-[30px] left-[50%] hidden object-cover blur-[1px] lg:flex"
          width={90}
          height={90}
        ></Image>
        {/* members */}
        <div className="relative mt-10 grid max-w-[550px] cursor-pointer grid-rows-[1fr_1fr] items-center justify-center self-center  overflow-visible sm:ml-11 lg:self-start xl:mt-28 xl:grid-cols-[minmax(190px,_2fr)_3fr]">
          <Link
            className="relative cursor-pointer self-center transition-all duration-[4000ms] hover:scale-110"
            href={'https://discord.com'}
            target="_blank"
          >
            <Image
              src={image1.src}
              alt={''}
              className="aspect-square absolute left-0 -top-10 h-20 w-20 rounded-full border-4 border-white object-cover"
              height={180}
              width={180}
            ></Image>

            <Image
              src={image2.src}
              alt={''}
              className="aspect-square absolute left-14 -top-10 h-20 w-20 rounded-full border-4 border-white object-cover"
              height={180}
              width={180}
            ></Image>

            <Image
              src={image3.src}
              alt={''}
              className="aspect-square absolute left-28 -top-10 h-20 w-20 rounded-full border-4 border-white object-cover"
              height={180}
              width={180}
            ></Image>
          </Link>
          <div className="self-starti flex cursor-pointer flex-row items-center">
            <Star className="h-20 w-20"></Star>

            {/* Join our comm */}

            <div className="text-left">
              <p>Join our community</p>
              <p className="font-medium">We are waiting for you</p>
            </div>
          </div>
        </div>
      </div>

      {/* Cover */}
      <div className="collapse relative z-0 h-full w-full object-cover lg:visible ">
        <Image
          src={Cover1}
          alt={''}
          className="rounded-t-full rounded-bl-full rounded-br-[1000px] object-cover drop-shadow-2xl "
          fill
        ></Image>
        <Image
          src={sticker}
          alt={''}
          className="absolute top-[550px] -rotate-12 object-cover drop-shadow-2xl"
          width={200}
          height={200}
        ></Image>
      </div>
    </div>
  )
}
