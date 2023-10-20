import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '@/public/assets/logo/kolegium.png'

export const metadata: Metadata = {
  title: "Daftar",
  description: "Daftar akun pelatihan",
}

const Register = () => {
  

  return (
    <main className='p-4 mt-4 mb-8 min-h-screen'>
      <Link href="/">
        <Image 
          src={Logo}
          alt="logo"
          className='w-20 block mx-auto'
        />
      </Link>
      <h1 className='font-bold text-[38px] mt-4 text-center mb-12'>Daftar Akun</h1>

      {/* form register */}
      <div className='grid grid-cols-2 gap-10'>

        {/* left form */}
        <div className='flex flex-col gap-6'>
          <div className="flex flex-col gap-2">
            <label className="font-medium text-sm">
              <span>Pilih Status Kepegawaian</span>
              <span className='text-red-600'>*</span> 
            </label>
            <select name="status" id="status" className='border rounded-xl p-2 border-opacity-green bg-white'>
              <option value="pns">PNS</option>
              <option value="non pns">Non PNS</option>
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-medium text-sm">
              <span>Pilih Role Anda</span>
              <span className='text-red-600'>*</span>
            </label>
            <select name="status" id="status" className='border rounded-xl p-2 border-opacity-green bg-white'>
              <option value="anggota biasa">Anggota Biasa : Sp KKLP</option>
              <option value="anggota luar biasa">Anggota Luar Biasa {"(Umum)"} : Dokter yang bukan Sp KKLP</option>
              <option value="anggota muda">Anggota Muda : PPDS KKLP</option>
            </select>
          </div>

          <div className='flex flex-col gap-2'>
              <label className='font-medium text-sm'>
                <span>NIK</span>
                <span className='text-red-600'>*</span>   
              </label>
              <input type="number" className="border rounded-xl p-2 border-opacity-green" />
          </div>

          <div className='flex flex-col gap-2'>
              <label className='font-medium text-sm flex justify-between items-center'>
                <span>No NPA PDKI</span>
                <span className='italic text-xs text-orange-500'>{`"opsional"`}</span>
              </label>
              <input type="number" className="border rounded-xl p-2 border-opacity-green" />
          </div>

          <div className='flex flex-col gap-2'>
              <label className='font-medium text-sm'>
                <span>Nama Lengkap</span>
                <span className='text-red-600'>*</span>
              </label>
              <input type="text" className="border rounded-xl p-2 border-opacity-green" />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-medium text-sm">
              <span>Pilih Jenis Kelamin Anda</span>
              <span className='text-red-600'>*</span>
            </label>
            <select name="status" id="status" className='border rounded-xl p-2 border-opacity-green bg-white'>
              <option value="">- Pilih Jenis Kelamin -</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          <div className='flex flex-col gap-2'>
              <label className='font-medium text-sm'>
                <span>Tempat lahir</span>
                <span className='text-red-600'>*</span> 
              </label>
              <input type="text" className="border rounded-xl p-2 border-opacity-green" />
          </div>

          <div className='flex flex-col gap-2'>
              <label className='font-medium text-sm'>
                <span>Tanggal lahir</span>
                <span className="text-red-600">*</span>
              </label>
              <input type="date" className="border rounded-xl p-2 border-opacity-green" />
          </div>

          <div className='flex flex-col gap-2'>
              <label className='font-medium text-sm'>
                <span>Pendidikan Terakhir</span>
                <span className="text-red-600">*</span>
              </label>
              <input type="text" className="border rounded-xl p-2 border-opacity-green" />
          </div>
        </div>

        {/* right form */}
        <div className='flex flex-col gap-6'>
          <div className='flex flex-col gap-2'>
              <label className='font-medium text-sm'>
                <span>Jabatan/Pekerjaan</span>
                <span className="text-red-600">*</span>
              </label>
              <input type="text" className="border rounded-xl p-2 border-opacity-green" />
          </div>
          <div className='flex flex-col gap-2'>
              <label className='font-medium text-sm'>
                <span>Instansi</span>
                <span className="text-red-600">*</span>
              </label>
              <input type="text" className="border rounded-xl p-2 border-opacity-green" />
          </div>         
          <div className='flex flex-col gap-2'>
              <label className='font-medium text-sm'>
                <span>Alamat Instansi</span>
                <span className="text-red-600">*</span>
              </label>
              <input type="text" className="border rounded-xl p-2 border-opacity-green" />
          </div>
          <div className='flex flex-col gap-2'>
              <label className='font-medium text-sm'>
                <span>Nomor Telepon</span>
                <span className="text-red-600">*</span>   
              </label>
              <input type="number" className="border rounded-xl p-2 border-opacity-green" />
          </div>
          <div className='flex flex-col gap-2'>
              <label className='font-medium text-sm'>
                <span>Email</span>
                <span className="text-red-600">*</span>
              </label>
              <input type="email" className="border rounded-xl p-2 border-opacity-green" />
              <p className='text-sm text-green italic'>{`"Tautan aktifasi AKUN akan dikirim via email, setelah menekan tombol KIRIM dibawah, cek INBOX/SPAM email BAPAK/IBU, kemudian tekan tautan/link yang diberikan"`}</p>
          </div>
          <div className='flex flex-col gap-2'>
              <label className='font-medium text-sm'>
                <span>Password</span>
                <span className="text-red-600">*</span>
              </label>
              <input type="password" className="border rounded-xl p-2 border-opacity-green" />
          </div>
          <div className='flex flex-col gap-2'>
              <label className='font-medium text-sm'>
                <span>Ulangi Password</span>
                <span className="text-red-600">*</span>
              </label>
              <input type="password" className="border rounded-xl p-2 border-opacity-green" />
          </div>

          {/* button daftar */}
          <Link href="/login" className="text-center w-[240px] text-white font-medium mt-2 p-2 rounded-xl bg-green">
            Daftar
          </Link>
          <p className='text-sm'>
            Sudah Memiliki Akun ? <Link href="/login" className='text-green font-semibold'> Masuk</Link>
          </p>
        </div>

      </div>
    </main>
  )
}

export default Register