/* eslint-disable @next/next/no-head-element */
import React from 'react'
import Hero from '../../Components/Hero'
import Image from 'next/image'
import OurStory from '../../Components/OurStory'
import OurProducts from '../../Components/OurProducts'
import JoinUs from '../../Components/JoinUs'
import ContactUs from '../../Components/ContactUs'

import { unstable_getServerSession } from 'next-auth/next'
import Head from 'next/head'

type Props = {}

export default async function HomePage({}: Props) {
  const session = await unstable_getServerSession()
  return (
    <div className="relative bg-[#FAFAFA]">
      {/* <div className="absolute top-[650px] left-[87%] z-0 min-h-[50px] w-[300px] overflow-hidden">
       
      </div> */}

      {/* <section
        id="header"
        className="fixed w-screen top-0 max-w-[2200px] z-50 backdrop-blur-[1px]"
      > */}
      {/* <Header /> */}
      {/* Header */}
      {/* <section
        id="header"
        className="fixed w-screen top-0 max-w-[2200px] z-50 backdrop-blur-[1px]"
      >
        {session ? <Header_Logged session={session} /> : <Header />}
      </section> */}
      {/* Hero */}
      <section id="Hero" className="relative mx-auto mt-20 max-w-[2500px]">
        <div className="absolute top-[650px] left-[87%] z-0 hidden h-[400px] w-[400px] animate-pulseC rounded-full bg-emerald-200/80 blur-sm drop-shadow-small2 md:flex" />
        <div className="absolute top-20 z-0 h-[400px] w-[400px] animate-pulseLong overflow-hidden rounded-full bg-orange-200/95 blur-md drop-shadow-small " />
        <Hero />
        <div className="relative z-10 my-32 flex flex-col items-center justify-center gap-6 text-center sm:gap-11">
          <h1 className="px-4 text-5xl font-bold sm:px-0 sm:text-[63px]">
            Trusted by over <span className="underline ">20,000</span> Partners
          </h1>
          <div className="relative flex w-auto flex-row flex-wrap justify-center gap-x-8 gap-y-1 sm:h-11 sm:gap-x-2">
            {/* icons */}
            <Image
              src="https://res.cloudinary.com/dttrs30gt/image/upload/v1670577752/logos/airbnb_rvbnbh.png"
              // src={airbnb.src}
              alt={''}
              width={128}
              height={40}
              className="scale object-contain grayscale"
            />

            <Image
              src="https://res.cloudinary.com/dttrs30gt/image/upload/v1670577751/logos/framer_tlk8kg.png"
              // src={framer}
              alt={''}
              width={128}
              height={40}
              className="object-contain grayscale"
            />
            <Image
              src="https://res.cloudinary.com/dttrs30gt/image/upload/v1670577752/logos/himma_tuqpoo.png"
              // src={hima}
              alt={''}
              width={128}
              height={40}
              className="object-contain grayscale"
            />
            <Image
              src="https://res.cloudinary.com/dttrs30gt/image/upload/v1670577750/logos/opendoor_imaljj.png"
              // src={op}
              alt={''}
              width={128}
              height={40}
              className="object-contain grayscale"
            />
            <Image
              src="https://res.cloudinary.com/dttrs30gt/image/upload/v1670577752/logos/tree_ednwcu.png"
              // src={tree}
              alt={''}
              width={128}
              height={10}
              className="object-contain grayscale"
            />
            <Image
              src="https://res.cloudinary.com/dttrs30gt/image/upload/v1670577752/logos/pendo_l5k9qf.png"
              // src={pendo}
              alt={''}
              width={128}
              height={40}
              className="object-contain grayscale "
            />
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section id="ourStory" className="mx-auto bg-white">
        <OurStory />
      </section>

      {/* Our Featured Product */}
      <section
        id="ourFeaturedProduct"
        className=" mx-auto mt-28 flex  justify-center md:mt-44"
      >
        <OurProducts />
      </section>

      {/* Join us */}
      <section
        id="joinUs"
        className="mx-auto mt-32 flex  justify-center bg-white"
      >
        <JoinUs />
      </section>

      {/* About us */}
      <footer id="ContactUs" className="mx-auto flex justify-center">
        <ContactUs />
      </footer>
    </div>
  )
}
