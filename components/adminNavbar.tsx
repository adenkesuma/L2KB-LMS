"use client"
import { usePathname } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import Profile from "@/public/assets/user.png"
import { FC } from "react"

const AdminNavbar: FC = () => {
    const pathname = usePathname()

    return (
        <>
            {pathname === "/admin" ? 
            (
                <span></span> 
            )
            : 
            (   
                <nav className="flex bg-white items-center justify-between py-4 px-12 border-b border-gray-100">
                    <h1 className="text-[20px] font-medium text-gray-600">
                        Selamat Datang di Dashboard Admin
                    </h1>
                    <Link href="/admin/profile" className="flex items-center gap-4">
                        <span className="font-medium text-md text-gray-800">
                            Park ji sung
                        </span>
                        <Image 
                            src={Profile}
                            alt="profile user"
                            className="h-14 w-14 rounded-[50%] p-1 border border-gray-300"
                        />
                    </Link>
                </nav>
            )
            }
        </>
    )
}

export default AdminNavbar