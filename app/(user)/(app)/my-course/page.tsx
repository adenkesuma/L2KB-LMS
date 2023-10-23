import Link from "next/link";
import Card from "@/components/card";

const MyCourse = () => {
  return (
    <main className="pt-4 sm:pt-6 lg:pt-12 min-h-screen">
      <div className="flex justify-between lg:flex-row flex-col items-start lg:items-end">
        <div className="flex flex-col">
          <h1 className="text-xl sm:text-2xl lg:text-4xl sm:mb-2 font-bold text-gray-800">
            Pelatihan Saya
          </h1>
          <span className="text-xs sm:text-sm text-gray-600">
            Berikut adalah daftar pelatihan saya yang sedang saya ikuti
          </span>

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

        <div className="flex flex-col gap-2 mt-4 sm:mt-6 lg:gap-3">
          <label className="text-xs sm:text-sm text-gray-600">
            Cari Pelatihan Saya
          </label>
          <input
            type="text"
            placeholder="Cari..."
            className="border border-opacity-green py-2 px-4 rounded-3xl w-full sm:w-[440px] outline-[#29A398]"
          />
        </div>
      </div>

      <div className="mt-4 sm:mt-6 lg:mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-8">
        {/* <Card /> */}
      </div>
    </main>
  );
};

export default MyCourse;
