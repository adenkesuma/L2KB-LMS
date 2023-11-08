"use client";

import React, { useEffect, useState } from "react";
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

  
  const [img, setImg] = useState(
    `${APP_URL}/admin/p2kb/documents/training-candidate/${trainingCandidate?.id}/${fileList?.paid}`
  );

  useEffect(() => {
    setImg(
      `${APP_URL}/admin/p2kb/documents/training-candidate/${trainingCandidate?.id}/${fileList?.paid}`
    );
  }, [trainingCandidate]);


  return (
    <>
      <div className="mt-6 gap-10 pt-4 px-4 pb-4 xl:pt-8 xl:px-8 xl:pb-8 border border-gray-200 rounded-xl bg-white flex">
        <div className="w-1/3">
          <div className="flex flex-col items-start gap-3 lg:gap-0">
            <h1 className="flex flex-row mb-1 gap-1 xl:gap-2 text-sm md:text-xl font-semibold text-gray-600">
              <span>Nama Lengkap: </span>
              <span className="font-bold text-green">
                {trainingCandidate?.user?.nama}
              </span>
            </h1>
            <p className="flex flex-row gap-1 xl:gap-2 text-xs md:text-sm font-medium text-gray-600">
              <span>Email: </span>
              <span className="text-sm lg:text-base font-medium text-green">
                {trainingCandidate?.user?.email}
              </span>
            </p>
            <p className="flex flex-row gap-1 xl:gap-2 text-xs md:text-sm font-medium text-gray-600">
              <span>Jenis Kelamin: </span>
              <span className="text-sm lg:text-base font-medium text-green">
                {trainingCandidate?.user?.profile?.jenis_kelamin}
              </span>
            </p>
            <p className="flex flex-row gap-1 xl:gap-2 text-xs md:text-sm font-medium text-gray-600">
              <span>Status Anggota: </span>
              <span className="text-sm lg:text-base font-medium text-green">
                {trainingCandidate?.user?.profile?.status_anggota}
              </span>
            </p>
          </div>

          {trainingCandidate?.accepted === null ? ( 
            <p className="mt-8 p-8 rounded-xl border border-gray-200 text-center   text-gray-800 font-bold italic text-2xl">Menunggu Respon Admin</p>
          ) : trainingCandidate?.accepted ? (
            <p className="mt-8 p-8 rounded-xl border border-gray-200 text-center   text-green font-bold italic text-2xl">Peserta Diterima</p>
          ) : (
            <p className="mt-8 p-8 rounded-xl border border-gray-200 text-center   text-red-600 font-bold italic text-2xl">Peserta Ditolak</p>
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

        <div 
          className="w-2/3"
          onClick={() =>
            openModal(
              `${APP_URL}/admin/p2kb/documents/training-candidate/${trainingCandidate?.id}/${fileList?.paid}`
            )
          }
        >
          <div className="mb-3 flex flex-col gap-2">
            <span className="text-sm font-semibold text-gray-600">Bukti Pembayaran: </span>
          </div>

          <Image
            src={img}
            width={1000}
            height={1000}
            alt="foto sip"
            className="rounded-lg border border-gray-200 w-full bg-cover bg-bottom object-cover"
            onError={() => setImg("/assets/images/free-training.jpg")}
          />
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
