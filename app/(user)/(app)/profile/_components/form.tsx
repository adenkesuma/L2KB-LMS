"use client";

import React from "react";
import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import useStore from "../../../../../store/use-store";
import { userAuthStore } from "../../../../../store/user-auth.store";
import { rc } from "../../../../../lib/utils";
import LoadingIcon from "../../../../../components/icons/loading-icon";
import { UserData } from "../page";
import ProfilePicture from "@/components/profilePicture";
import Image from "next/image";

function UpdateProfileForm() {
  const router = useRouter();
  const userAuth = useStore(userAuthStore, (state) => state);
  const [userData, setUserData] = useState<UserData>();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm<UserData>();

  const onSubmit: SubmitHandler<UserData> = async (data) => {
    try {
      console.log(data);
      const formData = new FormData();
      const profile = data.profile;

      if (data.profile_picture) {
        formData.append("profile_picture", data.profile_picture[0]);
      } else {
        formData.delete("profile_picture");
      }

      const fileList = [
        data.sip_file,
        data.str_file,
        data.serkom_file,
        data.ktp_file,
        data.pdki_file,
        data.ijazah_file,
      ];
      const keyList = [
        "sip_file",
        "str_file",
        "serkom_file",
        "ktp_file",
        "pdki_file",
        "ijazah_file",
      ];

      for (const key in fileList) {
        console.log(fileList[key]);
        if (fileList[key]) {
          console.log(1);
          formData.append(keyList[key], fileList[key][0]);
        } else {
          formData.delete(fileList[key]);
        }
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
        toast.success("Berhasil memperbarui profil");
        router.refresh();
      } else {
        toast.error("Gagal memperbarui profil");
        // console.log(await update.data.response);
      }
    } catch (error: any) {
      toast.error(error.response.data.message);
      // console.log(error);
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
    <div className="bg-white rounded-xl border border-gray-200 mt-4 sm:mt-8">
      {/* top profile */}
      <div className="flex justify-between flex-col sm:flex-row gap-8 sm:gap-0 items-start p-3 sm:p-8">
        <div className="flex flex-col gap-2 sm:gap-4">
          <h2 className="text-base sm:text-[28px] font-semibold text-gray-800">
            Foto Profil
          </h2>

          <ProfilePicture data={userData?.id} />

          {/* change profile */}
          <div className="relative mt-2">
            <input type="file" {...register("profile_picture")} />
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
              *Maksimal Size 5 Mb
            </span>
          </p>
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
              className="border rounded-xl p-2 border-gray-300"
              {...register("npa_pdki", { valueAsNumber: true })}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-medium text-xs sm:text-sm">NOMOR KTP</label>
            <input
              type="number"
              className="border rounded-xl p-2 border-gray-300"
              {...register("profile.no_ktp")}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-medium text-xs sm:text-sm">
              Email
              <span className="text-red-600">*</span>
            </label>
            <input
              type="email"
              required
              className="border rounded-xl p-2 border-gray-300"
              {...register("email", {
                // disabled: true,
              })}

              // disabled
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-medium text-xs sm:text-sm">
              Nama Lengkap
              <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              className="border rounded-xl p-2 border-gray-300"
              {...register("nama", { required: true })}
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-medium text-xs sm:text-sm">
              Nama Lengkap Beserta Gelar
            </label>
            <input
              type="text"
              className="border rounded-xl p-2 border-gray-300"
              {...register("profile.nama_lengkap_gelar")}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-medium text-xs sm:text-sm">
              Tempat lahir
              <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              className="border rounded-xl p-2 border-gray-300"
              {...register("profile.tempat_lahir", { required: true })}
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-medium text-xs sm:text-sm">
              Tanggal lahir
              <span className="text-red-600">*</span>
            </label>
            <input
              type="date"
              className="border rounded-xl p-2 border-gray-300"
              {...register("profile.tanggal_lahir", { required: true })}
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-medium text-xs sm:text-sm">
              Pilih Jenis Kelamin Anda
              <span className="text-red-600">*</span>
            </label>
            <select
              className="border rounded-xl p-2 border-gray-300 bg-white"
              {...register("profile.jenis_kelamin", { required: true })}
              required
            >
              <option value="">- Pilih jenis kelamin -</option>
              <option value="male">Pria</option>
              <option value="female">Wanita</option>
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-medium text-xs sm:text-sm">Agama</label>
            <input
              type="text"
              className="border rounded-xl p-2 border-gray-300"
              {...register("profile.agama")}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-medium text-xs sm:text-sm">
              Nomor Telepon
              <span className="text-red-600">*</span>
            </label>
            <input
              type="number"
              className="border rounded-xl p-2 border-gray-300"
              {...register("profile.nomor_hp")}
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-medium text-xs sm:text-sm">
              Pendidikan terakhir
            </label>
            <select
              className="border rounded-xl p-2 border-gray-300 bg-white"
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
              className="border rounded-xl p-2 border-gray-300"
              {...register("profile.jurusan")}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-medium text-xs sm:text-sm">
              Jabatan Pekerjaan
            </label>
            <input
              type="text"
              className="border rounded-xl p-2 border-gray-300"
              {...register("profile.pekerjaan")}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-medium text-xs sm:text-sm">
              Pangkat / Golongan
            </label>
            <select
              className="border rounded-xl p-2 border-gray-300 bg-white"
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
              className="border rounded-xl p-2 border-gray-300"
              {...register("profile.instansi")}
            />
          </div>
        </div>

        {/* right form */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label className="font-medium text-xs sm:text-sm">
              Alamat Instansi
            </label>
            <input
              type="text"
              className="border rounded-xl p-2 border-gray-300"
              {...register("profile.alamat_instansi")}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-medium text-xs sm:text-sm">
              No Telepon Instansi
            </label>
            <input
              type="number"
              className="border rounded-xl p-2 border-gray-300"
              {...register("profile.no_telp_instansi")}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-medium text-xs sm:text-sm">
              Alamat Domisili
            </label>
            <input
              type="text"
              className="border rounded-xl p-2 border-gray-300"
              {...register("profile.alamat")}
            />
          </div>

          {/* SIP */}
          <div className="flex flex-col gap-2">
            <label className="font-medium text-xs sm:text-sm">
              <span>SIP {"( Surat Izin Praktik )"}</span>
            </label>
            <input
              type="file"
              className="border bg-white rounded-xl p-2 border-gray-300"
              {...register("sip_file", { valueAsNumber: true })}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-medium text-xs sm:text-sm">
              <span>Ketikan No Surat SIP {"( Surat Izin Praktik )"}</span>
            </label>
            <input
              type="number"
              className="border bg-white rounded-xl p-2 border-gray-300"
              {...register("profile.no_sip", { valueAsNumber: true })}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-medium text-xs sm:text-sm">
              <span>Ketikan NPA Id </span>
            </label>
            <input
              type="number"
              className="border bg-white rounded-xl p-2 border-gray-300"
              {...register("profile.no_npa", { valueAsNumber: true })}
            />
          </div>

          {/* STR */}
          <div className="flex flex-col gap-2">
            <label className="font-medium text-xs sm:text-sm">
              <span>STR {"( Surat Tanda Registrasi )"}</span>
              <span className="text-red-600">*</span>
            </label>
            <input
              type="file"
              className="bg-white border rounded-xl p-2 border-gray-300"
              {...register("str_file", { required: true })}
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-medium text-xs sm:text-sm">
              <span className="text-red-600">*</span>
              <span>Ketikan No Surat STR {"( Surat Tanda Registrasi )"}</span>
            </label>
            <input
              type="number"
              className="border bg-white rounded-xl p-2 border-gray-300"
              {...register("profile.no_str", {
                valueAsNumber: true,
                required: true,
              })}
            />
          </div>

          {/* SERKOM */}
          <div className="flex flex-col gap-2">
            <label className="font-medium text-xs sm:text-sm">
              <span>Upload SERKOM {"( Surtifikat Kompetensi )"}</span>
            </label>
            <input
              type="file"
              className="border bg-white rounded-xl p-2 border-gray-300"
              {...register("serkom_file")}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-medium text-xs sm:text-sm">
              <span>Ketikan No SERKOM {"( Surtifikat Kompetensi )"}</span>
            </label>
            <input
              type="number"
              className="border bg-white rounded-xl p-2 border-gray-300"
              {...register("profile.no_serkom", { valueAsNumber: true })}
            />
          </div>

          {/* Ijajah Pengakuan */}
          {/* <figure>
            <Image
              src={img}
              alt="thumnail pelatihan image"
              className="rounded-lg h-28 lg:h-40 w-full bg-cover object-cover"
              width={2000}
              height={100}
              // onError={() => setImg("/assets/images/default-image-course.jpg")}
            />
          </figure> */}
          <div className="flex flex-col gap-2">
            <label className="font-medium text-xs sm:text-sm">
              <span>Upload Ijazah Pengakuan Universitas/Institusi</span>
            </label>
            <input
              type="file"
              className="border bg-white rounded-xl p-2 border-gray-300"
              {...register("ijazah_file")}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-medium text-xs sm:text-sm">
              <span>Ketikan No Ijazah</span>
            </label>
            <input
              type="number"
              className="border bg-white rounded-xl p-2 border-gray-300"
              {...register("profile.no_ijazah", { valueAsNumber: true })}
            />
          </div>

          {/* Kartu Anggota PDKI (opsional) */}
          <div className="flex flex-col gap-2">
            <label className="font-medium text-xs sm:text-sm flex justify-between items-center">
              <span>Upload Kartu Anggota PDKI</span>
            </label>
            <input
              type="file"
              className="border bg-white rounded-xl p-2 border-gray-300"
              {...register("pdki_file")}
            />
          </div>

          {/* KTP */}
          <div className="flex flex-col gap-2">
            <label className="font-medium text-xs sm:text-sm">
              <span>Upload Foto KTP</span>
            </label>
            <input
              type="file"
              className="border bg-white rounded-xl p-2 border-gray-300"
              {...register("ktp_file")}
            />
          </div>

          {/* <div className="flex flex-col gap-2">
            <label className="font-medium text-xs sm:text-sm">
              <span>Ketikan No ATM</span>
            </label>
            <input
              type="number"
              className="border bg-white rounded-xl p-2 border-gray-300"
              {...register("profile.no_atm", { valueAsNumber: true })}
            />
          </div> */}
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
  );
}

export default UpdateProfileForm;
