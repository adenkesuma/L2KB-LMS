import React from 'react'
import GetAllFacilities from './_components/get-all-facilities'
import UploadFacilities from './_components/upload-facilities'
import { getCookie } from '@/lib/services/cookie.service'

const Facilities = async () => {
  const adminAK = await getCookie("adminAK");

  return (
    <div className='min-h-screen mb-8 px-4 md:px-8 xl:px-14 pt-10'>
      <h1 className='font-bold text-xl md:text-2xl text-gray-800'>Fasilitas</h1>
      <UploadFacilities adminAK={adminAK} />

      <GetAllFacilities adminAK={adminAK} />
    </div>
  )
}

export default Facilities