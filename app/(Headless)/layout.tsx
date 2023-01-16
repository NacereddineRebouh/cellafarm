import '../../styles/globals.css'
import SessionProvider from '../../Components/providers/SessionProvider'
import { Inter, Space_Grotesk, Montserrat } from '@next/font/google'
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const Space = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-Space_Grotesk',
})
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

      <body className="relative mx-auto h-screen max-w-[1900px] overflow-hidden">
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  )
}
