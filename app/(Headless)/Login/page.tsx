'use client'
import React, { useEffect, useState } from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'
import { useSearchParams, usePathname } from 'next/navigation'
import Image from 'next/image'
// import "../../public/mobile-login-styles.css";
// import svg from "../../../public/mobile-login-animate.svg";
type Props = {}

export default function LoginPage({}: Props) {
  const [name, setname] = useState('')
  const [password, setPassword] = useState('')
  const [section, setSection] = useState(
    'form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-green-600 focus:outline-none'
  )
  // const router = useRouter();
  const pathname = usePathname() ?? '/'
  const useSearchparams = useSearchParams() ?? '/'
  useEffect(() => {
    setPassword('')
    setname('')
    if (useSearchparams.get('error') != null) {
      alert('wrong Creds')
      setSection(
        'form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-red-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-green-600 focus:outline-none'
      )
    }
  }, [])

  //facebook Handler Function
  const handleFacebookLogin = async () =>
    signIn('facebook', { callbackUrl: 'http://localhost:3000/' })
  // @ts-ignore
  const handleCredLogin = async (e) => {
    e.preventDefault()
    // console.log("going to", localStorage.getItem("prevPath"));
    const payload = { name, password }
    let callB = useSearchparams.get('callbackUrl') ?? null
    console.log('-------------', callB)
    const status = await signIn('cred', {
      callbackUrl: callB ?? '/',
      redirect: true,
      ...payload,
    })

    console.log(status)
    // if (status?.ok) {
    //   console.log("ok");
    //   // router.push("/");
    // } else {
    //   setSection(
    //     "form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-red-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-green-600 focus:outline-none"
    //   );
    // }
  }

  return (
    <section className="h-screen">
      <div className="h-full px-6 text-gray-800">
        <div className="relative flex h-full flex-col items-center justify-center gap-y-3 md:flex-wrap md:gap-y-6 lg:justify-center xl:justify-center">
          <div className="aspect-square shrink-1 relative h-64 w-64 grow-0 basis-auto sm:h-1/3 sm:w-6/12 lg:h-full lg:w-6/12">
            {/* <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="w-full -hue-rotate-60"
              alt="Sample image"
            /> */}
            {/* <YourSvg /> */}
            {/* <Image
              src={"/../public/login.jpg"}
              alt={""}
              className="h-full"
              fill
            ></Image> */}
            <Image
              src={'/../../mobile-login-animate.svg'}
              alt={''}
              className="h-full "
              fill
            ></Image>
          </div>
          <div className="md:w-8/12 lg:w-5/12 xl:ml-20 xl:w-5/12">
            <form>
              <div className="flex flex-row items-center justify-center lg:justify-start">
                <p className="mb-0 mr-4 text-lg font-medium">Sign in with</p>
                <button
                  onClick={handleFacebookLogin}
                  type="button"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                  className="mx-1 inline-block rounded-full bg-green-600 p-3 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 hover:bg-green-700 hover:shadow-lg active:bg-green-800 active:shadow-lg"
                >
                  {/* <!-- Facebook --> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                    className="h-4 w-4"
                  >
                    {/* <!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --> */}
                    <path
                      fill="currentColor"
                      d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                    />
                  </svg>
                </button>

                <button
                  type="button"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                  className="mx-1 inline-block rounded-full bg-green-600 p-3 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 hover:bg-green-700 hover:shadow-lg active:bg-green-800 active:shadow-lg"
                >
                  {/* <!-- Twitter --> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="h-4 w-4"
                  >
                    {/* <!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --> */}
                    <path
                      fill="currentColor"
                      d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                    />
                  </svg>
                </button>

                <button
                  type="button"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                  className="mx-1 inline-block rounded-full bg-green-600 p-3 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 hover:bg-green-700 hover:shadow-lg active:bg-green-800 active:shadow-lg"
                >
                  {/* <!-- Linkedin --> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    className="h-4 w-4"
                  >
                    {/* <!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --> */}
                    <path
                      fill="currentColor"
                      d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                    />
                  </svg>
                </button>
              </div>

              <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-gray-300 after:mt-0.5 after:flex-1 after:border-t after:border-gray-300">
                <p className="mx-4 mb-0 text-center font-semibold">Or</p>
              </div>

              {/* <!-- Email input --> */}
              <div className="mb-6">
                <input
                  type="text"
                  className={section}
                  id="exampleFormControlInput1"
                  placeholder="Email address"
                  value={name}
                  onChange={(e) => setname(e.target.value)}
                />
              </div>

              {/* <!-- Password input --> */}
              <div className="mb-6">
                <input
                  type="password"
                  className={section}
                  id="exampleFormControlInput2"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="mb-6 flex items-center justify-between">
                <div className="form-group form-check">
                  <input
                    type="checkbox"
                    className="form-check-input float-left mt-1 mr-2 h-4 w-4 cursor-pointer appearance-none rounded-sm border border-gray-300 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-green-600 checked:bg-green-600 focus:outline-green-600"
                    id="exampleCheck2"
                  />
                  <label
                    className="form-check-label inline-block text-gray-800"
                    htmlFor="exampleCheck2"
                  >
                    Remember me
                  </label>
                </div>
                <a href="#!" className="text-gray-800">
                  Forgot password?
                </a>
              </div>

              <div className="text-center lg:text-left">
                <button
                  type="button"
                  onClick={handleCredLogin}
                  className="inline-block rounded bg-green-600 px-7 py-3 text-sm font-medium uppercase leading-snug text-white shadow-md transition duration-150 ease-in-out focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 hover:bg-green-700 hover:shadow-lg active:bg-green-800 active:shadow-lg"
                >
                  Login
                </button>
                <p className="mt-2 mb-0 pt-1 text-sm font-semibold">
                  Don&apos;t have an account?
                  <a
                    href="/Register"
                    className="text-red-600 transition duration-200 ease-in-out focus:text-red-700 hover:text-red-700"
                  >
                    Register
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
