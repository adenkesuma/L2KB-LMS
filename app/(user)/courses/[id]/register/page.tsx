import React from "react";
import { redirect } from "next/navigation";

import RegisterTrainingForm from "./_components/form";
import { getProfile } from "../../../../../lib/services/profile";
import { getOneTrainingData } from "@/lib/services/training-data.service";

export interface IRegisterTrainingData {
  // [key: string]: any;
  nama_lengkap_gelar: string;
  nama_lengkap: string;
  no_sip: string;
  no_str: string;
  no_serkom: string;
  no_ijazah: string;
  no_pdki: string;
  no_ktp: string;
  no_atm: string;
  sip_file: FileList | undefined;
  str_file: FileList | undefined;
  serkom_file: FileList | undefined;
  ijazah_file: FileList | undefined;
  pdki_file: FileList | undefined;
  ktp_file: FileList | undefined;
  paid_file: FileList | undefined;
}

async function Register({ params }: { params: { id: string } }) {
  const profile = await getProfile();

  const oneTrainingData = await getOneTrainingData(params.id);

  if (!profile) {
    redirect("/login");
  }

  return (
    <main className="flex flex-col gap-18 justify-center items-center min-h-screen pb-8">
      <h1 className="font-bold text-xl sm:text-2xl lg:text-[38px]">
        Daftar Pelatihan
      </h1>

      <RegisterTrainingForm price={oneTrainingData?.price} training_id={params.id} />
    </main>
  );
}

// export const runtime = "edge";
export default Register;
