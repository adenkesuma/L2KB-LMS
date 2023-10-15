import Image from 'next/image'
import React, { FC } from 'react'

const UserCard: FC = ({ icon, total, description}) => {
  return (
    <div className='rounded-xl p-6 flex justify-start items-center gap-8 border border-white'>
        {/* icon */}
        <figure>
            <Image 
                src={icon} 
                alt="icon"
            />
        </figure>
        <div>
            <span>
                {total}
            </span>
            <p>
                {descrtiption}
            </p>
        </div>
        
    </div>
  )
}

export default UserCard