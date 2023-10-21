import Image from 'next/image'
import Guide from "@/public/assets/panduan.jpg"

const Guideline = () => {
  return (
    <main className='min-h-screen pt-4 sm:pt-12'>
      <h1 className='text-xl sm:text-[38px] font-bold text-gray-800'>Panduan Pelatihan</h1>

      <figure className='pt-4 sm:mt-12'>
        <Image 
          src={Guide}
          alt="guideline image"
          className='w-full rounded-md'
        />
      </figure>
    </main>
  )
}

export default Guideline