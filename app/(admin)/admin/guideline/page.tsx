import Image from 'next/image'
import Link from 'next/link'
import Guide from "@/public/assets/panduan.jpg"

const Guideline = () => {
  return (
    <div className='min-h-screen p-12'>
        <div className="flex justify-between items-center">
            <h1 className="font-bold text-[38px] text-gray-800">Panduan Pelatihan</h1>
            <Link href="/admin/guideline/new-guideline" className="flex justify-center items-center gap-4 mt-12 text-center w-[240px] text-white font-medium p-2 rounded-xl bg-green">
                <span className="text-2xl">+</span>
                <span>Tambah Panduan</span>
            </Link>
        </div>

        <div className='mt-12'>
            <h2 className="font-semibold text-gray-800 mb-8">
                Panduan Yang Telah Di Upload
            </h2>

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
                          <th scope="col" className="px-6 py-4">Panduan</th>
                          <th scope='col' className="px-6 py-4">Tanggal Di Upload</th>
                          <th scope='col' className="px-6 py-4">Aksi</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-600 text-sm font-normal">
                        <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:hover:bg-gray-100">
                          <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
                          <td className="whitespace-nowrap px-6 py-4">
                                <Image 
                                    src={Guide}
                                    alt="guideline image"
                                    className='w-52'
                                />
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 font-medium">22 Oktober 2023</td>
                          <td className='whitespace-nowrap px-6 py-4 font-medium'>
                            <button className='text-white bg-red-600 rounded-xl py-2 px-4'>
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