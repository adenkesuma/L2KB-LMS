"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import Card from "@/components/card";
import HeroBanner from "@/components/heroBanner";
import ArrowRight from "@/public/assets/icons/arrow-right.svg";
import MyCourseBanner from "@/components/myCourseBanner";
import useStore from "../../store/use-store";
import { userAuthStore } from "../../store/user-auth.store";

import { getAllTrainingData } from "@/lib/services/training-data.service";
import { Suspense } from "react";
import Loading from "../../components/loading";

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

const UserHomePage = () => {
  const userAuth = useStore(userAuthStore, (state) => state);
  const [allTrainingData, setAllTrainingData] = useState<ITrainingData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllTrainingData();
        setAllTrainingData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

    const audio = new Audio("/assets/voice/voice-over.mp3");
    audio.autoplay = true;
  }, []);

  return (
    <main className="min-h-screen">
      {userAuth &&
        (userAuth?.accessToken ? <MyCourseBanner /> : <HeroBanner />)}

      <div
        className={`${
          userAuth?.accessToken ? "mt-20 sm:mt-16 lg:mt-28" : "mt-6 sm:mt-14"
        }`}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-semibold text-xl sm:text-2xl sm:font-bold lg:text-[28px]">
            Pelatihan Terbaru
          </h2>
          <Link
            href="/courses"
            className="text-sm text-green font-semibold flex items-center gap-0 sm:gap-1"
          >
            <span>Lihat Semua</span>
            <Image src={ArrowRight} alt="arrow icon" className="h-3 sm:h-4" />
          </Link>
        </div>

        <Suspense fallback={<Loading />}>
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mt-6 sm:mt-6 lg:mt-12">
            {allTrainingData?.slice(0, 4).map((data, i) => {
              return <Card key={i} data={data} />;
            })}
          </div>
        </Suspense>
      </div>
    </main>
  );
};

export default UserHomePage;
