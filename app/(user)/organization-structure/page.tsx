import Image from 'next/image'

const OrganizationStructure = () => {
  return (
    <main className='min-h-screen pt-4 sm:pt-6 lg:pt-12'>
      <h1 className='text-xl sm:text-2xl lg:text-[38px] font-bold text-gray-800'>Struktur Organisasi</h1>

      <figure className='mt-4 sm:mt-6 lg:mt-12'>
        <Image
          src={`${process.env.NEXT_PUBLIC_PDKI_API}/organization-structure/index.jpg`}
          alt="organization structure image"
          width={1000}
          height={1000}
          className="w-full border border-gray-200 rounded-md"
        />
      </figure>
    </main>
  )
}

export default OrganizationStructure