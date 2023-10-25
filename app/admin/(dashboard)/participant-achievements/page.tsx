import Image from "next/image"
import Link from "next/link"
import Search from "@/public/assets/icons/search.svg"

const ParticipantAchievement = () => {
  return (
    <div className='min-h-screen mb-8 px-4 md:px-8 xl:px-14 pt-10'>
        <div className="flex justify-between items-center">
            <h1 className="font-bold text-xl md:text-2xl text-gray-800">Pencapaian Peserta</h1>
            <Link href="/admin/courses/new-course" className="flex justify-center flex-row items-center gap-2 w-32 md:w-44 text-white font-medium py-[6px] sm:py-[10px] rounded-lg md:rounded-xl bg-green">
                <span className="text-xs sm:text-sm">Ekspor ke excel</span>
            </Link>
        </div>

        <div className="flex justify-start md:flex-row flex-col items-start md:items-center gap-2 md:gap-6 mt-8">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Cari Peserta..." 
              className='mt-4 border border-slate-300 py-[6px] pl-12 pr-4 rounded-3xl xl:w-60 outline-[#015A39]'
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
              className='mt-4 border border-slate-300 py-[6px] pl-12 pr-4 rounded-3xl xl:w-60 outline-[#015A39]'
            />
            <Image 
              src={Search}
              alt="search icon"
              className="w-4 absolute top-7 left-4"
            />
          </div>
        </div>

        <div className='rounded-2xl border border-gray-200 mt-8 bg-white p-4 overflow-hidden'>
            <div className="flex flex-col">
              <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                  <div className="overflow-hidden">
                    <table className="min-w-full text-left text-sm font-light">
                      <thead className="border-b font-medium text-green text-xs lg:text-base">
                        <tr>
                          <th scope="col" className="px-3 xl:px-6 py-2 xl:py-4">No</th>
                          <th scope="col" className="px-3 xl:px-6 py-2 xl:py-4">Nama Peserta</th>
                          <th scope="col" className="px-3 xl:px-6 py-2 xl:py-4">Jenis Kelamin</th>
                          <th scope="col" className="px-3 xl:px-6 py-2 xl:py-4">NIK Peserta</th>
                          <th scope="col" className="px-3 xl:px-6 py-2 xl:py-4">Pembelajaran Selesai</th>
                          <th scope="col" className="px-3 xl:px-6 py-2 xl:py-4">Jumlah Sertifikat</th>
                          <th scope="col" className="px-3 xl:px-6 py-2 xl:py-4">Detail</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-600 text-xs lg:text-sm font-normal">
                        <tr
                          className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:hover:bg-gray-100">
                          <td className="whitespace-nowrap px-3 xl:px-6 py-2 xl:py-4 font-medium">1</td>
                          <td className="whitespace-nowrap px-3 xl:px-6 py-2 xl:py-4">Abdul salim</td>
                          <td className="whitespace-nowrap px-3 xl:px-6 py-2 xl:py-4">Laki-laki</td>
                          <td className="whitespace-nowrap px-3 xl:px-6 py-2 xl:py-4">23413413413434</td>
                          <td className="whitespace-nowrap px-3 xl:px-6 py-2 xl:py-4">2</td>
                          <td className="whitespace-nowrap px-3 xl:px-6 py-2 xl:py-4">2</td>
                          <td className="whitespace-nowrap px-3 xl:px-6 py-2 xl:py-4">
                            <Link href="/admin/participant-achievements/abdul" className="bg-green p-2 rounded-md flex justify-center itesms-center text-white text-sm">Detail</Link>
                          </td>
                        </tr>

                        <tr
                          className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:hover:bg-gray-100">
                          <td className="whitespace-nowrap px-3 xl:px-6 py-2 xl:py-4 font-medium">2</td>
                          <td className="whitespace-nowrap px-3 xl:px-6 py-2 xl:py-4">Jihyo</td>
                          <td className="whitespace-nowrap px-3 xl:px-6 py-2 xl:py-4">Perempuan</td>
                          <td className="whitespace-nowrap px-3 xl:px-6 py-2 xl:py-4">23413413413434</td>
                          <td className="whitespace-nowrap px-3 xl:px-6 py-2 xl:py-4">2</td>
                          <td className="whitespace-nowrap px-3 xl:px-6 py-2 xl:py-4">2</td>
                          <td className="whitespace-nowrap px-3 xl:px-6 py-2 xl:py-4">
                            <Link href="/admin/participant-achievements/jihyo" className="bg-green p-2 rounded-md flex justify-center itesms-center text-white text-sm">Detail</Link>
                          </td>
                        </tr>

                        <tr
                          className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:hover:bg-gray-100">
                          <td className="whitespace-nowrap px-3 xl:px-6 py-2 xl:py-4 font-medium">3</td>
                          <td className="whitespace-nowrap px-3 xl:px-6 py-2 xl:py-4">Smith sebastian</td>
                          <td className="whitespace-nowrap px-3 xl:px-6 py-2 xl:py-4">Laki-laki</td>
                          <td className="whitespace-nowrap px-3 xl:px-6 py-2 xl:py-4">23413413413434</td>
                          <td className="whitespace-nowrap px-3 xl:px-6 py-2 xl:py-4">2</td>
                          <td className="whitespace-nowrap px-3 xl:px-6 py-2 xl:py-4">2</td>
                          <td className="whitespace-nowrap px-3 xl:px-6 py-2 xl:py-4">
                            <Link href="/admin/participant-achievements/smith" className="bg-green p-2 rounded-md flex justify-center itesms-center text-white text-sm">Detail</Link>
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