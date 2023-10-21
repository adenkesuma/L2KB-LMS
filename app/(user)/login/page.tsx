"use client"
import { ChangeEvent, FormEvent, useState } from 'react'
import Image from 'next/image'
import axios from "axios"
import Link from 'next/link'
import Logo from "@/public/assets/logo/kolegium.png"
import Visible from "@/public/assets/icons/visible.svg"
import Invisible from "@/public/assets/icons/invisible.svg"

interface UserLogin {
  email: string
  password: string
}

const Login = () => {
  const [showPassword, setShowPassword] = useState<Boolean>(false)
  const [showSuccessPopup, setShowSuccessPopup] = useState<Boolean>(false)
  const [userLogin, setUserLogin] = useState<UserLogin>({
    email: "",
    password: ""
  })

  // change visibility password
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setUserLogin({ ...userLogin, [name]: value })
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    try {
      const response = await axios.post(`https://api.pdkindonesia.com/p2kb/auth/login`, userLogin, {
        headers: {
          'Content-Type': 'application/json'
        }
      })

      if (response.status === 200) {
        setShowSuccessPopup(true)

        setTimeout(() => {
          setShowSuccessPopup(false)
          window.location.href = "/update_data"
        }, 5000)
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <main className='h-screen w-full flex flex-col items-center justify-center'>
        <Link href="/">
          <Image 
            src={Logo}
            alt="logo"
            className='w-20 block mx-auto'
          />
        </Link>
        <h1 className='font-bold mt-4 text-[38px] text-center mb-12'>Masuk</h1>

        <form onSubmit={handleSubmit} className="mx-auto w-[35%] flex flex-col gap-6">
          <div className='flex flex-col gap-2'>
            <label className='font-medium text-sm'>Email</label>
            <input 
              value={userLogin.email}
              onChange={handleChange}
              name='email'
              type="email" 
              className="border rounded-xl p-2 border-opacity-green" 
              required
            />
          </div>
          <div className='flex flex-col gap-2'>
            <label className='font-medium text-sm'>Password</label>
            <div className="relative w-full">
              <input 
                value={userLogin.password}
                onChange={handleChange}
                name='password'
                type={showPassword ? 'text' : 'password'} 
                className="border bg-white w-full rounded-xl p-2 border-opacity-green" 
                required
              />
              <button onClick={togglePasswordVisibility}>
                <Image 
                  src={showPassword ? Visible : Invisible}
                  alt={showPassword ? "visible icon" : "invisible icon"}
                  className="w-4 absolute top-[14px] right-3 duration-75 delay-75"
                />
              </button>
            </div>

            <div className='flex justify-end'>
              <Link href="/forgot-password" className='text-sm font-semibold text-green mt-2'>Lupa Password ?</Link>
            </div>
          </div>

          <button type="submit" className="mt-12 mx-auto text-center w-[240px] text-white font-medium p-2 rounded-xl bg-green">
            Masuk
          </button>
        </form>


        <p className='text-sm mt-6'>
          Belum Memiliki Akun ? <Link href="/register" className='text-green font-semibold'> Daftar Sekarang</Link>
        </p>
      </main>

      {showSuccessPopup ? (
        <div className='z-30 bg-red-600 w-96 rounded-xl p-12'>
          <p className='text-white'>Selamat anda berhasil mendaftar</p> 
        </div>
      ) : (
        <span className='hidden' />
      )}
    </>
  )
}

export default Login