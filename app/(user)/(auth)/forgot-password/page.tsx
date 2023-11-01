import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/assets/logo/kolegium.png";

interface ForgotPasswordProps {
  email: string;
}

const ForgotPassword = () => {
  return (
    <>
      <main className="h-screen w-full flex flex-col items-center justify-center">
        <Link href="/">
          <Image src={Logo} alt="logo" className="w-12 sm:w-20 block mx-auto" />
        </Link>
        <h1 className="font-bold mt-2 sm:mt-4 text-xl sm:text-4xl text-center mb-6 sm:mb-12">
            Masukan Email
        </h1>

        <form
          className="mx-auto lg:w-[35%] flex flex-col gap-6"
        >
          <div className="flex flex-col gap-2">
            <label className="font-medium text-xs sm:text-sm">Email</label>
            <input
              name="email"
              type="email"
              className="border rounded-xl bg-white p-2 border-gray-300 outline-none"
              required
            />
          </div>

          <button
            type="submit"
            className="mt-4 mx-auto sm:mt-12 text-sm sm:text-base text-center w-[240px] text-white font-medium p-2 rounded-xl bg-green"
          >
            Masuk
          </button>
        </form>

        <p className="text-xs sm:text-sm text-center italic text-green mt-4">
            Masukan Email untuk mendapatkan kode digit
        </p>
      </main>
    </>
  );
};

export default ForgotPassword