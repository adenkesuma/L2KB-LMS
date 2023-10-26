"use client";
import { useParams } from "next/navigation";
import Image from "next/image";
import Sertifikat from "@/public/assets/certificate.png";

const ParticipantAchievementDetail = () => {
  const params = useParams();

  return (
    <div className="min-h-screen mb-8 px-4 md:px-8 xl:px-14 pt-10">
      <h1 className="font-bold text-xl md:text-2xl text-gray-800">
        Pencapaian <span className="capitalize">{params.detail}</span>
      </h1>

      <div className="rounded-2xl border border-gray-200 mt-6 bg-white p-4">
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full text-left text-sm font-light">
                  <thead className="border-b font-medium text-green text-base">
                    <tr>
                      <th scope="col" className="px-3 xl:px-6 py-2 xl:py-4">
                        No
                      </th>
                      <th scope="col" className="px-3 xl:px-6 py-2 xl:py-4">
                        Program Pembelajaran
                      </th>
                      <th scope="col" className="px-3 xl:px-6 py-2 xl:py-4">
                        Sertifikat
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600 text-sm font-normal">
                    <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:hover:bg-gray-100">
                      <td className="whitespace-nowrap px-6 py-4 font-medium">
                        1
                      </td>
                      <td className="whitespace-nowrap px-3 xl:px-6 py-2 xl:py-4">
                        Pelatihan skrining bayi baru lahir, bagi Dokter dan
                        Bidan
                      </td>
                      <td className="whitespace-nowrap px-3 xl:px-6 py-2 xl:py-4">
                        <Image
                          src={Sertifikat}
                          alt="sertifikat"
                          className="w-96"
                        />
                      </td>
                    </tr>

                    <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:hover:bg-gray-100">
                      <td className="whitespace-nowrap px-6 py-4 font-medium">
                        2
                      </td>
                      <td className="whitespace-nowrap px-3 xl:px-6 py-2 xl:py-4">
                        Pelatihan skrining bayi baru lahir, bagi Dokter dan
                        Bidan
                      </td>
                      <td className="whitespace-nowrap px-3 xl:px-6 py-2 xl:py-4">
                        <Image
                          src={Sertifikat}
                          alt="sertifikat"
                          className="w-96"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParticipantAchievementDetail;
