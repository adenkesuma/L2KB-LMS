"use client"
import Image from "next/image"
import Link from "next/link"
import { FC, useState } from "react"
import Logo from "@/public/assets/logo/pdki.svg"
import Notification from "@/public/assets/icons/notification.svg"
import Profile from "@/public/assets/user.png"
import Close from "@/public/assets/icons/close.svg"
import HamburgerMenu from "@/public/assets/icons/menu.svg"

import { useParams, usePathname } from "next/navigation"

const Navbar: FC = () => {
    const pathname = usePathname()
    const params = useParams()
    const [showNavigate, setShowNavigate] = useState<Boolean>(false)

    const login: Boolean = false

    const hiddenPath = pathname === "/register" || pathname === "/verification" || pathname === "/login" || pathname === "/update_data" || pathname === "/admin" 
    const adminHiddenPath = pathname === "/admin/profile" || pathname === "/admin/courses" || pathname === "/admin/courses/new-course" || pathname === "/admin/activate-user" || pathname === `/admin/activate-user/${params.user}` || pathname === `/admin/courses/edit/${params.course}` || pathname === '/admin/participant-achievements' ||
    pathname === `/admin/participant-achievements/${params.detail}` || pathname === "/admin/guideline" || pathname === "/admin/guideline/new-guideline"

    const handleShowNavigate = () => {
        setShowNavigate(!showNavigate)
    }

    return (
        <>
            {hiddenPath || adminHiddenPath ? 
                <span />
                : 
                <div className="py-2 sm:py-4 container px-4 sm:px-14 mx-auto">
                    <div className="flex justify-between items-center">
                        <Link href="/">
                            <Image 
                                src={Logo}
                                alt="Logo"
                                className="sm:w-20 w-16"
                            />
                        </Link>

                        {/* ipad, desktop view  navigate */}
                        <div className="hidden sm:flex justify-center items-center gap-4 sm:gap-8">
                            <ul className="flex justify-center items-center gap-10">
                                <li>
                                    <a href="/guideline" className={`${pathname === "/guideline" ? "border-b text-green border-green" : ""} hover:text-green hover:border-b hover:border-green delay-75 font-medium text-gray-800`}>Panduan</a>
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

                        {/* hamburger menu */}
                        <button onClick={handleShowNavigate} className="block sm:hidden">
                            <Image 
                                src={HamburgerMenu}
                                alt="menu"
                                className="w-8"
                            />
                        </button>

                        {/* phone navigate */}
                        {showNavigate ? (
                            <div className="bg-green w-full h-screen absolute top-0 left-0 right-0 bottom-0">
                                <button onClick={handleShowNavigate} className="absolute top-4 right-4">
                                    <Image 
                                        src={Close}
                                        alt="close icon"
                                        className="w-6"
                                    />
                                </button> 

                                <div className="flex flex-col items-end p-8 gap-8 mt-44">
                                    <ul className="flex justify-center flex-col items-center gap-4">
                                        <li>
                                            <a href="/guideline" className={`${pathname === "/guideline" ? "border-b text-white border-white" : ""} hover:border-b hover:border-white delay-75 font-medium text-white`}>Panduan</a>
                                        </li>
                                        <li>
                                            <a href="/courses" className={`${pathname === "/courses" ? "text-white border-b border-white" : ""} hover:border-b hover:border-white delay-75 font-medium text-white`}>Pelatihan</a>
                                        </li>
                                    </ul>

                                    {/* border */}
                                    <div className="border-b border-white w-full" />

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
                                                <div className="flex flex-col justify-center gap-6 items-center">
                                                    <Link href="/register" className="bg-white px-8 py-3 duration-75 text-green font-semibold md:py-[10px] md:px-8 rounded-3xl text-sm">
                                                        Daftar
                                                    </Link>
                                                    <Link href="/login" className="bg-green px-7 py-3 duration-75 text-white border border-white rounded-3xl font-semibold text-sm">
                                                        Masuk
                                                    </Link>
                                                </div>
                                            )
                                        }
                                    </div> 
                                </div>
                            </div>
                        ) : (
                            null
                        )}
                    </div>
                </div>
            }
        </>
    )
}

export default Navbar