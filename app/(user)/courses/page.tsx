import Image from 'next/image'
import Card from '@/components/card'
import Search from "@/public/assets/icons/search.svg"

const Courses = () => {
  return (
    <main className='pt-12 min-h-screen'>
        {/* header title pelatihan */}
        <div className='flex flex-col justify-center items-center gap-2'>
            <h1 className='font-bold text-center text-[38px]'>Agenda Pelatihan</h1>
            <p className='font-regular text-[16px]'>Temukan pelatihan yang anda inginkan, dan kembangkan terus kemampuan anda</p>
            <div className="relative">
              <input 
                type="text" 
                placeholder="Cari Pelatihan..." 
                className='mt-4 border border-slate-300 py-2 pl-12 pr-4 rounded-3xl w-[500px] outline-[#015A39]'
              />
              <Image 
                src={Search}
                alt="search icon"
                className="w-4 absolute top-7 left-4"
              />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 mt-12">
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