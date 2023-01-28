import React from 'react'
import ProductCard from './ProductCard'
import Link from 'next/link'
type Props = {}

export default function OurProducts({}: Props) {
  const prods = [
    {
      prod: 'https://res.cloudinary.com/dttrs30gt/image/upload/v1670567759/rice-min_phhtmk.jpg',
      name: 'Rice',
    },
    {
      prod: 'https://res.cloudinary.com/dttrs30gt/image/upload/v1670567769/veg-min_kex0sj.jpg',
      name: 'Vegetables',
    },
    {
      prod: 'https://res.cloudinary.com/dttrs30gt/image/upload/v1670567752/pumpkin-min_izyawa.jpg',
      name: 'Pumpkin',
    },
    {
      prod: 'https://res.cloudinary.com/dttrs30gt/image/upload/v1670567792/wheat-min_jopmp5.webp',
      name: 'Wheat',
    },
  ]
  return (
    <div className="relative grid w-screen max-w-[1350px] grid-rows-[1fr_3fr] gap-8">
      <div className="row-start-1 mx-2 flex flex-col items-center justify-center gap-6 justify-self-center sm:mx-8">
        <span className="truncate text-center text-[30px] font-bold md:text-[50px] lg:text-[55px] ">
          Our Featured Products
        </span>
        <span className="text-center text-[18px] text-gray-500 md:text-[22px] lg:text-[27px]">
          we have a wide range of agricultural products that we have exported
          all
          <br /> over the world to thousands of our partners
        </span>
      </div>
      <div className="row-start-2 flex snap-mandatory snap-center flex-row items-center justify-start gap-4 overflow-x-scroll scroll-smooth px-5 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-green-300">
        {prods.map((prod, i) => (
          <ProductCard
            key={i}
            image={prod.prod}
            description={
              'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error rerum modi voluptatibus, repellat eaque et  asperiores nulla blanditiis consequuntur ?'
            }
            name={prod.name}
          />
        ))}
      </div>

      <Link
        href="/Products"
        className="cursor-pointer justify-self-center rounded-full py-3 px-5 text-center font-medium text-green-600/80 transition-colors duration-300 hover:bg-green-500 hover:text-teal-50"
      >
        See all products
      </Link>
    </div>
  )
}
