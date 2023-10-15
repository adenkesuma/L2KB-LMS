import { FC } from "react"
import Image from "next/image"

import BannerImage from "@/public/assets/dummy.png"

const HeroBanner: FC = () => {
  return (
    <header className="mt-4">
        <div>
            <Image 
                src={BannerImage}
                alt="banner image"
                className="w-full h-[80vh] bg-cover rounded-3xl"     
            />
        </div>
    </header>
  )
}

export default HeroBanner