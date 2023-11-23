// @ts-nocheck

import { FC, Suspense } from "react";
import Link from "next/link";
import moment from "moment";
import { notFound } from "next/navigation";

import {
  getMyTraining,
  getOneTrainingData,
} from "../../../../lib/services/training-data.service";
import Loading from "../../../../components/loading";
import RegisterBanner from "../_components/registerBanner";
import { getCookie } from "../../../../lib/services/cookie.service";
import { getUserData } from "@/lib/services/user-data.service";

const memberOptions = [
  {
    value: "anggota_biasa",
    label: "Anggota Biasa : Sp KKLP",
  },
  {
    value: "anggota_luar_biasa",
    label: "Anggota Luar Biasa (Umum) : Dokter yang bukan Sp KKLP",
  },
  {
    value: "anggota_muda",
    label: "Anggota Muda : PPDS KKLP",
  },
  {
    value: "semua",
    label: "Semua"
  }
];

type PelatihanDetailType = { params: { id: string } };

const PelatihanDetail: FC<PelatihanDetailType> = async ({ params }) => {
  const accessKey = await getCookie("accessKey");

  const oneTrainingData = await getOneTrainingData(params.id);

  if (!oneTrainingData) {
    return notFound();
  }

  const userDataProfile = await getUserData(accessKey);

  // console.log(userDataProfile?.profile?.no_str)

  const myTrainingData = await getMyTraining(accessKey);
  const userData = await getUserData(accessKey);

  const isRegistered: boolean | null = myTrainingData?.find(
    (data) => data?.training_id === params.id
  );

  // get current date
  const currentDate = new Date();
  const registerType = new Date(oneTrainingData.regis_end) <= currentDate

  const status: string | null = userData?.profile?.status_anggota;
  const statusWithUnderscore: string | null = status?.replace(/\s/g, "_");

  return (
    <Suspense fallback={<Loading />}>
      <main className="pt-4 sm:pt-6 lg:pt-12 min-h-screen">
        <h1 className="font-bold text-xl sm:text-2xl lg:text-4xl">
          {oneTrainingData?.nama}
        </h1>
        <div className="flex items-center justify-start mt-4 sm:mt-6 lg:mt-10">
          <p className="font-regular text-xs sm:text-sm text-gray-600 pr-6 border-r border-gray-400">
            Kondisi:{" "}
            <span className="font-semibold text-green">
              {registerType ? "Pendaftaran Ditutup" : "Pendaftaran Aktif"}
            </span>
          </p>
          <p className="font-regular text-xs sm:text-sm text-gray-600 pl-6">
            Kuota Peserta:{" "}
            <span className="font-semibold text-green">
              {oneTrainingData?.quota}
            </span>
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-8 mt-4 relative">
          <figure className="block w-full lg:w-[68%] h-full">
            <RegisterBanner trainingId={oneTrainingData?.id} />
          </figure>

          <div className="sticky top-20 w-full lg:w-[32%] h-full max-h-[calc(100vh-9rem)]">
            <div className="p-3 md:p-4 bg-white rounded-xl flex justify-between flex-col border sticky top-0">
              <div className="">
                <h2 className="font-semibold text-base sm:text-[24px] text-gray-800">
                  Tentang pelatihan ini
                </h2>
                <ul className="flex flex-col justify-start mt-4 sm:mt-6 gap-2">
                  <li className="font-regular text-xs sm:text-sm text-gray-600">
                    Jumlah SKP:{" "}
                    <span className="font-semibold text-green">{oneTrainingData?.skp}</span>
                  </li>
                  <li className="font-reguler text-xs sm:text-sm text-gray-600">
                    Tahun Pelaksanaan:{" "}
                    <span className="font-semibold text-green">
                      {oneTrainingData?.tahun_pelaksanaan}
                    </span>
                  </li>
                  <li className="font-reguler text-xs sm:text-sm text-gray-600">
                    Tipe Pelatihan: {" "}
                    <span className="font-semibold text-green">
                      {oneTrainingData?.trainingType?.nama}
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
                      {moment(new Date(oneTrainingData.regis_start)).format(
                        "DD MMMM yyyy"
                      )}{" "}
                      s/d{" "}
                      {moment(new Date(oneTrainingData.regis_end)).format(
                        "DD MMMM yyyy"
                      )}
                    </span>
                  </li>
                  <li className="font-reguler text-xs sm:text-sm text-gray-600">
                    Periode Pelatihan:{" "}
                    <span className="font-semibold text-green">
                      {moment(
                        new Date(oneTrainingData.training_start)
                      ).format("DD MMMM yyyy")}{" "}
                      s/d{" "}
                      {moment(new Date(oneTrainingData.training_end)).format(
                        "DD MMMM yyyy"
                      )}
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

              {/* logika di button pendaftaran */}
              { userDataProfile ? (
                isRegistered ? (
                   <button className="bg-gray-300 text-gray-800 mt-6 text-center text-sm font-medium w-full p-2 rounded-xl">
                     Sudah Mendaftar
                   </button>
                  ) : (
                    // userDataProfile?.profile?.no_str ? ""
                    <Link
                      href={
                        registerType ? `#` : 
                        oneTrainingData?.quota === 0 ? `#` : 
                        statusWithUnderscore === oneTrainingData?.member || oneTrainingData?.member === "semua" ? 
                        userDataProfile?.profile?.no_str ? `/courses/${oneTrainingData?.id}/register` :
                        userDataProfile?.profile?.no_str === 0 || userDataProfile?.profile?.no_str === null ? "/profile" :
                        `/courses/${oneTrainingData.id}/register` : `#`
                      }
                      className={`mt-6 text-center text-sm font-medium w-full p-2 rounded-xl bg-green text-white`}
                    >
                      {
                        registerType ? "Pendaftaran di tutup" :
                        oneTrainingData?.quota === 0 ? "Kuota Penuh" : 
                        statusWithUnderscore === oneTrainingData?.member || oneTrainingData?.member === "semua" ? 
                        userDataProfile?.profile?.no_str ? "Daftar Sekarang" : 
                        userDataProfile?.profile?.no_str === 0 || userDataProfile?.profile?.no_str === null ?  
                        "Lengkapi Profile" : "Daftar Sekarang" : "Daftar Sekarang"
                      }
                    </Link>  
                ) 
              ) : (
                <Link 
                  href={
                    registerType ? `#` : oneTrainingData?.quota === 0 ? 
                    `#` : `/courses/${oneTrainingData.id}`
                  }
                  className="mt-6 text-center text-sm w-full p-2 rounded-xl bg-green text-white"
                >
                  {
                    registerType ? "Pendaftaran di tutup" :
                    oneTrainingData?.quota === 0 ? "Kuota Penuh" : "Daftar Sekarang"
                  }
                </Link>
              )}

              {/* cek apakah data profile user sudah terpenuhi semua yg required nya */}
              {userDataProfile ? (
                userDataProfile?.profile?.no_str === 0 || userDataProfile?.profile?.no_str === null ? (
                  <div className="border border-gray-200 p-3 rounded-lg mt-6">
                    <p className="text-xs font-medium text-green">
                      Lengkapi terlebih dahulu data penting di profile kamu, data yang perlu di isi ditandai dengan tanda <span className="text-red-600">*</span> berwarna merah di bagian profile kamu
                    </p>
                  </div>
                ) : (
                  ""
                )
              ) : (
                ""
              )}

              {/* cek apakah pelatihan target candidate nya sesuai dengan status anggota user */}
              { userDataProfile ? (
                statusWithUnderscore === oneTrainingData?.member || oneTrainingData?.member === "semua" ? (
                  ""
                ) : (
                  <div className="border border-gray-200 p-3 rounded-lg mt-6">
                    <p className="text-xs font-medium text-orange-500">
                      Kamu tidak di izinkan mengikuti pelatihan ini dikarenakan pelatihan ini khusus: {" "}
                      {memberOptions.map((item) => {
                        return item.value === oneTrainingData?.member ? item.label : ''
                      })}                      
                    </p>
                  </div>
                )
              ) : (
                ""
              )}
            </div>
          </div>
   
        </div>
        {/* Deskripsi */}
        <div className="mt-6 w-full lg:w-[68%]">
          <h2 className="font-semibold text-gray-800 text-base sm:text-[24px]">
            Deskripsi
          </h2>
          <p className="mt-1 sm:mt-4 text-xs sm:text-sm text-gray-600">
            {oneTrainingData.deskripsi}
          </p>
        </div>
        {/* Target peserta */}
        <div className="mt-6 sm:mt-10 w-full lg:w-[68%]">
          <h2 className="font-semibold text-gray-800 text-base sm:text-[24px]">
            Target Peserta
          </h2>
          <p className="mt-1 sm:mt-4 text-xs sm:text-sm text-gray-600">
            {memberOptions.map((item) => {
              return item.value === oneTrainingData?.member ? item.label : ''
            })}
          </p>
        </div>
        {/* kriteria peserta */}
        <div className="mt-6 sm:mt-10 w-full lg:w-[68%]">
          <h2 className="font-semibold text-gray-800 text-base sm:text-[24px]">
            Kriteria peserta harus terpenuhi semua, yaitu sebagai berikut
          </h2>
          <p className="flex flex-col gap-2 sm:gap-3 mt-1 sm:mt-4 whitespace-pre-line text-xs sm:text-sm text-gray-600">
            {oneTrainingData.kriteria}
          </p>
        </div>
        {/* kompetensi */}
        <div className="w-full sm:w-[68%] mt-6 lg:mt-10">
          <h2 className="font-semibold text-gray-800 text-base sm:text-[24px]">
            Kompetensi
          </h2>
          <ul className="flex flex-col gap-2 sm:gap-3 mt-1 sm:mt-4 whitespace-pre-line text-xs sm:text-sm text-gray-600">
            {oneTrainingData.kompetensi}
          </ul>
        </div>
        {/* Tujuan Pelatihan */}
        <div className="mt-6 sm:mt-10 w-full lg:w-[68%]">
          <h2 className="font-semibold text-base sm:text-[24px] text-gray-800">
            Tujuan Pelatihan
          </h2>
          <p className="whitespace-pre-line mt-1 sm:mt-4 text-xs sm:text-sm text-gray-600">
            {oneTrainingData.tujuan}
          </p>
        </div>
        {/* catatan */}
        <div className="mt-6 sm:mt-10 bg-opacity-green p-6 rounded-xl sm:rounded-2xl w-full lg:w-[68%] mb-8 sm:mb-20">
          <h2 className="font-semibold text-green text-base sm:text-[24px]">
            Informasi Pelatihan:
          </h2>
          <ul className="flex flex-col gap-2 sm:gap-3 mt-2 sm:mt-4 whitespace-pre-line">
            {oneTrainingData.catatan}
          </ul>
        </div>
      </main>
    </Suspense>
  );
}

// export const runtime = "edge";
export default PelatihanDetail;
