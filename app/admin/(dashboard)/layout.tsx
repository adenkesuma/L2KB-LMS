import Sidebar from "@/components/sidebar";
import AdminNavbar from "@/components/adminNavbar";
import type { Metadata } from "next";
import { getCookie } from "../../../lib/services/cookie.service";
import { redirect } from "next/navigation";
// import { Inter } from "next/font/google";

export const metadata: Metadata = {
  title: "Admin LDP Layanan Primer",
  description: "LDP Layanan Primer",
};

// const inter = Inter({ subsets: ["latin"] });

async function AdminLayout({ children }: { children: React.ReactNode }) {
  const adminAK = await getCookie("adminAK");
  if (!adminAK) redirect("/admin/login");

  return (
    <div className="flex relative">
      <Sidebar />
      <section className="w-full md:w-[90%] lg:w-[93%] xl:w-[82%] 2xl:w-[86%]">
        <AdminNavbar />
        <span className="block">{children}</span>
      </section>
    </div>
  );
}

export default AdminLayout;
