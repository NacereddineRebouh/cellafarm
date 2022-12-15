'use client'
import Link from 'next/link'
import React from 'react'
import { useSession } from 'next-auth/react'
import { Session } from 'next-auth'
import ProfileNavbar from './ProfileNavbar'
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

type Props = {
  session?: Session
}

export default function Header_Logged({ session }: Props) {
  return (
    <div className="border-[1px] bg-[#f3ffe9]/40 shadow-sm">
      <Disclosure as="nav">
        {({ open }) => (
          <>
            <div
              className={
                open
                  ? 'mx-auto max-w-[2200px] backdrop-blur-md'
                  : 'mx-auto max-w-[2200px]'
              }
            >
              <div className="grid h-20 grid-cols-[2fr_1fr_2fr] px-6 text-[17px] md:grid-cols-[1fr_4fr] md:px-8 xl:px-16">
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
                  className="flex items-center justify-center text-center font-bold md:w-auto md:justify-start"
                >
                  CELLA
                </Link>

                <div className="flex flex-row items-center justify-end gap-12 font-medium md:mr-3">
                  {/* <Link className="hidden lg:flex" href="/">
              <div className="rounded-full px-4 py-3 transition-all duration-300 hover:bg-green-100">
                Home
              </div>
            </Link> */}
                  <Link className="hidden md:flex" href="/Products">
                    <div className="rounded-full px-4 py-3 transition-all duration-300 hover:bg-green-100">
                      Products
                    </div>
                  </Link>
                  <Link className="hidden md:flex" href="/Blog">
                    <div className="rounded-full px-4 py-3 transition-all duration-300 hover:bg-green-100">
                      Blog
                    </div>
                  </Link>
                  <Link className="hidden md:flex" href="/#ContactUs">
                    <div className="rounded-full px-4 py-3 transition-all duration-300 hover:bg-green-100">
                      Contact
                    </div>
                  </Link>

                  {/* Button */}
                  <ProfileNavbar />
                  {/* <div>{session?.user?.name}</div> */}
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
