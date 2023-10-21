import Card from '@/components/card'
import HeroBanner from '@/components/heroBanner'
import Link from 'next/link'
import ArrowRight from '@/public/assets/icons/arrow-right.svg'
import { Metadata } from 'next'
import Image from 'next/image'
import MyCourseBanner from '@/components/myCourseBanner'

export default function Home() {
  const login: Boolean = false

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

      <div className={`${login ? "mt-20 sm:mt-24" : "mt-6"}`}>
        <div className='flex justify-between items-center mb-4'>
          <h2 className='font-semibold text-lg sm:font-bold sm:text-[28px]'>Pelatihan Terbaru</h2>
          <Link href="/courses" className='text-sm text-green font-semibold flex items-center gap-0 sm:gap-1'>
            <span>Lihat Semua</span>
            <Image 
              src={ArrowRight}
              alt="arrow icon"
              className='h-3 sm:h-4'
            />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-8">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </main>
  )
}
