"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

const RegisterBanner = ({ trainingId } : any ) => {
  console.log(trainingId)

  const [img, setImg] = useState(
    `${process.env.NEXT_PUBLIC_P2KB_API}/img/training_cover/${trainingId}.webp`
  );

  useEffect(() => {
    setImg(
      `${process.env.NEXT_PUBLIC_P2KB_API}/img/training_cover/${trainingId}.webp`
    );
  }, [trainingId]);

  return (
    <>
      <Image
          src={img}
          alt="banner image detail"
          className="rounded-xl h-full bg-cover bg-center w-full border border-gray-200 object-cover max-h-[400px]"
          width={1000}
          height={70}
          onError={() => setImg("/assets/images/default-image-course.jpg")}
      />
    </>
  )
}

export default RegisterBanner