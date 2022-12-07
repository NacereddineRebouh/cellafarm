'use client'
import React from 'react'
import Header_Logged from '../../../Components/Header_Logged'
import Navbartest from '../../../Components/Navbartest'
import Image from 'next/image'

type Props = {}

export default function Blog({}: Props) {
  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center grayscale">
      <div className="animate-pulse truncate text-center text-sm font-semibold italic tracking-widest text-stone-900 md:text-xl">
        Blog.Implemented soon
      </div>
    </div>
  )
}
