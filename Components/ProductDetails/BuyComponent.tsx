'use client'
import React, { useState } from 'react'

type Props = {
  price: string
}

export default function BuyComponent({ price }: Props) {
  const [count, setCount] = useState<number>(0)
  return (
    <div className="flex h-full w-full flex-col justify-around p-7">
      <div className="flex flex-row justify-center gap-x-12 md:justify-start">
        <div className="flex scale-75 flex-col gap-y-2  md:scale-100">
          <div className="w-full text-center text-base font-semibold uppercase text-stone-100 md:text-start">
            Quantity
          </div>
          <div className="flex h-12 w-32 flex-row items-center justify-around rounded-full bg-zinc-800/60 p-1 text-stone-100">
            <div
              className="m-1 flex h-5 w-5 cursor-pointer items-center justify-center rounded-full text-center text-xl hover:bg-zinc-700"
              onClick={() => {
                if (count - 1 >= 0) setCount(count - 1)
              }}
            >
              -
            </div>
            <div className="w-6 text-center text-xl text-zinc-500">{count}</div>
            <div
              className="m-1 flex h-5 w-5 cursor-pointer items-center justify-center rounded-full text-center text-xl hover:bg-zinc-700"
              onClick={() => {
                setCount(count + 1)
              }}
            >
              +
            </div>
          </div>
        </div>
        <div className="flex scale-75 flex-col gap-y-2 md:scale-100 ">
          <div className="w-full text-center text-base font-semibold uppercase text-stone-100 md:text-start">
            total
          </div>
          <div className="flex h-12 w-32 flex-row items-center justify-around rounded-full bg-zinc-800/60 p-1 text-xl text-zinc-500">
            {'$' + ((price as unknown as number) * count).toFixed(2)}
          </div>
        </div>
      </div>
      <div className="flex h-11 w-full scale-75 cursor-pointer items-center justify-center rounded-full border-2 border-stone-100 font-bold uppercase text-stone-100  drop-shadow-small2Stone transition-all duration-200 hover:drop-shadow-small3Stone active:border-stone-300 active:text-stone-300 md:scale-100">
        add to my wishlist
      </div>
      <div className="flex h-11 w-full scale-75 cursor-pointer items-center justify-center rounded-full bg-amber-400 font-bold uppercase text-stone-700  drop-shadow-small2Yellow transition-all duration-500 hover:drop-shadow-small3Yellow active:bg-amber-300 active:text-stone-500 md:scale-100">
        add to cart
      </div>
    </div>
  )
}
