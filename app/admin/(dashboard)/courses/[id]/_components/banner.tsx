"use client"

import { FC, useState, useEffect } from "react"
import Image from "next/image"
import { ITrainingData } from "@/app/(user)/page"

const Banner: FC<{ data: string | undefined }>  = ({ data }) => {

    const [img, setImg] = useState(
        `${process.env.NEXT_PUBLIC_P2KB_API}/img/training_cover/${data}.webp`
    );
        
    useEffect(() => {
      setImg(
        `${process.env.NEXT_PUBLIC_P2KB_API}/img/training_cover/${data}.webp`
      );
    }, [data]);

    return (
        <Image
            src={img}
            alt="thumnail pelatihan image"
            className={`border border-gray-200 rounded-xl w-96 h-64 bg-cover object-cover`}
            width={2000}
            height={100} 
            onError={() => setImg("/assets/images/default-image-course.jpg")}
        />
    )
}

export default Banner