import Image from 'next/image'
import defaultImage from "@/public/assets/images/no-data.png"

const OrganizationStructure = () => {
  return (
    <main className='min-h-screen pt-4 sm:pt-6 lg:pt-12'>
      <h1 className='text-xl sm:text-2xl lg:text-[38px] font-bold text-gray-800'>Struktur Organisasi</h1>

      <figure className='mt-4 sm:mt-6 lg:mt-12'>
        <Image
          src={defaultImage}
          alt="guideline image"
          width={1000}
          height={1000}
          className="w-full"
        />
      </figure>
    </main>
  )
}

export default OrganizationStructure