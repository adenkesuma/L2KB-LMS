import Image from "next/image";
import Link from "next/link";
import Edit from "@/public/assets/icons/edit.svg";

const ActivateUser = () => {
  return (
    <div className='min-h-screen mb-8 px-4 md:px-8 xl:px-14 pt-10'>
      <h1 className="font-bold text-xl md:text-2xl text-gray-800">Aktivasi Pengguna</h1>
      <div className='rounded-2xl border border-gray-200 mt-6 bg-white p-4 overflow-hidden'>
          <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                  <table className="min-w-full text-left text-sm font-light">
                    <thead className="border-b font-medium text-green text-base">
                      <tr>
                        <th scope="col" className="px-3 xl:px-6 p-2 xl:py-4">No</th>
                        <th scope="col" className="px-3 xl:px-6 p-2 xl:py-4">Nama</th>
                        <th scope="col" className="px-3 xl:px-6 p-2 xl:py-4">No SIP</th>
                        <th scope="col" className="px-3 xl:px-6 p-2 xl:py-4">No STR</th>
                        <th scope="col" className="px-3 xl:px-6 p-2 xl:py-4">No SERKOM</th>
                        <th scope="col" className="px-3 xl:px-6 p-2 xl:py-4">Status</th>
                        <th scope="col" className="px-3 xl:px-6 p-2 xl:py-4">Detail</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-600 text-sm font-normal">
                      <tr
                        className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:hover:bg-gray-100">
                        <td className="whitespace-nowrap px-3 xl:px-6 py-2 xl:py-4 font-medium">1</td>
                        <td className="whitespace-nowrap px-3 xl:px-6 py-2 xl:py-4">Abdul Salam</td>
                        <td className="whitespace-nowrap px-3 xl:px-6 py-2 xl:py-4">413434123434234</td>
                        <td className="whitespace-nowrap px-3 xl:px-6 py-2 xl:py-4">2342342342341234</td>
                        <td className="whitespace-nowrap px-3 xl:px-6 py-2 xl:py-4">134234234234</td>
                        <td className="whitespace-nowrap px-3 xl:px-6 py-2 xl:py-4">
                          <span className="text-red-500 bg-red-100 rounded-sm p-2 text-sm">Belum di Aktivasi</span>
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
  );
};

export default ActivateUser;
