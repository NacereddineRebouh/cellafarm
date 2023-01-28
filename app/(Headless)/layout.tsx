/* eslint-disable @next/next/no-head-element */
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
      <body className="relative mx-auto h-screen max-w-[1900px] overflow-hidden">
        <SessionProvider session={session}>{children}</SessionProvider>
        {/* <AnalytsicsWrapper /> */}
      </body>
    </html>
  )
}
