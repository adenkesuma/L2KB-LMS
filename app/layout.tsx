import "./globals.css";

import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Toaster } from "sonner";

import ClientOnly from "../components/client-only";

const pjs = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LDP Layanan Primer",
  description: "LDP Layanan Primer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ClientOnly>
        <Toaster richColors />
      </ClientOnly>
      <body className={`${pjs.className} bg-white relative`}>{children}</body>
    </html>
  );
}
