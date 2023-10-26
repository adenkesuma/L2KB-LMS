import Image from "next/image";

import Sip from "@/public/assets/sip.jpg";
import { getOneTrainingCandidate } from "../../../../../lib/services/training-candidate.service";
import { getCookie } from "../../../../../lib/services/cookie.service";
import { Button } from "../../../../../components/ui/button";

const ActivateUserDetail = async ({ params }: { params: { id: string } }) => {
  const adminAK = await getCookie("adminAK");
  const trainingCandidate = await getOneTrainingCandidate(adminAK, params.id);

  return (
    <div className="min-h-screen mb-8 px-4 md:px-8 xl:px-14 pt-10">
      <h1 className="font-bold text-xl md:text-2xl text-gray-800">
        Informasi peserta
      </h1>

      <div className="mt-6 gap-10 pt-4 px-4 pb-4 xl:pt-8 xl:px-8 xl:pb-8 border border-gray-200 rounded-xl bg-white">
        <div className="flex flex-col items-start gap-3 lg:gap-0 lg:flex-row lg:justify-between lg:items-center">
          <h2 className="flex flex-col gap-1 xl:gap-2 text-xs md:text-sm font-semibod text-gray-600">
            <span>Nama Lengkap: </span>
            <span className="font-bold text-sm lg:text-base text-green">
              {trainingCandidate?.nama_lengkap}
            </span>
          </h2>
          <h2 className="flex flex-col gap-1 xl:gap-2 text-xs md:text-sm font-semibod text-gray-600">
            <span>Nama Lengkap Beserta Gelar:</span>
            <span className="text-sm lg:text-base font-bold text-green">
              {trainingCandidate?.nama_lengkap_gelar}
            </span>
          </h2>
        </div>

        <div className="mt-8">
          <div className="flex flex-col gap-2">
            <label className="font-medium text-xs text-gray-600 lg:text-sm">
              Pesan (akan dikirim ke email peserta)
            </label>
            <textarea
              rows={6}
              cols={50}
              className="border rounded-xl p-2 border-gray-300"
            />
          </div>

          <div className="grid grid-cols-2 gap-x-2 mt-3 ">
            <Button>
              Terima peserta
            </Button>
            <Button 
              variant={"outline"}
            >
              Tolak peserta
            </Button>
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-gray-200 mt-6 bg-white p-4">
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full text-left text-sm font-light">
                  <thead className="border-b font-medium text-green text-base">
                    <tr>
                      <th scope="col" className="px-3 xl:px-6 py-2 xl:py-4">
                        No
                      </th>
                      <th scope="col" className="px-3 xl:px-6 py-2 xl:py-4">
                        Foto
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600 text-sm font-normal">
                    <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:hover:bg-gray-100">
                      <td className="whitespace-nowrap px-3 xl:px-6 py-2 xl:py-4 font-medium w-2/4">
                        <div className="flex flex-col gap-2">
                          <span className="text-sm">No SIP:</span>
                          <span className="text-base text-green font-semibold">
                            {trainingCandidate?.no_sip}
                          </span>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 xl:px-6 py-2 xl:py-4 w-2/4">
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

                    <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:hover:bg-gray-100">
                      <td className="whitespace-nowrap px-3 xl:px-6 py-2 xl:py-4 font-medium w-2/4">
                        <div className="flex flex-col gap-2">
                          <span className="text-sm">No STR:</span>
                          <span className="text-base text-green font-semibold">
                            {trainingCandidate?.no_str}
                          </span>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 xl:px-6 py-2 xl:py-4 w-2/4">
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

                    <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:hover:bg-gray-100">
                      <td className="whitespace-nowrap px-3 xl:px-6 py-2 xl:py-4 font-medium w-2/4">
                        <div className="flex flex-col gap-2">
                          <span className="text-sm">No SERKOM:</span>
                          <span className="text-base text-green font-semibold">
                            {trainingCandidate?.no_serkom}
                          </span>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 xl:px-6 py-2 xl:py-4 w-2/4">
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

                    <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:hover:bg-gray-100">
                      <td className="whitespace-nowrap px-3 xl:px-6 py-2 xl:py-4 font-medium w-2/4">
                        <div className="flex flex-col gap-2">
                          <span className="text-sm">No Ijazah:</span>
                          <span className="text-base text-green font-semibold">
                            {trainingCandidate?.no_ijazah}
                          </span>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 xl:px-6 py-2 xl:py-4 w-2/4">
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

                    <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:hover:bg-gray-100">
                      <td className="whitespace-nowrap px-3 xl:px-6 py-2 xl:py-4 font-medium w-2/4">
                        <div className="flex flex-col gap-2">
                          <span className="text-sm">
                            No Kartu Anggota PDKI:
                          </span>
                          <span className="text-base text-green font-semibold">
                            {trainingCandidate?.no_pdki}
                          </span>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 xl:px-6 py-2 xl:py-4 w-2/4">
                        <div className="flex flex-col gap-2">
                          <span className="text-sm">
                            Foto Kartu Anggota PDKI
                          </span>
                          <Image
                            src={Sip}
                            alt="foto sip"
                            className="w-52 bg-cover bg-bottom object-cover"
                          />
                        </div>
                      </td>
                    </tr>

                    <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:hover:bg-gray-100">
                      <td className="whitespace-nowrap px-3 xl:px-6 py-2 xl:py-4 font-medium w-2/4">
                        <div className="flex flex-col gap-2">
                          <span className="text-sm">No KTP:</span>
                          <span className="text-base text-green font-semibold">
                            {trainingCandidate?.no_ktp}
                          </span>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 xl:px-6 py-2 xl:py-4 w-2/4">
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

                    <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:hover:bg-gray-100">
                      <td className="whitespace-nowrap px-3 xl:px-6 py-2 xl:py-4 font-medium w-2/4">
                        <div className="flex flex-col gap-2">
                          <span className="text-sm">No ATM:</span>
                          <span className="text-base text-green font-semibold">
                            {trainingCandidate?.no_atm}
                          </span>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 xl:px-6 py-2 xl:py-4 w-2/4">
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
  );
};

export default ActivateUserDetail;
