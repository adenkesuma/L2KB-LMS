"use client";

import { useState, useEffect, ChangeEvent } from "react";
import Image from "next/image";
import Link from "next/link";

import Logo from "@/public/assets/logo/logo.png";
import axios from "axios";
import { toast } from "sonner";

const Verification = () => {
  const [email, setEmail] = useState<string>("");
  const [verificationCode, setVerificationCode] = useState<string>("");
  const [isVerified, setIsVerified] = useState<boolean>(false);

  const verifyEmail = async () => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_P2KB_API}/auth/verify-email`,
        {
          email,
          verification_code: verificationCode,
        }
      );

      if (response.status === 200) {
        setIsVerified(true);
        toast.success("Berhasil Verifikasi Email")
        window.location.href = "/login";
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (email && verificationCode) {
      verifyEmail();
    }
  }, [email, verificationCode]);

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleVerificationCodeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setVerificationCode(e.target.value);
  };

  return (
    <main className="h-screen w-full flex flex-col items-center justify-center">
      <Link href="/">
        <Image src={Logo} alt="logo" className="w-16 sm:w-28 block mx-auto" />
      </Link>
      <h1 className="font-bold mt-2 sm:mt-6 text-xl sm:text-[38px] text-center mb-6 sm:mb-12">
        {isVerified ? "Email Anda Telah Diverifikasi" : "Verifikasi Akun Kamu"}
      </h1>

      {isVerified ? (
        <div className="border border-gray-200 rounded-xl p-8">
          <p className="text-green text-xl text-center">Anda dapat masuk ke akun Anda sekarang.</p>
        </div>
      ) : (
        <div className="mx-auto sm:w-[35%] flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label className="font-medium text-xs sm:text-sm">Email</label>
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              className="border rounded-xl p-2 border-gray-300"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-medium text-xs sm:text-sm">Kode Verifikasi</label>
            <input
              type="text"
              value={verificationCode}
              onChange={handleVerificationCodeChange}
              className="border rounded-xl p-2 border-gray-300"
              required
            />
            <div className="flex justify-end">
              <Link
                href="/forgot-password"
                className="text-xs sm:text-sm font-semibold text-green mt-2"
              >
                Lupa Password ?
              </Link>
            </div>
          </div>
          <button
            onClick={verifyEmail}
            className="mt-4 sm:mt-12 text-center text-sm mx-auto sm:text-base w-[240px] text-white font-medium p-2 rounded-xl bg-green"
          >
            Verifikasi
          </button>
        </div>
      )}
    </main>
  );
};

export default Verification;
