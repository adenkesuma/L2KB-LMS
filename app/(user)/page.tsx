import React from "react";
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
import CardSkeleton from "../../components/skeleton/card-skeleton";
import LatestTrainingMainPage from "./_components/latest-training";
import { cookies } from "next/headers";
import MainPageBanner from "./_components/banner";
import { BannerSkeleton } from "../../components/skeleton/banner-skeleton";
import { getCookie } from "../../lib/services/cookie.service";
import HomeVoice from "./_components/voice";
import Marquee from "./_components/marque";

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
  skp: number;
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

const UserHomePage = async () => {
  const accessKey = await getCookie("accessKey");
  // const userAuth = useStore(userAuthStore, (state) => state);
  // const [allTrainingData, setAllTrainingData] = useState<ITrainingData[]>([]);

  return (
    <main className="min-h-screen">
      <HomeVoice />
      <Marquee />

      {accessKey ? (
        <MyCourseBanner />
      ) : (
        <Suspense fallback={<BannerSkeleton />}>
          <MainPageBanner />
        </Suspense>
      )}

      <div
        className={`${accessKey ? "mt-20 sm:mt-16 lg:mt-28" : "mt-6 sm:mt-14"}`}
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

        <Suspense fallback={<CardSkeleton sum={4} />}>
          <LatestTrainingMainPage />
        </Suspense>
      </div>
    </main>
  );
};

export default UserHomePage;
