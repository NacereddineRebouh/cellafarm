'use client'
import React, { useEffect } from 'react'
import ProductCard2 from '../../../Components/ProductCard2'
import Image from 'next/image'
import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react'
import {
  ChevronDownIcon,
  XMarkIcon,
  FunnelIcon,
} from '@heroicons/react/24/outline'
import { MinusIcon, PlusIcon } from '@heroicons/react/20/solid'
import PriceSlider from '../../../Components/PriceSlider'
import Button from '@mui/material/Button'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import RatingCom from '../../../Components/RatingComp'
import cover from '../../../public/Images/cover2.jpg'
import SearchInput from '../../../Components/SearchInput'
import { FlightRouterState } from 'next/dist/server/app-render'

type Props = {}
interface Data {
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

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}
const compareArrays = (a: number[]): boolean => {
  return JSON.stringify(a) === JSON.stringify([0, 999])
}

const stringfy = (a: number[]) => {
  return '$' + a[0] + ' - $' + a[1]
}

const labels: { [index: string]: string } = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Average',
  3: 'Average+',
  3.5: 'Above average',
  4: 'Above average+',
  4.5: 'Excellent',
  5: 'Excellent+',
}

export default function ProductsPage({}: Props) {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [searchValue, setSearchValue] = useState<string>('')
  const [products, setproducts] = useState<Data[]>([])
  const [MinMax, setMinMax] = useState<number[]>([0, 999])
  const [rating, setRating] = React.useState<number | null>(3)
  const [StarRating, setStarRating] = React.useState<boolean>(false)
  const [filters, SetFilters] = React.useState([
    {
      id: 'category',
      name: 'Category',
      options: [
        { value: 'roots', label: 'Roots', checked: false },
        { value: 'flowers', label: 'Flowers', checked: false },
        { value: 'nuts&seeds', label: 'Nuts & Seeds', checked: false },
        { value: 'leaves', label: 'Leaves', checked: false },
      ],
    },
    {
      id: 'region',
      name: 'Region',
      options: [
        { value: 'Asia', label: 'Asia', checked: false },
        {
          value: 'Middle East/Africa',
          label: 'Middle East/Africa',
          checked: false,
        },
        { value: 'Europe ', label: 'Europe ', checked: false },
        { value: 'Americas ', label: 'Americas ', checked: false },
      ],
    },
    {
      id: 'cultivationQuality',
      name: 'Cultivation quality',
      options: [
        { value: 'Basic', label: 'Basic', checked: false },
        { value: 'Normal', label: 'Normal', checked: false },
        { value: 'Best', label: 'Best', checked: false },
      ],
    },
  ])

  // handle Categories checkers
  const InputCheckedHandler: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    let regexp = new RegExp('\\d.*\\d')
    let test = regexp.exec(e.currentTarget.id)
    const str: string = test ? test[0].toString() : '0'
    const i1: number = str.charAt(0) as unknown as number
    const i2: number = str.charAt(2) as unknown as number
    const temp = filters
    temp[i1].options[i2].checked = !temp[i1].options[i2].checked
    SetFilters(temp)
    getProductsW(temp[i1].options)
  }
  //get prods for category filter
  async function getProductsW(options: any) {
    var FilterCategories: string[] = []

    options.map((op: { checked: boolean; value: string }) => {
      if (op.checked) {
        FilterCategories.push(op.value)
      }
    })
    console.log(FilterCategories.toString())
    const url=process.env.NEXTAUTH_URL+"/api/fetch/Search?"
    console.log(url)
    const res = await fetch(
       url+
        new URLSearchParams({
          SearchValue: searchValue,
          category: FilterCategories.toString(),
        })
    )

    const data = await res.json()
    console.log(data)
    setproducts(data)
  }

  async function getProducts() {
    const url=process.env.NEXTAUTH_URL+"/api/fetch/Products"
    console.log(url)
    const res = await fetch(url)
    const data = await res.json()
    //set categories to false
    console.log(data)
    setproducts(data)
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <div className="mx-auto mt-20 h-screen max-w-[2200px]">
      <div className="grid grid-cols-1 gap-x-3 px-4 py-2 md:grid-cols-[300px_minmax(0px,1fr)] md:px-7 md:pl-0 lg:pl-[120px]">
        {/* filters */}
        <div className="sticky top-[84px] col-start-1 hidden h-[900px] w-[300px] divide-y justify-self-end rounded-r-xl border-[1px] border-gray-300 bg-white  md:flex md:flex-col lg:w-[420px]">
          {/* overflow-y-scroll */}
          <div className="text-md flex h-3 items-center p-7 font-semibold">
            Filters
          </div>
          {/* Categories */}
          <div className="flex flex-col divide-y overflow-y-scroll scrollbar-thin scrollbar-track-gray-400/40 scrollbar-thumb-green-400">
            <div className="px-7 ">
              <main className="mx-auto px-6">
                <section aria-labelledby="products-heading">
                  <h2 id="products-heading" className="sr-only">
                    Products
                  </h2>

                  <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                    {/* Filters */}
                    <form className="hidden divide-y-[1px] sm:block">
                      {/* <h3 className="sr-only">Categories</h3> */}
                      {filters.map((section, sectionIdx) => (
                        <Disclosure as="div" key={section.id} className="py-6">
                          {({ open }) => (
                            <>
                              <h3 className="-my-3 flow-root w-56">
                                <Disclosure.Button className="flex w-full items-center justify-start  gap-x-3 truncate bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                                  <span className="text-left font-medium text-gray-900">
                                    {section.name}
                                  </span>
                                  <span className="ml-6 flex items-center">
                                    {open ? (
                                      <MinusIcon
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                      />
                                    ) : (
                                      <PlusIcon
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                      />
                                    )}
                                  </span>
                                </Disclosure.Button>
                              </h3>
                              <Disclosure.Panel className="pt-6">
                                <div className="space-y-4">
                                  {section.options.map((option, optionIdx) => (
                                    <div
                                      key={option.value}
                                      className="flex w-44 items-center"
                                    >
                                      <input
                                        id={`filter-${sectionIdx}-${optionIdx}`}
                                        name={`${section.id}[]`}
                                        defaultValue={option.value}
                                        type="checkbox"
                                        defaultChecked={option.checked}
                                        key={option.value}
                                        onChange={InputCheckedHandler}
                                        className="h-4 w-4 cursor-pointer rounded border-gray-300 text-green-600 transition-all duration-300 focus:ring-green-500"
                                      />
                                      <label
                                        htmlFor={`filter-${section.id}-${optionIdx}`}
                                        className="ml-3 truncate text-sm text-gray-600"
                                      >
                                        {option.label}
                                      </label>
                                    </div>
                                  ))}
                                </div>
                              </Disclosure.Panel>
                            </>
                          )}
                        </Disclosure>
                      ))}
                    </form>

                    {/* Product grid */}
                  </div>
                </section>
              </main>
            </div>

            {/* price range */}
            <div className="px-7">
              <PriceSlider
                Min={0}
                Max={999}
                minmax={MinMax}
                minmaxSetter={setMinMax}
              />
              <div className="mb-6 flex flex-col items-center gap-y-5">
                <input
                  disabled
                  placeholder={
                    compareArrays(MinMax) ? 'Min - Max' : stringfy(MinMax)
                  }
                  className="mx-16 w-[110px] cursor-default rounded-2xl border-[1px] border-gray-300 bg-white py-3 text-center placeholder-gray-400 outline-none"
                ></input>
                <div className="mx-12 w-full cursor-pointer self-center rounded-2xl bg-green-500 px-5 py-[14px] text-center font-light tracking-widest text-white transition-all duration-300 hover:bg-green-500/90 active:bg-green-600">
                  {/* <ThemeProvider theme={theme}>
                    <Button
                      className="bg-[#47A3581] px-5"
                      sx={[
                        {
                          borderRadius: 10,
                          boxShadow: 1,
                          paddingY: 1.7,
                          paddingX: 1.7,
                        },
                        {
                          "&:hover": {
                            color: "#47A358",
                            backgroundColor: "transparent",
                            boxShadow: 0,
                          },
                        },
                      ]}
                      variant="contained"
                    >
                      Set Price
                    </Button>
                  </ThemeProvider> */}
                  <span className="select-none"> Set Price</span>
                </div>
              </div>
            </div>

            {/* rating */}
            <div className="flex flex-col gap-y-3 p-7">
              <div className="font-semibold">Rating</div>
              <div className="flex flex-row items-center gap-x-2">
                <input
                  id="rating"
                  name="rating"
                  type="checkbox"
                  defaultChecked={StarRating}
                  onChange={() => setStarRating(!StarRating)}
                  className="mr-2 h-4 w-4 cursor-pointer rounded border-gray-300 text-green-600 transition-all duration-300 focus:ring-green-500"
                />
                <RatingCom
                  rating={rating}
                  setRating={setRating}
                  disabled={!StarRating}
                />
                <div className="truncate text-center">
                  {rating !== 0 ? labels[rating ?? 0] : ''}
                </div>
              </div>
            </div>

            {/* adds sections */}
            <section
              id="adds"
              className="flex h-full items-center justify-center"
            >
              <div className="relative my-5 h-52 w-52">
                <Image
                  src={cover}
                  alt={''}
                  fill
                  quality={20}
                  placeholder="blur"
                  className="rounded-[25px] object-cover "
                ></Image>
                <div className="absolute top-0 left-0 flex h-52 w-52 flex-col justify-around gap-y-1 rounded-[25px] bg-white/10 p-5 text-start text-white backdrop-blur-[4px]">
                  <div className="text-lg font-bold uppercase">get 30% off</div>
                  <div className="text-[12px] font-light">
                    Share your referral code and get discount
                  </div>
                  <div className="mx-2 w-full cursor-pointer select-none self-center rounded-3xl bg-amber-400 py-3 text-center font-medium text-stone-700">
                    Share
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        {/* Prods */}
        <div className="md:col-start-2">
          <div className="sticky top-[84px] left-0 z-10 mb-1 flex flex-row">
            <SearchInput
              setSearchValue={setSearchValue}
              SetProducts={setproducts}
            />
            <div className="h-[46px] w-[46px] p-1 sm:h-[54px] sm:w-[54px] md:hidden ">
              <Transition.Root show={mobileFiltersOpen} as={Fragment}>
                <Dialog
                  as="div"
                  className="relative z-[100]  lg:hidden "
                  onClose={setMobileFiltersOpen}
                >
                  <Transition.Child
                    as={Fragment}
                    enter="transition-opacity ease-linear duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity ease-linear duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="fixed inset-0 bg-black bg-opacity-25" />
                  </Transition.Child>
                  <div className="fixed inset-0 z-50 flex">
                    <Transition.Child
                      as={Fragment}
                      enter="transition ease-in-out duration-300 transform"
                      enterFrom="translate-x-full"
                      enterTo="translate-x-0"
                      leave="transition ease-in-out duration-300 transform"
                      leaveFrom="translate-x-0"
                      leaveTo="translate-x-full"
                    >
                      <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                        <div className="flex items-center justify-between px-4">
                          <h2 className="text-lg font-medium text-gray-900">
                            Filters
                          </h2>
                          <button
                            type="button"
                            className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                            onClick={() => setMobileFiltersOpen(false)}
                          >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>

                        {/* Filters */}
                        <form className="mt-4 border-t border-gray-200 ">
                          <h3 className="sr-only">Categories</h3>
                          {filters.map((section, sectionIdx) => (
                            <Disclosure
                              as="div"
                              key={section.id}
                              className="border-t border-gray-200 px-4 py-6"
                            >
                              {({ open }) => (
                                <>
                                  <h3 className="-my-3 flow-root w-56">
                                    <Disclosure.Button className="flex w-full items-center justify-start  gap-x-3 truncate bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                                      <span className="text-left font-medium text-gray-900">
                                        {section.name}
                                      </span>
                                      <span className="ml-6 flex items-center">
                                        {open ? (
                                          <MinusIcon
                                            className="h-5 w-5"
                                            aria-hidden="true"
                                          />
                                        ) : (
                                          <PlusIcon
                                            className="h-5 w-5"
                                            aria-hidden="true"
                                          />
                                        )}
                                      </span>
                                    </Disclosure.Button>
                                  </h3>
                                  <Disclosure.Panel className="pt-6">
                                    <div className="space-y-4">
                                      {section.options.map(
                                        (option, optionIdx) => (
                                          <div
                                            key={option.value}
                                            className="flex w-44 items-center"
                                          >
                                            <input
                                              id={`filter-${sectionIdx}-${optionIdx}`}
                                              name={`${section.id}[]`}
                                              defaultValue={option.value}
                                              type="checkbox"
                                              defaultChecked={option.checked}
                                              key={option.value}
                                              onChange={InputCheckedHandler}
                                              className="h-4 w-4 cursor-pointer rounded border-gray-300 text-green-600 transition-all duration-300 focus:ring-green-500"
                                            />
                                            <label
                                              htmlFor={`filter-${section.id}-${optionIdx}`}
                                              className="ml-3 truncate text-sm text-gray-600"
                                            >
                                              {option.label}
                                            </label>
                                          </div>
                                        )
                                      )}
                                    </div>
                                  </Disclosure.Panel>
                                </>
                              )}
                            </Disclosure>
                          ))}
                        </form>
                      </Dialog.Panel>
                    </Transition.Child>
                  </div>
                </Dialog>
              </Transition.Root>
              <div className="flex border-gray-200">
                <div className="flex items-center justify-center p-2">
                  <button
                    type="button"
                    className=" text-gray-400 hover:text-gray-600 "
                    onClick={() => setMobileFiltersOpen(true)}
                  >
                    <span className="sr-only">Filters</span>
                    <FunnelIcon
                      className="h-7 w-7 text-gray-500"
                      aria-hidden="true"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <h2 className="sr-only">Products</h2>
          {products?.length > 0 ? (
            <div className="grid grid-cols-1 gap-y-4 gap-x-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
              {products?.map((product: Data) => (
                <ProductCard2 key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="flex h-full w-full cursor-default select-none flex-col items-center justify-start gap-y-4 px-32 pt-24 drop-shadow-md">
              {/* <Image src="/../../Empty-amico.svg" alt={''} fill /> */}
              <div className="grayscale">
                <Image
                  src="/../../No-data-cuate.svg"
                  alt={''}
                  width={800}
                  height={800}
                />
                <div className="truncate text-center text-sm font-semibold italic tracking-widest text-stone-900 md:overflow-auto md:text-xl">
                  Sorry, we couldn't find any results !
                </div>
              </div>
              {/* <button
                type="submit"
                className="ransition-all truncate rounded-lg bg-gray-400 px-4 py-2 text-sm font-medium text-white ring-gray-500 duration-300 hover:bg-green-400 hover:ring-green-500 focus:outline-none focus:ring-4 focus:ring-green-500"
                onClick={() => {
                  getProducts()
                }}
              >
                Go back
              </button> */}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
