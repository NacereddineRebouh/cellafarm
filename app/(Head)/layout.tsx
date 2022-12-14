import Header from '../../Components/Header'
import '../../styles/globals.css'
import SessionProvider from '../../Components/providers/SessionProvider'
import Header_Logged from '../../Components/Header_Logged'
import { unstable_getServerSession } from 'next-auth/next'
import { Inter } from '@next/font/google'
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
// const mons = Montserrat({ subsets: ['latin'], variable: '--font-Montserrat' })
// const pac = Pacifico({
//   subsets: ['latin'],
//   variable: '--font-Pacifico',
//   weight: '400',
// })
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await unstable_getServerSession()
  return (
    <html lang="en" className={inter.variable}>
      <body className="relative h-screen self-center overflow-y-scroll scroll-smooth bg-white overflow-x-hidden scrollbar-thin scrollbar-track-gray-400/40 scrollbar-thumb-green-400">
        {/* eslint-disable-next-line @next/next/no-before-interactive-script-outside-document */}

        <section
          id="header"
          className="fixed top-0 z-50 w-screen backdrop-blur-[1px]"
        >
          {session ? <Header_Logged session={session} /> : <Header />}
          {/* <Header /> */}
        </section>
        <SessionProvider>
          <section className="mx-auto ">{children}</section>
        </SessionProvider>
      </body>
    </html>
  )
}
