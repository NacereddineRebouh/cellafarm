import React from "react";
import Hero from "../Components/Hero";
import airbnb from "../public/Images/airbnb.png";
import pendo from "../public/Images/pendo.png";
import framer from "../public/Images/framer.png";
import hima from "../public/Images/himma.png";
import tree from "../public/Images/tree.png";
import op from "../public/Images/opendoor.png";
import Image from "next/image";
import OurStory from "../Components/OurStory";
import OurProducts from "../Components/OurProducts";
import JoinUs from "../Components/JoinUs";
import ContactUs from "../Components/ContactUs";
import Header from "../Components/Header";

type Props = {};

export default function HomePage({}: Props) {
  return (
    <div className="z-0 overflow-scroll scroll-smooth">
      {/* <section
        id="header"
        className="fixed w-screen top-0 max-w-[2200px] z-50 backdrop-blur-[1px]"
      > */}
      {/* <Header /> */}

      {/* Hero */}
      <section id="Hero" className="snap-center mt-20">
        <Hero />
        <div className="my-32 flex flex-col gap-11 text-center justify-center items-center ">
          <h1 className="font-bold text-[63px]">
            Trusted by over <span className="underline ">20,000</span> Partners
          </h1>
          <div className="relative flex flex-row gap-2 h-11 justify-center flex-wrap  w-auto">
            {/* icons */}
            <Image
              src={airbnb.src}
              alt={""}
              width={140}
              height={40}
              className="grayscale object-contain"
            />

            <Image
              src={framer}
              alt={""}
              width={128}
              height={40}
              className="grayscale object-contain"
            />
            <Image
              src={hima}
              alt={""}
              width={128}
              height={40}
              className="grayscale object-contain"
            />
            <Image
              src={op}
              alt={""}
              width={128}
              height={40}
              className="grayscale object-contain"
            />
            <Image
              src={tree}
              alt={""}
              width={128}
              height={10}
              className="grayscale object-contain"
            />
            <Image
              src={pendo}
              alt={""}
              width={128}
              height={40}
              className="grayscale object-contain "
            />
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section id="ourStory" className="snap-center">
        <OurStory />
      </section>

      {/* Our Featured Product */}
      <section
        id="ourFeaturedProduct"
        className="snap-center mt-44 flex justify-center"
      >
        <OurProducts />
      </section>

      {/* Join us */}
      <section id="joinUs" className="snap-center mt-32 flex justify-center">
        <JoinUs />
      </section>

      {/* About us */}
      <footer id="ContactUs" className="snap-center flex justify-center">
        <ContactUs />
      </footer>
    </div>
  );
}
