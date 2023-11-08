import Image from 'next/image'
import Link from 'next/link'
import NotificationIcon from "@/public/assets/icons/notification.svg"
import moment from 'moment'

const NotificationCard = ({ announce }: any) => {

  return (
    <div className='mt-6 flex justify-between overflow-hidden flex-col md:flex-row items-center border border-gray-300 w-full gap-4 lg:gap-32 md:gap-12 bg-white rounded-lg sm:rounded-xl p-2 sm:p-3 lg:p-6 bg-opacity-green'>
        <div className='flex justify-start items-center gap-3 sm:gap-6'>
            <Image 
                src={NotificationIcon}
                alt="notification icon"
                className='bg-opacity-green sm:p-4 p-2 rounded-lg w-10 sm:w-14 block'
            />
            <div className='flex flex-col gap-1'>
                <span className='text-green font-semibold text-xs xl:text-sm mb-2'>{moment(announce?.createdAt).format("HH:mm:ss")}</span>
                <h1 className='text-sm sm:text-base text-gray-800 font-semibold'>
                    {announce.title}
                </h1>
                <p className='mt-2 text-xs sm:text-sm text-gray-600'>
                    {announce.description}
                </p>
            </div>
        </div>
    </div>
  )
}

export default NotificationCard