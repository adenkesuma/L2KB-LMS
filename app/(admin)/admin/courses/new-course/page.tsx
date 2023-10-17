import Link from "next/link"

const NewCourse = () => {
    return (
        <div className='min-h-screen p-12'>
            <div className="flex justify-between items-center">
                <h1 className="font-bold text-[38px] text-gray-800">Tambah Pelatihan</h1>
            </div>

            <div className="flex items-start gap-8">
                <div className='w-3/4 rounded-xl border border-gray-100 mt-8 bg-white p-8 flex flex-col gap-6'>
                    <h2 className="mb-2 font-semibold text-[22px] text-gray-800">Form</h2>

                    <div className='flex flex-col gap-2'>
                        <label className='font-medium text-sm'>Judul Pelatihan <span className="text-red-600">*</span></label>
                        <input type="text" className="border rounded-xl p-2 border-opacity-green" />
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label className='font-medium text-sm'>Deskripsi Pelatihan <span className="text-red-600">*</span></label>
                        <textarea rows={6} cols={50} className="border rounded-xl p-2 border-opacity-green"></textarea>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="font-medium text-sm">Target Peserta Pelatihan <span className="text-red-600">*</span></label>
                        <select name="status" id="status" className='border rounded-xl p-2 border-opacity-green bg-white'>
                            <option value="anggota biasa">Anggota Biasa : Sp KKLP</option>
                            <option value="anggota luar biasa">Anggota Luar Biasa {"(Umum)"} : Dokter yang bukan Sp KKLP</option>
                            <option value="anggota muda">Anggota Muda : PPDS KKLP</option>
                        </select>
                    </div>


                    <div className="flex flex-col gap-2">
                        <label className="font-medium text-sm">Institusi Penyelenggara <span className="text-red-600">*</span></label>
                        <select name="status" id="status" className='border rounded-xl p-2 border-opacity-green bg-white'>
                            <option value="" disabled selected>Pilih Institusi</option>
                            <option value="pdki">Perhimpunan Dokter Keluarga Indonesia</option>
                        </select>
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label className='font-medium text-sm'>Tujuan Pelatihan <span className="text-red-600">*</span></label>
                        <textarea rows={6} cols={50} className="border rounded-xl p-2 border-opacity-green"></textarea>
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label className='font-medium text-sm'>Kompetensi <span className="text-red-600">*</span></label>
                        <textarea rows={6} cols={50} className="border rounded-xl p-2 border-opacity-green"></textarea>
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label className='font-medium text-sm'>Catatan <span className="text-red-600">*</span></label>
                        <textarea rows={6} cols={50} className="border rounded-xl p-2 border-opacity-green"></textarea>
                    </div>


                </div>
                <aside className='w-1/4 rounded-xl border border-gray-100 mt-8 bg-white p-8 flex flex-col gap-6'>
                    <h2 className="mb-2 font-semibold text-[22px] text-gray-800">Terbitkan</h2>

                    {/* checkbox draft */}
                    <div className="flex justify-start gap-4">
                        <input type="checkbox" id="draft" className="w-5" />
                        <label htmlFor="draft" className="text-sm font-medium">Simpan Sebagai Draft</label>
                    </div>

                    <div className="p-4 rounded-xl bg-gray-100 flex flex-col gap-6">
                        {/* jadwal pendaftaran */}
                        <div className="flex flex-col gap-4">
                            <h3 className="mb-2 font-medium text-lg text-gray-800">Jadwal Pendaftaran</h3>

                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-medium text-gray-800">Mulai Tanggal <span className="text-red-600">*</span></label>
                                <input type="date" className="border rounded-xl p-2 border-opacity-green" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-medium text-gray-800">Sampai Tanggal <span className="text-red-600">*</span></label>
                                <input type="date" className="border rounded-xl p-2 border-opacity-green" />
                            </div>
                        </div>

                        {/* tanggal pelaksanaan */}
                        <div className="flex flex-col gap-4 border-t border-gray-300 pt-4">
                            <h3 className="mb-2 font-medium text-lg text-gray-800">Tanggal Pelaksanaan</h3>

                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-medium text-gray-800">Mulai Tanggal <span className="text-red-600">*</span></label>
                                <input type="date" className="border rounded-xl p-2 border-opacity-green" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-medium text-gray-800">Sampai Tanggal <span className="text-red-600">*</span></label>
                                <input type="date" className="border rounded-xl p-2 border-opacity-green" />
                            </div>
                        </div>

                        {/* Masa aktif pelatihan */}
                        <div className="flex flex-col gap-4 border-t border-gray-300 pt-4">
                            <h3 className="mb-2 font-medium text-lg text-gray-800">Masa Aktif Pelatihan</h3>

                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-medium text-gray-800">Mulai Tanggal <span className="text-red-600">*</span></label>
                                <input type="date" className="border rounded-xl p-2 border-opacity-green" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-medium text-gray-800">Sampai Tanggal <span className="text-red-600">*</span></label>
                                <input type="date" className="border rounded-xl p-2 border-opacity-green" />
                            </div>
                        </div>

                        {/* kuota peserta pelatihan */}
                        <div className="flex flex-col gap-2 border-t border-gray-300 pt-4">
                            <label className="text-sm font-medium">Kuota Peserta Pelatihan <span className="text-red-600">*</span></label>
                            <input type="text" className="border rounded-xl p-2 border-opacity-green" />
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