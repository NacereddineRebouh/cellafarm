import '../../styles/globals.css'
import SessionProvider from '../../Components/providers/SessionProvider'
import { Montserrat } from '@next/font/google'
import logo from '../../public/otg/icon.png'
import image from '../../public/otg/otg_image.png'
import { AnalyticsWrapper } from '../../Components/analytics'
import { unstable_getServerSession } from 'next-auth'
import Head from 'next/head'
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
      {/* <head /> */}

      <Head key="main">
        {/* <!-- HTML Meta Tags --> */}
        <meta
          name="description"
          content="Cellafarm: We believe Future of Food is Here"
        />

        {/* <!-- Facebook Meta Tags --> */}
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
        <meta
          name="twitter:image"
          content="https://cellafarm.vercel.app/og/og_image.png"
        />

        {/* custom */}
        <link rel="icon" href="/og/icon.png" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1"
        />
      </Head>

      <body className="relative mx-auto h-screen max-w-[1900px] overflow-hidden">
        <SessionProvider session={session}>{children}</SessionProvider>
        <AnalyticsWrapper />
      </body>
    </html>
  )
}
