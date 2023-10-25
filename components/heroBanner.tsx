"use client";

import { FC, useState, useEffect } from "react";
import Image from "next/image";
import { ITrainingData } from "@/app/(user)/page";
import Link from "next/link";
import Arrow from "@/public/assets/icons/arrow-right.svg";

const HeroBanner: FC<{ data: ITrainingData[] }> = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === data.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [data]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === data.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <header className="mt-4 sm:mt-6">
      <div className="relative h-52 lg:h-[80vh]">
        {data.map((item, index) => (
          <Link href={`/courses/${item.id}`} key={item.id}>
            <Image
              src={`${process.env.NEXT_PUBLIC_P2KB_API}/img/training_cover/${item?.id}.webp`}
              alt="thumnail pelatihan image"
              className={`rounded-xl h-full w-full bg-cover object-cover absolute z-0 transition-opacity duration-300 ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
              width={2000}
              height={100}
            />
          </Link>
        ))}

        <button
          className="absolute top-1/2 transform -translate-y-1/2 left-4 bg-white px-2 py-[5px] md:px-4 md:py-[11px] rounded-full shadow-lg cursor-pointer"
          onClick={handlePrev}
        >
          <Image
            src={Arrow}
            alt="arrow left"
            className="w-2 sm:w-3 rotate-180"
          />
        </button>
        <button
          className="absolute top-1/2 transform -translate-y-1/2 right-4 bg-white px-2 py-[5px] md:px-4 md:py-[11px] rounded-full shadow-lg cursor-pointer"
          onClick={handleNext}
        >
          <Image src={Arrow} alt="arrow right" className="w-2 sm:w-3" />
        </button>
      </div>

      <div className="flex justify-center mt-4">
        {data.map((item, index) => (
          <span
            key={item.id}
            className={`w-2 h-2 mx-1 rounded-full bg-gray-400 ${
              index === currentIndex ? "bg-gray-700" : ""
            }`}
          />
        ))}
      </div>
    </header>
  );
};

export default HeroBanner;
