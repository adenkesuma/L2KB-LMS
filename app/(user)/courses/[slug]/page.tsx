import Image from 'next/image'
import { FC } from 'react'

import DummyImage from '@/public/assets/dummy.png'
import Link from 'next/link'

const PelatihanDetail: FC = () => {
  return (
    <main className='pt-4 sm:pt-12 min-h-screen'>
      <h1 className='font-bold text-xl sm:text-[38px]'>
        Pelatihan skrining bayi baru lahir, bagi Dokter dan Bidan
      </h1>
      <div className='flex items-center justify-start mt-4 sm:mt-10'>
        <p className='font-regular text-xs sm:text-sm text-gray-600 pr-6 border-r border-gray-400'>Kondisi: <span className='font-semibold text-green'>Pendaftaran Aktif</span></p>
        <p className='font-regular text-xs sm:text-sm text-gray-600 pl-6'>Kuota Peserta: <span className='font-semibold text-green'>40</span></p>
      </div>

      <div className='flex flex-col sm:flex-row gap-4 sm:gap-8 mt-4'>
        <figure className='block w-full sm:w-[68%]'>
          <Image 
            src={DummyImage}
            alt="banner image detail"
            className='rounded-xl sm:rounded-3xl h-full bg-cover bg-center w-full'
          />
        </figure>

        <div className='p-3 sm:p-6 w-full sm:w-[32%] bg-white rounded-xl sm:rounded-3xl flex justify-between flex-col'>
          <div>
            <h2 className='font-semibold text-base sm:text-[24px] text-gray-800'>Tentang pelatihan ini</h2>

            <ul className='flex flex-col justify-start mt-4 sm:mt-6 gap-2'>
              <li className='font-reguler te text-xs sm:text-sm text-gray-600'>
                Tahun Pelaksanaan: <span className='font-semibold text-green'>2023</span>
              </li>
              <li className='font-reguler text-xs sm:text-sm text-gray-600'>
                Institusi Penyelenggara: <span className='font-semibold text-green'>Perhimpunan Dokter Keluarga Indonesia</span>
              </li>
              <li className='font-reguler text-xs sm:text-sm text-gray-600'>
                Gelombang / Batch: <span className='font-semibold text-green'>Gel. 5</span>
              </li>
              <li className='font-reguler text-xs sm:text-sm text-gray-600'>
                Periode Pendaftaran: <span className='font-semibold text-green'>21 Mei 2023 s/d 03 Juli 2023</span>
              </li>
              <li className='font-reguler text-xs sm:text-sm text-gray-600'>
                Periode Pelatihan: <span className='font-semibold text-green'>07 Agustus 2023 s/d 16 Agustus 2023</span>
              </li>
              <li className='font-reguler text-xs sm:text-sm text-gray-600'>
                Tempat Penyelenggaraan: <span className='font-semibold text-green'>Jln Petisah Medan</span>
              </li>
              <li className='font-reguler text-xs sm:text-sm text-gray-600'>
                Biaya Pelatihan: <span className='font-semibold text-green'>Rp 2.150.000</span>
              </li>
            </ul>
          </div>

          <Link href="/courses/register" className="mt-6 text-center text-white text-sm font-medium w-full p-2 rounded-xl bg-green">
            Daftar Sekarang
          </Link>
        </div>
      </div>

      {/* Deskripsi */}
      <div className="mt-6 sm:mt-10 w-full sm:w-[68%]">
        <h2 className="font-semibold text-gray-800 text-base sm:text-[24px]">Deskripsi</h2>
        <p className="mt-1 sm:mt-4 text-xs sm:text-sm text-gray-600">
          Skrining atau uji saring pada bayi baru lahir Neonatal Screening adalah istilah yang sering kita dengar
        </p>
      </div>

      {/* Target peserta */}
      <div className="mt-6 sm:mt-10 w-full sm:w-[68%]">
        <h2 className="font-semibold text-gray-800 text-base sm:text-[24px]">
          Target Peserta
        </h2>
        <p className='mt-1 sm:mt-4 text-xs sm:text-sm text-gray-600'>
          Anggota Biasa : Sp KKLP
        </p>
      </div>

      {/* kriteria peserta */}
      <div className='mt-6 sm:mt-10 w-full sm:w-[68%]'>
        <h2 className="font-semibold text-gray-800 text-base sm:text-[24px]">
          Kriteria peserta harus terpenuhi semua, yaitu sebagai berikut
        </h2>
        
        <ul className='flex flex-col gap-2 sm:gap-3 mt-1 sm:mt-4'>
          <li className='font-regular text-xs sm:text-sm text-gray-600'>
            A. Pejabat fungsional kesehatan dengan kategori keahlian minimal jenjang Ahli Muda
          </li>
          <li className='font-regular text-xs sm:text-sm text-gray-600'>
            B. Pejabat fungsional kesehatan dengan kategori keterampilan minimal mahir
          </li>
          <li className='font-regular text-xs sm:text-sm text-gray-600'>
            C. Memiliki Surat Keputusan Jabatan Fungsional Kesehatan dan melakukan pekerjaan sesuai dengan jabatan fungsional yang di dudukinya
          </li>
          <li className='font-regular text-xs sm:text-sm text-gray-600'>
            D. Mendapat surat rekomendasi dari instansinya
          </li>
          <li className='font-regular text-xs sm:text-sm text-gray-600'>
            E. Batas usia maksimal 3 tahun sebelum usia pensiun
          </li>
          <li className='font-regular text-xs sm:text-sm text-gray-600'>
            F. Menandatangani surat pernyataan bersedia menjadi tim penguji jabatan fungsional kesehatan
          </li>
        </ul>
      </div>

      {/* kompetensi */}
      <div className="w-full sm:w-[68%] mt-6 sm:mt-10">
        <h2 className="font-semibold text-gray-800 text-base sm:text-[24px]">
          Kompetensi
        </h2>
        <ul className='flex flex-col gap-2 sm:gap-3 mt-1 sm:mt-4'>
          <li className='font-regular text-xs sm:text-sm text-gray-600'>
            1. Identifikasi risiko
          </li>
          <li className='font-regular text-xs sm:text-sm text-gray-600'>
            2. Pemeriksaan fisik bayi baru lahir
          </li>
          <li className='font-regular text-xs sm:text-sm text-gray-600'>
            3. Penilaian kesehatan untuk bayi yang baru lahir
          </li>
          <li className='font-regular text-xs sm:text-sm text-gray-600'>
            4. Pengukuran skrining seperti uji tes pendengaran dan penglihatan
          </li>
          <li className='font-regular text-xs sm:text-sm text-gray-600'>
            5. Perawatan bayi baru lahir
          </li>
          <li className='font-regular text-xs sm:text-sm text-gray-600'>
            6. Komunikasi dan Konseling dengan ibu dan keluarga tentang hasil skrining bayi
          </li>
          <li className='font-regular text-xs sm:text-sm text-gray-600'>
            7. Kolaborasi dengan tim kesehatan lainya 
          </li>
        </ul>
      </div>

      {/* Tujuan Pelatihan */}
      <div className='mt-6 sm:mt-10 w-full sm:w-[68%]'>
        <h2 className="font-semibold text-base sm:text-[24px] text-gray-800">
          Tujuan Pelatihan
        </h2>
        <p className='mt-1 sm:mt-4 text-xs sm:text-sm text-gray-600'>
          Setelah mengikuti pelatihan ini peserta mampu memahami tentang semua yang telah dipelajari tentang skrining bayi
        </p>
      </div>

      {/* catatan */}
      <div className='mt-6 sm:mt-10 bg-opacity-green p-6 rounded-xl sm:rounded-2xl w-full sm:w-[68%] mb-8 sm:mb-20'>
        <h2 className='font-semibold text-green text-base sm:text-[24px]'>Catatan:</h2>
        <ul className='flex flex-col gap-2 sm:gap-3 mt-2 sm:mt-4'>
          <li className='font-regular text-xs sm:text-sm text-green'>
            - Silahkan lengkapi kelengkapan ADM seperti, SK Jabfung, surat pernyataan untuk menjadi bahan pertimbangan kami dalam menyeleksi
          </li>
          <li className='font-regular text-xs sm:text-sm text-green'>
            - Pendaftaran tidak otomatis menjadi peserta
          </li>
          <li className='font-regular text-xs sm:text-sm text-green'>
            - Calon peserta akan di seleksi dan diumumkan
          </li>
          <li className='font-regular text-xs sm:text-sm text-green'>
            - Pembayaran dilakukan setelah peserta dinyatakan lolos sebagai peserta
          </li>
          <li className='font-regular text-xs sm:text-sm text-green'>
            - Pastikan Bapak/Ibu telah membaca detail data pelatihan dengan seksama
          </li>
          <li className='font-regular text-xs sm:text-sm text-green'>
            - Pastikan Bapak/Ibu dapat melengkapi dokumen kelengkapan Administrasi yang diminta
          </li>
          <li className='font-regular text-xs sm:text-sm text-green'>
            - Pastikan Biodata Bapak/Ibu sudah benar, kesalahan pengisian biodata diluar tanggung jawab panitia
          </li>
          <li className='font-regular text-xs sm:text-sm text-green'>
            - Jika Bapak/Ibu telah ditetapkan menjadi peserta, selanjutnya Bapak/Ibu akan dihubungi melalui Email, Telepon atau Pengumumam di Portal SIMPLE-IT
          </li>
          <li className="font-regular text-xs sm:text-sm text-green">
            - Keputusan Panitia pelatihan tidak dapat diganggu gugat
          </li>
        </ul>
      </div>
    </main>
  )
}

export default PelatihanDetail