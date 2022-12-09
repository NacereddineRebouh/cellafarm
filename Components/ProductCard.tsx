import React from 'react'
import Image, { ImageProps, StaticImageData } from 'next/image'

type Props = {
  image: string
  // image: StaticImageData;
  description: string
  name: string
}

export default function ProductCard({ image, description, name }: Props) {
  return (
    <div className="relative mt-5 flex h-fit min-w-[280px] max-w-[320px] cursor-default flex-col items-center gap-4 rounded-[60px] bg-white px-7 py-14 text-center shadow-lg transition-all duration-200 hover:scale-105 ">
      <div className="relative h-[90px] w-[90px]">
        <Image
          src={image}
          alt={''}
          fill
          className="rounded-3xl object-cover"
          quality={60}
        />
      </div>
      <p className="text-[18px] font-bold">{name}</p>
      <p className="text-[14px] font-medium text-gray-400">{description}</p>
    </div>
  )
}
