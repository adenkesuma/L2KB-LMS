"use client";

import { useEffect, useState } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import Profile from "@/public/assets/user.png";
import UploadIcon from "@/public/assets/icons/upload.svg";
import { myCourse } from "@/contsant";
import MyCourse from "@/components/myCourseBanner";
import useStore from "../../../../store/use-store";
import { userAuthStore } from "../../../../store/user-auth.store";
import { rc } from "../../../../lib/utils";
import LoadingIcon from "../../../../components/icons/loading-icon";

interface ProfileData {
  [key: string]: any;
  agama: string | null;
  alamat: string | null;
  alamat_instansi: string | null;
  createdAt: string;
  id: string;
  instansi: string;
  jenis_kelamin: string;
  jurusan: string | null;
  nama_lengkap_gelar: string | null;
  nik: number;
  no_ktp: string | null;
  no_telp_instansi: string | null;
  nomor_hp: string;
  pangkat: string | null;
  pekerjaan: string;
  pendidikan: string;
  status_anggota: string;
  status_pegawai: string;
  tanggal_lahir: string;
  tempat_lahir: string;
  updatedAt: string;
  user_id: string;
}

interface UserData {
  [key: string]: any;
  id: string;
  email: string;
  nama: string;
  npa_pdki: number;
  profile_picture: FileList | undefined;
  email_verified: boolean;
  createdAt: string;
  updatedAt: string;
  profile: ProfileData;
}

