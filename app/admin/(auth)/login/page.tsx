import React from "react";
import Image from "next/image";
import Link from "next/link";

import Logo from "@/public/assets/logo/kolegium.png";

function AdminLoginPage() {
  return (
    <main className="h-screen w-full flex flex-col items-center justify-center">
      <Link href="/">
        <Image src={Logo} alt="logo" className="w-20 block mx-auto" />
      </Link>

      <h1 className="font-bold mt-4 text-[38px] text-center mb-12">Masuk</h1>
      <div className="mx-auto w-[35%] flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <label className="font-medium text-sm">Email</label>
          <input
            type="email"
            className="border rounded-xl p-2 border-gray-300"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-medium text-sm">Password</label>
          <input
            type="password"
            className="border rounded-xl p-2 border-gray-300"
          />
        </div>
      </div>

      <button className="mt-12 text-center w-[240px] text-white font-medium p-2 rounded-xl bg-green">
        Masuk
      </button>
    </main>
  );
}

export default AdminLoginPage;
