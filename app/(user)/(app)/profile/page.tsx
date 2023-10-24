import Link from "next/link";

import UpdateProfileForm from "./_components/form";

interface ProfileData {
  [key: string]: any;
  agama: string | null;
  alamat: string | null;
  alamat_instansi: string | null;
  createdAt: string;
  id: string;
  instansi: string;
  jenis_kelamin: string;
  jurusan: string | null;
  nama_lengkap_gelar: string | null;
  nik: number;
  no_ktp: string | null;
  no_telp_instansi: string | null;
  nomor_hp: string;
  pangkat: string | null;
  pekerjaan: string;
  pendidikan: string;
  status_anggota: string;
  status_pegawai: string;
  tanggal_lahir: string;
  tempat_lahir: string;
  updatedAt: string;
  user_id: string;
}

export interface UserData {
  [key: string]: any;
  id: string;
  email: string;
  nama: string;
  npa_pdki: number;
  profile_picture: FileList | undefined;
  email_verified: boolean;
  createdAt: string;
  updatedAt: string;
  profile: ProfileData;
}

async function UserProfile() {
  // const userData = await fetchUserData()
  return (
    <main className="pt-4 sm:pt-6 lg:pt-12 min-h-screen">
      <div>
        <h1 className="text-xl font-semibold sm:text-2xl lg:text-4xl mb:mb-2 sm:font-bold text-gray-800">
          Profil
        </h1>
        <span className="text-xs sm:text-sm text-gray-600">
          Mohon masukkan data yang sesuai untuk memudahkan proses pelatihan
        </span>
        <ul className="flex justify-start items-center gap-6 lg:gap-12 mt-4 sm:mt-6">
          <li>
            <Link
              className="text-green font-semibold text-xs sm:text-base hover:border-b hover:border-green"
              href="/certificate"
            >
              Sertifikat saya
            </Link>
          </li>
          <li>
            <Link
              className="text-green font-semibold text-xs sm:text-base hover:border-b hover:border-green"
              href="/my-courses"
            >
              Pelatihan saya
            </Link>
          </li>
          <li>
            <Link
              className="text-green font-semibold text-xs sm:text-base hover:border-b hover:border-green"
              href="/history"
            >
              Riwayat pelatihan
            </Link>
          </li>
        </ul>
      </div>

      <UpdateProfileForm />
    </main>
  );
}

export default UserProfile;
