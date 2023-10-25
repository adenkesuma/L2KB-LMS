import "./globals.css";

import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import ClientOnly from "../components/client-only";
import { Toaster } from "sonner";

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
        <Toaster />
      </ClientOnly>
      <body className={`${pjs.className} bg-white relative`}>{children}</body>
    </html>
  );
}
