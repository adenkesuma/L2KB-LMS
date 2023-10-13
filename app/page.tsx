import HeroBanner from '@/components/heroBanner'
import Navbar from '@/components/navbar'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'LP2KB PDKI',
  description: 'pelatihan pdki indonesia',
}

export default function Home() {
  return (
    <main> 
      <HeroBanner />  
    </main>
  )
}
