import Image from 'next/image'
import Link from 'next/link'
import Guide from "@/public/assets/panduan.jpg"

const Guideline = () => {
  return (
    <div className='min-h-screen mb-8 px-4 md:px-8 xl:px-14 pt-10'>
        <div className="flex justify-between items-center">
            <h1 className="font-bold text-xl md:text-2xl text-gray-800">Panduan Pelatihan</h1>
            <Link href="/admin/guideline/new-guideline" className="flex justify-center flex-row items-center gap-2 w-32 md:w-44 text-white font-medium py-[6px] sm:py-[10px] rounded-lg md:rounded-xl bg-green">
                <span className='text-xs sm:text-sm'>Tambah Panduan</span>
            </Link>
        </div>

        <div className='mt-10'>
            <h2 className="font-semibold text-gray-800 text-sm md:text-base mb-8">
                Panduan Yang Telah Di Upload
            </h2>

        </div>

        <div className='rounded-2xl border border-gray-200 mt-8 bg-white p-4'>
            <div className="flex flex-col">
              <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                  <div className="overflow-hidden">
                    <table className="min-w-full text-left text-sm font-light">
                      <thead className="border-b font-medium text-green text-xs lg:text-base">
                        <tr>
                          <th scope="col" className="px-3 xl:px-6 py-2 xl:py-4">No</th>
                          <th scope="col" className="px-3 xl:px-6 py-2 xl:py-4">Panduan</th>
                          <th scope='col' className="px-3 xl:px-6 py-2 xl:py-4">Tanggal Di Upload</th>
                          <th scope='col' className="px-3 xl:px-6 py-2 xl:py-4">Aksi</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-600 text-xs lg:text-sm font-normal">
                        <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:hover:bg-gray-100">
                          <td className="whitespace-nowrap px-3 xl:px-6 py-2 xl:py-4 font-medium">1</td>
                          <td className="whitespace-nowrap px-3 xl:px-6 py-2 xl:py-4">
                                <Image 
                                    src={Guide}
                                    alt="guideline image"
                                    className='w-52'
                                />
                          </td>
                          <td className="whitespace-nowrap px-3 xl:px-6 py-2 xl:py-4 font-medium">22 Oktober 2023</td>
                          <td className='whitespace-nowrap px-3 xl:px-6 py-2 xl:py-4 font-medium'>
                            <button className='text-white bg-red-600 rounded-lg py-[6px] md:py-2 px-4'>
                                Hapus panduan
                            </button>
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

export default Guideline