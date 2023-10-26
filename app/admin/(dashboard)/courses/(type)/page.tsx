import Image from "next/image";
import Link from "next/link";
import Edit from "@/public/assets/icons/edit.svg";
import { getAllTrainingDataAdmin } from "../../../../../lib/services/training-data.service";
import { getCookie } from "../../../../../lib/services/cookie.service";
import moment from "moment";

async function AdminCourses() {
  const adminAK = await getCookie("adminAK");
  const allTrainingDataAdmin = await getAllTrainingDataAdmin(adminAK);

  return (
    <div className="rounded-xl border border-gray-200 mt-4 xl:mt-8 bg-white p-2 md:p-4 overflow-hidden">
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-left text-sm font-light">
                <thead className="border-b font-medium text-green text-xs lg:text-base">
                  <tr>
                    <th scope="col" className="px-3 xl:px-6 py-2 xl:py-4">
                      No
                    </th>
                    <th scope="col" className="px-3 xl:px-6 py-2 xl:py-4">
                      Judul Pelatihan
                    </th>
                    <th scope="col" className="px-3 xl:px-6 py-2 xl:py-4">
                      Penyelenggara
                    </th>
                    <th scope="col" className="px-3 xl:px-6 py-2 xl:py-4">
                      Tanggal dibuat
                    </th>
                    <th scope="col" className="px-3 xl:px-6 py-2 xl:py-4">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-600 text-xs lg:text-sm font-normal">
                  {allTrainingDataAdmin.map((data, i) => {
                    return (
                      <tr
                        key={i}
                        className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:hover:bg-gray-100"
                      >
                        <td className="whitespace-nowrap px-3 xl:px-6 py-2 xl:py-4 font-medium">
                          {i + 1}
                        </td>
                        <td className="whitespace-nowrap px-3 xl:px-6 py-2 xl:py-4">
                          {data.nama}
                        </td>
                        <td className="whitespace-nowrap px-3 xl:px-6 py-2 xl:py-4">
                          {data.trainingOrganizer.nama}
                        </td>
                        <td className="whitespace-nowrap px-3 xl:px-6 py-2 xl:py-4">
                          {moment(data.createdAt).format("DD MMMM YYYY")}
                        </td>
                        <td className="whitespace-nowrap px-3 xl:px-6 py-2 xl:py-4 grid grid-cols-[auto_1fr] gap-2">
                          <Link
                            href="/admin/courses/edit/1"
                            className="bg-green py-2 px-4 rounded-md flex justify-center items-center"
                          >
                            <Image src={Edit} alt="edit icon" className="w-4" />
                          </Link>
                          <Link
                            href="/courses/detail/:course"
                            className="bg-green p-2 rounded-md flex justify-center itesms-center text-white text-sm"
                          >
                            Detail
                          </Link>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminCourses;
