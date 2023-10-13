import Image from "next/image"
import Link from "next/link"
import { FC } from "react"

import PDKI from '@/public/assets/logo/pdki.svg'

const Navbar: FC = () => {

  return (
    <>
        <nav className="py-4">
            <div className="flex justify-between items-center">
                <Link href="/">
                    <Image
                        className="w-[80px] md:w-[80px]"
                        src={PDKI}
                        alt="logo WONCA (world family doctors caring for people 'ASIA FACIFIC')"
                    />
                </Link>
                <div className="flex justify-center items-center gap-8">
                    <ul className="flex justify-center items-center gap-10">
                        <li>
                            <a href="/panduan" className="hover:text-[#274698] font-medium">Panduan</a>
                        </li>
                        <li>
                            <a href="/pelatihan" className="hover:text-[#274698] font-medium">Pelatihan</a>
                        </li>
                    </ul>

                    {/* border */}
                    <div className="border-l border-gray-400 h-[35px]" />

                    {/* button signin and signup */}
                    <div className="flex justify-center gap-4 items-center">
                        <button className="bg-white px-6 py-[4px] border-2 border-[#274698] duration-75 text-[#274698] md:py-[10px] md:px-8 rounded-3xl font-medium text-[12px] md:text-[14px]">
                            Daftar
                        </button>
                        <button className="bg-[#274698] px-6 py-[5px] duration-75 text-white md:py-[12px] md:px-8 rounded-3xl font-medium text-[12px] md:text-[14px]">
                            Masuk
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar