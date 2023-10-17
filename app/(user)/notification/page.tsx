import NotificationCard from '@/components/notificationCard'
import React from 'react'

const Notification = () => {
  return (
    <main className="min-h-screen pt-12">
        <div className='flex justify-between items-end'>
            <div>
                <h1 className='text-[38px] font-bold text-gray-800'>Notifikasi</h1>
                <span className='text-sm text-gray-600'>semua notifikasi terkait pelatihan akan ditampilkan disini</span>
            </div>
            <select name="" id="" className='py-2 px-4 rounded-lg border border-green bg-white text-green font-medium text-sm'>
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