"use client"

import { FC, useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ITrainingData } from "@/app/(user)/page"

const ImageBanner: FC<{ data: ITrainingData, currentIndex: any, index: number }>  = ({ data, currentIndex, index }) => {

    const [img, setImg] = useState(
        `${process.env.NEXT_PUBLIC_P2KB_API}/img/training_cover/${data?.id}.webp`
    );
        
    useEffect(() => {
      setImg(
        `${process.env.NEXT_PUBLIC_P2KB_API}/img/training_cover/${data?.id}.webp`
      );
    }, [data]);

    return (
        <Link href={`/courses/${data.id}`} key={data.id}>
            <Image
                src={img}
                alt="thumnail pelatihan image"
                className={`border border-gray-200 rounded-xl h-full w-full bg-cover object-cover absolute z-0 transition-opacity duration-300 ${
                  index === currentIndex ? "opacity-100" : "opacity-0"
                }`}
                width={2000}
                height={100} 
                onError={() => setImg("/assets/images/default-image-course.jpg")}
            />
        </Link>
    )
}

export default ImageBanner