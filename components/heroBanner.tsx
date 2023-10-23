import { FC } from "react"
import Image from "next/image"

import BannerImage from "@/public/assets/dummy.png"

const HeroBanner: FC = () => {
  return (
    <header className="mt-4 sm:mt-6">
        <div>
            <Image 
                src={BannerImage}
                alt="banner image"
                className="w-full h-48 sm:h-96 lg:h-[85vh] object-cover bg-cover rounded-xl sm:rounded-2xl"     
            />
        </div>
    </header>
  )
}

export default HeroBanner