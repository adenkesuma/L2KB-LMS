import Image from "next/image"
import Link from "next/link"
import Sip from "@/public/assets/sip.jpg"

const ActivateUserDetail = () => {
  return (
    <div className='p-12 min-h-screen'>
        <h1 className="font-bold text-[38px] text-gray-800">Aktivasi Sekarang</h1>

        <div className='mt-8 gap-10 pt-8 px-8 pb-8 rounded-2xl bg-white'>
            <div>
                <div className="flex flex-row justify-between items-center">
                    <h2 className=" classname
                    flex flex-col gap-2 text-sm font-semibod text-gray-600">
                        <span>Nama Lengkap: </span>
                        <span className='font-bold text-base text-green'>Abdul Salam</span>
                    </h2>
                    <h2 className=" classname
                    flex flex-col gap-2 text-sm font-semibod text-gray-600">
                        <span>Nama Lengkap Beserta Gelar:</span> 
                        <span className='text-base font-bold text-green'>Abdul Salam Almansyur S.Kom S.pdi</span>
                    </h2>
                </div>

                <div className="mt-8">
                    <div className='flex flex-col gap-2'>
                        <label className='font-medium text-sm'>Pesan</label>
                        <textarea rows={6} cols={50} className="border rounded-xl p-2 border-opacity-green"></textarea>
                    </div>

                    <button className="flex justify-center items-center gap-4 mt-12 text-center w-[240px] text-white font-medium p-2 rounded-xl bg-green">
                        Aktivasi User
                    </button>
                </div>
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
                          <th scope="col" className="px-6 py-4">Foto</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-600 text-sm font-normal">
                        <tr
                          className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:hover:bg-gray-100">
                          <td className="whitespace-nowrap px-6 py-4 font-medium w-2/4">
                            <div className="flex flex-col gap-2">
                                <span className="text-sm">No SIP:</span>
                                <span className="text-base text-green font-semibold">213131313123132</span>
                            </div>
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 w-2/4">
                            <div className="flex flex-col gap-2">
                                <span className="text-sm">Foto SIP</span>
                                <Image 
                                    src={Sip}
                                    alt="foto sip"
                                    className="w-52 bg-cover bg-bottom object-cover"
                                />
                            </div>
                          </td>
                        </tr>   

                        <tr
                          className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:hover:bg-gray-100">
                          <td className="whitespace-nowrap px-6 py-4 font-medium w-2/4">
                            <div className="flex flex-col gap-2">
                                <span className="text-sm">No STR:</span>
                                <span className="text-base text-green font-semibold">213131313123132</span>
                            </div>
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 w-2/4">
                            <div className="flex flex-col gap-2">
                                <span className="text-sm">Foto STR</span>
                                <Image 
                                    src={Sip}
                                    alt="foto sip"
                                    className="w-52 bg-cover bg-bottom object-cover"
                                />
                            </div>
                          </td>
                        </tr>  

                        <tr
                          className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:hover:bg-gray-100">
                          <td className="whitespace-nowrap px-6 py-4 font-medium w-2/4">
                            <div className="flex flex-col gap-2">
                                <span className="text-sm">No SERKOM:</span>
                                <span className="text-base text-green font-semibold">213131313123132</span>
                            </div>
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 w-2/4">
                            <div className="flex flex-col gap-2">
                                <span className="text-sm">Foto SERKOM</span>
                                <Image 
                                    src={Sip}
                                    alt="foto sip"
                                    className="w-52 bg-cover bg-bottom object-cover"
                                />
                            </div>
                          </td>
                        </tr>  

                        <tr
                          className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:hover:bg-gray-100">
                          <td className="whitespace-nowrap px-6 py-4 font-medium w-2/4">
                            <div className="flex flex-col gap-2">
                                <span className="text-sm">No Ijazah:</span>
                                <span className="text-base text-green font-semibold">213131313123132</span>
                            </div>
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 w-2/4">
                            <div className="flex flex-col gap-2">
                                <span className="text-sm">Foto Ijazah</span>
                                <Image 
                                    src={Sip}
                                    alt="foto sip"
                                    className="w-52 bg-cover bg-bottom object-cover"
                                />
                            </div>
                          </td>
                        </tr> 

                        <tr
                          className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:hover:bg-gray-100">
                          <td className="whitespace-nowrap px-6 py-4 font-medium w-2/4">
                            <div className="flex flex-col gap-2">
                                <span className="text-sm">No Kartu Anggota PDKI:</span>
                                <span className="text-base text-green font-semibold">213131313123132</span>
                            </div>
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 w-2/4">
                            <div className="flex flex-col gap-2">
                                <span className="text-sm">Foto Kartu Anggota PDKI</span>
                                <Image 
                                    src={Sip}
                                    alt="foto sip"
                                    className="w-52 bg-cover bg-bottom object-cover"
                                />
                            </div>
                          </td>
                        </tr>  

                        <tr
                          className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:hover:bg-gray-100">
                          <td className="whitespace-nowrap px-6 py-4 font-medium w-2/4">
                            <div className="flex flex-col gap-2">
                                <span className="text-sm">No KTP:</span>
                                <span className="text-base text-green font-semibold">213131313123132</span>
                            </div>
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 w-2/4">
                            <div className="flex flex-col gap-2">
                                <span className="text-sm">Foto KTP</span>
                                <Image 
                                    src={Sip}
                                    alt="foto sip"
                                    className="w-52 bg-cover bg-bottom object-cover"
                                />
                            </div>
                          </td>
                        </tr>  

                        <tr
                          className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:hover:bg-gray-100">
                          <td className="whitespace-nowrap px-6 py-4 font-medium w-2/4">
                            <div className="flex flex-col gap-2">
                                <span className="text-sm">No ATM:</span>
                                <span className="text-base text-green font-semibold">213131313123132</span>
                            </div>
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 w-2/4">
                            <div className="flex flex-col gap-2">
                                <span className="text-sm">Foto Bukti Pembayaran</span>
                                <Image 
                                    src={Sip}
                                    alt="foto sip"
                                    className="w-52 bg-cover bg-bottom object-cover"
                                />
                            </div>
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