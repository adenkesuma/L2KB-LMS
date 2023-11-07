"use client";

import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { IRegisterTrainingData } from "../page";
import axios from "axios";
import { redirect, useRouter } from "next/navigation";
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
      const formData = new FormData();

      const fileKeys = [
        "paid_file",
      ];

      fileKeys.forEach((key) => {
        // @ts-ignore
        if (data[key]) {
          // @ts-ignore
          formData.append(key, data[key][0]);
        }
      });

      for (const key in data) {
        if (data.hasOwnProperty(key)) {
          // @ts-ignore
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

      if (register.status === 200 || register.status === 201) {
        // console.log(await register.data);
        toast("Successfully register training");
        window.location.href = "/courses";
        // redirect('/courses')
      } else {
        toast.error("Error register training");
        // console.log(await register.data.response);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      className="flex flex-col gap-10 justify-center items-center mt-4 sm:mt-8"
      onSubmit={handleSubmit(onSubmit)}
    >
      {/* Bukti pembayaran */}
      <div className="flex flex-col gap-2">
        <label className="font-medium text-xs sm:text-sm">
          <span>Upload Bukti Pembayaran</span>
          <span className="text-red-600">*</span>
        </label>
        <input
          type="file"
          className="border bg-white rounded-xl p-2 border-gray-300"
          {...register("paid_file")}
        />
      </div>

      {/* button daftar */}
      <p className="text-xs max-w-xl sm:text-sm italic text-green text-center">
        {` "Tunggu beberapa saat setelah anda mendaftar, admin akan memberikan informasi selanjutnya lerkait pendaftaran anda melalui notifikasi dan gmail anda" `}
      </p>
      <button
        type="submit"
        className="text-center text-sm w-[240px] text-white font-medium mt-2 p-2 rounded-xl bg-green"
      >
        Daftar Pelatihan
      </button>
    </form>
  );
}

export default RegisterTrainingForm;
