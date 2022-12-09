import Header from '../../Components/Header'
import '../../styles/globals.css'
import SessionProvider from '../../Components/providers/SessionProvider'
import Header_Logged from '../../Components/Header_Logged'
import { useSession, signIn, signOut } from 'next-auth/react'
import { headers } from 'next/headers'
import { unstable_getServerSession } from 'next-auth/next'
import { Inter, Montserrat, Pacifico } from '@next/font/google'
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const mons = Montserrat({ subsets: ['latin'], variable: '--font-Montserrat' })
const pac = Pacifico({
  subsets: ['latin'],
  variable: '--font-Pacifico',
  weight: '400',
})
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // const headersList = headers();
  // const referer = headersList.get("referer");
  // let classN =
  //   "absolute rounded-full h-[550px] w-[550px] bg-orange-200/80 blur-sm -top-28 -left-28 -z-10  animate-pulseLong overflow-hidden";
  // if (referer?.includes("/Login") || referer?.includes("/Register")) {
  //   console.log("---------------referer includes /Login----------------");
  //   classN =
  //     "absolute rounded-full h-[550px] w-[550px] bg-emerald-200 blur-sm -top-28 -left-28 -z-10  animate-pulseLong overflow-hidden";
  // }
  const session = await unstable_getServerSession()
  return (
    <html lang="en" className={inter.variable}>
      <body className="relative h-screen self-center overflow-y-scroll scroll-smooth bg-white overflow-x-hidden scrollbar-thin scrollbar-track-gray-400/40 scrollbar-thumb-green-400">
        {/* Background circle */}
        {/* <div className={classN} /> */}
        {/* <div className="absolute top-[650px] left-[87%] min-h-[50px] min-w-[100px] overflow-hidden">
          <div className="relative rounded-full h-[400px] w-[400px] bg-emerald-200/80 blur-sm -z-10 top-20  animate-pulseC overflow-hidden" />
        </div> */}
        <section
          id="header"
          className="fixed top-0 z-50 w-screen backdrop-blur-[1px]"
        >
          {session ? <Header_Logged session={session} /> : <Header />}
          {/* <Header /> */}
        </section>
        <SessionProvider>
          <section className="mx-auto overflow-x-hidden">{children}</section>
        </SessionProvider>
      </body>
    </html>
  )
}
