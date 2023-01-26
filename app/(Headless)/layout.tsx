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
        <link rel="icon" href="/og/icon.png" />
        <meta property="og:title" content="Cellafarm" />
        <meta property="og:url" content="https://cellafarm.vercel.app" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/og/og_image.png" />
      </Head>
      <body className="relative mx-auto h-screen max-w-[1900px] overflow-hidden">
        <SessionProvider session={session}>{children}</SessionProvider>
        <AnalyticsWrapper />
      </body>
    </html>
  )
}
