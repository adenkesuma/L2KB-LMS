"use client"
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '@/public/assets/logo/kolegium.png'

interface User {
  npa_pdki: number;
  email: string;
  pangkat: string;
  nama: string;
  nama_lengkap_gelar: string;
  tempat_lahir: string;
  tanggal_lahir: string;
  jenis_kelamin: string;
  agama: string;
  nomor_hp: string;
  pendidikan: string;
  jurusan: string;
  instansi: string;
  alamat_instansi: string;
  no_telp_instansi: string;
  profile_picture: string;
  no_ktp: number;
  password: string;
}

const UpdateData = () => {
  return (
    <main className='p-4 mt-4 mb-8 min-h-screen'>
      <Link href="/">
        <Image 
          src={Logo}
          alt="logo"
          className='w-20 block mx-auto'
        />
      </Link>
      <h1 className='mt-4 font-bold text-[38px] text-center mb-12'>Update Profil</h1>

      {/* form register */}
      <div className='grid grid-cols-2 gap-10'>

        {/* left form */}
        <div className='flex flex-col gap-6'>
          <div className="flex flex-col gap-2">
            <label className="font-medium text-sm flex justify-between items-center">
              <span>NPA PDKI</span>
              <span className='text-xs italic text-orange-500'>{`"opsional"`}</span>
            </label>
            <input type="number" className="border rounded-xl p-2 border-opacity-green" />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-medium text-sm">Nomor KTP</label>
            <input type="number" className="border rounded-xl p-2 border-opacity-green" />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-medium text-sm">Nama Lengkap</label>
            <input type="text" className="border rounded-xl p-2 border-opacity-green" />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-medium text-sm">Nama Lengkap Beserta Gelar</label>
            <input type="text" className="border rounded-xl p-2 border-opacity-green" />
          </div>

          <div className='flex flex-col gap-2'>
              <label className='font-medium text-sm'>Tempat lahir</label>
              <input type="text" className="border rounded-xl p-2 border-opacity-green" />
          </div>

          <div className='flex flex-col gap-2'>
              <label className='font-medium text-sm'>Tanggal lahir</label>
              <input type="date" className="border rounded-xl p-2 border-opacity-green" />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-medium text-sm">Pilih Jenis Kelamin Anda</label>
            <select name="status" id="status" className='border rounded-xl p-2 border-opacity-green bg-white'>
              <option value="">- Pilih jenis kelamin -</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className='flex flex-col gap-2'>
              <label className='font-medium text-sm'>Agama</label>
              <input type="text" className="border rounded-xl p-2 border-opacity-green" />
          </div>

          <div className='flex flex-col gap-2'>
              <label className='font-medium text-sm'>Nomor Telepon</label>
              <input type="number" className="border rounded-xl p-2 border-opacity-green" />
          </div>

        </div>

        {/* right form */}
        <div className='flex flex-col gap-6'>
          <div className="flex flex-col gap-2">
            <label className="font-medium text-sm">Pendidikan terakhir</label>
            <select name="status" id="status" className='border rounded-xl p-2 border-opacity-green bg-white'>
              <option value="">- Pilih Tingkat -</option>
              <option value="sd">SD {"( Sekolah Dasar )"}</option>
              <option value="sd">SMP {"( Sekolah Menengah Pertama )"}</option>
              <option value="sd">SMA {"( Sekolah Menengah Atas )"}</option>
              <option value="sd">S1 {"( Sarjana Strata 1 )"}</option>
              <option value="sd">S2 {"( Sarjana Strata 2 )"}</option>
              <option value="sd">S3 {"( Sarjana Strata 3 )"}</option>
            </select>
          </div>

          <div className='flex flex-col gap-2'>
              <label className='font-medium text-sm'>Jurusan</label>
              <input type="text" className="border rounded-xl p-2 border-opacity-green" />
          </div>

          <div className='flex flex-col gap-2'>
              <label className='font-medium text-sm flex justify-between items-center'>
                <span>Pas Foto {"( Latar belakang merah)"}</span>
                <span className='italic text-orange-500 text-xs'>{`"Kapasitas Maksimal 500kb"`}</span>
              </label>
              <input type="file" className="border rounded-xl p-2 border-opacity-green" />
          </div>
          <div className='flex flex-col gap-2'>
              <label className='font-medium text-sm flex justify-between items-center'>
                <span>Jabatan Pekerjaan</span>
                <span className="text-xs text-orange-500 italic">{`"opsional"`}</span> 
              </label>
              <input type="text" className="border rounded-xl p-2 border-opacity-green" />
          </div>         

          <div className="flex flex-col gap-2">
            <label className="font-medium text-sm flex justify-between items-center">
              <span>Pangkat / Golongan</span>
              <span className="text-xs text-orange-500 italic">{`"opsional"`}</span>
            </label>
            <input type="text" className="border rounded-xl p-2 border-opacity-green" />
          </div>

          <div className='flex flex-col gap-2'>
              <label className='font-medium text-sm'>Instansi</label>
              <input type="text" className="border rounded-xl p-2 border-opacity-green" />
          </div>

          <div className='flex flex-col gap-2'>
              <label className='font-medium text-sm'>Alamat Instansi</label>
              <input type="text" className="border rounded-xl p-2 border-opacity-green" />
          </div>

          <div className='flex flex-col gap-2'>
              <label className='font-medium text-sm flex justify-between items-center'>
                <span>No Telepon Instansi</span>
                <span className='text-xs italic text-orange-500'>{`"opsional"`}</span>
              </label>
              <input type="number" className="border rounded-xl p-2 border-opacity-green" />
          </div>
          <div className='flex flex-col gap-2'>
              <label className='font-medium text-sm'>Alamat Domisili</label>
              <input type="text" className="border rounded-xl p-2 border-opacity-green" />
          </div>

          {/* button daftar */}
          <div className='flex flex-col gap-2 mt-4'>
            <button type='submit' className="text-center w-[240px] text-white font-medium mt-2 p-2 rounded-xl bg-green">
              Kirim
            </button>
          </div>
        </div>

      </div>
    </main>
  )
}

export default UpdateData