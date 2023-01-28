/* eslint-disable @next/next/no-head-element */
import Header from '../../Components/Header'
import '../../styles/globals.css'
import SessionProvider from '../../Components/providers/SessionProvider'
import Header_Logged from '../../Components/Header_Logged'
import { unstable_getServerSession } from 'next-auth/next'
import { Montserrat } from '@next/font/google'
import { AnalyticsWrapper } from '../../Components/analytics'
const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
})

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await unstable_getServerSession()
  console.log(session?.user?.email)
  return (
    <html lang="en" className={montserrat.className}>
      <body className="relative h-screen self-center overflow-y-scroll scroll-smooth bg-white overflow-x-hidden scrollbar-thin scrollbar-track-gray-400/40 scrollbar-thumb-green-400">
        {/* eslint-disable-next-line @next/next/no-before-interactive-script-outside-document */}

        <header
          id="header"
          className="fixed top-0 z-50 w-screen backdrop-blur-[1px]"
        >
          {session ? <Header_Logged session={session} /> : <Header />}
          {/* <Header /> */}
        </header>
        <SessionProvider>{children}</SessionProvider>
        <AnalyticsWrapper />
      </body>
    </html>
  )
}
