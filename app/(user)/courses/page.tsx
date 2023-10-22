import Image from 'next/image'
import Card from '@/components/card'
import Search from "@/public/assets/icons/search.svg"

const Courses = () => {
  return (
    <main className='pt-4 sm:pt-6 lg:pt-12 min-h-screen'>
        {/* header title pelatihan */}
        <div className='flex flex-col justify-center items-center gap-2'>
            <h1 className='font-bold text-center text-xl sm:text-2xl lg:text-[38px]'>Agenda Pelatihan</h1>
            <p className='font-regular text-xs px-4 sm:text-base text-center sm:w-[70%]'>Temukan pelatihan yang anda inginkan, dan kembangkan terus kemampuan anda</p>
            <div className="relative">
              <input 
                type="text" 
                placeholder="Cari Pelatihan..." 
                className='mt-4 border border-slate-300 py-2 pl-12 pr-4 rounded-3xl max-w-xs text-sm md:w-[500px] outline-[#015A39]'
              />
              <Image 
                src={Search}
                alt="search icon"
                className="w-4 absolute top-7 left-4"
              />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 lg:gap-8 mt-6 sm:mt-6 lg:mt-12">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    </main>
  )
}

export default Courses