import React, { Suspense } from "react";
import Image from "next/image";

import Card from "@/components/card";
import Search from "@/public/assets/icons/search.svg";
import { getAllTrainingData } from "../../../lib/services/training-data.service";
import Loading from "../../../components/loading";
import SearchComponents from "./search";
import CourseContent from "./content";

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
  trainingType: { nama: string };
  trainingOrganizer: {
    nama: string;
    no_rekening: string;
    tipe_rekening: string;
    nama_rekening: string;
  };
}

const Courses: React.FC<{
  searchParams: {
    name: string;
  };
}> = async ({ searchParams }) => {
  const allTrainingData = await getAllTrainingData(searchParams.name);

  return (
    <main className="pt-4 sm:pt-8 lg:pt-12 min-h-screen">
      {/* header title pelatihan */}
      <div className="flex flex-col justify-center items-center gap-2">
        <h1 className="font-bold text-center md:mb-2 text-xl sm:text-2xl lg:text-[38px]">
          Agenda Pelatihan
        </h1>
        <p className="font-regular text-xs px-4 sm:text-base text-center sm:w-[70%]">
          Temukan pelatihan yang anda inginkan, dan kembangkan terus kemampuan
          anda
        </p>
        <SearchComponents />
      </div>

      <CourseContent
        searchParams={searchParams}
        allTrainingData={allTrainingData}
      />
    </main>
  );
};

export default Courses;
