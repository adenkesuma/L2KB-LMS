import Image from "next/image"
import Logo from "@/public/assets/logo/kolegium-white.svg"

const Sidebar = () => {
  return (
    <aside className="bg-green p-8 w-[15%] h-screen sticky left-0 top-0 bottom-0">
        <Image 
                src={Logo}
                alt="logo"
                className="w-20"
        />
    </aside>
  )
}

export default Sidebar