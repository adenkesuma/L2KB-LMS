import Link from 'next/link'
import Card from '@/components/card'

const MyCourse = () => {
  return (
    <main className='pt-12 min-h-screen'>
      <div className="flex justify-between items-end">
          <div className="flex flex-col">
              <h1 className='text-[38px] font-bold text-gray-800'>Pelatihan Yang Sedang Saya Jalankan</h1>
              <span className='text-sm text-gray-600'>Berikut adalah daftar pelatihan saya yang sedang saya ikuti</span>

              <ul className="flex justify-start items-center gap-12 mt-8">
                  <li>
                      <Link className="text-green font-semibold text-md hover:border-b hover:border-green" href="/certificate">Sertifikat saya</Link>
                  </li>
                  <li>
                      <Link className="text-green font-semibold text-md hover:border-b hover:border-green" href="/profile">Profil saya</Link>
                  </li>
                  <li>
                      <Link className="text-green font-semibold text-md hover:border-b hover:border-green" href="/history">Riwayat pelatihan saya</Link>
                  </li>
              </ul>
          </div>

          <div className="flex flex-col gap-4">
            <label className="text-sm text-gray-600">Cari Pelatihan Saya</label>
            <input 
              type="text" 
              placeholder="Cari..." 
              className='border border-opacity-green py-2 px-4 rounded-3xl w-[440px] outline-[#29A398]'
            />
          </div>
      </div>

      <div className="mt-12 grid grid-cols-4 gap-8">
        <Card />
      </div>
    </main>
  )
}

export default MyCourse