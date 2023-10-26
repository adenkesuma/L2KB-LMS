import React from "react";
import Link from "next/link";

function AdminCourseLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen mb-8 px-4 md:px-8 xl:px-14 pt-10">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-xl md:text-2xl text-gray-800">
          Daftar Semua Pelatihan
        </h1>
        <Link
          href="/admin/courses/new"
          className="flex justify-center flex-row items-center gap-2 w-32 md:w-44 text-white font-medium py-[6px] sm:py-[10px] rounded-lg md:rounded-xl bg-green"
        >
          <span className="text-xs sm:text-sm">Tambah Pelatihan</span>
        </Link>
      </div>

      <div className="flex justify-start items-center gap-3 lg:gap-6 mt-6">
        <button
          className={`text-gray-600 focus:bg-green focus:text-white p-1 lg:p-2 border border-gray-300 rounded-lg lg:rounded-xl w-28 md:w-36 lg:w-44 font-medium text-xs md:text-sm`}
        >
          Semua Pelatihan
        </button>
        <button className="text-gray-600 focus:bg-green focus:text-white p-1 lg:p-2 border border-gray-300 rounded-lg lg:rounded-xl w-28 md:w-36 lg:w-44 font-medium text-xs md:text-sm">
          Draf
        </button>
      </div>
      {children}
    </div>
  );
}

export default AdminCourseLayout;
