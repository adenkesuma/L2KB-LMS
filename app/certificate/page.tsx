import Link from "next/link"
import UserCertificate from "@/components/userCertificate"

const Certificate = () => {
  return (
     <main className='mt-12'>
        <div className="flex justify-between items-end">
            <div>
                <h1 className='text-[38px] font-bold text-gray-800'>Sertifikat Saya</h1>
                <span className='text-sm text-gray-600'>Unduh sertifikat pelatihan Anda di bawah ini</span>
            </div>

            <ul className="flex justify-start items-center gap-12 mt-8">
                <li>
                    <Link className="text-green font-semibold text-md hover:border-b hover:border-green" href="/profile">Profil saya</Link>
                </li>
                <li>
                    <Link className="text-green font-semibold text-md hover:border-b hover:border-green" href="/my-course">Pelatihan saya</Link>
                </li>
                <li>
                    <Link className="text-green font-semibold text-md hover:border-b hover:border-green" href="/history">History pelatihan saya</Link>
                </li>
            </ul>
        </div>

        <div className="flex flex-col gap-8 mt-8">
          <UserCertificate />
          <UserCertificate />
          <UserCertificate />
        </div>
    </main>
  )
}

export default Certificate