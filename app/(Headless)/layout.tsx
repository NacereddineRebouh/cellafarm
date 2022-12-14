import '../../styles/globals.css'
import SessionProvider from '../../Components/providers/SessionProvider'
import { Inter, Montserrat, Pacifico } from '@next/font/google'
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      {/* <head /> */}

      <body className="relative mx-auto h-screen max-w-[1900px] overflow-hidden">
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  )
}
