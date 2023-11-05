import { Suspense } from "react";
import Link from "next/link";

import MyCourseContent from "./_components/content";
import CardSkeleton from "../../../../components/skeleton/card-skeleton";
import { ITrainingData } from "../../page";

export interface IMyTraningData {
  training: ITrainingData;
}

async function MyCourses() {
  return (
    <main className="pt-4 sm:pt-6 lg:pt-12 min-h-screen">
      <div className="flex border-b border-gray-200 pb-8 justify-between lg:flex-row flex-col items-start lg:items-end">
        <div className="flex flex-col">
          <h1 className="text-xl sm:text-2xl lg:text-4xl sm:mb-2 font-bold text-gray-800">
            Pelatihan Saya
          </h1>
          <span className="text-xs sm:text-sm text-gray-600">
            Berikut adalah daftar pelatihan saya yang sedang saya ikuti
          </span>
        </div>
        <ul className="flex justify-start items-center gap-6 sm:gap-12 mt-4 sm:mt-6 lg:mt-8">
          <li>
            <Link
              className="text-green font-semibold text-xs sm:text-base hover:border-b hover:border-green"
              href="/certificate"
            >
              Sertifikat saya
            </Link>
          </li>
          <li>
            <Link
              className="text-green font-semibold text-xs sm:text-base hover:border-b hover:border-green"
              href="/profile"
            >
              Profil saya
            </Link>
          </li>
          <li>
            <Link
              className="text-green font-semibold text-xs sm:text-base hover:border-b hover:border-green"
              href="/history"
            >
              Riwayat pelatihan
            </Link>
          </li>
        </ul>
      </div>

      <Suspense fallback={<CardSkeleton sum={4} />}>
        <MyCourseContent />
      </Suspense>
    </main>
  );
}

// export const runtime = "edge";
export default MyCourses;
