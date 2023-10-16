import React from 'react'

const Register = () => {
  return (
    <main className='mt-12 pb-8'>
        <h1 className='font-bold text-[38px]'>Isikan seluruh data yang diperlukan</h1>

        <div className='grid grid-cols-2 gap-20 mt-8'>
            <div className='flex flex-col gap-6'>
                {/* SIP */}
                <div className='flex flex-col gap-2'>
                    <label className='font-medium text-sm'>SIP {"( Surat Izin Praktik )"}</label>
                    <input type="file" className='border rounded-xl p-2 border-opacity-green'/>
                </div>
                <div className='flex flex-col gap-2'>
                    <label className='font-medium text-sm'>Ketikan No Surat SIP {"( Surat Izin Praktik )"}</label>
                    <input type="text" className="border rounded-xl p-2 border-opacity-green" />
                </div>

                {/* STR */}
                <div className='flex flex-col gap-2'>
                    <label className='font-medium text-sm'>STR {"( Surat Tanda Registrasi )"}</label>
                    <input type="file" className='border rounded-xl p-2 border-opacity-green' />
                </div>
                <div className='flex flex-col gap-2'>
                    <label className='font-medium text-sm'>Ketikan No Surat STR {"( Surat Tanda Registrasi )"}</label>
                    <input type="text" className="border rounded-xl p-2 border-opacity-green" />
                </div>
            
                {/* SERKOM */}
                <div className='flex flex-col gap-2'>
                    <label className='font-medium text-sm'>Upload SERKOM {"( Surtifikat Kompetensi )"}</label>
                    <input type="file" className='border rounded-xl p-2 border-opacity-green' />
                </div>
                <div className='flex flex-col gap-2'>
                    <label className='font-medium text-sm'>Ketikan No Surat SIP {"( Surat Izin Praktik )"}</label>
                    <input type="text" className="border rounded-xl p-2 border-opacity-green" />
                </div>

                {/* Ijajah Pengakuan */}
                <div className='flex flex-col gap-2'>
                    <label className='font-medium text-sm'>Upload Ijajah Pengakuan Universitas/Institusi</label>
                    <input type="file" className='border rounded-xl p-2 border-opacity-green' />
                </div>
                <div className='flex flex-col gap-2'>
                    <label className='font-medium text-sm'>Ketikan No Ijajah {"( Surat Izin Praktik )"}</label>
                    <input type="text" className="border rounded-xl p-2 border-opacity-green" />
                </div>
            </div>
            <div className='flex flex-col gap-6'>

                {/* Kartu Anggota PDKI (opsional) */}
                <div className='flex flex-col gap-2'>
                    <label className='font-medium text-sm flex justify-between items-center'>
                        <span>Upload Kartu Anggota PDKI</span>
                        <span className='text-end italic text-orange-400'>{"*( Opsional )*"}</span>
                    </label>
                    <input type="file"  className='border rounded-xl p-2 border-opacity-green'/>
                </div>
                <div className='flex flex-col gap-2'>
                    <label className='font-medium text-sm flex justify-between items-center'>
                        <span>Ketikan No Kartu Anggota PDKI</span> 
                        <span className='text-end italic text-orange-400'>{"*( Opsional )*"}</span>
                    </label>
                    <input type="text" className="border rounded-xl p-2 border-opacity-green" />
                </div>

                {/* KTP */}
                <div className='flex flex-col gap-2'>
                    <label className='font-medium text-sm'>Upload Foto KTP</label>
                    <input type="file" className='border rounded-xl p-2 border-opacity-green' />
                </div>
                <div className='flex flex-col gap-2'>
                    <label className='font-medium text-sm'>Ketikan No KTP {"( Kartu Tanda Penduduk )"}</label>
                    <input type="text" className="border rounded-xl p-2 border-opacity-green" />
                </div>

                {/* Bukti pembayaran */}
                <div className='flex flex-col gap-2'>
                    <label className='font-medium text-sm'>Upload Bukti Pembayaran</label>
                    <input type="file" className='border rounded-xl p-2 border-opacity-green' />
                </div>
                <div className='flex flex-col gap-2'>
                    <label className='font-medium text-sm'>Ketikan No ATM  {"( Surat Izin Praktik )"}</label>
                    <input type="text" className="border rounded-xl p-2 border-opacity-green" />
                </div>

                {/* button daftar */}
                <div className='flex flex-col gap-4 mt-12'>
                    <p className='text-sm italic text-green'>{` "Tunggu beberapa saat setelah anda mendaftar, admin akan memberikan informasi selanjutnya lerkait pendaftaran anda melalui notifikasi dan gmail anda" `}</p>
                    <button className="text-center w-[240px] text-white font-medium mt-2 p-2 rounded-xl bg-green">
                        Daftar Pelatihan
                    </button>
                </div>
            </div>
        </div>
    </main>
  )
}

export default Register