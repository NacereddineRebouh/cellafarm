import React from 'react'

type Props = {}

export default function profile({}: Props) {
  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center grayscale">
      <div className="animate-pulse truncate text-center text-sm font-semibold italic tracking-widest text-stone-900 md:text-xl">
        Profile.Implemented soon
      </div>
    </div>
  )
}
