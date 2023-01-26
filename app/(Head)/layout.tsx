/* eslint-disable @next/next/no-head-element */
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
      <head key="main">
        {/* <!-- HTML Meta Tags --> */}
        <title key="title">CellaFarm</title>
        <meta property="og:url" content="https://cellafarm.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Cellafarm" />
        <meta
          property="og:description"
          content="Cellafarm: We believe Future of Food is Here"
        />
        <meta
          property="og:image"
          content="https://cellafarm.vercel.app/og/og_image.png"
        />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="cellafarm.vercel.app" />
        <meta property="twitter:url" content="https://cellafarm.vercel.app/" />
        <meta name="twitter:title" content="Cellafarm" />
        <meta
          name="twitter:description"
          content="Cellafarm: We believe Future of Food is Here"
        />
        <link rel="icon" href="/og/icon.png" />

        <meta
          name="twitter:image"
          content="https://cellafarm.vercel.app/og/og_image.png"
        />
        <meta
          name="description"
          content="Cellafarm: We believe Future of Food is Here"
        />

        {/* custom */}
        <link rel="icon" href="/og/icon.png" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1"
        />
      </head>
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
