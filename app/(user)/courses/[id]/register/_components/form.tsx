"use client";

import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { IRegisterTrainingData } from "../page";
import axios from "axios";
import { useRouter } from "next/navigation";
import useStore from "../../../../../../store/use-store";
import { userAuthStore } from "../../../../../../store/user-auth.store";
import { toast } from "sonner";

function RegisterTrainingForm({ training_id }: { training_id: string }) {
  const router = useRouter();
  const userAuth = useStore(userAuthStore, (state) => state);
  const [registerTrainingData, setRegisterTrainingData] =
    useState<IRegisterTrainingData>();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isLoading, isSubmitting },
    reset,
    control,
    getValues,
  } = useForm<IRegisterTrainingData>();

  const onSubmit: SubmitHandler<IRegisterTrainingData> = async (data) => {
    try {
      console.log(data);
      // console.log("1", data.profile_picture);
      const formData = new FormData();

      const fileKeys = [
        "sip_file",
        "ktp_file",
        "str_file",
        "paid_file",
        "pdki_file",
        "ijazah_file",
        "serkom_file",
      ];

      fileKeys.forEach((key) => {
        if (data[key]) {
          formData.append(key, data[key][0]);
        }
      });

      for (const key in data) {
        if (data.hasOwnProperty(key)) {
          formData.append(key, data[key]);
        }
      }

      //   formData.forEach((data) => console.log(data));

      const register = await axios.post(
        `${process.env.NEXT_PUBLIC_P2KB_API}/training/register?training_id=${training_id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${userAuth?.accessToken}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (register.status === 200) {
        console.log(await register.data);
        toast("Successfully register training");
        router.refresh();
      } else {
        toast.error("Error register training");
        console.log(await register.data.response);
      }
    } catch (error) {
      console.log(error);
    }
  };

  //   useEffect(() => {
  //     const fetchUserData = async () => {
  //       try {
  //         const response = await axios.get(
  //           `${process.env.NEXT_PUBLIC_P2KB_API}/profile`,
  //           {
  //             headers: {
  //               Authorization: `Bearer ${userAuth?.accessToken}`,
  //             },
  //           }
  //         );

  //         if (response.status === 200) {
  //           setUserData(response.data.data);
  //         }
  //       } catch (error) {
  //         console.error("Error fetching user data:", error);
  //       }
  //     };

  //     if (userAuth?.accessToken !== undefined) {
  //       fetchUserData();
  //     }
  //   }, [userAuth?.accessToken]);

  //   useEffect(() => {
  //     reset(userData);
  //   }, [userData, reset]);

  return (
    <form
      className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-20 mt-4 sm:mt-8"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <label className="font-medium text-xs sm:text-sm">
            <span>Ketikan Nama Lengkap</span>
            <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            className="border bg-white rounded-xl p-2 border-opacity-green"
            {...register("nama_lengkap")}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-medium text-xs sm:text-sm">
            <span>Ketikan Nama Lengkap Beserta Gelar</span>
            <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            className="bg-white border rounded-xl p-2 border-opacity-green"
            {...register("nama_lengkap_gelar")}
          />
        </div>

        {/* SIP */}
        <div className="flex flex-col gap-2">
          <label className="font-medium text-xs sm:text-sm">
            <span>SIP {"( Surat Izin Praktik )"}</span>
            <span className="text-red-600">*</span>
          </label>
          <input
            type="file"
            className="border bg-white rounded-xl p-2 border-opacity-green"
            {...register("sip_file")}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-medium text-xs sm:text-sm">
            <span>Ketikan No Surat SIP {"( Surat Izin Praktik )"}</span>
            <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            className="border bg-white rounded-xl p-2 border-opacity-green"
            {...register("no_sip")}
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
            className="bg-white border rounded-xl p-2 border-opacity-green"
            {...register("str_file")}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-medium text-xs sm:text-sm">
            <span>Ketikan No Surat STR {"( Surat Tanda Registrasi )"}</span>
            <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            className="border bg-white rounded-xl p-2 border-opacity-green"
            {...register("no_str")}
          />
        </div>

        {/* SERKOM */}
        <div className="flex flex-col gap-2">
          <label className="font-medium text-xs sm:text-sm">
            <span>Upload SERKOM {"( Surtifikat Kompetensi )"}</span>
            <span className="text-red-600">*</span>
          </label>
          <input
            type="file"
            className="border bg-white rounded-xl p-2 border-opacity-green"
            {...register("serkom_file")}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-medium text-xs sm:text-sm">
            <span>Ketikan No SERKOM {"( Surtifikat Kompetensi )"}</span>
            <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            className="border bg-white rounded-xl p-2 border-opacity-green"
            {...register("no_serkom")}
          />
        </div>
      </div>
      <div className="flex flex-col gap-6">
        {/* Ijajah Pengakuan */}
        <div className="flex flex-col gap-2">
          <label className="font-medium text-xs sm:text-sm">
            <span>Upload Ijajah Pengakuan Universitas/Institusi</span>
            <span className="text-red-600">*</span>
          </label>
          <input
            type="file"
            className="border bg-white rounded-xl p-2 border-opacity-green"
            {...register("ijazah_file")}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-medium text-xs sm:text-sm">
            <span>Ketikan No Ijajah</span>
            <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            className="border bg-white rounded-xl p-2 border-opacity-green"
            {...register("no_ijazah")}
          />
        </div>

        {/* Kartu Anggota PDKI (opsional) */}
        <div className="flex flex-col gap-2">
          <label className="font-medium text-xs sm:text-sm flex justify-between items-center">
            <span>Upload Kartu Anggota PDKI</span>
            <span className="text-end italic text-xs text-orange-500">{`"Opsional"`}</span>
          </label>
          <input
            type="file"
            className="border bg-white rounded-xl p-2 border-opacity-green"
            {...register("pdki_file")}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-medium text-xs sm:text-sm flex justify-between items-center">
            <span>Ketikan No Kartu Anggota PDKI</span>
            <span className="text-end italic text-xs text-orange-500">{`"Opsional"`}</span>
          </label>
          <input
            type="text"
            className="border rounded-xl p-2 border-opacity-green"
            {...register("no_pdki")}
          />
        </div>

        {/* KTP */}
        <div className="flex flex-col gap-2">
          <label className="font-medium text-xs sm:text-sm">
            <span>Upload Foto KTP</span>
            <span className="text-red-600">*</span>
          </label>
          <input
            type="file"
            className="border bg-white rounded-xl p-2 border-opacity-green"
            {...register("ktp_file")}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-medium text-xs sm:text-sm">
            <span>Ketikan No KTP {"( Kartu Tanda Penduduk )"}</span>
            <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            className="border bg-white rounded-xl p-2 border-opacity-green"
            {...register("no_ktp")}
          />
        </div>

        {/* Bukti pembayaran */}
        <div className="flex flex-col gap-2">
          <label className="font-medium text-xs sm:text-sm">
            <span>Upload Bukti Pembayaran</span>
            <span className="text-red-600">*</span>
          </label>
          <input
            type="file"
            className="border bg-white rounded-xl p-2 border-opacity-green"
            {...register("paid_file")}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-medium text-xs sm:text-sm">
            <span>Ketikan No ATM {"( Surat Izin Praktik )"}</span>
            <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            className="border bg-white rounded-xl p-2 border-opacity-green"
            {...register("no_atm")}
          />
        </div>

        {/* button daftar */}
        <div className="flex flex-col items-center sm:items-start gap-4 mt-4 sm:mt-8">
          <p className="text-xs sm:text-sm italic text-green text-center sm:text-start">{` "Tunggu beberapa saat setelah anda mendaftar, admin akan memberikan informasi selanjutnya lerkait pendaftaran anda melalui notifikasi dan gmail anda" `}</p>

          <button className="text-center text-sm w-[240px] text-white font-medium mt-2 p-2 rounded-xl bg-green">
            Daftar Pelatihan
          </button>
        </div>
      </div>
    </form>
  );
}

export default RegisterTrainingForm;
