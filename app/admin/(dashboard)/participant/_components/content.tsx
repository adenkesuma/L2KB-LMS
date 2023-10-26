"use client";

import React from "react";
import Link from "next/link";

import { ITrainingCandidate } from "../page";
import { rc } from "../../../../../lib/utils";

function ActivateUserContent({
  trainingCandidates,
}: {
  trainingCandidates: ITrainingCandidate[];
}) {
  return (
    <div className="rounded-2xl border border-gray-200 mt-6 bg-white p-4 overflow-hidden">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-left text-sm font-light">
              <thead className="border-b font-medium text-green text-xs lg:text-sm">
                <tr>
                  <th scope="col" className="px-3 xl:px-6 p-2 xl:py-4">
                    No
                  </th>
                  <th scope="col" className="px-3 xl:px-6 p-2 xl:py-4">
                    Nama
                  </th>
                  <th scope="col" className="px-3 xl:px-6 p-2 xl:py-4">
                    No SIP
                  </th>
                  <th scope="col" className="px-3 xl:px-6 p-2 xl:py-4">
                    No STR
                  </th>
                  <th scope="col" className="px-3 xl:px-6 p-2 xl:py-4">
                    No SERKOM
                  </th>
                  <th scope="col" className="px-3 xl:px-6 p-2 xl:py-4">
                    Status
                  </th>
                  <th scope="col" className="px-3 xl:px-6 p-2 xl:py-4">
                    Detail
                  </th>
                </tr>
              </thead>
              <tbody className="text-gray-600 text-xs lg:text-sm font-normal">
                {trainingCandidates.map((data, i) => {
                  return (
                    <tr
                      key={i}
                      className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:hover:bg-gray-100"
                    >
                      <td className="whitespace-nowrap px-3 xl:px-6 py-2 xl:py-4 font-medium">
                        {i + 1}
                      </td>
                      <td className="whitespace-nowrap px-3 xl:px-6 py-2 xl:py-4">
                        {data.nama_lengkap}
                      </td>
                      <td className="whitespace-nowrap px-3 xl:px-6 py-2 xl:py-4">
                        {data.no_sip}
                      </td>
                      <td className="whitespace-nowrap px-3 xl:px-6 py-2 xl:py-4">
                        {data.no_str}
                      </td>
                      <td className="whitespace-nowrap px-3 xl:px-6 py-2 xl:py-4">
                        {data.no_serkom}
                      </td>
                      <td className="whitespace-nowrap px-3 xl:px-6 py-2 xl:py-4">
                        <span
                          className={rc(
                            "rounded-sm p-2 text-sm",
                            data.accepted !== null
                              ? data.accepted
                                ? "text-green bg-emerald-100"
                                : "text-red-500 bg-red-100"
                              : "text-gray-600 bg-gray-100"
                          )}
                        >
                          {data.accepted !== null
                            ? data.accepted
                              ? "Disetujui"
                              : "Ditolak"
                            : "Belum diaktivasi"}
                        </span>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        <Link
                          href={`/admin/participant/${data.id}`}
                          className="bg-green p-2 rounded-md flex justify-center itesms-center text-white text-sm"
                        >
                          Detail
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ActivateUserContent;
