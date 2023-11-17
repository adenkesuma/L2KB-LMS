import Image from 'next/image'
import NoData from "@/public/assets/images/no-data.png"

const Facilities = () => {
  return (
    <div className='min-h-screen pt-4 sm:pt-6 lg:pt-12'>
      <h1 className="sm:text-2xl mb-4 md:mb-6 lg:mb-8 lg:text-4xl text-xl font-semibold sm:font-bold text-gray-800">
        Fasilitas
      </h1>

      <Image 
        src={NoData}
        alt="no data"
        className='w-full rounded-md'
      />
      {/* <div className='grid lg:grid-cols-3 grid-cols-2 gap-3 md:gap-6 lg:gap-8'>
       <Image 
          src={test1}
          alt="test"
          className='w-full rounded-md lg:h-60 md:h-52 sm:h-44 h-28'
        />
      </div> */}
    </div>
  )
}

export default Facilities