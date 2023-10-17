import Image from "next/image"
import Link from "next/link"
import Logo from "@/public/assets/logo/kolegium-white.svg"
import Logout from "@/public/assets/icons/logout.svg"
import Education from "@/public/assets/icons/education.svg"

const Sidebar = () => {
  return (
    <aside className="bg-green p-8 w-[15%] flex flex-col justify-between  h-screen sticky left-0 top-0 bottom-0">
        <div>
            <figure className="mx-auto flex justify-center">
                <Image 
                        src={Logo}
                        alt="logo"
                        className="w-20"
                />
            </figure>

            <nav className="mt-12">
                <Link href="/admin/courses" className="text-white py-3 delay-75 duration-75 bg-opacity-green flex justify-center items-center gap-4 rounded-lg">
                    <Image 
                        src={Education}
                        alt="education icon"
                        className="w-6"
                    />
                    <span>Pelatihan</span>
                </Link>
            </nav>
        </div>

        <button className="text-white py-3 delay-75 duration-75 hover:bg-opacity-green flex justify-center items-center gap-4 rounded-lg">
            <Image 
                src={Logout}
                alt="logout icon"
                className="w-5"
            />
            <span>Logout</span>
        </button>
    </aside>
  )
}

export default Sidebar