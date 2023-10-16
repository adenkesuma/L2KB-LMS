import Image from "next/image"
import Download from "@/public/assets/icons/download.svg"
import Congratulation from "@/public/assets/images/congratulation.png"
import MyCertificate from "@/public/assets/certificate.png"

const UserCertificate = () => {
    return (
        <div className="flex justify-between gap-12 rounded-3xl border border-opacity-green p-12">
            <figure>
              <Image 
                src={MyCertificate}
                alt="my certificate"
              />
            </figure>

            <div className="flex justify-between flex-col gap-4">
              <div>
                <button className="mb-2 text-center w-[240px] bg-light-green text-sm font-medium mt-2 p-2 rounded-xl border-green border text-green flex justify-center items-center gap-4">
                  <Image 
                    src={Download}
                    alt="download icon"
                    className="w-4"
                  />
                  <span>Download Sertifikat</span>
                </button>

                <button className="text-center w-[240px] bg-green text-sm font-medium mt-2 p-2 rounded-xl text-white">
                  Add To LinkedIn
                </button>
              </div>

              <figure className="mt-12">
                <Image 
                  src={Congratulation}
                  alt="celebrate image"
                  className="w-[240px]"
                />
              </figure>
            </div>
        </div>
    )
}

export default UserCertificate