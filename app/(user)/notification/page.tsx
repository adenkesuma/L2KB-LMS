import NotificationCard from '@/components/notificationCard'
import React from 'react'

const Notification = () => {
  return (
    <main className="min-h-screen pt-4 sm:pt-6 lg:pt-12">
        <div className='flex flex-col gap-4 sm:flex-row justify-between items-start sm:items-end'>
            <div>
                <h1 className='sm:text-2xl lg:text-[38px] text-xl font-semibold sm:font-bold text-gray-800'>Notifikasi</h1>
                <span className='text-xs sm:text-sm text-gray-600'>semua notifikasi terkait pelatihan akan ditampilkan disini</span>
            </div>
            <select name="" id="" className='py-1 sm:py-2 px-2 lg:px-4 rounded-lg border border-green bg-white text-green font-medium text-xs sm:text-sm'>
                <option value="latest">Notifikasi Terbaru</option>
                <option value="longest">Notifikasi Terlama</option>
            </select>
        </div> 

        <div>
            <NotificationCard />
        </div>
    </main>
  )
}

export default Notification