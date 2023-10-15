import Card from '@/components/card'
import React from 'react'

const Courses = () => {
  return (
    <main>
        {/* header title pelatihan */}
        <div className='flex flex-col justify-center items-center gap-2 mt-8'>
            <h1 className='font-bold text-center text-[40px]'>Agenda Pelatihan</h1>
            <p className='font-regular text-[16px]'>Temukan pelatihan yang anda inginkan, dan kembangkan terus kemampuan anda</p>
            <input 
                type="text" 
                placeholder="Cari Pelatihan..." 
                className='mt-4 border border-opacity-green py-2 px-4 rounded-3xl w-[40%] outline-[#29A398]'
            />
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