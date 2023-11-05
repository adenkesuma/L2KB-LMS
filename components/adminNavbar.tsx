"use client";

import { FC } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

import Profile from "@/./public/assets/images/profile-default.png"

const AdminNavbar: FC = () => {
  const pathname = usePathname();

  return (
    <>
      {pathname === "/admin" ? (
        <span></span>
      ) : (
        <nav className="sticky top-0 z-10 bg-white/80 backdrop-blur-md flex items-center justify-end sm:justify-between py-2 px-4 md:px-8 xl:px-14 border-b border-gray-200">
          <h1 className="text-lg hidden md:block font-medium text-gray-600">
            Admin Dashboard
          </h1>
          <div className="flex items-center gap-4">
            <span className="font-medium text-xs xl:text-sm text-gray-800">
              Admin
            </span>
            <Image
              src={Profile}
              alt="profile user"
              className="h-8 md:h-10 w-8 md:w-10 rounded-[50%] p-[2px] xl:p-1 border border-gray-300"
            />
          </div>
        </nav>
      )}
    </>
  );
};

export default AdminNavbar;
