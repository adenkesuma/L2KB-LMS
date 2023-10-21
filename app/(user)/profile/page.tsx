"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";

import Profile from "@/public/assets/user.png";
import UploadIcon from "@/public/assets/icons/upload.svg";
import { myCourse } from "@/contsant";
import MyCourse from "@/components/myCourseBanner";
import useStore from "../../../store/use-store";
import { userAuthStore } from "../../../store/user-auth.store";

const UserProfile = () => {
  const userAuth = useStore(userAuthStore, (state) => state);
  const [profileData, setProfileData] = useState({});

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_P2KB_API}/profile`, {
          headers: {
            Authorization: `Bearer ${userAuth?.accessToken}`,
          },
        });

        if (response.status === 200) {
          console.log(response.data)
          setProfileData(response.data);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    if (userAuth?.accessToken !== undefined) {
      fetchUserData();
    }
  }, [userAuth?.accessToken]);

  return (
    <main className="pt-4 sm:pt-12 min-h-screen">
      <div>
        <h1 className="text-xl font-semibold sm:text-[38px] sm:font-bold text-gray-800">Profil</h1>
        <span className="text-xs sm:text-sm text-gray-600">
          Mohon masukkan data yang sesuai untuk memudahkan proses pelatihan
        </span>
        <ul className="flex justify-start items-center gap-6 sm:gap-12 mt-4 sm:mt-8">
          <li>
            <Link
              className="text-green font-semibold text-xs sm:text-md hover:border-b hover:border-green"
              href="/certificate"
            >
              Sertifikat saya
            </Link>
          </li>
          <li>
            <Link
              className="text-green font-semibold text-xs sm:text-md hover:border-b hover:border-green"
              href="/my-course"
            >
              Pelatihan saya
            </Link>
          </li>
          <li>
            <Link
              className="text-green font-semibold text-xs sm:text-md hover:border-b hover:border-green"
              href="/history"
            >
              Riwayat pelatihan saya
            </Link>
          </li>
        </ul>
      </div>
      <div className="bg-white rounded-xl sm:rounded-3xl mt-4 sm:mt-8">
        {/* top profile */}
        <div className="flex justify-between items-start p-3 sm:p-8">
          <div className="flex flex-col gap-2 sm:gap-4">
            <h2 className="text-base sm:text-[28px] font-semibold text-gray-800">
              Foto Profil
            </h2>
            {/* <img
              src={`${process.env.NEXT_PUBLIC_P2KB_API}/img/profile_picture/${profileData?.data?.id}.webp`}
              alt="foto profil"
              className="rounded-[50%] w-36 h-36"
            /> */}
            <Image
              src={Profile}
              alt="foto profil"
              className="rounded-[50%] w-32 h-32 sm:w-36 sm:h-36"
            />

            {/* change profile */}
            <div className="relative mt-2">
              <input type="file" className="hidden" id="changeProfile" />
              <label
                htmlFor="changeProfile"
                className="w-32 sm:w-36 flex gap-3 justify-center items-center cursor-pointer border border-opacity-green text-green font-medium rounded-lg py-2 px-4"
              >
                <Image src={UploadIcon} alt="upload icon" className="w-3 sm:w-4" />
                <span className="text-xs">Ubah Foto</span>
              </label>
            </div>

            <p className="hidden text-sm text-gray-800 sm:flex justify-start gap-2">
              Format:
              <span className="text-sm text-orange-500 italic">*Pas Foto</span>
              <span className="text-sm text-orange-500 italic">
                *Background Merah
              </span>
              <span className="text-sm text-orange-500 italic">
                *Ukuran 4 x 6
              </span>
              <span className="text-sm text-orange-500 italic">
                *Maksimal Size 1 Mb
              </span>
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <Link
              href="/forgot-password"
              className="text-center w-32 sm:w-[240px] font-medium text-xs sm:text-sm mt-2 p-2 rounded-lg sm:rounded-xl border-opacity-green border text-green"
            >
              Ubah Kata Sandi
            </Link>
          </div>
        </div>

        {/* data profile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10 pt-4 sm:pt-8 px-3 sm:px-8 pb-8 rounded-br-3xl rounded-bl-3xl">
          {/* left form */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-medium text-xs sm:text-sm">NPA PDKI</label>
              <input
                type="number"
                className="border rounded-xl p-2 border-opacity-green"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-medium text-xs sm:text-sm">NOMOR KTP</label>
              <input
                type="number"
                className="border rounded-xl p-2 border-opacity-green"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-medium text-xs sm:text-sm">Email</label>
              <input
                type="email"
                className="border rounded-xl p-2 border-opacity-green"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-medium text-xs sm:text-sm">Nama Lengkap</label>
              <input
                type="text"
                className="border rounded-xl p-2 border-opacity-green"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-medium text-xs sm:text-sm">
                Nama Lengkap Beserta Gelar
              </label>
              <input
                type="text"
                className="border rounded-xl p-2 border-opacity-green"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-medium text-xs sm:text-sm">Tempat lahir</label>
              <input
                type="text"
                className="border rounded-xl p-2 border-opacity-green"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-medium text-xs sm:text-sm">Tanggal lahir</label>
              <input
                type="date"
                className="border rounded-xl p-2 border-opacity-green"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-medium text-xs sm:text-sm">
                Pilih Jenis Kelamin Anda
              </label>
              <select
                name="status"
                id="status"
                className="border rounded-xl p-2 border-opacity-green bg-white"
              >
                <option value="">- Pilih jenis kelamin -</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-medium text-xs sm:text-sm">Pendidikan Terakhir</label>
              <input
                type="text"
                className="border rounded-xl p-2 border-opacity-green"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-medium text-xs sm:text-sm">Agama</label>
              <input
                type="text"
                className="border rounded-xl p-2 border-opacity-green"
              />
            </div>
          </div>

          {/* right form */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-medium text-xs sm:text-sm">Nomor Telepon</label>
              <input
                type="number"
                className="border rounded-xl p-2 border-opacity-green"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-medium text-xs sm:text-sm">Pendidikan terakhir</label>
              <select
                name="status"
                id="status"
                className="border rounded-xl p-2 border-opacity-green bg-white"
              >
                <option value="">- Pilih Tingkat -</option>
                <option value="sd">SD {"( Sekolah Dasar )"}</option>
                <option value="sd">SMP {"( Sekolah Menengah Pertama )"}</option>
                <option value="sd">SMA {"( Sekolah Menengah Atas )"}</option>
                <option value="sd">S1 {"( Sarjana Strata 1 )"}</option>
                <option value="sd">S2 {"( Sarjana Strata 2 )"}</option>
                <option value="sd">S3 {"( Sarjana Strata 3 )"}</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-medium text-xs sm:text-sm">Jurusan</label>
              <input
                type="text"
                className="border rounded-xl p-2 border-opacity-green"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-medium text-xs sm:text-sm">Jabatan Pekerjaan</label>
              <input
                type="text"
                className="border rounded-xl p-2 border-opacity-green"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-medium text-xs sm:text-sm">Pangkat / Golongan</label>
              <select
                name="status"
                id="status"
                className="border rounded-xl p-2 border-opacity-green bg-white"
              >
                <option value="">- Pilih Pangkat / Golongan -</option>
                <option value="sd">SD {"( Sekolah Dasar )"}</option>
                <option value="sd">SMP {"( Sekolah Menengah Pertama )"}</option>
                <option value="sd">SMA {"( Sekolah Menengah Atas )"}</option>
                <option value="sd">S1 {"( Sarjana Strata 1 )"}</option>
                <option value="sd">S2 {"( Sarjana Strata 2 )"}</option>
                <option value="sd">S3 {"( Sarjana Strata 3 )"}</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-medium text-xs sm:text-sm">Instansi</label>
              <input
                type="text"
                className="border rounded-xl p-2 border-opacity-green"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-medium text-xs sm:text-sm">Alamat Instansi</label>
              <input
                type="text"
                className="border rounded-xl p-2 border-opacity-green"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-medium text-xs sm:text-sm">No Telepon Instansi</label>
              <input
                type="number"
                className="border rounded-xl p-2 border-opacity-green"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-medium text-xs sm:text-sm">Alamat Domisili</label>
              <input
                type="text"
                className="border rounded-xl p-2 border-opacity-green"
              />
            </div>

            {/* button daftar */}
            <div className="flex flex-col gap-2 mt-4">
              <button className="text-center w-[240px] text-white text-sm sm:mx-0 mx-auto font-medium mt-2 p-2 rounded-xl bg-green">
                Perbarui Profil
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default UserProfile;
