"use client"

import { UserData } from "@/app/(user)/(app)/profile/page";
import axios from "axios";
import { useState, useEffect, FC } from "react"
import ProfilePicture from "@/components/profilePicture";
import Image from "next/image";

type UserDetailProps = {
    params: string;
    adminAK: string | null | undefined;
}

const UserDetail: FC<UserDetailProps> = ({ params, adminAK }) => {
    const [userDetail, setUserDetail] = useState<UserData>()
    const [imageSTR, setImageSTR] = useState('');
    const [imageSIP, setImageSIP] = useState('');
    const [imageSERKOM, setImageSERKOM] = useState('');
    const [imageIjazah, setImageIjazah] = useState('');
    const [imageKartu, setImageKartu] = useState('');
    const [imageKTP, setImageKTP] = useState('');

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


    useEffect(() => {
      const fetchImage = async () => {
        try {
          const response = await fetch(
            `${process.env.NEXT_PUBLIC_P2KB_API}/documents/profile/${userDetail?.id}/str_file.jpeg`,
            {
              headers: {
                Authorization: `Bearer ${adminAK}`,
              },
            }
          );

          if (response.ok) {
            const blob = await response.blob();
            const dataUrl = URL.createObjectURL(blob);
            setImageSTR(dataUrl);
          } else {
            console.error('Failed to fetch image:', response.statusText);
          }
        } catch (error) {
          console.error('Error fetching image:', error);
        }
      };

      fetchImage();
    }, [userDetail?.id, adminAK]);

    useEffect(() => {
        const fetchImage = async () => {
          try {
            const response = await fetch(
              `${process.env.NEXT_PUBLIC_P2KB_API}/documents/profile/${userDetail?.id}/sip_file.jpeg`,
              {
                headers: {
                  Authorization: `Bearer ${adminAK}`,
                },
              }
            );
  
            if (response.ok) {
              const blob = await response.blob();
              const dataUrl = URL.createObjectURL(blob);
              setImageSIP(dataUrl);
            } else {
              console.error('Failed to fetch image:', response.statusText);
            }
          } catch (error) {
            console.error('Error fetching image:', error);
          }
        };
  
        fetchImage();
      }, [userDetail?.id, adminAK]);

      useEffect(() => {
        const fetchImage = async () => {
          try {
            const response = await fetch(
              `${process.env.NEXT_PUBLIC_P2KB_API}/documents/profile/${userDetail?.id}/ijazah_file.jpeg`,
              {
                headers: {
                  Authorization: `Bearer ${adminAK}`,
                },
              }
            );
  
            if (response.ok) {
              const blob = await response.blob();
              const dataUrl = URL.createObjectURL(blob);
              setImageIjazah(dataUrl);
            } else {
              console.error('Failed to fetch image:', response.statusText);
            }
          } catch (error) {
            console.error('Error fetching image:', error);
          }
        };
  
        fetchImage();
    }, [userDetail?.id, adminAK]);

    useEffect(() => {
      const fetchImage = async () => {
        try {
          const response = await fetch(
            `${process.env.NEXT_PUBLIC_P2KB_API}/documents/profile/${userDetail?.id}/serkom_file.jpeg`,
            {
              headers: {
                Authorization: `Bearer ${adminAK}`,
              },
            }
          );

          if (response.ok) {
            const blob = await response.blob();
            const dataUrl = URL.createObjectURL(blob);
            setImageSERKOM(dataUrl);
          } else {
            console.error('Failed to fetch image:', response.statusText);
          }
        } catch (error) {
          console.error('Error fetching image:', error);
        }
      };

      fetchImage();
    }, [userDetail?.id, adminAK]);


    useEffect(() => {
      const fetchImage = async () => {
        try {
          const response = await fetch(
            `${process.env.NEXT_PUBLIC_P2KB_API}/documents/profile/${userDetail?.id}/pdki_file.jpeg`,
            {
              headers: {
                Authorization: `Bearer ${adminAK}`,
              },
            }
          );

          if (response.ok) {
            const blob = await response.blob();
            const dataUrl = URL.createObjectURL(blob);
            setImageKartu(dataUrl);
          } else {
            console.error('Failed to fetch image:', response.statusText);
          }
        } catch (error) {
          console.error('Error fetching image:', error);
        }
      };

      fetchImage();
    }, [userDetail?.id, adminAK]);
    

    useEffect(() => {
        const fetchImage = async () => {
          try {
            const response = await fetch(
              `${process.env.NEXT_PUBLIC_P2KB_API}/documents/profile/${userDetail?.id}/ktp_file.jpeg`,
              {
                headers: {
                  Authorization: `Bearer ${adminAK}`,
                },
              }
            );
  
            if (response.ok) {
              const blob = await response.blob();
              const dataUrl = URL.createObjectURL(blob);
              setImageKTP(dataUrl);
            } else {
              console.error('Failed to fetch image:', response.statusText);
            }
          } catch (error) {
            console.error('Error fetching image:', error);
          }
        };
  
        fetchImage();
      }, [userDetail?.id, adminAK]);

    return (
        <div>
            <div className="border border-gray-200 p-8 rounded-xl">
                <div className="flex justify-between items-center">
                    <div className="flex justify-start gap-10 mb-8 items-center">
                        <ProfilePicture data={userDetail?.id} />
                        <div className="flex flex-col gap-1">
                            <h3 className="text-base lg:text-2xl font-bold text-gray-800">Nama: <span className="font-bold text-gray-800">{userDetail?.profile?.nama_lengkap_gelar}</span></h3>
                            <p className="lg:text-base text-sm text-gray-700 font-medium">Email: {userDetail?.email}</p>
                            <p className="lg:text-base text-sm text-gray-700 font-medium">Tempat/tgl Lahir: {userDetail?.profile?.tempat_lahir}. {userDetail?.profile?.tanggal_lahir}</p>
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

                <div className="border-t border-gray-200 pt-8 pb-8 grid lg:grid-cols-3 gap-8">
                    <div className="flex flex-col gap-2 border rounded-md p-3">
                        <p className="lg:text-base text-sm text-gray-700 font-medium">Pendidikan: {userDetail?.profile?.pendidikan}</p>
                        <p className="text-sm text-gray-700 font-medium">NPA Pdki: {userDetail?.npa_pdki ? userDetail?.npa_pdki : ""}</p>
                        <p className="text-sm text-gray-700 font-medium">Jurusan: {userDetail?.profile?.jurusan}</p>
                        <p className="text-sm text-gray-700 font-medium">Status Anggota: {userDetail?.profile?.status_anggota}</p>
                        <p className="text-sm text-gray-700 font-medium">Status Pegawai: {userDetail?.profile?.status_pegawai}</p>
                    </div>
                    <div className="flex flex-col gap-2 border rounded-md p-3">
                        <p className="text-sm text-gray-700 font-medium">Jenis Kelamin: {userDetail?.profile?.jenis_kelamin}</p>
                        <p className="text-sm text-gray-700 font-medium">Pekerjaan: {userDetail?.profile?.pekerjaan}</p>
                        <p className="text-sm text-gray-700 font-medium">Pangkat: {userDetail?.profile?.pangkat}</p>
                        <p className="text-sm text-gray-700 font-medium">Alamat: {userDetail?.profile?.alamat}</p>
                        <p className="text-sm text-gray-700 font-medium">Alamat Instansi: {userDetail?.profile?.alamat_instansi}</p>
                    </div>
                    <div className="flex flex-col gap-2 border rounded-md p-3">
                        <p className="text-sm text-gray-700 font-medium">Agama: {userDetail?.profile?.agama}</p>
                        <p className="text-sm text-gray-700 font-medium">No Ijajah: {userDetail?.profile?.no_ijazah}</p>
                        <p className="text-sm text-gray-700 font-medium">No KTP: {userDetail?.profile?.no_serkom}</p>
                        <p className="text-sm text-gray-700 font-medium">NO SIP: {userDetail?.profile?.no_sip}</p>
                        <p className="text-sm text-gray-700 font-medium">No STR: {userDetail?.profile?.no_str}</p>
                    </div>
                </div>
                <div className="border-t border-gray-200 pt-8 grid lg:grid-cols-3 gap-8">
                    {imageSTR ? (
                        <figure className="border rounded-md p-3">
                            <figcaption className="mb-3 font-medium text-base">STR</figcaption>
                            <Image 
                                src={imageSTR}
                                alt="STR"
                                className="w-full"
                                width={1000}
                                height={1000}
                            /> 
                        </figure>
                    ) : (
                        <div className="flex justify-center items-center h-28 border rounded-md">
                            <p className="text-xl font-semibold">Foto STR tidak ada</p>
                        </div>
                    )}

                    {imageSIP ? (
                        <figure className="border rounded-md p-3">
                            <figcaption className="mb-3 font-medium text-base">SIP</figcaption>
                            <Image 
                                src={imageSTR}
                                alt="STR"
                                className="w-full"
                                width={1000}
                                height={1000}
                            /> 
                        </figure>
                    ) : (
                        <div className="flex justify-center items-center h-28 border rounded-md">
                            <p className="text-xl font-semibold">Foto SIP tidak ada</p>
                        </div>
                    )}

                    {imageSERKOM ? (
                        <figure className="border rounded-md p-3">
                            <figcaption className="mb-3 font-medium text-base">SERKOM</figcaption>
                            <Image 
                                src={imageSERKOM}
                                alt="STR"
                                className="w-full"
                                width={1000}
                                height={1000}
                            /> 
                        </figure>
                    ) : (
                        <div className="flex justify-center items-center h-28 border rounded-md">
                            <p className="text-xl font-semibold">Foto SERKOM tidak ada</p>
                        </div>
                    )}

                    {imageIjazah ? (
                        <figure className="border rounded-md p-3">
                            <figcaption className="mb-3 font-medium text-base">Ijazah</figcaption>
                            <Image 
                                src={imageIjazah}
                                alt="STR"
                                className="w-full"
                                width={1000}
                                height={1000}
                            /> 
                        </figure>
                    ) : (
                        <div className="flex justify-center items-center h-28 border rounded-md">
                            <p className="text-xl font-semibold">Foto Ijazah tidak ada</p>
                        </div>
                    )}

                    {imageKartu ? (
                        <figure className="border rounded-md p-3">
                            <figcaption className="mb-3 font-medium text-base">Kartu Anggota PDKI</figcaption>
                            <Image 
                                src={imageKartu}
                                alt="STR"
                                className="w-full"
                                width={1000}
                                height={1000}
                            /> 
                        </figure>
                    ) : (
                        <div className="flex justify-center h-28 items-center border rounded-md">
                            <p className="text-xl font-semibold">Foto Kartu Anggota PDKI tidak ada</p>
                        </div>
                    )}

                    {imageKTP ? (
                        <figure className="border rounded-md p-3">
                            <figcaption className="mb-3 font-medium text-base">KTP</figcaption>
                            <Image 
                                src={imageKTP}
                                alt="STR"
                                className="w-full"
                                width={1000}
                                height={1000}
                            /> 
                        </figure>
                    ) : (
                        <div className="flex justify-center h-28 items-center border rounded-md">
                            <p className="text-xl font-semibold">Foto KTP tidak ada</p>
                        </div>
                    )}

                </div>
            </div>
        </div>
    )
}

export default UserDetail