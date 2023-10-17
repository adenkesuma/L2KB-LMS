import Card from "@/components/card"
import Link from "next/link"

const History = () => {
  return (
    <main className='pt-12 min-h-screen'>
      <div className="flex justify-between items-end">
          <div className="flex flex-col">
              <h1 className='text-[38px] font-bold text-gray-800'>Riwayat Pelatihan Saya</h1>
              <span className='text-sm text-gray-600'>Berikut adalah daftar pelatihan saya yang pernah saya selesaikan</span>

              <ul className="flex justify-start items-center gap-12 mt-8">
                  <li>
                      <Link className="text-green font-semibold text-md hover:border-b hover:border-green" href="/certificate">Sertifikat saya</Link>
                  </li>
                  <li>
                      <Link className="text-green font-semibold text-md hover:border-b hover:border-green" href="/profile">Profil saya</Link>
                  </li>
                  <li>
                      <Link className="text-green font-semibold text-md hover:border-b hover:border-green" href="/my-course">Pelatihan saya</Link>
                  </li>
              </ul>
          </div>

          <div className="flex flex-col gap-4">
            <label className="text-sm text-gray-600">Cari Riwayat Pelatihan</label>
            <input 
              type="text" 
              placeholder="Cari..." 
              className='border border-slate-300 py-2 px-4 rounded-3xl w-[440px] outline-[#015A39]'
            />
          </div>
      </div>

      <div className="mt-12 grid grid-cols-4 gap-8">
        <Card />
      </div>
    </main>
  )
}

export default History