import Link from "next/link"

const ActivateUserDetail = () => {
  return (
    <div className='p-12 min-h-screen'>
        <h1 className="font-bold text-[38px] text-gray-800">Aktivasi Sekarang</h1>

        <div className='grid grid-cols-2 mt-8 gap-10 pt-8 px-8 pb-8 rounded-2xl bg-white'>
            <div className='flex justify-start gap-2 items-start flex-col'>
                <h2 className="text-lg font-semibod text-gray-600">Nama Lengkap: <span className='font-bold text-green'>Abdul Salam</span></h2>
                <h2 className="text-lg font-semibod text-gray-600">Nama Lengkap Beserta Gelar: <span className='font-bold text-green'>Abdul Salam</span></h2>
            </div>
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
                          <th scope="col" className="px-6 py-4">Nama</th>
                          <th scope="col" className="px-6 py-4">No SIP</th>
                          <th scope="col" className="px-6 py-4">No STR</th>
                          <th scope="col" className="px-6 py-4">No SERKOM</th>
                          <th scope="col" className="px-6 py-4">Status</th>
                          <th scope="col" className="px-6 py-4">Detail</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-600 text-sm font-normal">
                        <tr
                          className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:hover:bg-gray-100">
                          <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
                          <td className="whitespace-nowrap px-6 py-4">Abdul Salam</td>
                          <td className="whitespace-nowrap px-6 py-4">413434123434234</td>
                          <td className="whitespace-nowrap px-6 py-4">2342342342341234</td>
                          <td className="whitespace-nowrap px-6 py-4">134234234234</td>
                          <td className="whitespace-nowrap px-6 py-4">
                            <span className="text-red-500 bg-red-100 rounded-md p-2 text-sm">Belum di Aktivasi</span>
                          </td>
                          <td className="whitespace-nowrap px-6 py-4">
                            <Link href="/admin/activate-user/abdul" className="bg-green p-2 rounded-md flex justify-center itesms-center text-white text-sm">Detail</Link>
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

export default ActivateUserDetail