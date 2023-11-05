"use client"

import React, { FC, useState, useEffect } from 'react'
import Image from 'next/image'

const ProfileNavbar: FC<{ data: string | undefined }> = ({ data }) => {

    const [img, setImg] = useState(
        `${process.env.NEXT_PUBLIC_P2KB_API}/img/profile_picture/${data}.webp`
    );

    useEffect(() => {
        setImg(
          `${process.env.NEXT_PUBLIC_P2KB_API}/img/profile_picture/${data}.webp`
        );
    }, [data]);

    return (
        <Image
            src={img}
            alt="foto profil"
            className="h-10 w-10 rounded-[50%] p-1 bg-cover object-cover border border-gray-300"
            width={36}
            height={36}
            onError={() => setImg("/assets/images/profile-default.png")}
        />
    )
}

export default ProfileNavbar