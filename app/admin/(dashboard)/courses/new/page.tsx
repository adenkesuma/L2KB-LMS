import Link from "next/link"

const NewCourse = () => {
    return (
        <div className="min-h-screen mb-8 px-4 md:px-8 xl:px-14 pt-10">
            <div className="flex justify-between items-center">
              <h1 className="font-bold text-xl md:text-2xl text-gray-800">
                Buat Pelatihan
              </h1>
            </div>

            <div className="flex md:flex-row flex-col items-start gap-4 lg:gap-8">
              <div className="w-full md:w-2/3 rounded-xl border border-gray-200 mt-8 bg-white p-4 flex flex-col gap-6">
                <h2 className="mb-2 font-semibold text-xl text-gray-800">Form</h2>

                <div className="flex flex-col gap-2">
                  <label className="font-medium text-xs lg:text-sm">
                    Judul Pelatihan <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
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
                  <input type="checkbox" id="draft" className="w-5" />
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
                        className="border rounded-xl p-2 border-gray-300"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-xs lg:text-sm font-medium text-gray-800">
                        Sampai Tanggal <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="date"
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
                        className="border rounded-xl p-2 border-gray-300"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-xs lg:text-sm font-medium text-gray-800">
                        Sampai Tanggal <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="date"
                        className="border rounded-xl p-2 border-gray-300"
                      />
                    </div>
                  </div>

                  {/* Masa aktif pelatihan */}
                  <div className="flex flex-col gap-4 border-t border-gray-300 pt-4">
                    <h3 className="mb-2 font-medium text-sm md:text-base text-gray-800">
                      Masa Aktif Pelatihan
                    </h3>

                    <div className="flex flex-col gap-2">
                      <label className="text-xs lg:text-sm font-medium text-gray-800">
                        Mulai Tanggal <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="date"
                        className="border rounded-xl p-2 border-gray-300"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-xs lg:text-sm font-medium text-gray-800">
                        Sampai Tanggal <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="date"
                        className="border rounded-xl p-2 border-gray-300"
                      />
                    </div>
                  </div>

                  {/* kuota peserta pelatihan */}
                  <div className="flex flex-col gap-2 border-t border-gray-300 pt-4">
                    <label className="text-xs lg:text-sm font-medium">
                      Kuota Peserta Pelatihan <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      className="border rounded-xl p-2 border-gray-300"
                    />
                  </div>
                </div>

                <button className="text-center text-white font-medium mt-2 p-2 rounded-xl bg-green">
                  Simpan
                </button>
              </aside>
            </div>
        </div> 
    )
}

export default NewCourse