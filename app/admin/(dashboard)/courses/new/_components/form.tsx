"use client";

import { useState, ChangeEvent } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import { NewCourseFormData } from "../page";

function NewCourseForm() {
  const [formData, setFormData] = useState<NewCourseFormData>();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
    watch,
  } = useForm<NewCourseFormData>();

  const onSubmit: SubmitHandler<NewCourseFormData> = async (data) => {
    try {
      // console.log("1", data.profile_picture);
      //   const formData = new FormData();
      //   const profile = data.profile;
      //   if (data.profile_picture) {
      //     formData.append("profile_picture", data.profile_picture[0]);
      //   } else {
      //     formData.delete("profile_picture");
      //   }
      //   for (const key in data) {
      //     if (data.hasOwnProperty(key)) {
      //       formData.append(key, data[key]);
      //     }
      //   }
      //   for (const key in profile) {
      //     if (profile.hasOwnProperty(key)) {
      //       formData.append(key, profile[key]);
      //     }
      //   }
      //   const update = await axios.put(
      //     `${process.env.NEXT_PUBLIC_P2KB_API}/profile/update`,
      //     formData,
      //     {
      //       headers: {
      //         Authorization: `Bearer ${userAuth?.accessToken}`,
      //         "Content-Type": "multipart/form-data",
      //       },
      //     }
      //   );
      //   if (update.status) {
      //     toast("Successfully update profile");
      //     router.refresh();
      //   } else {
      //     toast.error("Successfully update profile");
      //     console.log(await update.data.response);
      //   }
    } catch (error) {
      console.log(error);
    }
  };

  console.log(watch());

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex md:flex-row flex-col items-start gap-4 lg:gap-8"
    >
      <div className="w-full md:w-2/3 rounded-xl border border-gray-200 mt-8 bg-white p-4 flex flex-col gap-6">
        <h2 className="mb-2 font-semibold text-xl text-gray-800">Form</h2>
        <div className="flex flex-col gap-2">
          <label className="font-medium text-xs lg:text-sm">
            Judul Pelatihan <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            {...register("nama")}
            className="border rounded-xl p-2 border-gray-300"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-medium text-xs lg:text-sm">
            Deskripsi Pelatihan <span className="text-red-600">*</span>
          </label>
          <textarea
            rows={6}
            cols={50}
            {...register("deskripsi")}
            className="border rounded-xl p-2 border-gray-300"
          ></textarea>
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-medium text-xs lg:text-sm">
            Target Peserta Pelatihan <span className="text-red-600">*</span>
          </label>
          <select
            {...register("target_candidate")}
            className="border rounded-xl p-2 border-gray-300 bg-white"
          >
            <option value="anggota biasa">Anggota Biasa : Sp KKLP</option>
            <option value="anggota luar biasa">
              Anggota Luar Biasa {"(Umum)"} : Dokter yang bukan Sp KKLP
            </option>
            <option value="anggota muda">Anggota Muda : PPDS KKLP</option>
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-medium text-xs lg:text-sm">
            Institusi Penyelenggara <span className="text-red-600">*</span>
          </label>
          <select
            className="border rounded-xl p-2 border-gray-300 bg-white"
            defaultValue="def"
          >
            <option value="def" disabled>
              Pilih Institusi
            </option>
            <option value="pdki">Perhimpunan Dokter Keluarga Indonesia</option>
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-medium text-xs lg:text-sm">
            Sasaran Peserta <span className="text-red-600">*</span>
          </label>
          <select
            {...register("member")}
            className="border rounded-xl p-2 border-gray-300 bg-white"
            defaultValue="def"
          >
            <option value="def" disabled>
              Pilih sararan peserta
            </option>
            <option value="anggota biasa">Anggota Biasa : Sp KKLP</option>
            <option value="anggota luar biasa">
              Anggota Luar Biasa {"(Umum)"} : Dokter yang bukan Sp KKLP
            </option>
            <option value="anggota muda">Anggota Muda : PPDS KKLP</option>
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-medium text-xs lg:text-sm">
            Tujuan Pelatihan <span className="text-red-600">*</span>
          </label>
          <textarea
            rows={6}
            cols={50}
            {...register("tujuan")}
            className="border rounded-xl p-2 border-gray-300"
          ></textarea>
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-medium text-xs lg:text-sm">
            Kompetensi <span className="text-red-600">*</span>
          </label>
          <textarea
            rows={6}
            cols={50}
            {...register("kompetensi")}
            className="border rounded-xl p-2 border-gray-300"
          ></textarea>
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-medium text-xs lg:text-sm">
            Catatan <span className="text-red-600">*</span>
          </label>
          <textarea
            rows={6}
            cols={50}
            {...register("catatan")}
            className="border rounded-xl p-2 border-gray-300"
          ></textarea>
        </div>
      </div>
      <aside className="w-full md:w-1/3 rounded-xl border border-gray-200 mt-8 bg-white p-4 flex flex-col gap-6">
        <h2 className="mb-2 font-semibold text-xl text-gray-800">Terbitkan</h2>

        {/* checkbox draft */}
        <div className="flex justify-start gap-4">
          <input
            {...register("draft")}
            type="checkbox"
            id="draft"
            className="w-5"
          />
          <label htmlFor="draft" className="text-xs lg:text-sm font-medium">
            Simpan Sebagai Draft
          </label>
        </div>

        <div className="p-4 rounded-xl bg-gray-50 border border-gray-100 flex flex-col gap-6">
          {/* jadwal pendaftaran */}
          <div className="flex flex-col gap-4">
            <h3 className="mb-2 font-medium text-sm md:text-base text-gray-800">
              Jadwal Pendaftaran
            </h3>
            <div className="flex flex-col gap-2">
              <label className="text-xs lg:text-sm font-medium text-gray-800">
                Mulai Tanggal <span className="text-red-600">*</span>
              </label>
              <input
                type="date"
                {...register("regis_start")}
                className="border rounded-xl p-2 border-gray-300"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs lg:text-sm font-medium text-gray-800">
                Sampai Tanggal <span className="text-red-600">*</span>
              </label>
              <input
                type="date"
                {...register("regis_end")}
                className="border rounded-xl p-2 border-gray-300"
              />
            </div>
          </div>

          {/* tanggal pelaksanaan */}
          <div className="flex flex-col gap-4 border-t border-gray-300 pt-4">
            <h3 className="mb-2 font-medium text-sm md:text-base text-gray-800">
              Tanggal Pelaksanaan
            </h3>
            <div className="flex flex-col gap-2">
              <label className="text-xs lg:text-sm font-medium text-gray-800">
                Mulai Tanggal <span className="text-red-600">*</span>
              </label>
              <input
                type="date"
                {...register("training_start")}
                className="border rounded-xl p-2 border-gray-300"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs lg:text-sm font-medium text-gray-800">
                Sampai Tanggal <span className="text-red-600">*</span>
              </label>
              <input
                type="date"
                {...register("training_end")}
                className="border rounded-xl p-2 border-gray-300"
              />
            </div>
          </div>

          {/* kuota peserta pelatihan */}
          <div className="flex flex-col gap-4 border-t border-gray-300 pt-4">
            <h3 className="mb-2 font-medium text-sm md:text-base text-gray-800">
              Ketersediaan dan Harga
            </h3>
            <div className="flex flex-col gap-2">
              <label className="text-xs lg:text-sm font-medium">
                Kuota Peserta Pelatihan <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                {...register("quota")}
                className="border rounded-xl p-2 border-gray-300"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs lg:text-sm font-medium">
                Harga Pelatihan <span className="text-red-600">*</span>
              </label>
              <input
                type="number"
                {...register("price")}
                className="border rounded-xl p-2 border-gray-300"
              />
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="text-center text-white font-medium mt-2 p-2 rounded-xl bg-green"
        >
          Simpan
        </button>
      </aside>
    </form>
  );
}

export default NewCourseForm;
