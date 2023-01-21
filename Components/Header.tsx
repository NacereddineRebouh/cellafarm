'use client'
import Link from 'next/link'
import React from 'react'
import { useSession } from 'next-auth/react'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import ProfileNavbar from './ProfileNavbar'

type Props = {}

export default function Header({}: Props) {
  // const { data: session } = useSession();
  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
  }
  return (
    <div className="bg-gray-100/40">
      <Disclosure as="nav">
        {({ open }) => (
          <>
            <div
              className={
                open
                  ? 'mx-auto max-w-[2200px] transition-all duration-300 ease-out'
                  : 'mx-auto max-w-[2200px] transition-all duration-300'
              }
            >
              <div className="grid h-20 grid-cols-[2fr_2fr] px-6 text-[17px] md:grid-cols-[1fr_4fr] md:px-8 xl:px-16">
                {/* Mobile menu button*/}
                <div className="flex items-center text-center md:hidden">
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white hover:bg-green-300 hover:text-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>

                <Link
                  href="/"
                  className="hidden items-center justify-center text-center font-bold md:flex md:justify-start "
                >
                  CELLA
                </Link>
                <div className="mr-0 flex flex-row items-center justify-end gap-9 overflow-visible font-medium lg:gap-12">
                  {/* <Link className="hidden lg:flex" href="/">
            <div className="rounded-full px-4 py-3 transition-all duration-300 hover:bg-green-100">
              Home
            </div>
          </Link> */}
                  <Link
                    className="hidden md:flex"
                    prefetch={false}
                    href="/Products"
                  >
                    <div className="rounded-full px-4 py-3 transition-all duration-300 hover:bg-green-100">
                      Products
                    </div>
                  </Link>
                  <Link className="hidden md:flex" href="/Blog">
                    <div className="rounded-full px-4 py-3 transition-all duration-300 hover:bg-green-100">
                      blog
                    </div>
                  </Link>
                  <Link className="hidden md:flex" href="/#ContactUs">
                    <div className="rounded-full px-4 py-3 transition-all duration-300 hover:bg-green-100">
                      Contact
                    </div>
                  </Link>

                  {/* Button */}

                  <div className="flex h-14 cursor-pointer items-center justify-end truncate rounded-full border-[1px] border-gray-300 bg-[#FAFAFA] px-5 font-medium drop-shadow-sm transition-all duration-300 hover:scale-105 hover:bg-zinc-100 hover:shadow-md">
                    <Link href="/Login">Get Started</Link>
                  </div>
                </div>
              </div>
              <Disclosure.Panel className="md:hidden">
                <div className="space-y-1 px-2 pt-2 pb-3">
                  <Link className="" href="/Products">
                    <div className="rounded-full px-4 py-3 transition-all duration-300 hover:bg-green-100">
                      Products
                    </div>
                  </Link>
                  <Link className="" href="/Blog">
                    <div className="rounded-full px-4 py-3 transition-all duration-300 hover:bg-green-100">
                      Blog
                    </div>
                  </Link>
                  <Link className="" href="/#ContactUs">
                    <div className="rounded-full px-4 py-3 transition-all duration-300 hover:bg-green-100">
                      Contact
                    </div>
                  </Link>
                </div>
              </Disclosure.Panel>
            </div>
          </>
        )}
      </Disclosure>
    </div>
  )
}
