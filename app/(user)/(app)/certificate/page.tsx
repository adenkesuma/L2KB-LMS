import Link from "next/link";
import UserCertificate from "@/components/userCertificate";

const Certificate = () => {
  return (
    <main className="pt-4 sm:pt-6 lg:pt-12 min-h-screen">
      <div className="flex border-b border-gray-200 pb-8 justify-between flex-col lg:flex-row items-start lg:items-end">
        <div>
          <h1 className="text-xl sm:text-2xl lg:text-4xl sm:mb-2 font-bold text-gray-800">
            Sertifikat Saya
          </h1>
          <span className="text-xs sm:text-sm text-gray-600">
            Unduh sertifikat pelatihan Anda di bawah ini
          </span>
        </div>
        <ul className="flex justify-start items-center gap-6 sm:gap-12 mt-4 sm:mt-6 lg:mt-8">
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
              href="/my-courses"
            >
              Pelatihan saya
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

      <div className="flex flex-col gap-4 sm:gap-8 mt-4 sm:mt-8">
        <UserCertificate />
        <UserCertificate />
        <UserCertificate />
      </div>
    </main>
  );
};

export default Certificate;
