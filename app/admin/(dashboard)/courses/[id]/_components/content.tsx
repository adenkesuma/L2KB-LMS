"use client";

import React, { useState } from "react";
import { toast } from "sonner";
import {
  ArrowLeftIcon,
  CheckIcon,
  Cross1Icon,
  DownloadIcon,
  UploadIcon,
} from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";

import { rc } from "../../../../../../lib/utils";
import { ITrainingData } from "../../../../../(user)/courses/page";
import { Button, buttonVariants } from "../../../../../../components/ui/button";
import LoadingIcon from "../../../../../../components/icons/loading-icon";
import CertificateUploadModal from "./modal";

function AdminCourseDetailContent({
  trainingData,
  adminAK,
}: {
  trainingData: ITrainingData | null;
  adminAK: string;
}) {
  const router = useRouter();
  const [markAttendLoading, setMarkAttendLoading] = useState(false);
  const [genSertiLoading, setGenSertiLoading] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  // const [selectedFile, setSelectedFile] = useState(null);

  const handleMAA = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    candidate_id: string
  ) => {
    e.preventDefault();
    setMarkAttendLoading(true);

    const get = await fetch(
      `${process.env.NEXT_PUBLIC_P2KB_API}/admin/training-candidate/${candidate_id}/mark-attend`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${adminAK}`,
        },
      }
    );

    if (get.ok) {
      toast.success("Attendee mark as attend");
      setMarkAttendLoading(false);
    } else {
      toast.error("Failed to mark as attend");
      setMarkAttendLoading(false);
    }
    window.location.reload();
  };

  const closeModal = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="mt-10 relative">
      <div className="flex gap-4 items-center">
        <h2 className="text-xl font-semibold text-gray-700">
          Peserta Pelatihan
        </h2>
      </div>
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
                      Email
                    </th>
                    <th scope="col" className="px-3 xl:px-6 p-2 xl:py-4">
                      Status
                    </th>
                    <th scope="col" className="px-3 xl:px-6 p-2 xl:py-4">
                      Detail
                    </th>
                    <th scope="col" className="px-3 xl:px-6 p-2 xl:py-4">
                      Status
                    </th>
                    <th scope="col" className="px-3 xl:px-6 p-2 xl:py-4">
                      Generate Sertifikat
                    </th>
                    <th scope="col" className="px-3 xl:px-6 p-2 xl:py-4">
                      Upload Sertifikat Manual
                    </th>
                  </tr>
                </thead>
                {trainingData?.trainingCandidates.length !== 0 ? (
                  trainingData?.trainingCandidates.map((data, i) => {
                    return (
                      <tbody
                        className="text-gray-600 text-xs lg:text-sm font-normal"
                        key={i}
                      >
                        <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:hover:bg-gray-100">
                          <td className="whitespace-nowrap px-3 xl:px-6 py-2 xl:py-4 font-medium">
                            {i + 1}
                          </td>
                          <td className="whitespace-nowrap px-3 xl:px-6 py-2 xl:py-4">
                            {data?.user?.nama}
                          </td>
                          <td className="whitespace-nowrap px-3 xl:px-6 py-2 xl:py-4">
                            {data?.user?.email}
                          </td>
                          <td className="whitespace-nowrap px-3 xl:px-6 py-2 xl:py-4">
                            <span
                              className={rc(
                                "font-medium p-2 text-sm",
                                data.accepted !== null
                                  ? data.accepted
                                    ? "text-green bg-emerald-100 rounded-lg"
                                    : "text-red-500 bg-red-100 rounded-lg"
                                  : "text-gray-600 bg-gray-100 rounded-lg"
                              )}
                            >
                              {data.accepted !== null
                                ? data.accepted
                                  ? "Disetujui"
                                  : "Ditolak"
                                : "Belum diaktivasi"}
                            </span>
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 space-x-4">
                            <Button
                              onClick={() =>
                                router.push(`/admin/participant/${data.id}`)
                              }
                              className={rc(
                                buttonVariants({ variant: "default" })
                              )}
                            >
                              Lihat Data
                            </Button>
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 space-x-4">
                            {!data.attend && data.accepted ? (
                              <Button
                                variant="default"
                                disabled={
                                  (new Date(trainingData.training_start) <
                                    new Date(Date.now()) &&
                                    new Date(trainingData.training_end) >
                                      new Date(Date.now())) ||
                                  markAttendLoading
                                }
                                onClick={(e) => handleMAA(e, data.id)}
                              >
                                {markAttendLoading ? (
                                  <>
                                    <LoadingIcon /> Loading
                                  </>
                                ) : (
                                  "Tandai Sebagai Hadir"
                                )}
                              </Button>
                            ) : data.accepted ? (
                              <div className="flex gap-1 items-center">
                                {/* <CheckIcon className="text-green" /> */}
                                {/* <p className="text-green">Attended</p> */}
                                <Button
                                  onClick={(e) => handleMAA(e, data.id)}
                                  variant="outline"
                                >
                                  {/* Cancel mark */}
                                  Batalkan Kehadiran
                                </Button>{" "}
                              </div>
                            ) : (
                              <div className="flex gap-1 items-center">
                                <Cross1Icon className="text-red-500" />
                                <p className="text-red-500 text-sm font-medium">
                                  Pendaftaran Ditolak
                                </p>
                              </div>
                            )}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 space-x-4">
                            {data.certificateGenerated && data.attend ? (
                              <p className="text-green bg-opacity-green text-xs font-medium p-2 rounded-xl text-center">
                                Sertifikat Telah Diterima
                              </p>
                            ) : (
                              <Button
                                onClick={async (e) => {
                                  e.preventDefault();
                                  setGenSertiLoading(true);

                                  const post = await fetch(
                                    `${process.env.NEXT_PUBLIC_P2KB_API}/admin/certificate/generate`,
                                    {
                                      method: "POST",
                                      headers: {
                                        "Content-Type": "application/json",
                                         Authorization: `Bearer ${adminAK}`
                                      },
                                      body: JSON.stringify({
                                        training_id: trainingData.id,
                                        candidate_id: data.id,
                                      }),
                                    }
                                  );
                                  const gen = await post.json();

                                  if (post.ok && gen.statusCode === 200) {
                                    setGenSertiLoading(false);
                                    toast.success(
                                      "Berhasil generate sertifikat dari peserta " +
                                        data.nama_lengkap
                                    );
                                  } else {
                                    setGenSertiLoading(false);
                                    toast.error("Gagal mengenerate sertifikat");
                                  }
                                }}
                                className={
                                  rc(buttonVariants({ variant: "default" })) +
                                  `flex items-center gap-2 text-sm font-medium`
                                }
                                disabled={!data.attend}
                              >
                                <UploadIcon />{" "}
                                {genSertiLoading ? (
                                  <LoadingIcon />
                                ) : (
                                  "Luncurkan Sertifikat"
                                )}
                              </Button>
                            )}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 space-x-4">
                          {data.certificateGenerated && data.attend ? (
                              <p className="text-green bg-opacity-green text-xs font-medium p-2 rounded-xl text-center">
                                Sertifikat Telah Diterima
                              </p>
                            ) : (
                              <Button
                                className="flex gap-2 items-center"
                                onClick={() => setIsPopupOpen(true)}
                                disabled={!data.attend}
                              >
                                <UploadIcon />{" "}
                                {genSertiLoading ? (
                                  <LoadingIcon />
                                ) : (
                                  "Upload Sertifikat"
                                )}
                              </Button>
                            )}
                          </td>
                        </tr>

                        {isPopupOpen && 
                          <CertificateUploadModal
                            isOpen={isPopupOpen}
                            onClose={closeModal}
                            adminAK={adminAK}
                            trainingId={data?.training_id}
                            candidateId={data?.id}
                          />
                        }
                      </tbody>
                    );
                  })
                ) : (
                  <tbody>
                    <tr className="text-sm font-medium text-gray-800">
                      <td className="p-8" colSpan={5}>
                        No Participant
                      </td>
                    </tr>
                  </tbody>
                )}
              </table>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default AdminCourseDetailContent;
