"use client";

import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { IRegisterTrainingData } from "../page";
import axios from "axios";
import useStore from "../../../../../../store/use-store";
import { userAuthStore } from "../../../../../../store/user-auth.store";
import { toast } from "sonner";

function RegisterTrainingForm({ training_id, price }: { training_id: string, price: number | undefined }) {
  const userAuth = useStore(userAuthStore, (state) => state);
  const [registerTrainingData, setRegisterTrainingData] = useState<IRegisterTrainingData>();

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
      if (price === 0) {
        const register = await axios.post(
          `${process.env.NEXT_PUBLIC_P2KB_API}/training/register?training_id=${training_id}`, "",
          {
            headers: {
              Authorization: `Bearer ${userAuth?.accessToken}`,
              // "Content-Type": "application/json",
            },
          }
        );

        if (register.status === 200 || register.status === 201) {
          toast.success("Successfully register training");
          window.location.href = "/courses";
        } else {
          toast.error("Error register training");
        }
      } else {
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
          toast.success("Successfully register training");
          window.location.href = "/courses";
        } else {
          toast.error("Error register training");
        }
      }

    } catch (error: any) {
      toast.error(error.response.data.message)
    }
  };

  return (
    <form
      className="flex flex-col gap-10 justify-center items-center mt-4 sm:mt-8"
      onSubmit={handleSubmit(onSubmit)}
    >
      {price === 0 ? (
        <div className="border border-gray-200 rounded-lg p-8">
          <p className="text-green font-semibold">Pelatihan ini Gratis, klik daftar untuk melanjutkan pendaftaran</p>
        </div>
      ) : (
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
      )}

      {/* button daftar */}
      <p className="text-xs max-w-xl sm:text-sm italic text-orange-500 text-center">
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
