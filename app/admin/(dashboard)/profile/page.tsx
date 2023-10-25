import Link from "next/link"
import Image from "next/image"
import Profile from "@/public/assets/user.png"
import UploadIcon from "@/public/assets/icons/upload.svg"

const AdminProfile = () => {
  return (
    <div className="p-12 min-h-screen">
        <h1 className='text-[38px] font-bold text-gray-800'>Profil Admin</h1>
        <div className='rounded-3xl mt-8 bg-white'>
            {/* top profile */}
            <div className="flex justify-between items-start p-8">
                <div className="flex flex-col gap-4">
                    <h2 className='text-[22px] font-semibold text-gray-800'>Foto Profil</h2>
                    <Image 
                        src={Profile}
                        alt="foto profil"
                        className="rounded-[50%] w-36 h-36"
                    />

                    {/* change profile */}
                    <div className="relative mt-2">
                        <input type="file" className="hidden" id="changeProfile"/>
                        <label htmlFor="changeProfile" className="w-36 flex gap-3 justify-center items-center cursor-pointer border border-gray-300 text-green font-medium rounded-lg py-2 px-4">
                            <Image 
                                src={UploadIcon}
                                alt="upload icon"
                                className="w-4"
                            />
                            <span>Ubah Foto</span>
                        </label>
                    </div>

                    <p className="text-sm text-gray-800 flex justify-start gap-2">
                        Format: 
                        <span className="text-sm text-orange-500 italic">*Pas Foto</span>
                        <span className="text-sm text-orange-500 italic">*Background Merah</span>
                        <span className="text-sm text-orange-500 italic">*Ukuran 4 x 6</span>
                        <span className="text-sm text-orange-500 italic">*Maksimal Size 1 Mb</span>
                    </p>
                </div>

                <div className="flex flex-col gap-4">
                    <Link href="/forgot-password" className="text-center w-[240px] font-medium mt-2 p-2 rounded-xl border-green border text-green">
                        Ubah Kata Sandi
                    </Link>
                </div>
            </div>

            {/* data profile */}
            <div className='grid grid-cols-2 gap-10 pt-8 px-8 pb-8 rounded-br-3xl rounded-bl-3xl'>
    
                {/* left form */}
                <div className='flex flex-col gap-6'>
                  <div className="flex flex-col gap-2">
                    <label className="font-medium text-sm">Nama Lengkap</label>
                    <input type="text" className="border rounded-xl p-2 border-gray-300" />
                  </div>
    
                  <div className="flex flex-col gap-2">
                    <label className="font-medium text-sm">Nama Lengkap Beserta Gelar</label>
                    <input type="text" className="border rounded-xl p-2 border-gray-300" />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="font-medium text-sm">Email</label>
                    <input type="email" className="border rounded-xl p-2 border-gray-300" />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="font-medium text-sm">NIK</label>
                    <input type="number" className="border rounded-xl p-2 border-gray-300" />
                  </div>
    
                </div>
    
                {/* right form */}
                <div className='flex flex-col gap-6'>
                  <div className="flex flex-col gap-2">
                    <label className="font-medium text-sm">Nomor Telepon</label>
                    <input type="text" className="border rounded-xl p-2 border-gray-300" />
                  </div>
    
                  <div className='flex flex-col gap-2'>
                      <label className='font-medium text-sm'>Tempat lahir</label>
                      <input type="text" className="border rounded-xl p-2 border-gray-300" />
                  </div>
    
                  <div className='flex flex-col gap-2'>
                      <label className='font-medium text-sm'>Tanggal lahir</label>
                      <input type="date" className="border rounded-xl p-2 border-gray-300" />
                  </div>
    
                  {/* button daftar */}
                  <div className='flex flex-col gap-2 mt-4'>
                    <button className="text-center w-[240px] text-white font-medium mt-2 p-2 rounded-xl bg-green">
                      Perbarui Profil
                    </button>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AdminProfile