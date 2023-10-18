"use client"
import { useParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { FC } from "react"
import Logo from "@/public/assets/logo/kolegium.png"

import { usePathname } from "next/navigation"

const Footer: FC = () => {
    const pathname = usePathname()
    const params = useParams()

    const hiddenPath = pathname === "/register" || pathname === "/login" || pathname === "/update_data" || pathname === "/admin" 
    const adminHiddenPath = pathname === "/admin/profile" || pathname === "/admin/courses" || pathname === "/admin/courses/new-course" || pathname === "/admin/activate-user" || pathname === `/admin/activate-user/${params.user}` || pathname === `/admin/courses/edit/${params.course}`

    return (
        <>
            {hiddenPath || adminHiddenPath ? 
                <span />
                : 
                <footer className="w-full p-8 bg-green mt-12">
                    <p className="text-white text-sm text-center">
                       © Copyright Perhimpunan Dokter Keluarga Indonesia
                    </p>
                </footer>
            }
        </>
    )
}

export default Footer