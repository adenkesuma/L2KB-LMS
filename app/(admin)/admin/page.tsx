"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import Logo from "@/public/assets/logo/kolegium.png"

import Visible from "@/public/assets/icons/visible.svg"
import Invisible from "@/public/assets/icons/invisible.svg"

const Admin = () => {
  const [showPassword, setShowPassword] = useState<Boolean>(false)

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  return (
    <main className='h-screen w-full flex flex-col items-center justify-center'>
      <Link href="/">
        <Image 
          src={Logo}
          alt="logo"
          className='w-20 block mx-auto'
        />
      </Link>
      <h1 className='font-bold mt-4 text-[38px] text-center mb-12'>Masuk</h1>

      <div className="mx-auto w-[80%] md:w-[45%] lg:w-[35%] flex flex-col gap-6">
        <div className='flex flex-col gap-2'>
          <label className='font-medium text-sm'>Email</label>
          <input 
            type="email" 
            className="border rounded-xl p-2 border-gray-300 outline-none"
            required
          />
        </div>

        <div className="flex flex-col gap-2 relative w-full">
          <input
            name="password"
            type={showPassword ? "text" : "password"}
            className="border bg-white w-full rounded-xl p-2 border-gray-300"
            required
          />
          <button onClick={togglePasswordVisibility}>
            <Image
              src={showPassword ? Visible : Invisible}
              alt={showPassword ? "visible icon" : "invisible icon"}
              className="w-4 absolute top-[14px] right-3 duration-75 delay-75"
            />
          </button>
          <div className='flex justify-end'>
            <Link href="/forgot-password" className='text-sm font-semibold text-green mt-2'>Lupa Password ?</Link>
          </div>
        </div>
      </div>

      <Link href="/update_data" className="mt-12 text-center w-56 text-white font-medium p-2 rounded-xl bg-green">
        Masuk
      </Link>
    </main>
  )
}

export default Admin