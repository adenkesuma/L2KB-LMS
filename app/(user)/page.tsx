"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import Card from "@/components/card";
import HeroBanner from "@/components/heroBanner";
import ArrowRight from "@/public/assets/icons/arrow-right.svg";
import MyCourseBanner from "@/components/myCourseBanner";
import useStore from "../../store/use-store";
import { userAuthStore } from "../../store/user-auth.store";

export default function UserHomePage() {
  const userAuth = useStore(userAuthStore, (state) => state);

  useEffect(() => {
    const audio = new Audio('/assets/voice/voice-over.mp3');
    audio.autoplay = true;
  }, []);

  return (
    <main className="min-h-screen">

      {userAuth &&
        (userAuth?.accessToken ? <MyCourseBanner /> : <HeroBanner />)}

      <div className={`${userAuth?.accessToken ? "mt-20 sm:mt-16 lg:mt-24" : "mt-6 sm:mt-14"}`}>
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

        <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </main>
  );
}
