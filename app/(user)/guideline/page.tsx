import Image from 'next/image'
import Guide from "@/public/assets/panduan.jpg"

const Guideline = () => {
  return (
    <main className='min-h-screen pt-12'>
      <h1 className='text-[38px] font-bold text-gray-800'>Panduan Pelatihan</h1>

      <figure className='mt-12'>
        <Image 
          src={Guide}
          alt="guideline image"
          className='w-full'
        />
      </figure>
    </main>
  )
}

export default Guideline