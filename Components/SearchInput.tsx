'use client'
import React, { useRef } from 'react'

interface product {
  id: number
  name: string
  price: number
  product_image: string
  description: string
  By: string
  number_of_purchases: number
  created_at: Date
  updated_at: Date
}

type Props = {
  SetProducts: React.Dispatch<React.SetStateAction<product[]>>
  setSearchValue: React.Dispatch<React.SetStateAction<string>>
}

export default function SearchInput({ SetProducts, setSearchValue }: Props) {
  const searchRef = useRef<HTMLInputElement>(null)
  async function searchProducts(val: string) {
    const res = await fetch(
      process.env.NEXTAUTH_URL+'/api/fetch/Search?'+new URLSearchParams({ SearchValue: val })
    )

    const data = await res.json()
    console.log('setting data ::', data)
    SetProducts(data)
    // console.log(data)
  }
  async function listProducts() {
    const res = await fetch(process.env.NEXTAUTH_URL +"/api/fetch/Products")
    const data = await res.json()
    console.log(data)
    SetProducts(data)
  }

  const searchHandler: React.FormEventHandler<HTMLFormElement> = (e) => {
    console.log('qsd')
    e.preventDefault()
    if (searchRef?.current?.value === '') {
      listProducts()
    } else {
      searchProducts(searchRef?.current?.value ?? '')
    }

    // SetProducts([])
  }
  return (
    // scale-90 sm:scale-100
    <form
      onSubmit={searchHandler}
      className="relative flex-1 items-center md:inline"
    >
      <label
        htmlFor="default-search"
        className="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Search
      </label>

      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        <svg
          aria-hidden="true"
          className="h-4 w-4 text-gray-500 dark:text-gray-400 sm:h-5 sm:w-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          ></path>
        </svg>
      </div>
      <input
        type="search"
        id="default-search"
        className="block w-full rounded-xl border border-gray-300 bg-gray-50 p-3 pl-10 text-[13px] text-gray-900 transition-all duration-300 focus:border-green-500 focus:ring-green-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-green-500 dark:focus:ring-green-500  sm:p-4 sm:px-11 sm:text-sm"
        placeholder="Search Vegetables, Seeds..."
        ref={searchRef}
        onChange={(e) => {
          setSearchValue(e.currentTarget.value)
        }}
      />
      <button
        type="submit"
        className="absolute right-2.5 bottom-2.5 rounded-lg bg-green-500 px-3 py-1 text-sm font-medium text-white transition-all duration-300 hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-400 dark:bg-green-500 dark:hover:bg-green-500 dark:focus:ring-green-600 sm:px-4 sm:py-2"
        // onClick={searchHandler}
      >
        Search
      </button>
    </form>
  )
}
