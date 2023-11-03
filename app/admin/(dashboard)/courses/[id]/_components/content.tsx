"use client";

import React, { useState } from "react";
import Link from "next/link";

import { rc } from "../../../../../../lib/utils";
import { ITrainingData } from "../../../../../(user)/courses/page";
import { ArrowLeftIcon, CheckIcon, Cross1Icon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";
import { Button, buttonVariants } from "../../../../../../components/ui/button";
import moment from "moment";
import { toast } from "sonner";
import LoadingIcon from "../../../../../../components/icons/loading-icon";

function AdminCourseDetailContent({
  trainingData,
  adminAK,
}: {
  trainingData: ITrainingData | null;
  adminAK: string;
}) {
  const router = useRouter();
  const [markAttendLoading, setMarkAttendLoading] = useState(false);

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

  return (
    <div className="min-h-screen mb-8 px-4 md:px-8 xl:px-14 pt-10">
      <div className="flex gap-4 items-center">
        <ArrowLeftIcon
          onClick={() => router.back()}
          className="hover:opacity-80 cursor-pointer"
        />
        <h2>Course Detail</h2>
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
                          <td className="flex items-center whitespace-nowrap px-6 py-4 space-x-2">
                            <Button
                              onClick={() =>
                                router.push(`/admin/participant/${data.id}`)
                              }
                              className={rc(
                                buttonVariants({ variant: "default" })
                              )}
                            >
                              Show document
                            </Button>

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
                                  "Mark as attend"
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
                                  Cancel mark
                                </Button>{" "}
                              </div>
                            ) : (
                              <div className="flex gap-1 items-center">
                                <Cross1Icon className="text-red-500" />
                                <p className="text-red-500">Not included</p>
                              </div>
                            )}
                          </td>
                        </tr>
                      </tbody>
                    );
                  })
                ) : (
                  <p className="text-center w-full">No participant</p>
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
