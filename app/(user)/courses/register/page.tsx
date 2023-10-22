import React from 'react'

const Register = () => {
  return (
    <main className='pt-4 sm:pt-6 lg:pt-12 min-h-screen pb-8'>
        <h1 className='font-bold text-xl sm:text-2xl lg:text-[38px]'>Daftar Pelatihan</h1>

        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-20 mt-4 sm:mt-8'>
            <div className='flex flex-col gap-6'>
                <div className='flex flex-col gap-2'>
                    <label className='font-medium text-xs sm:text-sm'>
                        <span>Ketikan Nama Lengkap</span>
                        <span className="text-red-600">*</span>
                    </label>
                    <input 
                        type="text" 
                        className="border bg-white rounded-xl p-2 border-opacity-green"
                        required
                    />
                </div>

                <div className='flex flex-col gap-2'>
                    <label className='font-medium text-xs sm:text-sm'>
                        <span>Ketikan Nama Lengkap Beserta Gelar</span>
                        <span className="text-red-600">*</span>
                    </label>
                    <input type="text" className="bg-white border rounded-xl p-2 border-opacity-green" />
                </div>

                {/* SIP */}
                <div className='flex flex-col gap-2'>
                    <label className='font-medium text-xs sm:text-sm'>
                        <span>SIP {"( Surat Izin Praktik )"}</span>
                        <span className="text-red-600">*</span>
                    </label>
                    <input type="file" className='border bg-white rounded-xl p-2 border-opacity-green'/>
                </div>
                <div className='flex flex-col gap-2'>
                    <label className='font-medium text-xs sm:text-sm'>
                        <span>Ketikan No Surat SIP {"( Surat Izin Praktik )"}</span>
                        <span className="text-red-600">*</span>
                    </label>
                    <input type="text" className="border bg-white rounded-xl p-2 border-opacity-green" />
                </div>

                {/* STR */}
                <div className='flex flex-col gap-2'>
                    <label className='font-medium text-xs sm:text-sm'>
                        <span>STR {"( Surat Tanda Registrasi )"}</span>
                        <span className="text-red-600">*</span>
                    </label>
                    <input type="file" className='bg-white border rounded-xl p-2 border-opacity-green' />
                </div>
                <div className='flex flex-col gap-2'>
                    <label className='font-medium text-xs sm:text-sm'>
                        <span>Ketikan No Surat STR {"( Surat Tanda Registrasi )"}</span>
                        <span className="text-red-600">*</span>
                    </label>
                    <input type="text" className="border bg-white rounded-xl p-2 border-opacity-green" />
                </div>
            
                {/* SERKOM */}
                <div className='flex flex-col gap-2'>
                    <label className='font-medium text-xs sm:text-sm'>
                        <span>Upload SERKOM {"( Surtifikat Kompetensi )"}</span>
                        <span className="text-red-600">*</span>
                    </label>
                    <input type="file" className='border bg-white rounded-xl p-2 border-opacity-green' />
                </div>
                <div className='flex flex-col gap-2'>
                    <label className='font-medium text-xs sm:text-sm'>
                        <span>Ketikan No Surat SIP {"( Surat Izin Praktik )"}</span>
                        <span className="text-red-600">*</span>
                    </label>
                    <input type="text" className="border bg-white rounded-xl p-2 border-opacity-green" />
                </div>

            </div>
            <div className='flex flex-col gap-6'>
                {/* Ijajah Pengakuan */}
                <div className='flex flex-col gap-2'>
                    <label className='font-medium text-xs sm:text-sm'>
                        <span>Upload Ijajah Pengakuan Universitas/Institusi</span>
                        <span className="text-red-600">*</span>     
                    </label>
                    <input type="file" className='border bg-white rounded-xl p-2 border-opacity-green' />
                </div>
                <div className='flex flex-col gap-2'>
                    <label className='font-medium text-xs sm:text-sm'>
                        <span>Ketikan No Ijajah</span>
                        <span className="text-red-600">*</span>    
                    </label>
                    <input type="text" className="border bg-white rounded-xl p-2 border-opacity-green" />
                </div>

                {/* Kartu Anggota PDKI (opsional) */}
                <div className='flex flex-col gap-2'>
                    <label className='font-medium text-xs sm:text-sm flex justify-between items-center'>
                        <span>Upload Kartu Anggota PDKI</span>
                        <span className='text-end italic text-xs text-orange-500'>{`"Opsional"`}</span>
                    </label>
                    <input type="file"  className='border bg-white rounded-xl p-2 border-opacity-green'/>
                </div>
                <div className='flex flex-col gap-2'>
                    <label className='font-medium text-xs sm:text-sm flex justify-between items-center'>
                        <span>Ketikan No Kartu Anggota PDKI</span> 
                        <span className='text-end italic text-xs text-orange-500'>{`"Opsional"`}</span>
                    </label>
                    <input type="text" className="border rounded-xl p-2 border-opacity-green" />
                </div>

                {/* KTP */}
                <div className='flex flex-col gap-2'>
                    <label className='font-medium text-xs sm:text-sm'>
                        <span>Upload Foto KTP</span>
                        <span className="text-red-600">*</span>
                    </label>
                    <input type="file" className='border bg-white rounded-xl p-2 border-opacity-green' />
                </div>
                <div className='flex flex-col gap-2'>
                    <label className='font-medium text-xs sm:text-sm'>
                        <span>Ketikan No KTP {"( Kartu Tanda Penduduk )"}</span>
                        <span className="text-red-600">*</span>
                    </label>
                    <input type="text" className="border bg-white rounded-xl p-2 border-opacity-green" />
                </div>

                {/* Bukti pembayaran */}
                <div className='flex flex-col gap-2'>
                    <label className='font-medium text-xs sm:text-sm'>
                        <span>Upload Bukti Pembayaran</span>
                        <span className="text-red-600">*</span>    
                    </label>
                    <input type="file" className='border bg-white rounded-xl p-2 border-opacity-green' />
                </div>
                <div className='flex flex-col gap-2'>
                    <label className='font-medium text-xs sm:text-sm'>
                        <span>Ketikan No ATM  {"( Surat Izin Praktik )"}</span>
                        <span className="text-red-600">*</span>
                    </label>
                    <input type="text" className="border bg-white rounded-xl p-2 border-opacity-green" />
                </div>

                {/* button daftar */}
                <div className='flex flex-col items-center sm:items-start gap-4 mt-4 sm:mt-8'>
                    <p className='text-xs sm:text-sm italic text-green text-center sm:text-start'>{` "Tunggu beberapa saat setelah anda mendaftar, admin akan memberikan informasi selanjutnya lerkait pendaftaran anda melalui notifikasi dan gmail anda" `}</p>

                    <button className="text-center text-sm w-[240px] text-white font-medium mt-2 p-2 rounded-xl bg-green">
                        Daftar Pelatihan
                    </button>
                </div>
            </div>
        </div>
    </main>
  )
}

export default Register