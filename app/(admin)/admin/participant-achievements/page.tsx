import Image from "next/image"
import Link from "next/link"
import Edit from "@/public/assets/icons/edit.svg"
import Search from "@/public/assets/icons/search.svg"

const ParticipantAchievement = () => {
  return (
    <div className='min-h-screen p-12'>
        <div className="flex justify-between items-center">
            <h1 className="font-bold text-[38px] text-gray-800">Pencapaian Peserta</h1>
            <Link href="/admin/courses/new-course" className="flex justify-center items-center gap-4 mt-12 text-center w-[240px] text-white font-medium p-2 rounded-xl bg-green">
                <span>Ekspor ke excel</span>
            </Link>
        </div>

        <div className="flex justify-start items-center gap-8 mt-8">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Cari Peserta..." 
              className='mt-4 border border-slate-300 py-2 pl-12 pr-4 rounded-3xl w-96 outline-[#015A39]'
            />
            <Image 
              src={Search}
              alt="search icon"
              className="w-4 absolute top-7 left-4"
            />
          </div>

          <div className="relative">
            <input 
              type="text" 
              placeholder="Cari NIK Peserta..." 
              className='mt-4 border border-slate-300 py-2 pl-12 pr-4 rounded-3xl w-96 outline-[#015A39]'
            />
            <Image 
              src={Search}
              alt="search icon"
              className="w-4 absolute top-7 left-4"
            />
          </div>
        </div>

        <div className='rounded-xl border border-gray-100 mt-8 bg-white p-4'>
            <div className="flex flex-col">
              <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                  <div className="overflow-hidden">
                    <table className="min-w-full text-left text-sm font-light">
                      <thead className="border-b font-medium text-green text-base">
                        <tr>
                          <th scope="col" className="px-6 py-4">No</th>
                          <th scope="col" className="px-6 py-4">Nama Peserta</th>
                          <th scope="col" className="px-6 py-4">NIK Peserta</th>
                          <th scope="col" className="px-6 py-4">Pembelajaran Selesai</th>
                          <th scope="col" className="px-6 py-4">Jumlah Sertifikat</th>
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

export default ParticipantAchievement