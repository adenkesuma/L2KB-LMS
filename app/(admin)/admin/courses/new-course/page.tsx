import Link from "next/link"

const NewCourse = () => {
    return (
        <div className='min-h-screen p-12'>
            <div className="flex justify-between items-center">
                <h1 className="font-bold text-[38px] text-gray-800">Tambah Pelatihan</h1>
            </div>

            <div className="flex items-start gap-8">
                <div className='w-3/4 rounded-xl border border-gray-100 mt-8 bg-white p-8 flex flex-col gap-6'>
                    <h2 className="mb-2 font-semibold text-[20px] text-gray-800">Form</h2>

                    <div className='flex flex-col gap-2'>
                        <label className='font-medium text-sm'>Judul Pelatihan <span className="text-red-600">*</span></label>
                        <input type="text" className="border rounded-xl p-2 border-opacity-green" />
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label className='font-medium text-sm'>Deskripsi Pelatihan <span className="text-red-600">*</span></label>
                        <textarea rows={6} cols={50} className="border rounded-xl p-2 border-opacity-green"></textarea>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="font-medium text-sm">Institusi Penyelenggara <span className="text-red-600">*</span></label>
                        <select name="status" id="status" className='border rounded-xl p-2 border-opacity-green bg-white'>
                            <option value="" disabled selected>Pilih Institusi</option>
                            <option value="pdki">Perhimpunan Dokter Keluarga Indonesia</option>
                        </select>
                    </div>


                </div>
                <div className='w-1/4 rounded-xl border border-gray-100 mt-8 bg-white p-8 flex flex-col gap-6'>
                    <h2 className="mb-2 font-semibold text-[20px] text-gray-800">Terbitkan</h2>

                    {/* checkbox draft */}
                    <div className="flex justify-start gap-4">
                        <input type="checkbox" id="draft" className="w-5" />
                        <label htmlFor="draft">Simpan Sebagai Draft</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewCourse