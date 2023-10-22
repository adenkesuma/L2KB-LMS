import Image from "next/image"
import Download from "@/public/assets/icons/download.svg"
import Congratulation from "@/public/assets/images/congratulation.png"
import MyCertificate from "@/public/assets/certificate.png"

const UserCertificate = () => {
    return (
        <div className="flex justify-between sm:flex-row flex-col gap-2 sm:gap-12 rounded-xl sm:rounded-2xl bg-white p-3 sm:p-12">
            <figure>
              <Image 
                src={MyCertificate}
                alt="my certificate"
                className="rounded-md"
              />
            </figure>

            <div className="flex justify-between sm:items-start items-center flex-col gap-4">
              <div className="flex flex-col gap-1 sm:gap-4">

                <button className="mb-1 sm:mb-2 text-center w-full sm:w-[240px] bg-light-green text-xs sm:text-sm font-medium p-2 rounded-md sm:rounded-xl border-green border text-green flex justify-center items-center gap-1 sm:gap-4">
                  <Image 
                    src={Download}
                    alt="download icon"
                    className="w-3 sm:w-4"
                  />
                  <span>Download Sertifikat</span>
                </button>

                <button className="text-center w-full sm:w-[240px] bg-green text-xs sm:text-sm font-medium p-2 sm:rounded-xl rounded-md text-white">
                  Add To LinkedIn
                </button>

              </div>

              <figure className="mt-4 sm:mt-12">
                <Image 
                  src={Congratulation}
                  alt="celebrate image"
                  className="w-28 sm:w-[240px]"
                />
              </figure>
            </div>
        </div>
    )
}

export default UserCertificate