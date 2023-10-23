// @ts-nocheck

import { FC, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import moment from "moment";

import { getOneTrainingData } from "../../../../lib/services/training-data.service";
import { notFound } from "next/navigation";

type PelatihanDetailType = { params: { id: string } };

const PelatihanDetail: FC<PelatihanDetailType> = async ({ params }) => {
  const oneTrainingData = await getOneTrainingData(params.id);
  if (!oneTrainingData) {
    return notFound();
  }

  return (
    <main className="pt-4 sm:pt-6 lg:pt-12 min-h-screen">
      <h1 className="font-bold text-xl sm:text-2xl lg:text-4xl">
        {oneTrainingData?.nama}
      </h1>
      <div className="flex items-center justify-start mt-4 sm:mt-6 lg:mt-10">
        <p className="font-regular text-xs sm:text-sm text-gray-600 pr-6 border-r border-gray-400">
          Kondisi:{" "}
          <span className="font-semibold text-green">Pendaftaran Aktif</span>
        </p>
        <p className="font-regular text-xs sm:text-sm text-gray-600 pl-6">
          Kuota Peserta:{" "}
          <span className="font-semibold text-green">
            {oneTrainingData?.quota}
          </span>
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-4 sm:gap-8 mt-4">
        <figure className="block w-full lg:w-[68%]">
          <Image
            src={`${process.env.NEXT_PUBLIC_P2KB_API}/img/training_cover/${oneTrainingData?.id}.webp`}
            alt="banner image detail"
            className="rounded-xl h-full bg-cover bg-center w-full object-cover max-h-[400px]"
            width={1000}
            height={70}
          />
        </figure>

        <div className="p-3 md:p-4 w-full lg:w-[32%] bg-white rounded-xl flex justify-between flex-col">
          <div>
            <h2 className="font-semibold text-base sm:text-[24px] text-gray-800">
              Tentang pelatihan ini
            </h2>

            <ul className="flex flex-col justify-start mt-4 sm:mt-6 gap-2">
              <li className="font-reguler te text-xs sm:text-sm text-gray-600">
                Tahun Pelaksanaan:{" "}
                <span className="font-semibold text-green">
                  {oneTrainingData?.tahun_pelaksanaan}
                </span>
              </li>
              <li className="font-reguler text-xs sm:text-sm text-gray-600">
                Institusi Penyelenggara:{" "}
                <span className="font-semibold text-green">
                  {oneTrainingData.trainingOrganizer.nama}
                </span>
              </li>
              <li className="font-reguler text-xs sm:text-sm text-gray-600">
                Gelombang / Batch:{" "}
                <span className="font-semibold text-green">
                  {oneTrainingData.batch}
                </span>
              </li>
              <li className="font-reguler text-xs sm:text-sm text-gray-600">
                Periode Pendaftaran:{" "}
                <span className="font-semibold text-green">
                  {moment(
                    new Date(oneTrainingData.regis_start).toDateString()
                  ).format("DD MMMM yyyy")}{" "}
                  s/d{" "}
                  {moment(
                    new Date(oneTrainingData.regis_end).toDateString()
                  ).format("DD MMMM yyyy")}
                </span>
              </li>
              <li className="font-reguler text-xs sm:text-sm text-gray-600">
                Periode Pelatihan:{" "}
                <span className="font-semibold text-green">
                  {moment(
                    new Date(oneTrainingData.training_start).toDateString()
                  ).format("DD MMMM yyyy")}{" "}
                  s/d{" "}
                  {moment(
                    new Date(oneTrainingData.training_end).toDateString()
                  ).format("DD MMMM yyyy")}
                </span>
              </li>
              <li className="font-reguler text-xs sm:text-sm text-gray-600">
                Tempat Penyelenggaraan:{" "}
                <span className="font-semibold text-green">
                  {oneTrainingData.location}
                </span>
              </li>
              <li className="font-reguler text-xs sm:text-sm text-gray-600">
                Biaya Pelatihan:{" "}
                <span className="font-semibold text-green">
                  Rp {oneTrainingData.price}
                </span>
              </li>
            </ul>
          </div>

          <Link
            href="/register"
            className="mt-6 text-center text-white text-sm font-medium w-full p-2 rounded-xl bg-green"
          >
            Daftar Sekarang
          </Link>
        </div>
      </div>

      {/* Deskripsi */}
      <div className="mt-6 sm:mt-10 w-full lg:w-[68%]">
        <h2 className="font-semibold text-gray-800 text-base sm:text-[24px]">
          Deskripsi
        </h2>
        <p className="mt-1 sm:mt-4 text-xs sm:text-sm text-gray-600">
          {/* Skrining atau uji saring pada bayi baru lahir Neonatal Screening
          adalah istilah yang sering kita dengar */}
          {oneTrainingData.deskripsi}
        </p>
      </div>

      {/* Target peserta */}
      <div className="mt-6 sm:mt-10 w-full lg:w-[68%]">
        <h2 className="font-semibold text-gray-800 text-base sm:text-[24px]">
          Target Peserta
        </h2>
        <p className="mt-1 sm:mt-4 text-xs sm:text-sm text-gray-600">
          {/* Anggota Biasa : Sp KKLP */}
          {oneTrainingData.target_candidate.map((item) => item)}
        </p>
      </div>

      {/* kriteria peserta */}
      <div className="mt-6 sm:mt-10 w-full lg:w-[68%]">
        <h2 className="font-semibold text-gray-800 text-base sm:text-[24px]">
          Kriteria peserta harus terpenuhi semua, yaitu sebagai berikut
        </h2>

        <ul className="flex flex-col gap-2 sm:gap-3 mt-1 sm:mt-4">
          {JSON.parse(oneTrainingData?.kriteria).map((item, i) => {
            return (
              <li
                className="font-regular text-xs sm:text-sm text-gray-600"
                key={i}
              >
                {i + 1}. {item}
              </li>
            );
          })}
        </ul>
      </div>

      {/* kompetensi */}
      <div className="w-full sm:w-[68%] mt-6 lg:mt-10">
        <h2 className="font-semibold text-gray-800 text-base sm:text-[24px]">
          Kompetensi
        </h2>
        <ul className="flex flex-col gap-2 sm:gap-3 mt-1 sm:mt-4">
          {JSON.parse(oneTrainingData.kompetensi).map((item, i) => {
            return (
              <li
                className="font-regular text-xs sm:text-sm text-gray-600"
                key={i}
              >
                {i + 1}. {item}
              </li>
            );
          })}
        </ul>
      </div>

      {/* Tujuan Pelatihan */}
      <div className="mt-6 sm:mt-10 w-full lg:w-[68%]">
        <h2 className="font-semibold text-base sm:text-[24px] text-gray-800">
          Tujuan Pelatihan
        </h2>
        <div>
          {JSON.parse(oneTrainingData.tujuan).map((item, i) => {
            return (
              <p
                className="mt-1 sm:mt-4 text-xs sm:text-sm text-gray-600"
                key={i}
              >
                - {item}
              </p>
            );
          })}
        </div>
      </div>

      {/* catatan */}
      <div className="mt-6 sm:mt-10 bg-opacity-green p-6 rounded-xl sm:rounded-2xl w-full lg:w-[68%] mb-8 sm:mb-20">
        <h2 className="font-semibold text-green text-base sm:text-[24px]">
          Catatan:
        </h2>
        <ul className="flex flex-col gap-2 sm:gap-3 mt-2 sm:mt-4">
          {JSON.parse(oneTrainingData.catatan).map((item, i) => {
            return (
              <li
                className="font-regular text-xs sm:text-sm text-green"
                key={i}
              >
                - {item}
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
};

export default PelatihanDetail;
