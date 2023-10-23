import { FC } from "react"
import DummyImage from '@/public/assets/dummy.png'
import Image from "next/image"
import Link from "next/link"

const Card: FC = () => {
  return (
    <div className="rounded-xl bg-white p-2 sm:p-3">
        <figure>
            <Image 
                src={DummyImage}
                alt="thumnail pelatihan image"
                className="rounded-lg h-28 lg:h-40 w-full bg-cover object-cover"
            />
        </figure>
        <div className="p-1 text-center rounded-md border-opacity-green border-[1.4px] text-[10px] sm:text-xs font-medium text-green w-full sm:w-[150px] mt-4">
            <span>Khusus Anggota Muda</span>
        </div>

        <div className="flex flex-col gap-2">
            <h2 className="font-medium sm:font-semibold text-base sm:text-lg mt-4 line-clamp-1 sm:line-clamp-2 leading-5 sm:leading-6">
                Pelatihan skrining bayi baru lahir, bagi Dokter dan Bidan
            </h2>
            <p className="font-regular text-gray-600 line-clamp-2 text-xs">
                Skrining atau uji saring pada bayi baru lahir {'Neonatal Screening'} adalah istilah yang sering kita dengar, dan pasti
            </p>

            <div className="sm:flex flex-col gap-1 mt-2 sm:mt-6 hidden">
                <p className="text-xs font-regular text-gray-600">Kondisi: <span className="font-semibold text-gray-700">Pendaftaran Aktif</span></p>
                <p className="text-xs font-regular text-gray-600">Kuota: <span className="font-semibold text-gray-700">40</span></p>
                <p className="text-xs font-regular text-gray-600">Pendaftaran dibuka: <span className="font-semibold text-gray-700">21 Mei 2023</span></p>
                <p className="text-xs font-regular text-gray-600">Pendaftaran ditutup: <span className="font-semibold text-gray-700">03 Juli 2023</span></p>
            </div>

            {/* button detail */}
            <Link href='/courses/detail' className="text-center text-white font-medium text-xs sm:text-sm mt-2 w-full p-2 rounded-lg bg-green">
                Detail
            </Link>
        </div>

    </div>
  )
}

export default Card