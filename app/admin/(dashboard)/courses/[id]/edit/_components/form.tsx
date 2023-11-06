"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";
import AsyncSelect from "react-select/async";
import axios from "axios";
import { toast } from "sonner";
import Select from "react-select";

import { Button } from "../../../../../../../components/ui/button";
import LoadingIcon from "../../../../../../../components/icons/loading-icon";
import { NewCourseFormData } from "../../../new/page";
import { ITrainingData } from "../../../../../../(user)/courses/page";
import moment from "moment";
import { memberOptions } from "../../../new/_components/form";
import Image from "next/image";
import { ArrowRightIcon } from "@radix-ui/react-icons";

interface EditCourseFormData extends NewCourseFormData {}

function EditCourseForm({
  adminAK,
  id,
  prevData,
}: {
  adminAK: string;
  id: string;
  prevData: ITrainingData | null;
}) {
  const router = useRouter();
  const [trainingType, setTrainingType] = useState<any[]>();
  const [trainingOrganizer, setTrainingOrganizer] = useState<any[]>();
  const [formData, setFormData] = useState<EditCourseFormData>();
  const [coverImage, setCoverImage] = useState<File | null>();

  // console.log(prevData);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setCoverImage(e.target.files[0]);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    setValue,
    reset,
    watch,
    getValues,
  } = useForm<EditCourseFormData>();

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
    // fetchFormData();
  }, [adminAK]);

  const onSubmit: SubmitHandler<EditCourseFormData> = async (data) => {
    try {
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
      // formData.forEach((data, key) => console.log(key, data));

      const update = await axios.put(
        `${process.env.NEXT_PUBLIC_P2KB_API}/admin/training/update?training_id=${id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${adminAK}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (update.status) {
        toast.success("Successfully update course");
        router.push("/admin/courses");
      } else {
        toast.error("Something went wrong");
        console.log(await update.data.response);
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

  useEffect(() => {
    if (prevData) {
      console.log(1);
      console.log("WOI", prevData);
      prevData.training_start = moment(prevData?.training_start).format(
        "yyyy-MM-DD"
      );
      prevData.training_end = moment(prevData?.training_end).format(
        "yyyy-MM-DD"
      );
      prevData.regis_start = moment(prevData?.regis_start).format("yyyy-MM-DD");
      prevData.regis_end = moment(prevData?.regis_end).format("yyyy-MM-DD");
      if (typeof prevData.member === "string") {
        const ftr = memberOptions.filter((data) => {
          return data.value == prevData.member;
        });
        console.log("ftr", ftr[0]);
        prevData.member = ftr[0] as any;
      }

      try {
        prevData.catatan = JSON.parse(prevData.catatan).join("\n");
        prevData.tujuan = JSON.parse(prevData.tujuan).join("\n");
        prevData.kompetensi = JSON.parse(prevData.kompetensi).join("\n");
        prevData.kriteria = JSON.parse(prevData.kriteria).join("\n");
        prevData.target_candidate = JSON.parse(prevData.target_candidate).join(
          "\n"
        );
      } catch (error) {
        // console.error("Error parsing JSON:", error);
      }

      console.log(prevData);
      reset(prevData as any);
    }
  }, [prevData, reset]);

  // console.log(watch());

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex md:flex-row flex-col items-start gap-4 lg:gap-8"
    >
      <div className="w-full md:w-2/3 rounded-xl border border-gray-200 mt-8 bg-white p-4 flex flex-col gap-6">
        <h2 className="mb-2 font-semibold text-xl text-gray-800">Form</h2>
        <div className="flex justify-center items-center gap-4">
          <Image
            src={`${process.env.NEXT_PUBLIC_P2KB_API}/img/training_cover/${prevData?.id}.webp`}
            alt="guideline image"
            width={1000}
            height={1000}
            className="rounded-lg h-28 lg:h-40 w-full bg-cover object-cover max-w-sm"
          />
          <ArrowRightIcon />
          {coverImage ? (
            <Image
              src={URL.createObjectURL(coverImage)}
              alt="guideline image"
              width={1000}
              height={1000}
              className="rounded-lg h-28 lg:h-40 w-full bg-cover object-cover max-w-sm"
            />
          ) : (
            <div className="block bg-gray-200 rounded-lg h-28 lg:h-40 w-full bg-cover object-cover max-w-sm" />
          )}
        </div>
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
        {/* <div className="flex flex-col gap-2">
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
        </div> */}

        <div className="flex flex-col gap-2">
          <label className="font-medium text-xs lg:text-sm">
            Institusi Penyelenggara <span className="text-red-600">*</span>
          </label>
          {/* <select
            className="border rounded-xl p-2 border-gray-300 bg-white"
            defaultValue="def"
          >
            <option value="def" disabled>
              Pilih Institusi
            </option>
            <option value="pdki">Perhimpunan Dokter Keluarga Indonesia</option>
            {trainingType?.map((item) => {
              return (
                <option value="pdki" key={item.i}>
                  {item.name}
                </option>
              );
            })}
          </select> */}
          <AsyncSelect
            instanceId="organizer_type"
            getOptionLabel={(option) => `${option.nama}`}
            defaultOptions={trainingOrganizer}
            loadOptions={(val) => promiseOptions(val, "organizer")}
            onChange={(data) =>
              setValue("training_organizer_id", data?.id as string)
            }
            defaultValue={prevData?.trainingOrganizer}
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
            onChange={(data) =>
              setValue("training_type_id", data?.id as string)
            }
            className="rounded-lg"
            defaultValue={prevData?.trainingType}
          />
        </div>

        {typeof prevData?.member !== "string" && (
          <div className="flex flex-col gap-2">
            <label className="font-medium text-xs lg:text-sm">
              Sasaran Peserta <span className="text-red-600">*</span>
            </label>
            <Select
              className="basic-single"
              classNamePrefix="select"
              defaultValue={prevData?.member}
              getOptionLabel={(option: any) => `${option.label}`}
              options={memberOptions as any}
              onChange={(data: any) => setValue("member", data.value)}
            />
          </div>
        )}

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

export default EditCourseForm;
