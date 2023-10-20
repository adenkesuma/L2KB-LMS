import Image from "next/image"
import Link from "next/link"
import Edit from "@/public/assets/icons/edit.svg"

const AdminCourses = () => {
  return (
    <div className='min-h-screen p-12'>
        <div className="flex justify-between items-center">
            <h1 className="font-bold text-[38px] text-gray-800">Daftar Pelatihan</h1>
            <Link href="/admin/courses/new-course" className="flex justify-center items-center gap-4 mt-12 text-center w-[240px] text-white font-medium p-2 rounded-xl bg-green">
                <span className="text-2xl">+</span>
                <span>Tambah Pelatihan</span>
            </Link>
        </div>

        <div className="flex justify-start items-center gap-8 mt-8">
            <button className={`text-green focus:bg-green focus:text-white p-2 border border-green rounded-xl w-[180px] font-medium text-sm`}>
                Semua Pelatihan
            </button>
            <button className="text-green focus:bg-green focus:text-white p-2 border border-green rounded-xl w-[180px] font-medium text-sm">
                Draf
            </button>
        </div>

        <div className='rounded-2xl border border-gray-100 mt-8 bg-white p-4'>
            <div className="flex flex-col">
              <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                  <div className="overflow-hidden">
                    <table className="min-w-full text-left text-sm font-light">
                      <thead className="border-b font-medium text-green text-base">
                        <tr>
                          <th scope="col" className="px-6 py-4">No</th>
                          <th scope="col" className="px-6 py-4">Judul Pelatihan</th>
                          <th scope="col" className="px-6 py-4">Penyelenggara</th>
                          <th scope="col" className="px-6 py-4">Tanggal dibuat</th>
                          <th scope="col" className="px-6 py-4">Edit</th>
                          <th scope="col" className="px-6 py-4">Detail</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-600 text-sm font-normal">
                        <tr
                          className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:hover:bg-gray-100">
                          <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
                          <td className="whitespace-nowrap px-6 py-4">Pelatihan skrining bayi baru lahir, bagi Dokter dan Bidan</td>
                          <td className="whitespace-nowrap px-6 py-4">Perhimpunan Dokter Keluarga Indonesia</td>
                          <td className="whitespace-nowrap px-6 py-4">13 October 2023</td>
                          <td className="whitespace-nowrap px-6 py-4">
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
                          <td className="whitespace-nowrap px-6 py-4 font-medium">2</td>
                          <td className="whitespace-nowrap px-6 py-4">Pelatihan skrining bayi baru lahir, bagi Dokter dan Bidan</td>
                          <td className="whitespace-nowrap px-6 py-4">Perhimpunan Dokter Keluarga Indonesia</td>
                          <td className="whitespace-nowrap px-6 py-4">13 October 2023</td>
                          <td className="whitespace-nowrap px-6 py-4">
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
                          <td className="whitespace-nowrap px-6 py-4 font-medium">3</td>
                          <td className="whitespace-nowrap px-6 py-4">Pelatihan skrining bayi baru lahir, bagi Dokter dan Bidan</td>
                          <td className="whitespace-nowrap px-6 py-4">Perhimpunan Dokter Keluarga Indonesia</td>
                          <td className="whitespace-nowrap px-6 py-4">13 October 2023</td>
                          <td className="whitespace-nowrap px-6 py-4">
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
                          <td className="whitespace-nowrap px-6 py-4 font-medium">4</td>
                          <td className="whitespace-nowrap px-6 py-4">Pelatihan skrining bayi baru lahir, bagi Dokter dan Bidan</td>
                          <td className="whitespace-nowrap px-6 py-4">Perhimpunan Dokter Keluarga Indonesia</td>
                          <td className="whitespace-nowrap px-6 py-4">13 October 2023</td>
                          <td className="whitespace-nowrap px-6 py-4">
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