import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Logo from "@/public/assets/logo/kolegium.png"

const Login = () => {
  return (
    <main className='h-[100vh] w-full flex flex-col items-center justify-center'>
      <Link href="/">
        <Image 
          src={Logo}
          alt="logo"
          className='w-20 block mx-auto'
        />
      </Link>
      <h1 className='font-bold mt-4 text-[50px] text-center mb-12'>Masuk</h1>

      <div className="mx-auto w-[35%] flex flex-col gap-6">
        <div className='flex flex-col gap-2'>
          <label className='font-medium text-sm'>Email</label>
          <input type="email" className="border rounded-xl p-2 border-opacity-green" />
        </div>
        <div className='flex flex-col gap-2'>
          <label className='font-medium text-sm'>Password</label>
          <input type="password" className="border rounded-xl p-2 border-opacity-green" />

          <div className='flex justify-end'>
            <Link href="/forgot-password" className='text-sm font-semibold text-green mt-2'>Lupa Password ?</Link>
          </div>
        </div>
      </div>

      <Link href="/update_data" className="mt-12 text-center w-[300px] text-white font-medium p-2 rounded-xl bg-green">
        Masuk
      </Link>

      <p className='text-sm mt-6'>
        Belum Memiliki Akun ? <Link href="/register" className='text-green font-semibold'> Daftar Sekarang</Link>
      </p>
    </main>
  )
}

export default Login