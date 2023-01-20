import Header from '../../Components/Header'
import '../../styles/globals.css'
import SessionProvider from '../../Components/providers/SessionProvider'
import Header_Logged from '../../Components/Header_Logged'
import { unstable_getServerSession } from 'next-auth/next'
import { Inter, Space_Grotesk, Montserrat } from '@next/font/google'
import Head from 'next/head'
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
        <title key="title">Cella</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1"
        />

        <meta property="og:title" content="Cellafarm" />
        <meta
          property="og:description"
          content="Cellafarm: we believe Future of Food is Here"
        />
        <meta property="og:url" content="https://cellafarm.vercel.app" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.google.com/url?sa=i&url=http%3A%2F%2Ft2.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcTotCbOIUt9xNehNqt4yAd8x19i3mo0Of_xccsc6V2KBh7j2W7B&psig=AOvVaw09vXLag5U9YTM8g6h1I8hM&ust=1673983305380000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCID16_PnzPwCFQAAAAAdAAAAABAD"
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
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  )
}
