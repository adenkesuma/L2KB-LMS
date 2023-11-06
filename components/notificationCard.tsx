import Image from 'next/image'
import Link from 'next/link'
import NotificationIcon from "@/public/assets/icons/notification.svg"

const NotificationCard = () => {
  return (
    <div className='mt-6 sm:mt-8 lg:mt-12 flex justify-between items-center border border-gray-300 w-full gap-4 lg:gap-32 md:gap-12 bg-white rounded-lg sm:rounded-xl p-2 sm:p-3 lg:p-6 bg-opacity-green'>
        <div className='flex justify-start items-center gap-3 sm:gap-6'>
            <Image 
                src={NotificationIcon}
                alt="notification icon"
                className='bg-opacity-green sm:p-4 p-2 rounded-lg w-10 sm:w-14 block'
            />
            <div className='flex flex-col gap-1'>
                <h1 className='text-sm sm:text-xl text-gray-800 font-semibold line-clamp-1'>
                    Selamat! Pendaftaran Anda Diterima
                </h1>
                <p className='text-xs sm:text-sm text-gray-600 line-clamp-1'>
                   Kami dengan senang hati mengumumkan bahwa pendaftaran Anda telah diterima. Anda telah membuat langkah pertama menuju pengembangan diri yang luar biasa. Kami tak sabar untuk berbagi pengetahuan, keterampilan, dan pengalaman hebat bersama Anda. Informasi lebih lanjut segera mengikuti. Bersiaplah untuk perjalanan yang menarik ini!
                </p>
            </div>
        </div>

        <Link className='py-2 px-2 sm:px-4 rounded-md text-center sm:w-[500px] text-xs sm:text-sm bg-green text-white block' href="/notification/detail">
            <span>Lihat Detail</span>
        </Link>
    </div>
  )
}

export default NotificationCard