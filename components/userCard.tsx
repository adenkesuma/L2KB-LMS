import Image from 'next/image'
import React, { FC } from 'react'

interface Props {
    icon: string
    description: string
}

const UserCard = ({ icon, description}: Props) => {
  return (
    <div className='rounded-xl p-6 flex justify-start items-center gap-8 border border-white'>
        {/* icon */}
        <figure>
            <Image 
                src={icon} 
                alt="icon"
            />
        </figure>
        <p>
            {description}
        </p>
    </div>
  )
}

export default UserCard