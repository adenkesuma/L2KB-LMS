"use client"
import Image from "next/image"
import Link from "next/link"
import { FC } from "react"
import Logo from "@/public/assets/logo/kolegium.png"
import Notification from "@/public/assets/icons/notification.svg"
import Profile from "@/public/assets/user.png"

import { usePathname } from "next/navigation"

const Navbar: FC = () => {
    const pathname = usePathname()

    const login: Boolean = true

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
                                    <a href="/guideline" className={`${pathname === "/guide" ? "border-b text-green border-green" : ""} hover:text-green hover:border-b hover:border-green delay-75 font-medium text-gray-800`}>Panduan</a>
                                </li>
                                <li>
                                    <a href="/courses" className={`${pathname === "/courses" ? "text-green border-b border-green" : ""} hover:text-green hover:border-b hover:border-green delay-75 font-medium text-gray-800`}>Pelatihan</a>
                                </li>
                            </ul>

                            {/* border */}
                            <div className="border-l border-gray-400 h-[35px]" />

                            {/* button signin and signup */}
                            <div>
                                { login === true ? 
                                    (
                                        <div className="flex justify-center gap-12 items-center">
                                            <Link href="/notification" className="p-3 bg-opacity-green rounded-[50%]">
                                                <Image 
                                                    src={Notification}
                                                    alt="bell icon"
                                                    width={28}
                                                />
                                            </Link>
                                            <Link href="/profile" className="flex items-center gap-4">
                                                <span className="font-medium text-md text-gray-800">
                                                    Park ji sung
                                                </span>
                                                <Image 
                                                    src={Profile}
                                                    alt="profile user"
                                                    className="h-14 w-14 rounded-[50%] p-1 border border-opacity-green"
                                                />
                                            </Link>
                                        </div>
                                    ) :
                                    (
                                        <div className="flex justify-center gap-4 items-center">
                                            <Link href="/register" className="bg-transparent px-6 py-[4px] border-2 border-green duration-75 text-green md:py-[10px] md:px-8 rounded-3xl font-medium text-[12px] md:text-[14px]">
                                                Daftar
                                            </Link>
                                            <Link href="/login" className="bg-green px-6 py-[5px] duration-75 text-white md:py-[12px] md:px-8 rounded-3xl font-medium text-[12px] md:text-[14px]">
                                                Masuk
                                            </Link>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </nav>
            }
        </>
    )
}

export default Navbar