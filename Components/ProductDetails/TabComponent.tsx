'use client'
import React, { useEffect, useState } from 'react'
// import 'flowbite/dist/flowbite'
import { usePathname } from 'next/navigation'
import Script from 'next/script'

interface Data {
  id: string
  name: string
  price: number
  product_image: string
  description: string
  By: string
  number_of_purchases: number
  created_at: Date
  updated_at: Date
  category: string
}
type Props = {
  prod: Data
}

export default function TabComponent({ prod }: Props) {
  // const [path, setPath] = useState<string | null>(usePathname())
  // let pathname = usePathname()

  // useEffect(() => {
  //   console.log('----------path changed----------')
  //   require('flowbite/dist/flowbite.js')
  //   // typeof window ?  : null
  //   // console.log(typeof window)
  // }, [path])

  return (
    <div>
      {/* <link
        rel="stylesheet"
        href="https://unpkg.com/flowbite@1.5.5/dist/flowbite.min.css"
      /> */}

      {/* <!-- This is an example component --> */}
      <div className="max-w-2xl self-start">
        <div className="mb-4 border-b border-zinc-400">
          <ul
            className=" -mb-px flex md:flex-wrap "
            id="myTab"
            data-tabs-toggle="#myTabContent"
            role="tablist"
          >
            <li className="mr-2" role="presentation">
              <button
                className="inline-block rounded-t-lg py-4 px-4 text-center text-xs font-bold uppercase text-zinc-700 transition-all duration-200 aria-selected:text-stone-100 hover:text-stone-100 aria-selected:hover:text-stone-100 zero:border-[#74827E]/0  md:text-sm xl:text-lg"
                id="Description-tab"
                data-tabs-target="#Description"
                type="button"
                role="tab"
                aria-controls="Description"
                aria-selected="true"
              >
                <p className="">Description</p>
              </button>
            </li>
            <li className="mr-2" role="presentation">
              <button
                className="inline-block rounded-t-lg py-4 px-4 text-center text-xs font-bold uppercase text-zinc-700 transition-all duration-200 aria-selected:text-stone-100 hover:text-stone-100 aria-selected:hover:text-stone-100 zero:border-[#74827E]/0  md:text-sm xl:text-lg"
                id="Details-tab"
                data-tabs-target="#Details"
                type="button"
                role="tab"
                aria-controls="Details"
                aria-selected="false"
              >
                Details
              </button>
            </li>
            <li className="mr-2 border-transparent" role="presentation">
              <button
                className="inline-block rounded-t-lg py-4 px-4 text-center text-xs font-bold uppercase text-zinc-700 transition-all duration-200 aria-selected:text-stone-100 hover:text-stone-100 aria-selected:hover:text-stone-100 zero:border-[#74827E]/0  md:text-sm xl:text-lg"
                id="Comments-tab"
                data-tabs-target="#Comments"
                type="button"
                role="tab"
                aria-controls="Comments"
                aria-selected="false"
              >
                Comments
              </button>
            </li>
          </ul>
        </div>
        <div id="myTabContent">
          <div
            className="hidden p-4 "
            id="Description"
            role="tabpanel"
            aria-labelledby="Description-tab"
          >
            <p
              className={`max-h-28 overflow-y-scroll text-sm font-semibold text-zinc-700 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-stone-200 md:text-base`}
            >
              {prod.description ?? 'no Description'}
            </p>
          </div>

          <div
            className="hidden p-4 "
            id="Details"
            role="tabpanel"
            aria-labelledby="Details-tab"
          >
            <p
              className={`max-h-28 overflow-y-scroll text-sm font-semibold text-zinc-700 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-stone-200 md:text-base`}
            >
              {prod.created_at?.toString() + ' By ' + prod.By ?? 'no Details'}
            </p>
          </div>

          <div
            className="hidden p-4 "
            id="Comments"
            role="tabpanel"
            aria-labelledby="Comments-tab"
          >
            <p
              className={`disabled max-h-28 overflow-y-scroll text-sm font-semibold text-zinc-600 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-stone-200 md:text-base`}
            >
              No comments.
            </p>
          </div>
        </div>
      </div>

      {/* eslint-disable-next-line @next/next/no-sync-scripts */}
      {/* <script src="../../node_modules/flowbite/dist/flowbite.js"></script> */}
      <Script src="https://unpkg.com/flowbite@1.5.5/dist/flowbite.js"></Script>
    </div>
  )
}