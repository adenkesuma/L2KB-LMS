"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";
import AsyncSelect from "react-select/async";
import axios from "axios";
import { toast } from "sonner";
import Select from "react-select";

import { NewCourseFormData } from "../page";
import { Button } from "../../../../../../components/ui/button";
import LoadingIcon from "../../../../../../components/icons/loading-icon";
import Image from "next/image";

export const memberOptions = [
  {
    value: "anggota_biasa",
    label: "Anggota Biasa : Sp KKLP",
  },
  {
    value: "anggota_luar_biasa",
    label: "Anggota Luar Biasa (Umum) : Dokter yang bukan Sp KKLP",
  },
  {
    value: "anggota_muda",
    label: "Anggota Muda : PPDS KKLP",
  },
];

function NewCourseForm({ adminAK }: { adminAK: string }) {
  const router = useRouter();
  const [trainingType, setTrainingType] = useState<any[]>();
  const [trainingOrganizer, setTrainingOrganizer] = useState<any[]>();
  const [coverImage, setCoverImage] = useState<File | null>();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    setValue,
    watch,
    getValues,
  } = useForm<NewCourseFormData>();

  useEffect(() => {
    const fetchTrainingType = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_P2KB_API}/admin/training-type`,
          {
            headers: {
              Authorization: `Bearer ${adminAK}`,
            },
          }
        );

        if (response.status === 200) {
          setTrainingType(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    const fetchTrainingOrganizer = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_P2KB_API}/admin/training-organizer`,
          {
            headers: {
              Authorization: `Bearer ${adminAK}`,
            },
          }
        );

        if (response.status === 200) {
          setTrainingOrganizer(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchTrainingType();
    fetchTrainingOrganizer();
  }, [adminAK]);

  const onSubmit: SubmitHandler<NewCourseFormData> = async (data) => {
    try {
      data.tujuan = data.tujuan.split("\n") as string[];
      data.kriteria = data.kriteria.split("\n") as string[];
      data.kompetensi = data.kompetensi.split("\n") as string[];
      data.target_candidate = "[]";
      data.catatan = data.catatan.split("\n") as string[];

      const formData = new FormData();

      for (const key in data) {
        if (data.hasOwnProperty(key)) {
          // @ts-ignore
          if (Array.isArray(data[key])) {
            // @ts-ignore
            formData.append(key, JSON.stringify(data[key]));
          }
          // @ts-ignore
          else formData.append(key, data[key]);
        }
      }

      if (coverImage) {
        formData.append("cover_image", coverImage);
      }

      formData.forEach((data, key) => console.log(key, data));

      const create = await axios.post(
        `${process.env.NEXT_PUBLIC_P2KB_API}/admin/training/create`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${adminAK}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (create.status) {
        toast.success("Successfully create course");
        router.push("/admin/courses");
      } else {
        toast.error("Something went wrong");
        // console.log(await create.data.response);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const filterTrainingtype = async (inputValue: string) => {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_P2KB_API}/admin/training-type?nama=${inputValue}`,
      {
        headers: {
          Authorization: `Bearer ${adminAK}`,
        },
      }
    );

    if (response.status === 200 && response.data.data.length !== 0) {
      setTrainingType(response.data.data);
      return response.data.data;
    }
    return null;
  };

  const filterTrainingOrganizer: (inputValue: string) => Promise<any> = async (
    inputValue: string
  ) => {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_P2KB_API}/admin/training-organizer?nama=${inputValue}`,
      {
        headers: {
          Authorization: `Bearer ${adminAK}`,
        },
      }
    );

    if (response.status === 200 && response.data.data.length !== 0) {
      setTrainingOrganizer(response.data.data);
      return response.data.data;
    }
    return null;
  };

  const promiseOptions = (inputValue: string, type: "organizer" | "type") =>
    new Promise<any[]>((resolve) => {
      setTimeout(() => {
        if (type === "organizer") {
          resolve(filterTrainingOrganizer(inputValue));
        }
        if (type === "type") {
          resolve(filterTrainingtype(inputValue));
        }
      }, 1000);
    });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setCoverImage(e.target.files[0]);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex md:flex-row flex-col items-start gap-4 lg:gap-8"
    >
      <div className="w-full md:w-2/3 rounded-xl border border-gray-200 mt-8 bg-white p-4 flex flex-col gap-6">
        <h2 className="mb-2 font-semibold text-xl text-gray-800">Form</h2>
         {coverImage ? (
          <Image
            src={URL.createObjectURL(coverImage)}
            alt="guideline image"
            width={1000}
            height={1000}
            className="rounded-lg h-28 lg:h-48 w-full bg-cover object-cover max-w-sm"
          />
        ) : (
          <div className="block bg-gray-200 rounded-lg h-28 lg:h-48 w-full bg-cover object-cover max-w-sm" />
        )}
        <div className="flex flex-col gap-2">
          <label className="font-medium text-xs lg:text-sm">
            Upload Gambar
          </label>
          <input
            onChange={handleImageChange}
            className="border rounded-xl p-2 border-gray-300"
            type="file"
            accept=".jpg,.jpeg,.png"
          />
        </div>

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
            Institusi Penyelenggara <span className="text-red-600">*</span>
          </label>
        
          <AsyncSelect
            instanceId="organizer_type"
            getOptionLabel={(option) => `${option.nama}`}
            defaultOptions={trainingOrganizer}
            loadOptions={(val) => promiseOptions(val, "organizer")}
            onChange={(data) => setValue("training_organizer_id", data.id)}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-medium text-xs lg:text-sm">
            Tipe Pelatihan <span className="text-red-600">*</span>
          </label>
          <AsyncSelect
            instanceId="training_type"
            getOptionLabel={(option) => `${option.nama}`}
            defaultOptions={trainingType}
            loadOptions={(val) => promiseOptions(val, "type")}
            onChange={(data) => setValue("training_type_id", data.id)}
            className="rounded-lg"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-medium text-xs lg:text-sm">
            Sasaran Peserta <span className="text-red-600">*</span>
          </label>
          <Select
            instanceId="member"
            className="basic-single"
            classNamePrefix="select"
            defaultValue="Pilih sasaran peserta"
            getOptionLabel={(option: any) => `${option.label}`}
            name="color"
            options={memberOptions as any}
            onChange={(data: any) => setValue("member", data.value)}
            // getOptionValue={(option: any) => `${option.value}`}
            // value={getValues("member")}
          />
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
            Kriteria <span className="text-red-600">*</span>
          </label>
          <textarea
            rows={6}
            cols={50}
            {...register("kriteria")}
            className="border rounded-xl p-2 border-gray-300 whitespace-pre-wrap"
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
            <div className="flex flex-col gap-2">
              <label className="font-medium text-xs lg:text-sm">
                Tahun Pelaksanaan <span className="text-red-600">*</span>
              </label>
              <input
                type="number"
                {...register("tahun_pelaksanaan")}
                className="border rounded-xl p-2 border-gray-300"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-medium text-xs lg:text-sm">
                Batch <span className="text-red-600">*</span>
              </label>
              <input
                type="number"
                {...register("batch")}
                className="border rounded-xl p-2 border-gray-300"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-medium text-xs lg:text-sm">
                Lokasi <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                {...register("location")}
                className="border rounded-xl p-2 border-gray-300"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-medium text-xs lg:text-sm">
                Total SKP <span className="text-red-600">*</span>
              </label>
              <input
                type="number"
                {...register("skp")}
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
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <LoadingIcon />
              Loading
            </>
          ) : (
            "Simpan"
          )}
        </Button>
      </aside>
    </form>
  );
}

export default NewCourseForm;
