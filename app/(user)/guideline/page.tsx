import Image from 'next/image'
import Guide from "@/public/assets/panduan.jpg"

const Guideline = () => {
  return (
    <main className='min-h-screen pt-4 sm:pt-6 lg:pt-12'>
      <h1 className='text-xl sm:text-2xl lg:text-[38px] font-bold text-gray-800'>Panduan Pelatihan</h1>

      <figure className='mt-4 sm:mt-6 lg:mt-12 border rounded-md'>
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