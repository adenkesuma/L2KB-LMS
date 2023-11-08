import { getMyTraining } from "@/lib/services/training-data.service";
import { cookies } from "next/headers";
import moment from "moment";
import Link from "next/link";

import NoDataImage from "@/public/assets/images/no-data.png"
import Image from "next/image";

const History = async () => {
  const cookieStore = cookies();
  const accessKey = cookieStore.get("accessKey")?.value;

  if (accessKey) {
    let totalSkp = 0;
    const myTrainingData = await getMyTraining(accessKey);

    // get current date
    const currentDate = new Date();
      
    // filter training data by training_end
    const trainingDone = myTrainingData?.filter(item => {
      const trainingEndDate = new Date(item.training.training_end);
      return trainingEndDate <= currentDate;
    });

    trainingDone?.forEach((item) => {
      totalSkp += item.training.skp
    })

    return (
      <main className="pt-4 sm:pt-6 lg:pt-12 min-h-screen">
        <div className="flex border-b border-gray-200 pb-8 justify-between lg:flex-row flex-col items-start lg:items-end">
          <div className="flex flex-col">
            <h1 className="text-xl mb-1 sm:text-2xl lg:text-4xl sm:mb-2 font-bold text-gray-800">
              Riwayat Pelatihan Saya
            </h1>
            <span className="text-xs sm:text-sm text-gray-600">
              Berikut adalah daftar pelatihan saya yang pernah saya selesaikan
            </span>

          </div>
          <ul className="flex justify-start items-center gap-6 sm:gap-12 mt-4 sm:mt-6 lg:mt-8">
            <li>
              <Link
                className="text-green font-semibold text-xs sm:text-base hover:border-b hover:border-green"
                href="/certificate"
              >
                Sertifikat saya
              </Link>
            </li>
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
          </ul>
        </div>

        <div className="mt-4 sm:mt-6 lg:mt-12">
          <h1 className="text-2xl text-gray-800 font-semibold">
            Total SKP: <span className="text-green font-bold">
              {totalSkp}
            </span>
          </h1>
        </div>

        {trainingDone?.length === 0 ? (
          <Image
            src={NoDataImage}
            alt="no data"
            className="w-3/4 mx-auto"
            width={1000}
            height={1000}
          />
          ) : (
            <div className="rounded-xl overflow-hidden sm:rounded-2xl border border-gray-200 mt-4 sm:mt-8 bg-white p-2 sm:p-4">
              <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                      <table className="min-w-full text-left text-sm font-light">
                        <thead className="border-b font-medium text-green text-xs sm:text-sm">
                          <tr>
                            <th scope="col" className="px-6 py-4">
                              No
                            </th>
                            <th scope="col" className="px-6 py-4">
                              Nama Pelatihan
                            </th>
                            <th scope="col" className="px-6 py-4">
                              Deskripsi
                            </th>
                            <th scope="col" className="px-6 py-4">
                              Tanggal Selesai
                            </th>
                            <th scope="col" className="px-6 py-4">
                              Lokasi Pelatihan
                            </th>
                            <th scope="col" className="px-6 py-4">
                              Status
                            </th>
                          </tr>
                        </thead>

                        <tbody className="text-gray-600 text-xs sm:text-sm font-normal">
                          {trainingDone?.map((item, idx) => (
                            <tr key={item.id} className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:hover:bg-gray-100">
                              <td className="whitespace-nowrap px-6 py-4">
                                {idx+1}
                              </td>
                              <td className="whitespace-nowrap px-6 py-4">
                                {item.training.nama.slice(0, 30)}...
                              </td>
                              <td className="whitespace-nowrap px-6 py-4">
                                {item.training.deskripsi.slice(0, 50)}...
                              </td>
                              <td className="whitespace-nowrap px-6 py-4">
                                {moment(item.training.training_end).format("DD MMMM yyyy")}
                              </td>
                              <td className="whitespace-nowrap px-6 py-4">
                                {item.training.location}
                              </td>
                              <td className="whitespace-nowrap px-6 py-4">
                                <span className="py-2 px-4 rounded-xl bg-opacity-green text-green font-semibold">
                                  Selesai
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>

                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )  
        }
      </main>

    );
  }

};

export default History;
