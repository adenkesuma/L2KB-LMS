import Card from '@/components/card'
import HeroBanner from '@/components/heroBanner'
import Navbar from '@/components/navbar'
import Link from 'next/link'
import ArrowRight from '@/public/assets/icons/arrow-right.svg'
import { Metadata } from 'next'
import Image from 'next/image'
import UserCard from '@/components/userCard'
import { myCourse } from '@/contsant'

export const metadata: Metadata = {
  title: 'LP2KB PDKI',
  description: 'pelatihan pdki indonesia',
}

export default function Home() {
  const login: Boolean = true

  return (
    <main> 
      {login ? 
        (
          <div className='mt-12 rounded-2xl bg-banner-profile p-8 pb-20'>
            <h1 className='text-[38px] font-bold mb-4 text-white'>Pelatihan Saya</h1>
            
            <div className="grid grid-cols-3 gap-4 -mb-32">
              {myCourse.map((item, idx) => (
                <UserCard 
                  key={idx*4}
                  path={item.path}
                  idx={idx}
                  icon={item.icon}
                  description={item.description}
                />
              ))}
            </div>
          </div>
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
