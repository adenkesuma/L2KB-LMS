"use client"
import { useState, useEffect, ChangeEvent } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '@/public/assets/logo/kolegium.png';
import axios from 'axios';

const Verification = () => {
    const [email, setEmail] = useState<string>('');
    const [verificationCode, setVerificationCode] = useState<string>('');
    const [isVerified, setIsVerified] = useState<boolean>(false);

    const verifyEmail = async () => {
      try {
        const response = await axios.post('https://api.pdkindonesia.com/p2kb/auth/verify-email', {
          email,
          verification_code: verificationCode,
        });

        if (response.status === 200) {
          setIsVerified(true);

          window.location.href = '/login';
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
    <main className='h-screen w-full flex flex-col items-center justify-center'>
      <Link href='/'>
        <Image src={Logo} alt='logo' className='w-20 block mx-auto' />
      </Link>
      <h1 className='font-bold mt-4 text-[38px] text-center mb-12'>
        {isVerified ? 'Email Anda Telah Diverifikasi' : 'Verifikasi Akun Kamu'}
      </h1>

      <div className='mx-auto flex flex-col gap-6'>
        {isVerified ? (
          <p>Anda dapat masuk ke akun Anda sekarang.</p>
        ) : (
          <div className="flex w-[400px] flex-col gap-6 items-center">
            <div className='flex flex-col gap-2'>
              <label className='font-medium text-sm'>Email</label>
              <input
                type='email'
                value={email}
                onChange={handleEmailChange}
                className='border rounded-xl p-2 border-opacity-green'
              />
            </div>
            <div className='flex flex-col gap-2'>
              <label className='font-medium text-sm'>Kode Verifikasi</label>
              <input
                type='text'
                value={verificationCode}
                onChange={handleVerificationCodeChange}
                className='border rounded-xl p-2 border-opacity-green'
              />
              <div className='flex justify-end'>
                <Link href='/forgot-password' className='text-sm font-semibold text-green mt-2'>
                  Lupa Password ?
                </Link>
              </div>
            </div>
            <button
              onClick={verifyEmail}
              className='mt-12 text-center w-[240px] text-white font-medium p-2 rounded-xl bg-green'
            >
              Verifikasi
            </button>
          </div>
        )}
      </div>
    </main>
  );
};

export default Verification;
