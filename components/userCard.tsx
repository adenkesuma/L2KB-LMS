import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'

interface Props {
    path: string
    icon: string
    description: string
    idx: number
}

const UserCard = ({ path, icon, description, idx}: Props) => {

    return (
      <Link href={path} className={`hover:bg-light-green duration-75 delay-75 rounded-xl p-4 flex justify-center flex-col items-center bg-white gap-2`}>
          {/* icon */}
          <figure>
              <Image 
                  src={icon} 
                  alt="icon"
                  width={idx === 0 ? 22 : 32}
                  height={10}
              />
          </figure>
          <p className='text-green font-semibold text-xs sm:text-sm sm:text-start text-center'>
              {description}
          </p>
      </Link>
    )
}

export default UserCard