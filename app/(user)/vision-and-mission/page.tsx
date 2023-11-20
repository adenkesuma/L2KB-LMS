import Image from 'next/image'
import defaultImage from "@/public/assets/images/no-data.png"

const VisionAndMission = () => {
  return (
    <main className='min-h-screen pt-4 sm:pt-6 lg:pt-12'>
      <h1 className='text-xl sm:text-2xl lg:text-[38px] font-bold text-gray-800'>Visi dan Misi</h1>

      <figure className='mt-4 sm:mt-6 lg:mt-12'>
        <Image
          src={`${process.env.NEXT_PUBLIC_PDKI_API}/vision-mission/index.jpg`}
          alt="vision mission image"
          width={1000}
          height={1000}
          className="w-full border border-gray-200 rounded-md"
        />
      </figure>
    </main>
  )
}

export default VisionAndMission