const UserProfile = () => {
  const router = useRouter();
  const userAuth = useStore(userAuthStore, (state) => state);
  const [userData, setUserData] = useState<UserData>();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isLoading, isSubmitting },
    reset,
    control,
    getValues,
  } = useForm<UserData>();

  const onSubmit: SubmitHandler<UserData> = async (data) => {
    try {
      // console.log("1", data.profile_picture);
      const formData = new FormData();
      const profile = data.profile;
      if (data.profile_picture) {
        formData.append("profile_picture", data.profile_picture[0]);
      } else {
        formData.delete("profile_picture");
      }

      for (const key in data) {
        if (data.hasOwnProperty(key)) {
          formData.append(key, data[key]);
        }
      }
      for (const key in profile) {
        if (profile.hasOwnProperty(key)) {
          formData.append(key, profile[key]);
        }
      }

      const update = await axios.put(
        `${process.env.NEXT_PUBLIC_P2KB_API}/profile/update`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${userAuth?.accessToken}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (update.status) {
        toast("Successfully update profile");
        router.refresh();
      } else {
        toast.error("Successfully update profile");
        console.log(await update.data.response);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_P2KB_API}/profile`,
          {
            headers: {
              Authorization: `Bearer ${userAuth?.accessToken}`,
            },
          }
        );

        if (response.status === 200) {
          setUserData(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    if (userAuth?.accessToken !== undefined) {
      fetchUserData();
    }
  }, [userAuth?.accessToken]);

  useEffect(() => {
    reset(userData);
  }, [userData, reset]);

  return (
    <main className="pt-4 sm:pt-6 lg:pt-12 min-h-screen">
      <div>
        <h1 className="text-xl font-semibold sm:text-2xl lg:text-4xl mb:mb-2 sm:font-bold text-gray-800">
          Profil
        </h1>
        <span className="text-xs sm:text-sm text-gray-600">
          Mohon masukkan data yang sesuai untuk memudahkan proses pelatihan
        </span>
        <ul className="flex justify-start items-center gap-6 lg:gap-12 mt-4 sm:mt-6">
          <li>
            <Link
              className="text-green font-semibold text-xs sm:text-base hover:border-b hover:border-green"
              href="/certificate"
            >
              Sertifikat saya
            </Link>
          </li>
          <li>
            <Link
              className="text-green font-semibold text-xs sm:text-base hover:border-b hover:border-green"
              href="/my-course"
            >
              Pelatihan saya
            </Link>
          </li>
          <li>
            <Link
              className="text-green font-semibold text-xs sm:text-base hover:border-b hover:border-green"
              href="/history"
            >
              Riwayat pelatihan
            </Link>
          </li>
        </ul>
      </div>
      <div className="bg-white rounded-xl mt-4 sm:mt-8">
        {/* top profile */}
        <div className="flex justify-between flex-col sm:flex-row gap-8 sm:gap-0 items-start p-3 sm:p-8">
          <div className="flex flex-col gap-2 sm:gap-4">
            <h2 className="text-base sm:text-[28px] font-semibold text-gray-800">
              Foto Profil
            </h2>
            {/* TO-DO: DISABLED CACHE FETCHING??? */}
            {/* <Image
              src={`${process.env.NEXT_PUBLIC_P2KB_API}/img/profile_picture/${userData?.id}.webp`}
              alt="foto profil"
              className="rounded-[50%] w-36 h-36"
              width={36}
              height={36}
            /> */}
            <Image
              src={Profile}
              alt="foto profil"
              className="rounded-[50%] w-32 h-32 sm:w-36 sm:h-36"
            />

            {/* change profile */}
            <div className="relative mt-2">
              <input
                type="file"
                {...register("profile_picture")}
              />
            </div>

            <p className="hidden text-xs lg:text-sm text-gray-800 lg:flex justify-start gap-2">
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
              className="text-center w-40 lg:w-60 font-medium text-xs sm:text-sm mt-2 p-2 rounded-lg sm:rounded-xl border-opacity-green border text-green"
            >
              Ubah Kata Sandi
            </Link>
          </div>
        </div>

        {/* data profile */}
        <form
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10 pt-4 sm:pt-8 px-3 sm:px-8 pb-8 rounded-br-3xl rounded-bl-3xl"
          onSubmit={handleSubmit(onSubmit)}
        >
          {/* left form */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-medium text-xs sm:text-sm">NPA PDKI</label>
              <input
                type="number"
                className="border rounded-xl p-2 border-opacity-green"
                {...register("npa_pdki")}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-medium text-xs sm:text-sm">
                NOMOR KTP
              </label>
              <input
                type="number"
                className="border rounded-xl p-2 border-opacity-green"
                {...register("profile.no_ktp")}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-medium text-xs sm:text-sm">Email</label>
              <input
                type="email"
                className="border rounded-xl p-2 border-opacity-green"
                {...register("email", {
                  // disabled: true,
                })}
                // disabled
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-medium text-xs sm:text-sm">
                Nama Lengkap
              </label>
              <input
                type="text"
                className="border rounded-xl p-2 border-opacity-green"
                {...register("nama")}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-medium text-xs sm:text-sm">
                Nama Lengkap Beserta Gelar
              </label>
              <input
                type="text"
                className="border rounded-xl p-2 border-opacity-green"
                {...register("profile.nama_lengkap_gelar")}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-medium text-xs sm:text-sm">
                Tempat lahir
              </label>
              <input
                type="text"
                className="border rounded-xl p-2 border-opacity-green"
                {...register("profile.tempat_lahir")}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-medium text-xs sm:text-sm">
                Tanggal lahir
              </label>
              <input
                type="date"
                className="border rounded-xl p-2 border-opacity-green"
                {...register("profile.tanggal_lahir")}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-medium text-xs sm:text-sm">
                Pilih Jenis Kelamin Anda
              </label>
              <select
                className="border rounded-xl p-2 border-opacity-green bg-white"
                {...register("profile.jenis_kelamin")}
              >
                <option value="">- Pilih jenis kelamin -</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>

            {/* <div className="flex flex-col gap-2">
              <label className="font-medium text-xs sm:text-sm">
                Pendidikan Terakhir
              </label>
              <input
                type="text"
                className="border rounded-xl p-2 border-opacity-green"
                {...register("profile.pendidikan")}
              />
            </div> */}

            <div className="flex flex-col gap-2">
              <label className="font-medium text-xs sm:text-sm">Agama</label>
              <input
                type="text"
                className="border rounded-xl p-2 border-opacity-green"
                {...register("profile.agama")}
              />
            </div>
          </div>

          {/* right form */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-medium text-xs sm:text-sm">
                Nomor Telepon
              </label>
              <input
                type="number"
                className="border rounded-xl p-2 border-opacity-green"
                {...register("profile.nomor_hp")}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-medium text-xs sm:text-sm">
                Pendidikan terakhir
              </label>
              <select
                className="border rounded-xl p-2 border-opacity-green bg-white"
                {...register("profile.pendidikan")}
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
                {...register("profile.jurusan")}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-medium text-xs sm:text-sm">
                Jabatan Pekerjaan
              </label>
              <input
                type="text"
                className="border rounded-xl p-2 border-opacity-green"
                {...register("profile.pekerjaan")}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-medium text-xs sm:text-sm">
                Pangkat / Golongan
              </label>
              <select
                className="border rounded-xl p-2 border-opacity-green bg-white"
                {...register("profile.pangkat")}
              >
                <option value="tidak ada">tidak ada</option>

                <option value="golongan Ia">Golongan Ia</option>
                <option value="golongan Ib">Golongan Ib</option>
                <option value="golongan Ic">Golongan Ic</option>
                <option value="golongan Id">Golongan Id</option>

                <option value="golongan IIa">Golongan IIa</option>
                <option value="golongan IIb">Golongan IIb</option>
                <option value="golongan IIc">Golongan IIc</option>
                <option value="golongan IId">Golongan IId</option>

                <option value="golongan IIIa">Golongan IIIa</option>
                <option value="golongan IIIb">Golongan IIIb</option>
                <option value="golongan IIIc">Golongan IIIc</option>
                <option value="golongan IIId">Golongan IIId</option>

                <option value="golongan IVa">Golongan IVa</option>
                <option value="golongan IVb">Golongan IVb</option>
                <option value="golongan IVc">Golongan IVc</option>
                <option value="golongan IVd">Golongan IVd</option>

              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-medium text-xs sm:text-sm">Instansi</label>
              <input
                type="text"
                className="border rounded-xl p-2 border-opacity-green"
                {...register("profile.instansi")}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-medium text-xs sm:text-sm">
                Alamat Instansi
              </label>
              <input
                type="text"
                className="border rounded-xl p-2 border-opacity-green"
                {...register("profile.alamat_instansi")}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-medium text-xs sm:text-sm">
                No Telepon Instansi
              </label>
              <input
                type="number"
                className="border rounded-xl p-2 border-opacity-green"
                {...register("profile.no_telp_instansi")}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-medium text-xs sm:text-sm">
                Alamat Domisili
              </label>
              <input
                type="text"
                className="border rounded-xl p-2 border-opacity-green"
                {...register("profile.alamat")}
              />
            </div>
          </div>

          {/* button daftar */}
          <div className="flex flex-col gap-2 mt-4">
            <button
              className={rc(
                "text-center w-[240px] text-white text-sm sm:mx-0 mx-auto font-medium mt-2 p-2 rounded-lg bg-green",
                "disabled:bg-light-green disabled:text-green",
                "flex gap-2 items-center justify-center"
              )}
              disabled={isSubmitting}
            >
              {isSubmitting && <LoadingIcon />}
              {isSubmitting ? "Loading" : "Perbarui Profil"}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default UserProfile;
