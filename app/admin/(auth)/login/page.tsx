import React from "react";
import Image from "next/image";
import Link from "next/link";

import Logo from "@/public/assets/logo/kolegium.png";
import AdminLoginForm from "./_components/form";

function AdminLoginPage() {
  return (
    <main className="h-screen w-full flex flex-col items-center justify-center">
      <Link href="/">
        <Image src={Logo} alt="logo" className="w-20 block mx-auto" />
      </Link>

      <h1 className="font-bold mt-4 text-[38px] text-center mb-12">Masuk</h1>
      <AdminLoginForm />
    </main>
  );
}

export default AdminLoginPage;
