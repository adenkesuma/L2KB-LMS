"use client";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import Logo from "@/public/assets/logo/kolegium.png";

import { usePathname } from "next/navigation";

const Footer: FC = () => {
  const pathname = usePathname();
  const params = useParams();

  const hiddenPath =
    pathname === "/register" ||
    pathname === "/verification" ||
    pathname === "/login" ||
    pathname === "/update_data" ||
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

  return (
    <>
      {hiddenPath || adminHiddenPath ? (
        <span />
      ) : (
        <footer className="w-full p-8 bg-green mt-12">
          <p className="text-white text-xs sm:text-sm text-center">
            © Copyright Perhimpunan Dokter Keluarga Indonesia
          </p>
        </footer>
      )}
    </>
  );
};

export default Footer;
