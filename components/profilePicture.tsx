"use client"

import React, { FC, useState, useEffect } from 'react'
import Image from 'next/image'

const ProfilePicture: FC<{ data: string | undefined }> = ({ data }) => {

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
            className="rounded-[50%] w-36 h-36 object-cover bg-cover"
            width={36}
            height={36}
            onError={() => setImg("/assets/images/profile-default.png")}
        />
    )
}

export default ProfilePicture