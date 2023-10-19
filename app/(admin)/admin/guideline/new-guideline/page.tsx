import React from 'react'

const NewGuideline = () => {
  return (
    <div className='min-h-screen p-12'>
            <div className="flex justify-between items-center">
                <h1 className="font-bold text-[38px] text-gray-800">Tambah Panduan</h1>
            </div>

            <div className="flex gap-8 flex-col mt-8">
                <div className='flex flex-col gap-2'>
                    <label className='font-medium text-sm'>Upload Panduan <span className='italic text-orange-600 font-regular'>(jpg, png, pdf, jpeg, webp)</span> <span className="text-red-600">*</span></label>
                    <input type="file" className="bg-white border rounded-xl p-2 border-opacity-green" />
                </div>

                <div className='flex flex-col gap-2'>
                    <label className='font-medium text-sm'>Tanggal Hari Ini <span className="text-red-600">*</span></label>
                    <input type="date" className="border rounded-xl p-2 border-opacity-green" />
                </div>

                <button className='flex justify-center items-center gap-4 mt-12 text-center w-[240px] text-white font-medium p-2 rounded-xl bg-green'>
                    Upload Panduan
                </button>
            </div>
        </div>
  )
}

export default NewGuideline