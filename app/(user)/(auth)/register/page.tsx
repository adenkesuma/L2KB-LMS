"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/assets/logo/kolegium.png";
import UserProfile from "../../(app)/profile/page";
import Visible from "@/public/assets/icons/visible.svg";
import Invisible from "@/public/assets/icons/invisible.svg";
import axios from "axios";

interface UserProfile {
  nik: number;
  jenis_kelamin: string;
  tempat_lahir: string;
  tanggal_lahir: string;
  pendidikan: string;
  pekerjaan: string;
  instansi: string;
  alamat_instansi: string;
  nomor_hp: string;
  status_pegawai: "pns" | "non pns";
  status_anggota: "anggota biasa" | "anggota luar biasa" | "anggota muda";
}

interface User {
  npa_pdki: number;
  nama: string;
  email: string;
  password: string;
  profile: UserProfile;
}

const Register: React.FC = () => {
  const [showPassword, setShowPassword] = useState<Boolean>(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState<Boolean>(false);
  const [userRegister, setUserRegister] = useState<User>({
    npa_pdki: 0,
    nama: "",
    email: "",
    password: "",
    profile: {
      nik: 0,
      jenis_kelamin: "",
      tempat_lahir: "",
      tanggal_lahir: "",
      pendidikan: "",
      pekerjaan: "",
      instansi: "",
      alamat_instansi: "",
      nomor_hp: "",
      status_pegawai: "pns",
      status_anggota: "anggota biasa",
    },
  });

  // change visibility password
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    if (name.includes(".")) {
      const [objectKey, subKey] = name.split(".");
      setUserRegister({
        ...userRegister,
        [objectKey]: {
          // @ts-ignore
          ...userRegister[objectKey],
          [subKey]:
            subKey === "npa_pdki" || subKey === "nim"
              ? parseInt(value, 10)
              : value,
        },
      });
    } else {
      setUserRegister({
        ...userRegister,
        [name]:
          name === "npa_pdki" || name === "nim" ? parseInt(value, 10) : value,
      });
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_P2KB_API}/auth/register`,
        userRegister,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        setShowSuccessPopup(true);

        setTimeout(() => {
          setShowSuccessPopup(false);
          window.location.href = "/verification";
        }, 3000);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <main className="p-4 mt-4 mb-8 min-h-screen">
        <Link href="/">
          <Image src={Logo} alt="logo" className="w-12 sm:w-20 block mx-auto" />
        </Link>
        <h1 className="font-bold text-xl sm:text-[38px] mt-2 sm:mt-4 text-center mb-12">
          Daftar Akun
        </h1>

        {/* form register */}
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10"
        >
          {/* left form */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-medium text-xs sm:text-sm">
                <span>Pilih Status Kepegawaian</span>
                <span className="text-red-600">*</span>
              </label>
              <select
                value={userRegister.profile.status_pegawai}
                onChange={handleChange}
                className="border rounded-xl p-2 border-gray-300 bg-white"
                name="profile.status_pegawai"
                required
              >
                <option hidden disabled value="">
                  - Pilih Status Kepegawaian -
                </option>
                <option value="pns">PNS</option>
                <option value="non pns">Non PNS</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-medium text-xs sm:text-sm">
                <span>Pilih Role Anda</span>
                <span className="text-red-600">*</span>
              </label>
              <select
                value={userRegister.profile.status_anggota}
                onChange={handleChange}
                className="border rounded-xl p-2 border-gray-300 bg-white"
                name="profile.status_anggota"
                required
              >
                <option hidden disabled value="">
                  - Pilih Status Anggota -
                </option>
                <option value="anggota biasa">Anggota Biasa : Sp KKLP</option>
                <option value="anggota luar biasa">
                  Anggota Luar Biasa {"(Umum)"} : Dokter yang bukan Sp KKLP
                </option>
                <option value="anggota muda">Anggota Muda : PPDS KKLP</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-medium text-xs sm:text-sm">
                <span>NIK</span>
                <span className="text-red-600">*</span>
              </label>
              <input
                value={userRegister.profile.nik}
                onChange={handleChange}
                name="profile.nik"
                type="number"
                className="border rounded-xl p-2 border-gray-300"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-medium text-xs sm:text-sm flex justify-between items-center">
                <span>No NPA PDKI</span>
                <span className="italic text-xs text-orange-500">{`"opsional"`}</span>
              </label>
              <input
                value={userRegister.npa_pdki}
                onChange={handleChange}
                name="npa_pdki"
                type="number"
                className="border rounded-xl p-2 border-gray-300"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-medium text-xs sm:text-sm">
                <span>Nama Lengkap</span>
                <span className="text-red-600">*</span>
              </label>
              <input
                value={userRegister.nama}
                onChange={handleChange}
                name="nama"
                type="text"
                className="border rounded-xl p-2 border-gray-300"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-medium text-xs sm:text-sm">
                <span>Pilih Jenis Kelamin Anda</span>
                <span className="text-red-600">*</span>
              </label>
              <select
                value={userRegister.profile.jenis_kelamin}
                onChange={handleChange}
                className="border rounded-xl p-2 border-gray-300 bg-white"
                name="profile.jenis_kelamin"
                required
              >
                <option hidden disabled value="">
                  - Pilih Jenis Kelamin -
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-medium text-xs sm:text-sm">
                <span>Tempat lahir</span>
                <span className="text-red-600">*</span>
              </label>
              <input
                value={userRegister.profile.tempat_lahir}
                onChange={handleChange}
                name="profile.tempat_lahir"
                type="text"
                className="border rounded-xl p-2 border-gray-300"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-medium text-xs sm:text-sm">
                <span>Tanggal lahir</span>
                <span className="text-red-600">*</span>
              </label>
              <input
                value={userRegister.profile.tanggal_lahir}
                onChange={handleChange}
                type="date"
                className="border rounded-xl p-2 border-gray-300"
                name="profile.tanggal_lahir"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-medium text-xs sm:text-sm">
                <span>Pendidikan Terakhir</span>
                <span className="text-red-600">*</span>
              </label>
              <input
                value={userRegister.profile.pendidikan}
                onChange={handleChange}
                type="text"
                className="border rounded-xl p-2 border-gray-300"
                name="profile.pendidikan"
                required
              />
            </div>
          </div>

          {/* right form */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-medium text-xs sm:text-sm">
                <span>Jabatan/Pekerjaan</span>
                <span className="text-red-600">*</span>
              </label>
              <input
                value={userRegister.profile.pekerjaan}
                onChange={handleChange}
                type="text"
                className="border rounded-xl p-2 border-gray-300"
                name="profile.pekerjaan"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-medium text-xs sm:text-sm">
                <span>Instansi</span>
                <span className="text-red-600">*</span>
              </label>
              <input
                value={userRegister.profile.instansi}
                name="profile.instansi"
                onChange={handleChange}
                type="text"
                className="border rounded-xl p-2 border-gray-300"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-medium text-xs sm:text-sm">
                <span>Alamat Instansi</span>
                <span className="text-red-600">*</span>
              </label>
              <input
                value={userRegister.profile.alamat_instansi}
                name="profile.alamat_instansi"
                onChange={handleChange}
                type="text"
                className="border rounded-xl p-2 border-gray-300"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-medium text-xs sm:text-sm">
                <span>Nomor Telepon</span>
                <span className="text-red-600">*</span>
              </label>
              <input
                value={userRegister.profile.nomor_hp}
                onChange={handleChange}
                name="profile.nomor_hp"
                type="number"
                className="border rounded-xl p-2 border-gray-300"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-medium text-xs sm:text-sm">
                <span>Email</span>
                <span className="text-red-600">*</span>
              </label>
              <input
                value={userRegister.email}
                onChange={handleChange}
                name="email"
                type="email"
                className="border rounded-xl p-2 border-gray-300"
                required
              />

              <p className="text-xs sm:text-sm text-green italic">{`"Tautan aktifasi AKUN akan dikirim via email, setelah menekan tombol KIRIM dibawah, cek INBOX/SPAM email BAPAK/IBU, kemudian tekan tautan/link yang diberikan"`}</p>
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-medium text-xs sm:text-sm">
                <span>Password</span>
                <span className="text-red-600">*</span>
              </label>
              {/* <input value={userRegister.password} onChange={handleChange} name='password' type="password" className="border rounded-xl p-2 border-gray-300" required /> */}
              <div className="flex flex-col gap-2 relative w-full">
                <input
                  value={userRegister.password}
                  onChange={handleChange}
                  name="password"
                  type={showPassword ? "text" : "password"}
                  className="border bg-white w-full rounded-xl p-2 border-gray-300"
                  required
                />
                <button onClick={togglePasswordVisibility}>
                  <Image
                    src={showPassword ? Visible : Invisible}
                    alt={showPassword ? "visible icon" : "invisible icon"}
                    className="w-4 absolute top-[14px] right-3 duration-75 delay-75"
                  />
                </button>
              </div>
            </div>

            {/* button daftar */}
            <button
              type="submit"
              className="text-center mx-auto sm:mx-0 w-[240px] text-white font-medium mt-2 p-2 rounded-xl bg-green"
            >
              Daftar
            </button>
            <p className="text-sm text-center sm:text-left">
              Sudah Memiliki Akun ?{" "}
              <Link href="/login" className="text-green font-semibold">
                {" "}
                Masuk
              </Link>
            </p>
          </div>
        </form>
      </main>

      {showSuccessPopup ? (
        <div className="z-30 border border-gray-200 w-96 rounded-xl p-12">
          <p className="text-green text-xl font-semibold">Selamat anda berhasil mendaftar</p>
        </div>
      ) : (
        <span className="hidden" />
      )}
    </>
  );
};

export default Register;
