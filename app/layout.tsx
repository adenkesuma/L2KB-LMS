import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'LDP Layanan Primer',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-100`}>
        <nav className='bg-white'>
          <Navbar />
        </nav>
        <div className="container px-4 sm:px-14 mx-auto">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
