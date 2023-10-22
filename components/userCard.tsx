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
      <Link href={path} className="hover:bg-light-green duration-75 delay-75 rounded-xl p-4 lg:p-8 flex justify-center flex-col lg:flex-row items-center bg-white gap-2 sm:gap-4">
          {/* icon */}
          <figure>
              <Image 
                  src={icon} 
                  alt="icon"
                  width={idx === 0 ? 22 : 32}
                  height={10}
              />
          </figure>
          <p className='text-green font-semibold text-xs lg:text-sm lg:text-start text-center'>
              {description}
          </p>
      </Link>
    )
}

export default UserCard