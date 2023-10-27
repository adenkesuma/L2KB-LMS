"use client"

import { useState, ChangeEvent } from "react"
import axios from "axios"


interface FormData {
  nama: string;
  deskripsi: string;
  quota: number;
  tahun_pelaksanaan: number;
  training_type_id: string;
  training_organizer_id: string;
  batch: number;
  training_start: Date;
  training_end: Date;
  regis_start: Date;
  regis_end: Date;
  location: string;
  price: number;
  tujuan: string[];
  kriteria: string[];
  kompetensi: string[];
  catatan: string[];
  draft: boolean;
  target_candidate: string[];
}

const NewCourse = () => {
  const [formData, setFormData] = useState<FormData>({})

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async () => {
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_L2KB_API}/admin/training/create`, formData)

      if (response.status === 200) {
        console.log('Pelatihan berhasil ditambahkan:', response.data);
      } else {
        console.error('Gagal menambahkan pelatihan:', response.data);
      }
    } catch (error) {
      console.error('Terjadi kesalahan dalam permintaan HTTP:', error);
    }
  };

  return (
      <div className="min-h-screen mb-8 px-4 md:px-8 xl:px-14 pt-10">
          <div className="flex justify-between items-center">
            <h1 className="font-bold text-xl md:text-2xl text-gray-800">
              Buat Pelatihan
            </h1>
          </div>
          <form onSubmit={handleSubmit} className="flex md:flex-row flex-col items-start gap-4 lg:gap-8">
            <div className="w-full md:w-2/3 rounded-xl border border-gray-200 mt-8 bg-white p-4 flex flex-col gap-6">
              <h2 className="mb-2 font-semibold text-xl text-gray-800">Form</h2>
              <div className="flex flex-col gap-2">
                <label className="font-medium text-xs lg:text-sm">
                  Judul Pelatihan <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  value={formData.nama}
                  onChange={handleChange}
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
                  value={formData.deskripsi}
                  onChange={handleChange}
                  className="border rounded-xl p-2 border-gray-300"
                ></textarea>
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-medium text-xs lg:text-sm">
                  Target Peserta Pelatihan <span className="text-red-600">*</span>
                </label>
                <select
                  name="status"
                  id="status"
                  value={formData.target_candidate}
                  onChange={handleChange}
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
                  name="status"
                  id="status"
                  className="border rounded-xl p-2 border-gray-300 bg-white"
                >
                  <option value="" disabled selected>
                    Pilih Institusi
                  </option>
                  <option value="pdki">
                    Perhimpunan Dokter Keluarga Indonesia
                  </option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-medium text-xs lg:text-sm">
                  Sasaran Peserta <span className="text-red-600">*</span>
                </label>
                <select
                  name="status"
                  id="status"
                  value={formData.kriteria}
                  onChange={handleChange}
                  className="border rounded-xl p-2 border-gray-300 bg-white"
                >
                  <option value="" disabled selected>
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
                  value={formData.tujuan}
                  onChange={handleChange}
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
                  value={formData.kompetensi}
                  onChange={handleChange}
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
                  value={formData.catatan}
                  onChange={handleChange}
                  className="border rounded-xl p-2 border-gray-300"
                ></textarea>
              </div>
            </div>
            <aside className="w-full md:w-1/3 rounded-xl border border-gray-200 mt-8 bg-white p-4 flex flex-col gap-6">
              <h2 className="mb-2 font-semibold text-xl text-gray-800">
                Terbitkan
              </h2>

              {/* checkbox draft */}
              <div className="flex justify-start gap-4">
                <input checked={formData.draft} onChange={handleChange} type="checkbox" id="draft" className="w-5" />
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
                      value={formData.regis_start}
                      onChange={handleChange}
                      className="border rounded-xl p-2 border-gray-300"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs lg:text-sm font-medium text-gray-800">
                      Sampai Tanggal <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="date"
                      value={formData.regis_end}
                      onChange={handleChange}
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
                      value={formData.training_start}
                      onChange={handleChange}
                      className="border rounded-xl p-2 border-gray-300"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs lg:text-sm font-medium text-gray-800">
                      Sampai Tanggal <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="date"
                      value={formData.training_end}
                      onChange={handleChange}
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
                      value={formData.quota}
                      onChange={handleChange}
                      className="border rounded-xl p-2 border-gray-300"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-xs lg:text-sm font-medium">
                      Harga Pelatihan <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="number"
                      value={formData.price}
                      onChange={handleChange}
                      className="border rounded-xl p-2 border-gray-300"
                    />
                  </div>
                </div>
              </div>
              <button type="submit" className="text-center text-white font-medium mt-2 p-2 rounded-xl bg-green">
                Simpan
              </button>
            </aside>
          </form>
      </div> 
    )
}

export default NewCourse