import Card from '@/components/card'
import HeroBanner from '@/components/heroBanner'
import Link from 'next/link'
import ArrowRight from '@/public/assets/icons/arrow-right.svg'
import { Metadata } from 'next'
import Image from 'next/image'
import MyCourseBanner from '@/components/myCourseBanner'

export const metadata: Metadata = {
  title: 'LP2KB PDKI',
  description: 'pelatihan pdki indonesia',
}

export default function Home() {
  const login: Boolean = true

  return (
    <main className='min-h-screen'> 
      {login ? 
        (
          <MyCourseBanner />
        ) :
        (
          <HeroBanner />  
        )
      }

      <div className="mt-28">
        <div className='flex justify-between items-center mb-4'>
          <h2 className='font-bold text-[28px]'>Pelatihan Terbaru</h2>
          <Link href="/courses" className='text-md text-green font-semibold flex items-center gap-1'>
            <span>Lihat Semua Pelatihan</span>
            <Image 
              src={ArrowRight}
              alt="arrow icon"
              className='h-4'
            />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </main>
  )
}
