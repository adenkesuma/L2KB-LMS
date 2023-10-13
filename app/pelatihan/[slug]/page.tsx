import Image from 'next/image'
import { FC } from 'react'

import DummyImage from '@/public/assets/dummy.png'

const PelatihanDetail: FC = () => {
  return (
    <main>
      <h1 className='mt-8 font-bold text-[34px]'>
        Pelatihan skrining bayi baru lahir, bagi Dokter dan Bidan
      </h1>
      <div className='flex items-center justify-start mt-10'>
        <p className='font-regular text-sm text-gray-600 pr-6 border-r border-gray-400'>Kondisi: <span className='font-semibold text-cyan'>Pendaftaran Aktif</span></p>
        <p className='font-regular text-sm text-gray-600 pl-6'>Kuota Peserta: <span className='font-semibold text-cyan'>40</span></p>
      </div>

      <div className='flex gap-8 mt-4'>
        <figure className='block w-[65%]'>
          <Image 
            src={DummyImage}
            alt="banner image detail"
            className='rounded-3xl h-full w-full'
          />
        </figure>
        <div className='p-6 w-[35%] bg-white shadow-md rounded-3xl'>
          <h2 className='font-semibold text-[24px] text-gray-800'>Tentang pelatihan ini</h2>
          <ul className='flex flex-col justify-start mt-6 gap-2'>
            <li className='font-reguler text-sm text-gray-600'>
              Tahun Pelaksanaan: <span className='font-semibold text-cyan'>2023</span>
            </li>
            <li className='font-reguler text-sm text-gray-600'>
              Jenis Pelatihan: <span className='font-semibold text-cyan'>Pelatihan Fungsional</span>
            </li>
            <li className='font-reguler text-sm text-gray-600'>
              Gelombang / Batch: <span className='font-semibold text-cyan'>Gel. 5</span>
            </li>
            <li className='font-reguler text-sm text-gray-600'>
              Periode Pendaftaran: <span className='font-semibold text-cyan'>21 Mei 2023 s/d 03 Juli 2023</span>
            </li>
            <li className='font-reguler text-sm text-gray-600'>
              Periode Pelatihan: <span className='font-semibold text-cyan'>07 Agustus 2023 s/d 16 Agustus 2023</span>
            </li>
          </ul>
        </div>
      </div>
    </main>
  )
}

export default PelatihanDetail