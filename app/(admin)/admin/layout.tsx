import Sidebar from '@/components/sidebar'
import AdminNavbar from '@/components/adminNavbar'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={`${inter}`}>
        <div className='flex relative'>
          <Sidebar />
          <section className='w-[85%]'>
            <AdminNavbar />
            <span className='bg-slate-100 block'>
              {children}
            </span>
          </section>
        </div>
      </body>
    </html>
  )
}
