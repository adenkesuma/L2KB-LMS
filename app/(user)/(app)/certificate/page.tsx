import Link from "next/link";
import { cookies } from "next/headers";
import Image from "next/image";

import { getMyTraining } from "@/lib/services/training-data.service";
import UserCertificate from "./_components/userCertificate";
import NoDataImage from "@/public/assets/images/no-data.png";


const Certificate = async () => {
  const cookieStore = cookies();
  const accessKey = cookieStore.get("accessKey")?.value;

  if (accessKey) {
    const myTrainingData = await getMyTraining(accessKey);
    
    return (
      <main className="pt-4 sm:pt-6 lg:pt-12 min-h-screen">
        <div className="flex border-b border-gray-200 pb-8 justify-between flex-col lg:flex-row items-start lg:items-end">
          <div>
            <h1 className="text-xl sm:text-2xl lg:text-4xl sm:mb-2 font-bold text-gray-800">
              Sertifikat Saya
            </h1>
            <span className="text-xs sm:text-sm text-gray-600">
              Unduh sertifikat pelatihan Anda di bawah ini
            </span>
          </div>
          <ul className="flex justify-start items-center gap-6 sm:gap-12 mt-4 sm:mt-6 lg:mt-8">
            <li>
              <Link
                className="text-green font-semibold text-xs sm:text-base hover:border-b hover:border-green"
                href="/profile"
              >
                Profil saya
              </Link>
            </li>
            <li>
              <Link
                className="text-green font-semibold text-xs sm:text-base hover:border-b hover:border-green"
                href="/my-courses"
              >
                Pelatihan saya
              </Link>
            </li>
            <li>
              <Link
                className="text-green font-semibold text-xs sm:text-base hover:border-b hover:border-green"
                href="/history"
              >
                Riwayat pelatihan
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-4 sm:gap-8 mt-4 sm:mt-8">

          {myTrainingData?.length === 0 ? (
            <Image
              src={NoDataImage}
              alt="no data"
              className="w-3/4 mx-auto"
              width={1000}
              height={1000}
            />
          ) : (
            myTrainingData?.map((data) => {
              return (
                <div key={data.training.id}>
                  {data.certificateGenerated ? (
                    <>
                      <UserCertificate link={`${process.env.NEXT_PUBLIC_P2KB_API}/admin/certificate/${data.id}`} />
                    </>
                  ) : 
                    ""
                  }
                </div>
              );
            })) 
          }

        </div>
      </main>
    );
  }
};

export default Certificate;
