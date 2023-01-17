'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { headers } from 'next/headers'

type Props = {}

export default function Register({}: Props) {
  const initialValues = { name: '', email: '', password: '' }
  const [formValues, setformValues] = useState(initialValues)
  const [message, setmessage] = useState('')

  // -----Redirect-----
  const router = useRouter()
  // -------------------

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setformValues({ ...formValues, [name]: value })
  }
  // @ts-ignore
  const handleSubmit = async (e) => {
    e.preventDefault()
    const name = formValues.name
    const email = formValues.email
    const password = formValues.password
    // const result22 = await resdd.json()
    console.log(name, ' ', email, ' ', password, ' ')
    // const result = await fetch(
    //   process.env.NEXT_PUBLIC_BACKEND_API + '/api/register',
    //   {
    //     method: 'POST',
    //     body: JSON.stringify({
    //       name,
    //       email,
    //       password,
    //     }),
    //     headers: {
    //       Accept: 'application/json',
    //       'Access-Control-Allow-Origin': '*',
    //       'Access-Control-Allow-Methods': 'GET,POST',
    //     },
    //   }
    // )
    // const result2 = await result.json()
    // if (result2.success) {
    //   router.push('/Login')
    // } else if (result2.message) {
    //   setmessage(result2.message)
    // }
    fetch(process.env.NEXT_PUBLIC_BACKEND_API + '/api/register', {
      method: 'POST',
      body: JSON.stringify({
        ...formValues,
      }),
      headers: {
        Accept: 'application/json',
        //       'Access-Control-Allow-Origin': '*',
        //       'Access-Control-Allow-Methods': 'GET,POST',
      },
    })
      .then(async (response) => {
        const result2 = await response.json()
        console.log(JSON.stringify(result2))
        console.log(result2.success)
        if (result2.success) {
          setmessage(result2.success)
          router.push('/Login')
        } else {
          setmessage(result2.message)
        }
      })
      .catch((reason) => {
        console.log(reason)
      })
  }

  const classN =
    'absolute rounded-full h-[550px] w-[550px] bg-emerald-200 blur-sm -top-[10%] -left-28 -z-10  animate-pulseLong '
  const classN2 =
    'absolute rounded-xl h-[550px] w-[550px] bg-emerald-200 blur-sm top-[650px] left-[87%] -z-10  animate-pulseLong '
  return (
    <div className="">
      <div className={classN} />
      <div className="absolute top-[60%] left-[87%] min-h-[200px] min-w-[100px] ">
        <div className="relative top-0 -z-10 h-[400px] w-[400px] animate-spin-slow rounded-3xl bg-green-300/80 blur-sm " />
      </div>
      <div className="flex min-h-screen flex-col items-center justify-center">
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
          integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm"
          crossOrigin="anonymous"
        />
        <div
          className="
          w-50 flex
          max-w-md
          flex-col
          rounded-3xl
          bg-white
          px-4
          py-8
          shadow-md
          sm:px-6
          md:px-8
          lg:px-10
        "
        >
          <div className="self-center text-xl font-medium text-gray-800 sm:text-3xl">
            Join us Now
          </div>
          <div className="text-md mt-4 self-center text-gray-800 sm:text-sm">
            Enter your credentials to get access account
          </div>

          <div className="">
            <div className="my-2 h-8 text-sm font-medium text-red-500">
              {message}
            </div>
            <form>
              <div className="mb-5 flex flex-col">
                <label
                  htmlFor="email"
                  className="mb-1 text-xs tracking-wide text-gray-600"
                >
                  Name:
                </label>
                <div className="relative">
                  <div
                    className="
                    absolute
                    left-0
                    top-0
                    inline-flex
                    h-full
                    w-10
                    items-center
                    justify-center
                    text-gray-400
                  "
                  >
                    <i className="fas fa-user text-green-500"></i>
                  </div>

                  <input
                    id="name"
                    type="text"
                    name="name"
                    className="
                    w-full
                    rounded-2xl
                    border
                    border-gray-400
                    py-2
                    pl-10 pr-4
                    text-sm
                    placeholder-gray-500
                    focus:border-green-400 focus:outline-none
                  "
                    value={formValues.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                  />
                </div>
              </div>
              <div className="mb-5 flex flex-col">
                <label
                  htmlFor="email"
                  className="mb-1 text-xs tracking-wide text-gray-600"
                >
                  E-Mail Address:
                </label>
                <div className="relative">
                  <div
                    className="
                    absolute
                    left-0
                    top-0
                    inline-flex
                    h-full
                    w-10
                    items-center
                    justify-center
                    text-gray-400
                  "
                  >
                    <i className="fas fa-at text-green-500"></i>
                  </div>

                  <input
                    id="email"
                    type="email"
                    name="email"
                    className="
                    w-full
                    rounded-2xl
                    border
                    border-gray-400
                    py-2
                    pl-10 pr-4
                    text-sm
                    placeholder-gray-500
                    focus:border-green-400 focus:outline-none
                  "
                    onChange={handleChange}
                    value={formValues.email}
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              <div className="mb-6 flex flex-col">
                <label
                  htmlFor="password"
                  className="mb-1 text-xs tracking-wide text-gray-600 sm:text-sm"
                >
                  Password:
                </label>
                <div className="relative">
                  <div
                    className="
                    absolute
                    left-0
                    top-0
                    inline-flex
                    h-full
                    w-10
                    items-center
                    justify-center
                    text-gray-400
                  "
                  >
                    <span>
                      <i className="fas fa-lock text-green-500"></i>
                    </span>
                  </div>

                  <input
                    id="password"
                    type="password"
                    name="password"
                    className="
                    w-full
                    rounded-2xl
                    border
                    border-gray-400
                    py-2
                    pl-10 pr-4
                    text-sm
                    placeholder-gray-500
                    focus:border-green-400 focus:outline-none
                  "
                    value={formValues.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                  />
                </div>
              </div>

              <div className="flex w-full">
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="
                  mt-2
                  flex
                  w-full
                  items-center
                  justify-center
                  rounded-2xl bg-green-500
                  py-2
                  text-sm
                  text-white
                  transition
                  duration-150
                  ease-in
                  focus:outline-none
                  hover:bg-green-600
                  sm:text-base
                "
                >
                  <span className="mr-2 uppercase">Sign Up</span>
                  <span>
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="mt-6 flex items-center justify-center">
          <div
            className="
            ml-2
            inline-flex
            items-center
            text-center
            text-xs font-medium
            text-gray-700
          "
          >
            You have an account?
            <Link
              href="/Login"
              className="ml-2 text-xs font-semibold text-green-500"
            >
              Login here
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
