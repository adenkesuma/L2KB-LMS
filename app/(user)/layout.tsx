import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Toaster } from "sonner";
import ClientOnly from "../../components/client-only";

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ClientOnly>
        <Toaster />
      </ClientOnly>
      <nav className="bg-white">
        <Navbar />
      </nav>
      <div className="container px-4 sm:px-0 lg:px-14 mx-auto">{children}</div>
      <Footer />
    </>
  );
}
