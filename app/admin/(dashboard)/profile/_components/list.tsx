"use client"

import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";

import NoDataImage from "@/public/assets/images/no-data.png"
import { UserData } from "@/app/(user)/(app)/profile/page";

const StatusAnggota = [
  { key: "anggota_biasa", value: "anggota biasa" },
  { key: "anggota_luar_biasa", value: "anggota luar biasa" },
  { key: "anggota_muda", value: "anggota muda" }
];

const ProfileList = ({ adminAK } : { adminAK: string }) => {
  const [usersProfile, setUsersProfile] = useState<UserData[]>()
  useEffect(() => {
      const fetchUsersProfile = async () => {
        try {
          const response = await axios.get(
            `${process.env.NEXT_PUBLIC_P2KB_API}/admin/profile`,
            {
              headers: {
                Authorization: `Bearer ${adminAK}`,
              },
            }
          );
          if (response.status === 200) {
            
            setUsersProfile(response.data.data);
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      };
      fetchUsersProfile();
    }, [adminAK]);
    
  const sortedData = usersProfile?.sort((a, b) => {
    const date1 = new Date(a.createdAt).getTime();
    const date2 = new Date(b.createdAt).getTime();
    return date2 - date1;
  })

  return (
    <div>
      {usersProfile?.length === 0 ? (
            <Image
              src={NoDataImage}
              alt="no data"
              className="w-3/4 mx-auto"
              width={1000}
              height={1000}
            />
          ) : (
            <div className="rounded-xl overflow-hidden sm:rounded-2xl border border-gray-200 mt-4 sm:mt-8 bg-white p-2 sm:p-4">
              <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                      <table className="min-w-full text-left text-sm font-light">
                        <thead className="border-b font-medium text-green text-xs sm:text-sm">
                          <tr>
                            <th scope="col" className="px-6 py-4">
                                No
                            </th>
                            <th scope="col" className="px-6 py-4">
                                Nama
                            </th>
                            <th scope="col" className="px-6 py-4">
                                Email
                            </th>
                            <th scope="col" className="px-6 py-4">
                              Status Anggota
                            </th>
                            <th scope="col" className="px-6 py-4">
                                SKP
                            </th>
                            <th scope="col" className="px-6 py-4">
                                Detail
                            </th>
                          </tr>
                        </thead>

                        <tbody className="text-gray-600 text-xs sm:text-sm font-normal">
                          {sortedData?.map((item, idx) => (
                            <tr key={item?.id} className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:hover:bg-gray-100">
                              <td className="whitespace-nowrap px-6 py-4">
                                {idx+1}
                              </td>
                              <td className="whitespace-nowrap px-6 py-4">
                                {item?.nama}
                              </td>
                              <td className="whitespace-nowrap px-6 py-4">
                                {item?.email}
                              </td>
                              <td className="whitespace-nowrap px-6 py-4">
                                {StatusAnggota.map((status) => (
                                  status.key === item?.profile?.status_anggota && status.value 
                                ))}
                              </td>
                              <td className="whitespace-nowrap px-6 py-4">
                                {item?.skp}
                              </td>
                              <td className="whitespace-nowrap px-6 py-4">
                                <Link href={`/admin/profile/${item?.id}`} className="bg-green px-4 text-white font-medium text-xs lg:text-sm py-2 rounded-lg">
                                    Lihat detail
                                </Link>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>        
          )
        }
    </div>
  )
}

export default ProfileList