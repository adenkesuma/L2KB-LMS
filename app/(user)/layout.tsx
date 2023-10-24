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
      <nav className="bg-white sticky top-0 z-50 border-b">
        <Navbar />
      </nav>
      <div className="container px-4 sm:px-0 lg:px-14 mx-auto">{children}</div>
      <Footer />
    </>
  );
}
