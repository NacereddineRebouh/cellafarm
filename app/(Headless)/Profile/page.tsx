import { unstable_getServerSession } from 'next-auth/next'
import Head from 'next/head'
import React from 'react'

type Props = {}

export default async function profile({}: Props) {
  const session = await unstable_getServerSession()

  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center grayscale">
      <head key={'main5'}>
        <title key="Profile">Profile</title>
      </head>

      <div className="animate-pulse truncate text-center text-sm font-semibold italic tracking-widest text-stone-900 md:text-xl">
        Profile.Coming soon{session?.user?.name}
      </div>
    </div>
  )
}
