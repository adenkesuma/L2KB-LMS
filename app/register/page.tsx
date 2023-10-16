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
    <main className='p-4 mt-4 mb-8'>
      <Link href="/">
        <Image 
          src={Logo}
          alt="logo"
          className='w-20 block mx-auto'
        />
      </Link>
      <h1 className='font-bold text-[38px] text-center mb-12'>Daftar Akun</h1>

      {/* form register */}
      <div className='grid grid-cols-2 gap-10'>

        {/* left form */}
        <div className='flex flex-col gap-6'>
          <div className="flex flex-col gap-2">
            <label className="font-medium text-sm">Pilih Status Kepegawaian</label>
            <select name="status" id="status" className='border rounded-xl p-2 border-opacity-green bg-white'>
              <option value="pns">PNS</option>
              <option value="non pns">Non PNS</option>
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-medium text-sm">Pilih Role Anda</label>
            <select name="status" id="status" className='border rounded-xl p-2 border-opacity-green bg-white'>
              <option value="anggota biasa">Anggota Biasa : Sp KKLP</option>
              <option value="anggota luar biasa">Anggota Luar Biasa {"(Umum)"} : Dokter yang bukan Sp KKLP</option>
              <option value="anggota muda">Anggota Muda : PPDS KKLP</option>
            </select>
          </div>

          <div className='flex flex-col gap-2'>
              <label className='font-medium text-sm'>NIK</label>
              <input type="number" className="border rounded-xl p-2 border-opacity-green" />
          </div>

          <div className='flex flex-col gap-2'>
              <label className='font-medium text-sm flex justify-between items-center'>
                <span>No NPA PDKI</span>
                <span className='italic text-orange-400'>{`"opsional"`}</span>
              </label>
              <input type="number" className="border rounded-xl p-2 border-opacity-green" />
          </div>

          <div className='flex flex-col gap-2'>
              <label className='font-medium text-sm'>Nama Lengkap</label>
              <input type="text" className="border rounded-xl p-2 border-opacity-green" />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-medium text-sm">Pilih Jenis Kelamin Anda</label>
            <select name="status" id="status" className='border rounded-xl p-2 border-opacity-green bg-white'>
              <option value="">- Pilih Jenis Kelamin -</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          <div className='flex flex-col gap-2'>
              <label className='font-medium text-sm'>Tempat lahir</label>
              <input type="text" className="border rounded-xl p-2 border-opacity-green" />
          </div>

          <div className='flex flex-col gap-2'>
              <label className='font-medium text-sm'>Tanggal lahir</label>
              <input type="date" className="border rounded-xl p-2 border-opacity-green" />
          </div>

          <div className='flex flex-col gap-2'>
              <label className='font-medium text-sm'>Pendidikan Terakhir</label>
              <input type="text" className="border rounded-xl p-2 border-opacity-green" />
          </div>
        </div>

        {/* right form */}
        <div className='flex flex-col gap-6'>
          <div className='flex flex-col gap-2'>
              <label className='font-medium text-sm'>Jabatan/Pekerjaan</label>
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
              <label className='font-medium text-sm'>Nomor Telepon</label>
              <input type="number" className="border rounded-xl p-2 border-opacity-green" />
          </div>
          <div className='flex flex-col gap-2'>
              <label className='font-medium text-sm'>Email</label>
              <input type="email" className="border rounded-xl p-2 border-opacity-green" />
              <p className='text-sm text-green italic'>{`"Tautan aktifasi AKUN akan dikirim via email, setelah menekan tombol KIRIM dibawah, cek INBOX/SPAM email BAPAK/IBU, kemudian tekan tautan/link yang diberikan"`}</p>
          </div>
          <div className='flex flex-col gap-2'>
              <label className='font-medium text-sm'>Password</label>
              <input type="password" className="border rounded-xl p-2 border-opacity-green" />
          </div>
          <div className='flex flex-col gap-2'>
              <label className='font-medium text-sm'>Ulangi Password</label>
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