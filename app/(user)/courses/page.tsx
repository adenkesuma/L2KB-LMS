import React, { Suspense } from "react";

import { getAllTrainingData } from "../../../lib/services/training-data.service";
import Loading from "../../../components/loading";
import SearchComponents from "./_components/search";
import CourseContent from "./_components/content";
import CardSkeleton from "../../../components/skeleton/card-skeleton";

export interface ITrainingData {
  target_candidate: string;
  tujuan: string;
  kriteria: string;
  kompetensi: string;
  catatan: string;
  id: string;
  nama: string;
  deskripsi: string;
  quota: number;
  tahun_pelaksanaan: number;
  batch: number;
  training_start: string;
  training_end: string;
  regis_start: string;
  regis_end: string;
  location: string;
  price: number;
  trainingType: { id: string; nama: string };
  trainingOrganizer: {
    id: string;
    nama: string;
    no_rekening: string;
    tipe_rekening: string;
    nama_rekening: string;
  };
  createdAt: Date;
  updatedAt: Date;
}

const Courses: React.FC<{
  searchParams: {
    name: string;
  };
}> = async ({ searchParams }) => {
  return (
    <main className="pt-4 sm:pt-8 lg:pt-12 min-h-screen">
      {/* header title pelatihan */}
      <div className="flex flex-col justify-center items-center gap-2">
        <h1 className="font-bold text-center md:mb-2 text-xl sm:text-2xl lg:text-4xl">
          Agenda Pelatihan
        </h1>
        <p className="font-regular text-xs px-4 sm:text-base text-gray-600 text-center sm:w-[60%]">
          Telusuri beragam pelatihan yang sesuai dengan keinginan Anda, dan bawa
          kemampuan Anda ke puncak prestasi dengan setiap langkah yang diambil
        </p>
        <SearchComponents />
      </div>

      <Suspense fallback={<CardSkeleton sum={8} />} key={searchParams.name}>
        <CourseContent searchParams={searchParams} />
      </Suspense>
    </main>
  );
};

export const runtime = "edge";
export default Courses;
