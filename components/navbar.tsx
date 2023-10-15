"use client"

import Image from "next/image"
import Link from "next/link"
import { FC } from "react"
import Logo from "@/public/assets/logo/kolegium.png"

import { usePathname } from "next/navigation"

const Navbar: FC = () => {
    const pathname = usePathname()

    return (
        <>
            {pathname === "/register" || pathname === "/login" || pathname === "/update_data" ? 
                <span />
                : 
                <nav className="py-4">
                    <div className="flex justify-between items-center">
                        <Link href="/">
                            <Image 
                                src={Logo}
                                alt="Logo"
                                className="w-20"
                            />
                        </Link>
                        <div className="flex justify-center items-center gap-8">
                            <ul className="flex justify-center items-center gap-10">
                                <li>
                                    <a href="/guide" className="hover:text-green font-medium">Panduan</a>
                                </li>
                                <li>
                                    <a href="/courses" className="hover:text-green font-medium">Pelatihan</a>
                                </li>
                            </ul>

                            {/* border */}
                            <div className="border-l border-gray-400 h-[35px]" />

                            {/* button signin and signup */}
                            <div className="flex justify-center gap-4 items-center">
                                <Link href="/register" className="bg-white px-6 py-[4px] border-2 border-green duration-75 text-green md:py-[10px] md:px-8 rounded-3xl font-medium text-[12px] md:text-[14px]">
                                    Daftar
                                </Link>
                                <Link href="/login" className="bg-green px-6 py-[5px] duration-75 text-white md:py-[12px] md:px-8 rounded-3xl font-medium text-[12px] md:text-[14px]">
                                    Masuk
                                </Link>
                            </div>
                        </div>
                    </div>
                </nav>
            }
        </>
    )
}

export default Navbar