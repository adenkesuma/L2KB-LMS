import Image from "next/image"
import Link from "next/link"
import Edit from "@/public/assets/icons/edit.svg"

const AdminCourses = () => {
  return (
    <div className='min-h-screen mb-8 px-4 md:px-8 xl:px-14 pt-10'>
        <div className="flex justify-between items-center">
            <h1 className="font-bold text-xl md:text-2xl text-gray-800">Daftar Pelatihan</h1>
            <Link href="/admin/courses/new-course" className="flex justify-center flex-row items-center gap-2 w-32 md:w-44 text-white font-medium py-[6px] sm:py-[10px] rounded-lg md:rounded-xl bg-green">
                <span className="text-xs sm:text-sm">Tambah Pelatihan</span>
            </Link>
        </div>

        <div className="flex justify-start items-center gap-3 lg:gap-6 mt-6">
            <button className={`text-gray-600 focus:bg-green focus:text-white p-1 lg:p-2 border border-gray-300 rounded-lg lg:rounded-xl w-28 md:w-36 lg:w-44 font-medium text-xs md:text-sm`}>
                Semua Pelatihan
            </button>
            <button className="text-gray-600 focus:bg-green focus:text-white p-1 lg:p-2 border border-gray-300 rounded-lg lg:rounded-xl w-28 md:w-36 lg:w-44 font-medium text-xs md:text-sm">
                Draf
            </button>
        </div>

        <div className='rounded-xl border border-gray-200 mt-4 xl:mt-8 bg-white p-2 md:p-4 overflow-hidden'>
            <div className="flex flex-col">
              <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                  <div className="overflow-hidden">
                    <table className="min-w-full text-left text-sm font-light">
                      <thead className="border-b font-medium text-green text-xs lg:text-sm">
                        <tr>
                          <th scope="col" className="px-3 xl:px-6 py-2 xl:py-4">No</th>
                          <th scope="col" className="px-3 xl:px-6 py-2 xl:py-4">Judul Pelatihan</th>
                          <th scope="col" className="px-3 xl:px-6 py-2 xl:py-4">Penyelenggara</th>
                          <th scope="col" className="px-3 xl:px-6 py-2 xl:py-4">Tanggal dibuat</th>
                          <th scope="col" className="px-3 xl:px-6 py-2 xl:py-4">Edit</th>
                          <th scope="col" className="px-3 xl:px-6 py-2 xl:py-4">Detail</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-600 text-xs lg:text-sm font-normal">
                        <tr
                          className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:hover:bg-gray-100">
                          <td className="whitespace-nowrap px-3 xl:px-6 py-2 xl:py-4 font-medium">1</td>
                          <td className="whitespace-nowrap px-3 xl:px-6 py-2 xl:py-4">Pelatihan skrining bayi baru lahir, bagi Dokter dan Bidan</td>
                          <td className="whitespace-nowrap px-3 xl:px-6 py-2 xl:py-4">Perhimpunan Dokter Keluarga Indonesia</td>
                          <td className="whitespace-nowrap px-3 xl:px-6 py-2 xl:py-4">13 October 2023</td>
                          <td className="whitespace-nowrap px-3 xl:px-6 py-2 xl:py-4">
                            <Link href="/admin/courses/edit/1" className="bg-green p-2 rounded-md flex justify-center items-center">
                              <Image 
                                src={Edit}
                                alt="edit icon"
                                className="w-4"
                              />   
                            </Link> 
                          </td>
                          <td className="whitespace-nowrap px-6 py-4">
                            <Link href="/courses/detail/:course" className="bg-green p-2 rounded-md flex justify-center itesms-center text-white text-sm">Detail</Link>
                          </td>
                        </tr>

                        <tr
                          className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:hover:bg-gray-100">
                          <td className="whitespace-nowrapa px-3 xl:px-6 py-2 xl:py-4 font-medium">2</td>
                          <td className="whitespace-nowrapa px-3 xl:px-6 py-2 xl:py-4">Pelatihan skrining bayi baru lahir, bagi Dokter dan Bidan</td>
                          <td className="whitespace-nowrapa px-3 xl:px-6 py-2 xl:py-4">Perhimpunan Dokter Keluarga Indonesia</td>
                          <td className="whitespace-nowrapa px-3 xl:px-6 py-2 xl:py-4">13 October 2023</td>
                          <td className="whitespace-nowrapa px-3 xl:px-6 py-2 xl:py-4">
                            <Link href="/admin/courses/edit/2" className="bg-green p-2 rounded-md flex justify-center items-center">
                              <Image 
                                src={Edit}
                                alt="edit icon"
                                className="w-4"
                              />   
                            </Link> 
                          </td>
                          <td className="whitespace-nowrap px-6 py-4">
                            <Link href="/courses/detail/:course" className="bg-green p-2 rounded-md flex justify-center itesms-center text-white text-sm">Detail</Link>
                          </td>
                        </tr>

                        <tr
                          className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:hover:bg-gray-100">
                          <td className="whitespace-nowrap px-3 xl:px-6 py-2 xl:py-4 font-medium">3</td>
                          <td className="whitespace-nowrap px-3 xl:px-6 py-2 xl:py-4">Pelatihan skrining bayi baru lahir, bagi Dokter dan Bidan</td>
                          <td className="whitespace-nowrap px-3 xl:px-6 py-2 xl:py-4">Perhimpunan Dokter Keluarga Indonesia</td>
                          <td className="whitespace-nowrap px-3 xl:px-6 py-2 xl:py-4">13 October 2023</td>
                          <td className="whitespace-nowrap px-3 xl:px-6 py-2 xl:py-4">
                            <Link href="/admin/courses/edit/3" className="bg-green p-2 rounded-md flex justify-center items-center">
                              <Image 
                                src={Edit}
                                alt="edit icon"
                                className="w-4"
                              />   
                            </Link> 
                          </td>
                          <td className="whitespace-nowrap px-6 py-4">
                            <Link href="/courses/detail/:course" className="bg-green p-2 rounded-md flex justify-center itesms-center text-white text-sm">Detail</Link>
                          </td>
                        </tr>

                        <tr
                          className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:hover:bg-gray-100">
                          <td className="whitespace-nowrap px-3 xl:px-6 py-2 xl:py-4 font-medium">4</td>
                          <td className="whitespace-nowrap px-3 xl:px-6 py-2 xl:py-4">Pelatihan skrining bayi baru lahir, bagi Dokter dan Bidan</td>
                          <td className="whitespace-nowrap px-3 xl:px-6 py-2 xl:py-4">Perhimpunan Dokter Keluarga Indonesia</td>
                          <td className="whitespace-nowrap px-3 xl:px-6 py-2 xl:py-4">13 October 2023</td>
                          <td className="whitespace-nowrap px-3 xl:px-6 py-2 xl:py-4">
                            <Link href="/admin/courses/edit/4" className="bg-green p-2 rounded-md flex justify-center items-center">
                              <Image 
                                src={Edit}
                                alt="edit icon"
                                className="w-4"
                              />   
                            </Link> 
                          </td>
                          <td className="whitespace-nowrap px-6 py-4">
                            <Link href="/courses/detail/:course" className="bg-green p-2 rounded-md flex justify-center itesms-center text-white text-sm">Detail</Link>
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
  )
}

export default AdminCourses