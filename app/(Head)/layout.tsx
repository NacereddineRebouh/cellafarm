import Header from '../../Components/Header'
import '../../styles/globals.css'
import SessionProvider from '../../Components/providers/SessionProvider'
import Header_Logged from '../../Components/Header_Logged'
import { unstable_getServerSession } from 'next-auth/next'
import { Inter, Space_Grotesk, Montserrat } from '@next/font/google'
import Head from 'next/head'
import { AnalyticsWrapper } from '../../Components/analytics'
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const Space = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-Space_Grotesk',
})
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
  return (
    <html lang="en" className={montserrat.className}>
      <Head key="main">
        {/* <!-- HTML Meta Tags --> */}
        {/* <meta
          name="description"
          content="Cellafarm: We believe Future of Food is Here"
        /> */}

        {/* custom */}
        <link rel="icon" href="/og/icon.png" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1"
        />
      </Head>
      <body className="relative h-screen self-center overflow-y-scroll scroll-smooth bg-white overflow-x-hidden scrollbar-thin scrollbar-track-gray-400/40 scrollbar-thumb-green-400">
        {/* eslint-disable-next-line @next/next/no-before-interactive-script-outside-document */}

        <header
          id="header"
          className="fixed top-0 z-50 w-screen backdrop-blur-[1px]"
        >
          {session ? <Header_Logged session={session} /> : <Header />}
          {/* <Header /> */}
        </header>
        <SessionProvider session={session}>{children}</SessionProvider>
        <AnalyticsWrapper />
      </body>
    </html>
  )
}
