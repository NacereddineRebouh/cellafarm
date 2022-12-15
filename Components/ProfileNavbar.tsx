'use client'
import Link from 'next/link'
import React from 'react'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { useSession, signIn, signOut } from 'next-auth/react'
import Image from 'next/image'
type Props = {}

export default function ProfileNavbar({}: Props) {
  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
  }
  return (
    <div className="relative inset-y-0 right-0 flex scale-90 items-center sm:static sm:inset-auto md:scale-100 ">
      <Menu as="div" className="relative">
        <Menu.Button
          type="button"
          className="rounded-full bg-green-400 p-1 text-gray-100 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-green-400 hover:text-white"
        >
          {/* <span className="sr-only">View notifications</span> */}
          {/* <BellIcon className="h-6 w-6" aria-hidden="true"/> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
            />
          </svg>
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-10 mt-2 h-[360px] w-64 origin-top-right rounded-md bg-white py-1 shadow-lg shadow-green-50/40 ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="absolute flex h-full w-full cursor-default items-center justify-center text-[13px] font-normal text-gray-300">
              no Notifications for the moment
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
      {/* Profile dropdown */}
      <Menu as="div" className="relative ml-3 ">
        <div>
          <Menu.Button className=" focus:ring-offset-3 flex rounded-full text-sm outline-none transition-all duration-300 focus:ring-2 focus:ring-amber-500 focus:ring-offset-amber-400 ">
            <span className="sr-only">Open user menu</span>
            <Image
              className="h-11 w-11 rounded-full "
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
              width={44}
              height={44}
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <Menu.Item>
              {({ active }) => (
                <Link
                  href="/Profile"
                  className={classNames(
                    active ? 'bg-gray-100' : '',
                    'block px-4 py-2 text-sm text-gray-700'
                  )}
                >
                  Your Profile
                </Link>
              )}
            </Menu.Item>
            {/* <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? "bg-gray-100" : "",
                    "block px-4 py-2 text-sm text-gray-700"
                  )}
                >
                  Settings
                </a>
              )}
            </Menu.Item> */}
            <Menu.Item>
              {({ active }) => (
                <div
                  onClick={() => signOut()}
                  className={classNames(
                    active ? 'cursor-pointer bg-gray-100' : '',
                    'block px-4 py-2 text-sm text-gray-700'
                  )}
                >
                  Sign out
                </div>
              )}
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}
