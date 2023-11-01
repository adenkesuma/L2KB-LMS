"use client";

import { FC, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";

import Logo from "@/public/assets/logo/pdki.svg";
import Notification from "@/public/assets/icons/notification.svg";
import Profile from "@/public/assets/user.png";
import Close from "@/public/assets/icons/close.svg";
import Logout from "@/public/assets/icons/green-logout.svg";
import HamburgerMenu from "@/public/assets/icons/menu.svg";

import { useParams, usePathname, useRouter } from "next/navigation";
import useStore from "../store/use-store";
import { userAuthStore } from "../store/user-auth.store";
import { deleteCookie } from "../lib/services/cookie.service";
import { UserData } from "@/app/(user)/(app)/profile/page";

const Navbar: FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const [showNavigate, setShowNavigate] = useState<Boolean>(false);
  const [userData, setUserData] = useState<UserData>();

  const userAuth = useStore(userAuthStore, (state) => state);

  const hiddenPath =
    pathname === "/register" ||
    pathname === "/verification" ||
    pathname === "/login" ||
    pathname === "/update_data" ||
    pathname === "/forgot-password" ||
    pathname === "/admin";
  const adminHiddenPath =
    pathname === "/admin/profile" ||
    pathname === "/admin/courses" ||
    pathname === "/admin/courses/new-course" ||
    pathname === "/admin/participant" ||
    pathname === `/admin/participant/${params.user}` ||
    pathname === `/admin/courses/edit/${params.course}` ||
    pathname === "/admin/participant-achievements" ||
    pathname === `/admin/participant-achievements/${params.detail}` ||
    pathname === "/admin/guideline" ||
    pathname === "/admin/guideline/new-guideline";

  const handleShowNavigate = () => {
    setShowNavigate(!showNavigate);
  };

  const onLogout = async () => {
    await deleteCookie("accessKey", "/");
    userAuth?.clearTokens();
    router.refresh();
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_P2KB_API}/profile`,
          {
            headers: {
              Authorization: `Bearer ${userAuth?.accessToken}`,
            },
          }
        );

        if (response.status === 200) {
          setUserData(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    if (userAuth?.accessToken !== undefined) {
      fetchUserData();
    }
  }, [userAuth?.accessToken]);

  console.log(userData)

  return (
    <>
      {hiddenPath || adminHiddenPath ? (
        <span />
      ) : (
        <div className="flex justify-between items-center py-2 lg:p-4 container px-4 sm:px-0 lg:px-14 mx-auto">
          <Link href="/">
            <Image src={Logo} alt="Logo" className="sm:w-16 lg:w-18 w-12" />
          </Link>

          {/* ipad, desktop view  navigate */}
          <div className="hidden lg:flex justify-center items-center gap-4 lg:gap-8">
            <ul className="flex justify-center items-center gap-10">
              <li>
                <a
                  href="/guideline"
                  className={`${
                    pathname === "/guideline"
                      ? "border-b text-green border-green"
                      : ""
                  } hover:text-green hover:border-b hover:border-green text-sm delay-75 font-medium text-gray-800`}
                >
                  Panduan
                </a>
              </li>
              <li>
                <a
                  href="/courses"
                  className={`${
                    pathname === "/courses"
                      ? "text-green border-b border-green"
                      : ""
                  } hover:text-green hover:border-b hover:border-green text-sm delay-75 font-medium text-gray-800`}
                >
                  Pelatihan
                </a>
              </li>
            </ul>

            {/* border */}
            <div className="border-l border-gray-400 h-[35px]" />

            {/* button signin and signup */}
            <div>
              {userAuth?.accessToken ? (
                <div className="flex justify-center gap-6 items-center">
                  <Link href="/profile" className="flex items-center gap-4">
                    <span className="font-medium text-sm text-gray-800">
                      {userData?.nama}
                    </span>
                    <div className="group relative flex items-center justify-center">
                      <Image
                        src={`${process.env.NEXT_PUBLIC_P2KB_API}/img/profile_picture/${userData?.id}.webp`}
                        alt="profile user"
                        className="h-10 w-10 rounded-[50%] p-1 bg-cover object-cover border border-gray-300"
                        width={1000}
                        height={100}
                      />
                      <span className="opacity-0 absolute bg-white border border-slate-200 delay-100 text-slate-500 text-xs rounded-md mt-[84px] mr-14 p-1 whitespace-nowrap group-hover:opacity-100 group-hover:py-1 group-hover:px-3">
                        Profil
                      </span>
                    </div>
                  </Link>

                  <Link
                    href="/notification"
                    className="group py-[7px] px-2 border border-gray-300 flex items-center justify-center relative rounded-[50%]"
                  >
                    <Image src={Notification} alt="bell icon" className="w-5" />
                    <span className="opacity-0 absolute bg-white border border-slate-200 delay-100 text-slate-500 text-xs rounded-md mt-20 mr-8 p-1 whitespace-nowrap group-hover:opacity-100 group-hover:py-1 group-hover:px-3">
                      Notifikasi
                    </span>
                  </Link>

                  <button
                    className="gap-4 group relative flex justify-center items-center"
                    onClick={onLogout}
                  >
                    <div className="p-2 border border-gray-300 rounded-[50%]">
                      <Image src={Logout} alt="logout icon" className="w-5" />
                    </div>
                    <span className="opacity-0 absolute bg-white border border-slate-100 delay-100 text-slate-500 font-medium text-xs rounded-md mt-20 mr-2 p-1 whitespace-nowrap group-hover:opacity-100 group-hover:py-1 group-hover:px-3">
                      Keluar
                    </span>
                  </button>
                </div>
              ) : (
                <div className="flex justify-center gap-4 items-center">
                  <Link
                    href="/register"
                    className="bg-white hover:bg-green hover:text-white delay-75 px-6 py-[4px] border-2 border-green duration-75 text-green md:py-[8px] md:px-8 rounded-xl font-medium text-xs md:text-sm"
                  >
                    Daftar
                  </Link>
                  <Link
                    href="/login"
                    className="bg-green delay-75 px-6 py-[5px] duration-75 text-white md:py-[10px] hover:bg-lime-950 md:px-8 rounded-xl font-medium text-xs md:text-sm"
                  >
                    Masuk
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* hamburger menu */}
          <button onClick={handleShowNavigate} className="block lg:hidden">
            <Image src={HamburgerMenu} alt="menu" className="w-6" />
          </button>

          {/* phone navigate */}
          {showNavigate && (
            <div className="bg-green w-full h-screen fixed z-50 top-0 left-0 right-0 bottom-0">
              <button
                onClick={handleShowNavigate}
                className="absolute top-4 right-4"
              >
                <Image src={Close} alt="close icon" className="w-6" />
              </button>
              <div className="flex flex-col items-end p-8 gap-8 mt-44">
                <ul className="flex justify-center flex-col items-center gap-4">
                  <li>
                    <a
                      href="/guideline"
                      className={`${
                        pathname === "/guideline"
                          ? "border-b text-white border-white"
                          : ""
                      } hover:border-b text-sm hover:border-white delay-75 font-medium text-white`}
                    >
                      Panduan
                    </a>
                  </li>
                  <li>
                    <a
                      href="/courses"
                      className={`${
                        pathname === "/courses"
                          ? "text-white border-b border-white"
                          : ""
                      } hover:border-b text-sm hover:border-white delay-75 font-medium text-white`}
                    >
                      Pelatihan
                    </a>
                  </li>
                </ul>
                {/* border */}
                <div className="border-b border-white w-full" />
                {/* button signin and signup */}
                <div>
                  {userAuth?.accessToken ? (
                    <div className="flex flex-col gap-6 items-end">
                      <Link
                        href="/notification"
                        className="flex items-center gap-4"
                      >
                        <span className="text-white font-medium text-base">
                          Notifikasi
                        </span>
                        <div className="bg-slate-100 rounded-[50%] p-2">
                          <Image
                            src={Notification}
                            alt="bell icon"
                            // width={28}
                            className="w-6 sm:w-8"
                          />
                        </div>
                      </Link>
                      <Link href="/profile" className="flex items-center gap-4">
                        <span className="font-medium text-base text-white">
                          Park ji sung
                        </span>
                        <Image
                          src={Profile}
                          alt="profile user"
                          className="h-10 sm:h-14 w-10 sm:w-14 rounded-[50%] p-1 border border-slate-100"
                        />
                      </Link>
                      <button
                        className="flex items-center gap-4"
                        onClick={onLogout}
                      >
                        <span className="font-medium text-base text-white">
                          Keluar
                        </span>
                        <div className="bg-slate-100 p-2 rounded-[50%]">
                          <Image
                            src={Logout}
                            alt="logout icon"
                            className="w-6"
                          />
                        </div>
                      </button>
                    </div>
                  ) : (
                    <div className="flex flex-col justify-center gap-6 items-center">
                      <Link
                        href="/register"
                        className="bg-white px-8 py-3 duration-75 text-green font-semibold md:py-[10px] md:px-8 rounded-xl text-sm"
                      >
                        Daftar
                      </Link>
                      <Link
                        href="/login"
                        className="bg-green px-7 py-3 duration-75 text-white border border-white rounded-xl font-semibold text-sm"
                      >
                        Masuk
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Navbar;
