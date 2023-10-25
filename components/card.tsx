"use client";

import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import moment from "moment";

import { ITrainingData } from "../app/(user)/courses/page";

const Card: FC<{
  data: ITrainingData;
}> = ({ data }) => {
  return (
    <div className="rounded-xl bg-white p-2 sm:p-3 border">
      <figure>
        <Image
          src={`${process.env.NEXT_PUBLIC_P2KB_API}/img/training_cover/${data?.id}.webp`}
          alt="thumnail pelatihan image"
          className="rounded-lg h-28 lg:h-40 w-full bg-cover object-cover"
          width={2000}
          height={100}
        />
      </figure>
      <div className="p-1 text-center rounded-md border-gray-300 border-[1.4px] text-[10px] sm:text-xs font-medium text-green w-full sm:w-[150px] mt-4">
        <span>Khusus Anggota Muda</span>
      </div>

      <div className="flex justify-between flex-col gap-2">
        <h2 className="font-medium sm:font-semibold text-base sm:text-lg mt-4 line-clamp-1 leading-5 sm:leading-6">
          {data.nama}
        </h2>
        <p className="font-regular text-gray-600 line-clamp-2 text-xs">
          {data.deskripsi}
        </p>

        <div className="sm:flex flex-col gap-1 mt-2 sm:mt-6 hidden">
          <p className="text-xs font-regular text-gray-600">
            Kondisi:{" "}
            <span className="font-semibold text-gray-700">
              Pendaftaran Aktif
            </span>
          </p>
          <p className="text-xs font-regular text-gray-600">
            Kuota:{" "}
            <span className="font-semibold text-gray-700">{data.quota}</span>
          </p>
          <p className="text-xs font-regular text-gray-600">
            Pendaftaran dibuka:{" "}
            <span className="font-semibold text-gray-700">
              {moment(new Date(data.regis_start)).format("DD MMMM yyyy")}
            </span>
          </p>
          <p className="text-xs font-regular text-gray-600">
            Pendaftaran ditutup:{" "}
            <span className="font-semibold text-gray-700">
              {moment(new Date(data.regis_end)).format("DD MMMM yyyy")}
            </span>
          </p>
        </div>

        {/* button detail */}
        <Link
          href={`/courses/${data.id}`}
          className="text-center text-white font-medium text-xs sm:text-sm mt-2 w-full p-2 rounded-lg bg-green"
        >
          Detail
        </Link>
      </div>
    </div>
  );
};

export default Card;
