"use client"

import { UserData } from "@/app/(user)/(app)/profile/page";
import Image from "next/image";
import axios from "axios";
import { useState, useEffect, FC } from "react"
import ProfilePicture from "@/components/profilePicture";

type UserDetailProps = {
    params: string;
    adminAK: string | null | undefined;
}

const UserDetail: FC<UserDetailProps> = ({ params, adminAK }) => {
    const [userDetail, setUserDetail] = useState<UserData>()

    useEffect(() => {
        const fetchUserProfile = async () => {
          try {
            const response = await axios.get(
              `${process.env.NEXT_PUBLIC_P2KB_API}/admin/profile/${params}`,
              {
                headers: {
                  Authorization: `Bearer ${adminAK}`,
                },
              }
            );

            if (response.status === 200) {
              setUserDetail(response.data.data);
            }
          } catch (error) {
            console.error("Error fetching user data:", error);
          }
        };

        fetchUserProfile();
    }, [adminAK, params]);

    return (
        <div>
            <div className="border border-gray-200 p-8 rounded-xl">
                <div className="flex justify-between items-center">
                    <div className="flex justify-start gap-10 mb-8 items-center">
                        <ProfilePicture data={userDetail?.id} />
                        <div className="flex flex-col gap-1">
                            <h3 className="text-base lg:text-2xl font-bold text-gray-800">Nama: <span className="font-bold text-gray-800">{userDetail?.profile.nama_lengkap_gelar}</span></h3>
                            <p className="lg:text-base text-sm text-gray-700 font-medium">Email: {userDetail?.email}</p>
                            <p className="lg:text-base text-sm text-gray-700 font-medium">Tempat/tgl Lahir: {userDetail?.profile.tempat_lahir}. {userDetail?.profile.tanggal_lahir}</p>
                            <p className="lg:text-base text-sm text-gray-700 font-medium">SKP: {userDetail?.skp}</p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 items-center pr-8">
                        <div className="h-20 w-20 rounded-[50%] bg-green text-white flex justify-center items-center">
                            <h2 className="text-white text-4xl font-bold z-50">{userDetail?.training_candidates.length}</h2>
                        </div>
                        <p className="text-gray-700 text-sm font-medium mb-8">Total pelatihan yang di ikuti</p>
                    </div>
                </div>

                <div className="border-t border-gray-200 pt-8 flex justify-around">
                    <div className="flex flex-col gap-2">
                        <p className="lg:text-base text-sm text-gray-700 font-medium">Pendidikan: {userDetail?.profile.pendidikan}</p>
                        <p className="text-sm text-gray-700 font-medium">NPA Pdki: {userDetail?.npa_pdki ? userDetail?.npa_pdki : ""}</p>
                        <p className="text-sm text-gray-700 font-medium">Jurusan: {userDetail?.profile.jurusan}</p>
                        <p className="text-sm text-gray-700 font-medium">Status Anggota: {userDetail?.profile.status_anggota}</p>
                        <p className="text-sm text-gray-700 font-medium">Status Pegawai: {userDetail?.profile.status_pegawai}</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="text-sm text-gray-700 font-medium">Jenis Kelamin: {userDetail?.profile.jenis_kelamin}</p>
                        <p className="text-sm text-gray-700 font-medium">Pekerjaan: {userDetail?.profile.pekerjaan}</p>
                        <p className="text-sm text-gray-700 font-medium">Pangkat: {userDetail?.profile.pangkat}</p>
                        <p className="text-sm text-gray-700 font-medium">Alamat: {userDetail?.profile.alamat}</p>
                        <p className="text-sm text-gray-700 font-medium">Alamat Instansi: {userDetail?.profile.alamat_instansi}</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="text-sm text-gray-700 font-medium">Agama: {userDetail?.profile.agama}</p>
                        <p className="text-sm text-gray-700 font-medium">No Ijajah: {userDetail?.profile.no_ijazah}</p>
                        <p className="text-sm text-gray-700 font-medium">No KTP: {userDetail?.profile.no_serkom}</p>
                        <p className="text-sm text-gray-700 font-medium">NO SIP: {userDetail?.profile.no_sip}</p>
                        <p className="text-sm text-gray-700 font-medium">No STR: {userDetail?.profile.no_str}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserDetail