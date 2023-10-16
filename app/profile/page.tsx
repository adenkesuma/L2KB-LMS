import Image from "next/image"
import Link from "next/link"
import Profile from "@/public/assets/user.png"
import UploadIcon from "@/public/assets/icons/upload.svg"
import { myCourse } from "@/contsant"
import MyCourse from "@/components/myCourse"

const UserProfile = () => {
  return (
    <main className='mt-12'>
        <div className="flex justify-between items-end">
            <div>
                <h1 className='text-[38px] font-bold text-gray-800'>Profil</h1>
                <span className='text-sm text-gray-600'>Mohon masukkan data yang sesuai untuk memudahkan proses pelatihan</span>
            </div>

            <ul className="flex justify-start items-center gap-12 mt-8">
                <li>
                    <Link className="text-green font-semibold text-md hover:border-b hover:border-green" href="/certificate">Sertifikat saya</Link>
                </li>
                <li>
                    <Link className="text-green font-semibold text-md hover:border-b hover:border-green" href="/my-course">Pelatihan saya</Link>
                </li>
                <li>
                    <Link className="text-green font-semibold text-md hover:border-b hover:border-green" href="/history">History pelatihan saya</Link>
                </li>
            </ul>
        </div>
        <div className='border border-opacity-green rounded-3xl mt-8'>
            {/* top profile */}
            <div className="flex justify-between items-start p-8">
                <div className="flex flex-col gap-4">
                    <h2 className='text-[28px] font-semibold text-gray-800'>Foto Profil</h2>
                    <Image 
                        src={Profile}
                        alt="foto profil"
                        className="rounded-[50%] w-36 h-36"
                    />

                    {/* change profile */}
                    <div className="relative mt-2">
                        <input type="file" className="hidden" id="changeProfile"/>
                        <label htmlFor="changeProfile" className="w-36 flex gap-3 justify-center items-center cursor-pointer border border-opacity-green text-green font-medium rounded-lg py-2 px-4">
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

            <div className="border-opacity-green border-t mt-8" />

            {/* data profile */}
            <div className='grid grid-cols-2 gap-10 pt-8 bg-opacity-green px-8 pb-8 rounded-br-3xl rounded-bl-3xl'>
    
                {/* left form */}
                <div className='flex flex-col gap-6'>
                  <div className="flex flex-col gap-2">
                    <label className="font-medium text-sm">NPA PDKI</label>
                    <input type="number" className="border rounded-xl p-2 border-opacity-green" />
                  </div>
    
                  <div className="flex flex-col gap-2">
                    <label className="font-medium text-sm">NOMOR KTP</label>
                    <input type="number" className="border rounded-xl p-2 border-opacity-green" />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="font-medium text-sm">Email</label>
                    <input type="email" className="border rounded-xl p-2 border-opacity-green" />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="font-medium text-sm">Nama Lengkap</label>
                    <input type="text" className="border rounded-xl p-2 border-opacity-green" />
                  </div>
    
                  <div className="flex flex-col gap-2">
                    <label className="font-medium text-sm">Nama Lengkap Beserta Gelar</label>
                    <input type="text" className="border rounded-xl p-2 border-opacity-green" />
                  </div>
    
                  <div className='flex flex-col gap-2'>
                      <label className='font-medium text-sm'>Tempat lahir</label>
                      <input type="text" className="border rounded-xl p-2 border-opacity-green" />
                  </div>
    
                  <div className='flex flex-col gap-2'>
                      <label className='font-medium text-sm'>Tanggal lahir</label>
                      <input type="date" className="border rounded-xl p-2 border-opacity-green" />
                  </div>
    
                  <div className="flex flex-col gap-2">
                    <label className="font-medium text-sm">Pilih Jenis Kelamin Anda</label>
                    <select name="status" id="status" className='border rounded-xl p-2 border-opacity-green bg-white'>
                      <option value="">- Pilih jenis kelamin -</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>
    
                  <div className='flex flex-col gap-2'>
                      <label className='font-medium text-sm'>Pendidikan Terakhir</label>
                      <input type="text" className="border rounded-xl p-2 border-opacity-green" />
                  </div>
    
                  <div className='flex flex-col gap-2'>
                      <label className='font-medium text-sm'>Agama</label>
                      <input type="text" className="border rounded-xl p-2 border-opacity-green" />
                  </div>
    
    
                </div>
    
                {/* right form */}
                <div className='flex flex-col gap-6'>
                  <div className='flex flex-col gap-2'>
                      <label className='font-medium text-sm'>Nomor Telepon</label>
                      <input type="number" className="border rounded-xl p-2 border-opacity-green" />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="font-medium text-sm">Pendidikan terakhir</label>
                    <select name="status" id="status" className='border rounded-xl p-2 border-opacity-green bg-white'>
                      <option value="">- Pilih Tingkat -</option>
                      <option value="sd">SD {"( Sekolah Dasar )"}</option>
                      <option value="sd">SMP {"( Sekolah Menengah Pertama )"}</option>
                      <option value="sd">SMA {"( Sekolah Menengah Atas )"}</option>
                      <option value="sd">S1 {"( Sarjana Strata 1 )"}</option>
                      <option value="sd">S2 {"( Sarjana Strata 2 )"}</option>
                      <option value="sd">S3 {"( Sarjana Strata 3 )"}</option>
                    </select>
                  </div>
    
                  <div className='flex flex-col gap-2'>
                      <label className='font-medium text-sm'>Jurusan</label>
                      <input type="text" className="border rounded-xl p-2 border-opacity-green" />
                  </div>
    
                  <div className='flex flex-col gap-2'>
                      <label className='font-medium text-sm'>Jabatan Pekerjaan</label>
                      <input type="text" className="border rounded-xl p-2 border-opacity-green" />
                  </div>         
    
                  <div className="flex flex-col gap-2">
                    <label className="font-medium text-sm">Pangkat / Golongan</label>
                    <select name="status" id="status" className='border rounded-xl p-2 border-opacity-green bg-white'>
                      <option value="">- Pilih Pangkat / Golongan -</option>
                      <option value="sd">SD {"( Sekolah Dasar )"}</option>
                      <option value="sd">SMP {"( Sekolah Menengah Pertama )"}</option>
                      <option value="sd">SMA {"( Sekolah Menengah Atas )"}</option>
                      <option value="sd">S1 {"( Sarjana Strata 1 )"}</option>
                      <option value="sd">S2 {"( Sarjana Strata 2 )"}</option>
                      <option value="sd">S3 {"( Sarjana Strata 3 )"}</option>
                    </select>
                  </div>
    
                  <div className='flex flex-col gap-2'>
                      <label className='font-medium text-sm'>Instansi</label>
                      <input type="text" className="border rounded-xl p-2 border-opacity-green" />
                  </div>
    
                  <div className='flex flex-col gap-2'>
                      <label className='font-medium text-sm'>Alamat Instansi</label>
                      <input type="text" className="border rounded-xl p-2 border-opacity-green" />
                  </div>
    
                  <div className='flex flex-col gap-2'>
                      <label className='font-medium text-sm'>No Telepon Instansi</label>
                      <input type="number" className="border rounded-xl p-2 border-opacity-green" />
                  </div>
                  <div className='flex flex-col gap-2'>
                      <label className='font-medium text-sm'>Alamat Domisili</label>
                      <input type="text" className="border rounded-xl p-2 border-opacity-green" />
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
    </main>
  )
}

export default UserProfile