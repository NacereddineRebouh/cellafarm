import React from 'react'
import Image from 'next/image'

type Props = {}

export default function Loading({}: Props) {
  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center grayscale">
      <Image
        src="/../../waiting-animate.svg"
        alt={''}
        width={800}
        height={800}
      />
      <div className="animate-pulse truncate text-center text-sm font-semibold italic tracking-widest text-stone-900 md:text-xl">
        Loading...please wait.
      </div>
    </div>
  )
}
