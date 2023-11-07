"use client"

import { ChangeEvent, FC, FormEvent, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/assets/logo/logo.png"
import { toast } from "sonner";

const VerifyPassword: FC = () => {
    const [email, setEmail] = useState<string>('');
    const [verificationCode, setVerificationCode] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handleCodeChange = (e: ChangeEvent<HTMLInputElement>) => {
        setVerificationCode(e.target.value);
    };

    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        const response = await fetch(`${process.env.NEXT_PUBLIC_P2KB_API}/auth/reset-password/verify`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                verification_code: verificationCode, password
            })
        })

        if (response.status === 200) {
            toast('Kata sandi anda berhasil terubah')
            window.location.href = "/login";
        } else {
            toast('Terjadi kesalahan. Mohon periksa kembali data yang anda masukan')
        }
    }

    return (
        <main className="h-screen w-full flex flex-col items-center justify-center">
            <Link href="/">
              <Image src={Logo} alt="logo" className="w-16 sm:w-28 block mx-auto" />
            </Link>
            <h1 className="font-bold mt-2 sm:mt-6 text-xl sm:text-4xl text-center mb-6 sm:mb-12">
                Masukan Email
            </h1>

            <form
              onSubmit={handleSubmit}
              className="mx-auto lg:w-[35%] flex flex-col gap-6"
            >
              <div className="flex flex-col gap-2">
                <label className="font-medium text-xs sm:text-sm">Email</label>
                <input
                  value={email}
                  onChange={handleEmailChange}
                  name="email"
                  type="email"
                  className="border rounded-xl bg-white p-2 border-gray-300 outline-none"
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-medium text-xs sm:text-sm">Kode Verifikasi</label>
                <input
                  value={verificationCode}
                  onChange={handleCodeChange}
                  name="code verification"
                  type="text"
                  className="border rounded-xl bg-white p-2 border-gray-300 outline-none"
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-medium text-xs sm:text-sm">Password</label>
                <input
                  value={password}
                  onChange={handlePasswordChange}
                  name="password"
                  type="password"
                  className="border rounded-xl bg-white p-2 border-gray-300 outline-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="mt-4 mx-auto sm:mt-6 text-sm sm:text-base text-center w-[240px] text-white font-medium p-2 rounded-xl bg-green"
              >
                Masuk
              </button>
            </form>

            <p className="text-xs sm:text-sm text-center italic text-green mt-12">
                Masukan Email untuk mendapatkan kode verifikasi
            </p>
        </main>
    )
}

export default VerifyPassword