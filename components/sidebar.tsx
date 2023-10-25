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
import Close from "@/public/assets/icons/close.svg";
import ActivateUser from "@/app/admin/(dashboard)/activate-user/page";

const Sidebar = () => {
  const pathname = usePathname();
  const [showNavigate, setShowNavigate] = useState<Boolean>(false);

  const handleShowNavigate = () => {
    setShowNavigate(!showNavigate);
  };

  const activePath = pathname.split("/");

  return (
    <>
      {pathname === "/admin" ? (
        <span></span>
      ) : (
        <>
          {showNavigate ? (
            <button
              onClick={handleShowNavigate}
              className="z-[9999] absolute top-5 right-5 md:hidden"
            >
              <Image src={Close} alt="close icon" className="w-5" />
            </button>
          ) : null}

          {/* desktop and ipad navigate */}
          <div
            className={`bg-green hidden p-3 xl:p-6 md:w-[10%] lg:w-[7%] xl:w-[18%] 2xl:w-[14%] md:flex flex-col justify-center sm:justify-between h-screen md:sticky left-0 top-0 bottom-0 ${
              showNavigate ? "z-50" : ""
            } `}
          >
            <div>
              <figure className="mx-auto flex justify-center">
                <Image src={Logo} alt="logo" className="w-14 lg:w-16" />
              </figure>

              <nav className="mt-12 flex flex-col gap-6">
                <Link
                  href="/admin/courses"
                  className={`relative text-white group py-3 px-3 delay-75 duration-75 ${
                    activePath[2] === "courses" ? "bg-opacity-green" : ""
                  } flex justify-center xl:justify-start items-center gap-4 rounded-lg`}
                >
                  <Image src={Education} alt="education icon" className="w-5" />
                  <span className="text-xs text-white md:hidden xl:block">
                    Pelatihan
                  </span>
                </Link>

                <Link
                  href="/admin/activate-user"
                  className={`text-white py-3 px-3 delay-75 relative group duration-75 ${
                    activePath[2] === "activate-user" ? "bg-opacity-green" : ""
                  } flex justify-center xl:justify-start items-center gap-4 rounded-lg`}
                >
                  <Image
                    src={User}
                    alt="user white icon"
                    className="w-[14px]"
                  />
                  <span className="text-xs text-white md:hidden xl:block">
                    Aktivasi Peserta
                  </span>
                </Link>

                <Link
                  href="/admin/participant-achievements"
                  className={`text-white relative group py-3 px-3 delay-75 duration-75 ${
                    activePath[2] === "participant-achievements"
                      ? "bg-opacity-green"
                      : ""
                  } flex justify-center xl:justify-start items-center gap-4 rounded-lg`}
                >
                  <Image
                    src={Achievement}
                    alt="participant achievements icon"
                    className="w-[14px]"
                  />
                  <span className="text-xs text-white md:hidden xl:block">
                    Pencapaian Peserta
                  </span>
                </Link>

                <Link
                  href="/admin/guideline"
                  className={`text-white relative group py-3 px-3 delay-75 duration-75 ${
                    activePath[2] === "guideline" ? "bg-opacity-green" : ""
                  } flex justify-center xl:justify-start items-center gap-4 rounded-lg`}
                >
                  <Image src={Guide} alt="guideline" className="w-[14px]" />
                  <span className="text-xs text-white md:hidden xl:block">
                    Panduan Pelatihan
                  </span>
                </Link>
              </nav>
            </div>
            <button className="mt-6 text-white py-3 delay-75 duration-75 hover:bg-opacity-green flex justify-center items-center gap-4 rounded-lg">
              <Image src={Logout} alt="logout icon" className="w-[14px]" />
              <span className="xl:block text-xs md:hidden xl:text-sm">
                Logout
              </span>
            </button>
          </div>

          {/* phone navigate */}
          {showNavigate ? (
            <div
              className={`bg-green p-3 absolute right-0 flex flex-col justify-center sm:justify-between h-screen left-0 top-0 bottom-0 ${
                showNavigate ? "z-50" : ""
              } `}
            >
              <div>
                <figure className="mx-auto flex justify-center">
                  <Image src={Logo} alt="logo" className="w-14 lg:w-16" />
                </figure>

                <nav className="mt-12 flex flex-col gap-6">
                  <Link
                    href="/admin/courses"
                    className={`relative text-white group py-3 px-3 delay-75 duration-75 ${
                      activePath[2] === "courses" ? "bg-opacity-green" : ""
                    } flex justify-center xl:justify-start items-center gap-4 rounded-lg`}
                  >
                    <Image
                      src={Education}
                      alt="education icon"
                      className="w-5"
                    />
                    <span className="text-xs text-white md:hidden xl:block xl:text-sm">
                      Pelatihan
                    </span>
                  </Link>

                  <Link
                    href="/admin/activate-user"
                    className={`text-white py-3 px-3 delay-75 relative group duration-75 ${
                      activePath[2] === "activate-user"
                        ? "bg-opacity-green"
                        : ""
                    } flex justify-center xl:justify-start items-center gap-4 rounded-lg`}
                  >
                    <Image
                      src={User}
                      alt="user white icon"
                      className="w-[14px]"
                    />
                    <span className="text-xs text-white md:hidden xl:block xl:text-sm">
                      Aktivasi Peserta
                    </span>
                  </Link>

                  <Link
                    href="/admin/participant-achievements"
                    className={`text-white relative group py-3 px-3 delay-75 duration-75 ${
                      activePath[2] === "participant-achievements"
                        ? "bg-opacity-green"
                        : ""
                    } flex justify-center xl:justify-start items-center gap-4 rounded-lg`}
                  >
                    <Image
                      src={Achievement}
                      alt="participant achievements icon"
                      className="w-[14px]"
                    />
                    <span className="text-xs text-white md:hidden xl:block xl:text-sm">
                      Pencapaian Peserta
                    </span>
                  </Link>

                  <Link
                    href="/admin/guideline"
                    className={`text-white relative group py-3 px-3 delay-75 duration-75 ${
                      activePath[2] === "guideline" ? "bg-opacity-green" : ""
                    } flex justify-center xl:justify-start items-center gap-4 rounded-lg`}
                  >
                    <Image src={Guide} alt="guideline" className="w-[14px]" />
                    <span className="text-xs text-white md:hidden xl:block xl:text-sm">
                      Panduan Pelatihan
                    </span>
                  </Link>
                </nav>
              </div>

              <button className="mt-6 text-white py-3 delay-75 duration-75 hover:bg-opacity-green flex justify-center items-center gap-4 rounded-lg">
                <Image src={Logout} alt="logout icon" className="w-[14px]" />
                <span className="xl:block text-xs md:hidden xl:text-sm">
                  Logout
                </span>
              </button>
            </div>
          ) : null}

          {showNavigate ? null : (
            <button
              onClick={handleShowNavigate}
              className="block absolute left-4 top-4 md:hidden"
            >
              <Image src={HamburgerMenu} alt="menu" className="w-6" />
            </button>
          )}
        </>
      )}
    </>
  );
};

export default Sidebar;
