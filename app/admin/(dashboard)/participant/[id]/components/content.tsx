"use client";

import React, { useState } from "react";
import Image from "next/image";
import { toast } from "sonner";
import axios from "axios";

import { ITrainingCandidate } from "../../page";
import { Button } from "../../../../../../components/ui/button";
import { APP_URL } from "../../../../../../lib/config";
import LoadingIcon from "../../../../../../components/icons/loading-icon";
import Modal from "./modal";

function TrainingCandidateFileContent({
  trainingCandidate,
  fileList,
  adminAK,
}: {
  trainingCandidate: ITrainingCandidate | null;
  fileList: {
    ijazah?: string;
    ktp?: string;
    serkom?: string;
    sip?: string;
    str?: string;
    paid?: string;
    pdki?: string;
  } | null;
  adminAK: string;
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedImageUrl, setSelectedImageUrl] = useState("");

  const onAccept = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setIsLoading(true);

    const acc = await axios.post(
      `${process.env.NEXT_PUBLIC_P2KB_API}/admin/training-candidate/${trainingCandidate?.id}/accept`,
      {},
      {
        headers: {
          Authorization: `Bearer ${adminAK}`,
        },
      }
    );
    if (acc.status === 201) {
      setIsLoading(false);
      toast.success("Peserta berhasil diterima");
    } else {
      setIsLoading(false);
      toast.error("Ada kesalahan pasa server");
    }
  };
  const onDecline = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setIsLoading(true);

    const dec = await axios.post(
      `${process.env.NEXT_PUBLIC_P2KB_API}/admin/training-candidate/${trainingCandidate?.id}/decline`,
      {},
      {
        headers: {
          Authorization: `Bearer ${adminAK}`,
        },
      }
    );
    if (dec.status === 201) {
      setIsLoading(false);
      toast.success("Peserta berhasil ditolak");
    } else {
      setIsLoading(false);
      toast.error("Ada kesalahan pasa server");
    }
  };

  // Fungsi untuk membuka modal
  const openModal = (imageUrl: string) => {
    setSelectedImageUrl(imageUrl);
    setModalOpen(true);
  };

  // Fungsi untuk menutup modal
  const closeModal = () => {
    setSelectedImageUrl("");
    setModalOpen(false);
  };

  return (
    <>
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

        {trainingCandidate?.accepted === null ? ( 
          <p className="mt-8 text-gray-800 font-bold italic text-2xl">Menunggu Respon Admin</p>
        ) : trainingCandidate?.accepted ? (
          <p className="mt-8 text-green font-bold italic text-2xl">Peserta Diterima</p>
        ) : (
          <p className="mt-8 text-red-600 font-bold italic text-2xl">Peserta Ditolak</p>
        )}

        <div className="mt-8">
          {trainingCandidate?.accepted !== null ? (
            <span></span>
          ) : (
            <div className="grid grid-cols-2 gap-x-2 mt-3 ">
              <Button
                onClick={async (e) => await onAccept(e)}
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <LoadingIcon /> sedang menolak
                  </>
                ) : (
                  "Terima peserta"
                )}
              </Button>
              <Button
                onClick={async (e) => await onDecline(e)}
                variant={"outline"}
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <LoadingIcon /> sedang menolak
                  </>
                ) : (
                  "Tolak peserta"
                )}
              </Button>
            </div>
          )}
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
                    <tr
                      className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:hover:bg-gray-100"
                      onClick={() =>
                        openModal(
                          `${APP_URL}/admin/p2kb/documents/training-candidate/${trainingCandidate?.id}/${fileList?.sip}`
                        )
                      }
                    >
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
                          <Image
                            src={`${APP_URL}/admin/p2kb/documents/training-candidate/${trainingCandidate?.id}/${fileList?.sip}`}
                            width={1000}
                            height={1000}
                            alt="foto sip"
                            className="w-52 bg-cover bg-bottom object-cover"
                          />
                        </div>
                      </td>
                    </tr>

                    <tr 
                      className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:hover:bg-gray-100"
                      onClick={() =>
                        openModal(
                          `${APP_URL}/admin/p2kb/documents/training-candidate/${trainingCandidate?.id}/${fileList?.str}`
                        )
                      } 
                    >
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
                          <Image
                            src={`${APP_URL}/admin/p2kb/documents/training-candidate/${trainingCandidate?.id}/${fileList?.str}`}
                            width={1000}
                            height={1000}
                            alt="foto sip"
                            className="w-52 bg-cover bg-bottom object-cover"
                          />
                        </div>
                      </td>
                    </tr>

                    <tr 
                      className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:hover:bg-gray-100"
                       onClick={() =>
                        openModal(
                          `${APP_URL}/admin/p2kb/documents/training-candidate/${trainingCandidate?.id}/${fileList?.serkom}`
                        )
                      }
                    >
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
                          <Image
                            src={`${APP_URL}/admin/p2kb/documents/training-candidate/${trainingCandidate?.id}/${fileList?.serkom}`}
                            width={1000}
                            height={1000}
                            alt="foto sip"
                            className="w-52 bg-cover bg-bottom object-cover"
                          />
                        </div>
                      </td>
                    </tr>

                    <tr 
                      className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:hover:bg-gray-100"
                      onClick={() =>
                        openModal(
                          `${APP_URL}/admin/p2kb/documents/training-candidate/${trainingCandidate?.id}/${fileList?.ijazah}`
                        )
                      }
                    >
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
                          <Image
                            src={`${APP_URL}/admin/p2kb/documents/training-candidate/${trainingCandidate?.id}/${fileList?.ijazah}`}
                            width={1000}
                            height={1000}
                            alt="foto sip"
                            className="w-52 bg-cover bg-bottom object-cover"
                          />
                        </div>
                      </td>
                    </tr>

                    <tr 
                      className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:hover:bg-gray-100"
                      onClick={() =>
                        openModal(
                          `${APP_URL}/admin/p2kb/documents/training-candidate/${trainingCandidate?.id}/${fileList?.pdki}`
                        )
                      }
                    >
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
                          <Image
                            src={`${APP_URL}/admin/p2kb/documents/training-candidate/${trainingCandidate?.id}/${fileList?.pdki}`}
                            width={1000}
                            height={1000}
                            alt="foto sip"
                            className="w-52 bg-cover bg-bottom object-cover"
                          />
                        </div>
                      </td>
                    </tr>

                    <tr 
                      className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:hover:bg-gray-100"
                      onClick={() =>
                        openModal(
                          `${APP_URL}/admin/p2kb/documents/training-candidate/${trainingCandidate?.id}/${fileList?.ktp}`
                        )
                      } 
                    >
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
                          <Image
                            src={`${APP_URL}/admin/p2kb/documents/training-candidate/${trainingCandidate?.id}/${fileList?.ktp}`}
                            width={1000}
                            height={1000}
                            alt="foto sip"
                            className="w-52 bg-cover bg-bottom object-cover"
                          />
                        </div>
                      </td>
                    </tr>

                    <tr 
                      className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:hover:bg-gray-100"
                      onClick={() =>
                        openModal(
                          `${APP_URL}/admin/p2kb/documents/training-candidate/${trainingCandidate?.id}/${fileList?.paid}`
                        )
                      }
                    >
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
                          <Image
                            src={`${APP_URL}/admin/p2kb/documents/training-candidate/${trainingCandidate?.id}/${fileList?.paid}`}
                            width={1000}
                            height={1000}
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

      {/* modal image detail */}
      {isModalOpen && (
        <Modal imageUrl={selectedImageUrl} onClose={closeModal} />
      )}
    </>
  );
}

export default TrainingCandidateFileContent;
