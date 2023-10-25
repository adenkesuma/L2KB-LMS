"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/assets/logo/kolegium-white.svg";
import Logout from "@/public/assets/icons/logout.svg";
import Education from "@/public/assets/icons/education.svg";
import User from "@/public/assets/icons/white-user.svg";
import Achievement from "@/public/assets/icons/achievement.svg";
import Guide from "@/public/assets/icons/guide.svg";
import HamburgerMenu from "@/public/assets/icons/menu.svg";

const Sidebar = () => {
  const pathname = usePathname();
  const [showNavigate, setShowNavigate] = useState<Boolean>(false);

  const handleShowNavigate = () => {
    setShowNavigate(!showNavigate);
  };

  return (
    <>
      {pathname === "/admin" ? (
        <span></span>
      ) : (
        <div>
          <div
            className={`bg-green absolute right-0 p-3 xl:p-6 md:w-[10%] lg:w-[7%] xl:w-[18%] 2xl:w-[14%] md:flex flex-col justify-between  h-screen md:sticky left-0 top-0 bottom-0 ${
              showNavigate ? "z-50" : ""
            }`}
          >
            <div>
              <figure className="mx-auto flex justify-center">
                <Image src={Logo} alt="logo" className="w-10 lg:w-16" />
              </figure>

              <nav className="mt-12 flex flex-col gap-6">
                <Link
                  href="/admin/courses"
                  className="relative text-white group py-3 px-3 delay-75 duration-75 bg-opacity-green flex justify-center xl:justify-start items-center gap-4 rounded-lg"
                >
                  <Image src={Education} alt="education icon" className="w-5" />
                  <span className="xl:block opacity-0 xl:opacity-100 absolute bg-white xl:bg-transparent border xl:border-none border-slate-200 delay-100 text-slate-500 xl:text-white text-xs 2xl:text-sm rounded-md -mt-14 xl:mt-0 ml-28 xl:ml-7 p-1 whitespace-nowrap group-hover:opacity-100 group-hover:py-1 group-hover:px-3">
                    Pelatihan
                  </span>
                </Link>

                <Link
                  href="/admin/activate-user"
                  className="text-white py-3 px-3 delay-75 relative group duration-75 bg-opacity-green flex justify-center xl:justify-start items-center gap-4 rounded-lg"
                >
                  <Image
                    src={User}
                    alt="user white icon"
                    className="w-[14px]"
                  />
                  <span className="xl:block opacity-0 xl:opacity-100 absolute bg-white xl:bg-transparent border xl:border-none border-slate-200 delay-100 text-slate-500 xl:text-white text-xs 2xl:text-sm rounded-md -mt-14 xl:mt-0 ml-28 xl:ml-7 p-1 whitespace-nowrap group-hover:opacity-100 group-hover:py-1 group-hover:px-3">
                    Aktivasi Peserta
                  </span>
                </Link>

                <Link
                  href="/admin/participant-achievements"
                  className="text-white relative group py-3 px-3 delay-75 duration-75 bg-opacity-green flex justify-center xl:justify-start items-center gap-4 rounded-lg"
                >
                  <Image
                    src={Achievement}
                    alt="participant achievements icon"
                    className="w-[14px]"
                  />
                  <span className="xl:block opacity-0 xl:opacity-100 absolute bg-white xl:bg-transparent border xl:border-none border-slate-200 delay-100 text-slate-500 xl:text-white text-xs 2xl:text-sm rounded-md -mt-14 xl:mt-0 ml-28 xl:ml-7 p-1 whitespace-nowrap group-hover:opacity-100 group-hover:py-1 group-hover:px-3">
                    Pencapaian Peserta
                  </span>
                </Link>
                <Link
                  href="/admin/guideline"
                  className="text-white relative group py-3 px-3 delay-75 duration-75 bg-opacity-green flex justify-center xl:justify-start items-center gap-4 rounded-lg"
                >
                  <Image src={Guide} alt="guideline" className="w-[14px]" />
                  <span className="xl:block opacity-0 xl:opacity-100 absolute bg-white xl:bg-transparent border xl:border-none border-slate-200 delay-100 text-slate-500 xl:text-white text-xs 2xl:text-sm rounded-md -mt-14 xl:mt-0 ml-28 xl:ml-7 p-1 whitespace-nowrap group-hover:opacity-100 group-hover:py-1 group-hover:px-3">
                    Panduan Pelatihan
                  </span>
                </Link>
              </nav>
            </div>

            <button className="text-white py-3 delay-75 duration-75 hover:bg-opacity-green flex justify-center items-center gap-4 rounded-lg">
              <Image src={Logout} alt="logout icon" className="w-4" />
              <span className="xl:block hidden text-xs 2xl:text-sm">
                Logout
              </span>
            </button>
          </div>

          {/* hamburger menu */}
          <button
            onClick={handleShowNavigate}
            className="block -z absolute left-4 top-4 md:hidden"
          >
            <Image src={HamburgerMenu} alt="menu" className="w-6" />
          </button>
        </div>
      )}
    </>
  );
};

export default Sidebar;
