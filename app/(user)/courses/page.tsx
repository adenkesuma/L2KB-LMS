import Image from "next/image";
import Card from "@/components/card";
import Search from "@/public/assets/icons/search.svg";
import { getAllTrainingData } from "../../../lib/services/training-data.service";
import { Suspense } from "react";
import Loading from "./loading";

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

const Courses = async () => {
  const allTrainingData = await getAllTrainingData();

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
        <div className="relative">
          <input
            type="text"
            placeholder="Cari Pelatihan..."
            className="mt-4 border border-slate-300 py-2 pl-12 pr-4 rounded-3xl max-w-xs sm:w-96 lg:w-[600px] sm:max-w-2xl text-sm outline-[#015A39]"
          />
          <Image
            src={Search}
            alt="search icon"
            className="w-4 absolute top-7 left-4"
          />
        </div>
      </div>

      <Suspense fallback={<Loading />}>
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mt-6 sm:mt-6 lg:mt-12">
          {allTrainingData.map((data, i) => {
            return <Card key={i} data={data} />;
          })}
        </div>
      </Suspense>
    </main>
  );
};

export default Courses;
