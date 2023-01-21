import '../../styles/globals.css'
import SessionProvider from '../../Components/providers/SessionProvider'
import { Montserrat } from '@next/font/google'
import logo from '../../public/otg/icon.png'
import image from '../../public/otg/otg_image.png'
const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
})
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={montserrat.className}>
      {/* <head /> */}
      <head key="main">
        <link rel="icon" href="/og/icon.png" />
        <meta property="og:title" content="Cellafarm" />
        <meta property="og:url" content="https://cellafarm.vercel.app" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/og/og_image.png" />
      </head>
      <body className="relative mx-auto h-screen max-w-[1900px] overflow-hidden">
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  )
}
