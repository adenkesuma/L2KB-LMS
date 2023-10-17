import Image from 'next/image'
import Link from 'next/link'
import NotificationIcon from "@/public/assets/icons/notification.svg"

const NotificationCard = () => {
  return (
    <div className='mt-12 flex justify-between items-center gap-32 bg-white rounded-2xl p-6 bg-opacity-green'>
        <div className='flex justify-start items-center gap-6'>
            <div className='p-4 rounded-lg bg-opacity-green'>
                <Image 
                    src={NotificationIcon}
                    alt="notification icon"
                    className='w-14'
                />
            </div>
            <div className='flex flex-col gap-1'>
                <h1 className='text-[20px] text-gray-800 font-semibold'>
                    Selamat! Pendaftaran Anda Diterima untuk Pelatihan Unggulan Kami
                </h1>
                <p className='text-sm text-gray-600 line-clamp-1'>
                   Kami dengan senang hati mengumumkan bahwa pendaftaran Anda untuk pelatihan unggulan kami telah diterima. Anda telah membuat langkah pertama menuju pengembangan diri yang luar biasa. Kami tak sabar untuk berbagi pengetahuan, keterampilan, dan pengalaman hebat bersama Anda. Informasi lebih lanjut segera mengikuti. Bersiaplah untuk perjalanan yang menarik ini!
                </p>
            </div>
        </div>

        <Link className='py-2 px-4 rounded-md bg-green text-white block w-[240px]' href="/notification/detail">Lihat Detail</Link>
    </div>
  )
}

export default NotificationCard